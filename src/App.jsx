import './App.css'
import{useFireBaseFetch} from './hooks/useFireBaseFetch'
import MealsList from './components/MealsList'
import FilterAndSort from './components/FilterAndSort'
import MealsEditor from './components/MealsEditor'
import WeeklyPlan from './components/WeeklyPlan'


function App() {
  const {loading, error, filterMeals, handleFilter, handleSearch, handleSort, addNewMeal,setNewMealName,setNewMealDescription,setNewMealCategory,newMealName,newMealDescription,newMealCategory,handleEdit,handleDelete,weeklyPlan,addMealToWeeklyPlan,removeWeeklyPlan} = useFireBaseFetch()


  if (loading) return <h3 className='loading'>Loading...</h3>;
  if (error) return <h3>Error: {error}</h3>;


  return (
    <>
      <h1 className='title'>School Menu  🍽️ </h1>
      <FilterAndSort handleFilter={handleFilter} handleSearch={handleSearch} handleSort={handleSort}/>
      <MealsList 
        food={filterMeals} 
        handleEdit={handleEdit} 
        handleDelete={handleDelete} 
        addMealToWeeklyPlan={addMealToWeeklyPlan}/>
      <MealsEditor 
        addNewMeal={addNewMeal} 
        newMealName={newMealName} 
        newMealDescription={newMealDescription} 
        newMealCategory={newMealCategory} 
        setNewMealName={setNewMealName}
        setNewMealDescription={setNewMealDescription}
        setNewMealCategory={setNewMealCategory}
      />
      <WeeklyPlan weeklyPlan={weeklyPlan} removeWeeklyPlan={removeWeeklyPlan}/>
    </>
  )
}

export default App
