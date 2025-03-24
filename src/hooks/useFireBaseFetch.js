import React, { useEffect, useState } from 'react'
import { getFood } from "../lib/foodRequest";

export const useFireBaseFetch = () => {

    const[data,setData] = useState([])
    const[loading,setLoading] = useState(true)
    const[error,setError] = useState(null)
    const [filterMeals, setFilterMeals] = useState([])
    const [search, setSearch] = useState("")

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

      return { data, loading, error, filterMeals, handleFilter, handleSearch, search, handleSort };



    
   
};
    
export default useFireBaseFetch;