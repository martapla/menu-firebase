import { useEffect, useState } from 'react'
import { getFood } from "../lib/foodRequest";
import { collection, addDoc } from 'firebase/firestore';
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../firebase/firebaseServer';

export const useFireBaseFetch = () => {

    const[data,setData] = useState([])
    const[loading,setLoading] = useState(true)
    const[error,setError] = useState(null)
    const [filterMeals, setFilterMeals] = useState([])
    const [search, setSearch] = useState("")
    const[newMealName, setNewMealName] = useState("")
    const[newMealDescription, setNewMealDescription] = useState("")
    const[newMealCategory, setNewMealCategory] = useState("")

    useEffect(() => {
        const fetchData = async () => {

          setLoading(true);
          try {
            const mealsData = await getFood(); 
            setData(mealsData);
            setFilterMeals(mealsData);

          } catch (err) {
            setError(err.message);

          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
    }, []);


     // Filtro de categoría
    const handleFilter = (category) => {
      console.log(category)
      if (!category) {
          setFilterMeals(data); // Mostra totes les opcions si no hi ha categoria
      } else {
          setFilterMeals(data.filter(meal => meal.category.toLowerCase() === category.toLowerCase()));
      }
    };

      // Filtro por nombre
    const handleSearch = (searchTerm) => {
      console.log("Valor en el input:", searchTerm);
        setSearch(searchTerm); // Actualiza el valor del input
        const filteredMeals = data.filter(meal => 
            meal.name.toLowerCase().includes(searchTerm) // Filtra por nombre
        );
        setFilterMeals(filteredMeals);
    };

    //Filtro por Asc-Desc
    const handleSort = (order) => {

      const sortedMeals = [...filterMeals];

      if(order === "ascendant"){
        sortedMeals.sort((a,b)=>a.name.localeCompare(b.name))
      } else {
        sortedMeals.sort((a, b) => b.name.localeCompare(a.name));
      }
      setFilterMeals(sortedMeals)
    }

    // New Meal
    const addNewMeal = async () => {
      if (!newMealName || !newMealDescription || !newMealCategory) {
        console.error("Todos los campos son obligatorios.");
        return;
      }
    
      try {
        const docRef = await addDoc(collection(db, "meals"), {
          name: newMealName, 
          description: newMealDescription, 
          category: newMealCategory
        });
    
        console.log("Documento añadido con ID: ", docRef.id);
    
        // Actualizar la lista de comidas después de añadir una nueva
        const updatedMeals = [...data, { 
          id: docRef.id, 
          name: newMealName, 
          description: newMealDescription, 
          category: newMealCategory }];
          setData(updatedMeals);
          setFilterMeals(updatedMeals);
    
        // Limpiar los inputs después de agregar la comida
        setNewMealName("");
        setNewMealDescription("");
        setNewMealCategory("");
      } catch (error) {
        console.error("Error al añadir nueva comida: ", error);
        setError(error.message);
      }
    };

    const handleDelete = async (mealId) => {
      try {
        await deleteDoc(doc(db, "meals", mealId));
    
        // Actualizar la lista en el estado después de eliminar
        const updatedMeals = data.filter(meal => meal.id !== mealId);
        setData(updatedMeals);
        setFilterMeals(updatedMeals);
        
        console.log(`Comida con ID ${mealId} eliminada.`);
      } catch (error) {
        console.error("Error al eliminar la comida:", error);
        setError(error.message);
      }
    };

    const handleEdit = async (mealId, updatedMeal) => {
      try {
        const mealRef = doc(db, "meals", mealId);
        await updateDoc(mealRef, updatedMeal);
    
        // Actualizar la lista en el estado
        const updatedMeals = data.map(meal => 
          meal.id === mealId ? { ...meal, ...updatedMeal } : meal
        );
        setData(updatedMeals);
        setFilterMeals(updatedMeals);
    
        console.log(`Comida con ID ${mealId} actualizada.`);
      } catch (error) {
        console.error("Error al editar la comida:", error);
        setError(error.message);
      }
    };

  return {data, loading, error, filterMeals, handleFilter, handleSearch, search, handleSort, 
            addNewMeal,newMealName,newMealDescription,newMealCategory,setNewMealName,
            setNewMealDescription,setNewMealCategory,handleDelete,handleEdit};    
   
};
    
export default useFireBaseFetch;