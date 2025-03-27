import './App.css'
import{useFireBaseFetch} from './hooks/useFireBaseFetch'
import MealsList from './components/MealsList'
import FilterAndSort from './components/FilterAndSort'
import MealsEditor from './components/MealsEditor'


function App() {
  const {loading, error, filterMeals, handleFilter, handleSearch, handleSort, addNewMeal,setNewMealName,setNewMealDescription,setNewMealCategory,newMealName,newMealDescription,newMealCategory,handleEdit,handleDelete,handleDay} = useFireBaseFetch()


  if (loading) return <h3>Cargando...</h3>;
  if (error) return <h3>Error: {error}</h3>;


  return (
    <>
      <h1 className='title'>School Menu  🍽️ </h1>
      <FilterAndSort handleFilter={handleFilter} handleSearch={handleSearch} handleSort={handleSort}/>
      <MealsList food={filterMeals} handleEdit={handleEdit} handleDelete={handleDelete}/>
      <MealsEditor 
        addNewMeal={addNewMeal} 
        newMealName={newMealName} 
        newMealDescription={newMealDescription} 
        newMealCategory={newMealCategory} 
        setNewMealName={setNewMealName}
        setNewMealDescription={setNewMealDescription}
        setNewMealCategory={setNewMealCategory}
      />
      
    </>
  )
}

export default App
