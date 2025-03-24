import './App.css'
import{useFireBaseFetch} from './hooks/useFireBaseFetch'
import MealsList from './components/MealsList'
import FilterAndSort from './components/FilterAndSort'
// import MealsEditor from './components/MealsEditor'


function App() {
  const {loading, error, filterMeals, handleFilter, handleSearch, handleSort} = useFireBaseFetch()


  if (loading) return <h3>Cargando...</h3>;
  if (error) return <h3>Error: {error}</h3>;


  return (
    <>
      <h1 className='title'>School Menu  🍽️ </h1>
      <FilterAndSort handleFilter={handleFilter} handleSearch={handleSearch} handleSort={handleSort}/>
      <MealsList meals={filterMeals}/>
      {/* <MealsEditor /> */}
      
    </>
  )
}

export default App
