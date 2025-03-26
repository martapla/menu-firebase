import React from 'react'

const MealsEditor = ({addNewMeal,setNewMealName,setNewMealDescription,setNewMealCategory,newMealName,newMealDescription,newMealCategory}) => {
  return (
    <div className='addmeals-container'>
        <h2 className='addmeals-title'>Add New Meals</h2>
        
            <form onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="text"
                    placeholder='category'
                    onChange={(e)=> setNewMealCategory(e.target.value)}
                    value={newMealCategory}
                />
                <input 
                    type="text"
                    placeholder='name'
                    onChange={(e)=> setNewMealName(e.target.value)}
                    value={newMealName}
                />
                <input 
                    type="text"
                    placeholder='description'
                    onChange={(e)=> setNewMealDescription(e.target.value)}
                    value={newMealDescription}
                />
                <button onClick={addNewMeal}>Add Meal</button>
            </form>
        
    </div>
    
  )
}

export default MealsEditor





