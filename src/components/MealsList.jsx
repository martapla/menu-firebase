import React from 'react'

const MealsList = ({food}) => {
  return (
    <>
      <div className="meals-container">
        <h3 className='meals-title'>Meals Selected</h3>
        {food.length === 0 ? (
          <p>No meals available</p>
        ) : (
          food.map((meal) => (
            <div key={meal.id} className="meal-card">
              <p><strong>Category: </strong> {meal.category}</p>
              <p><strong>Name: </strong>{meal.name}</p>
              <p><strong>Description:</strong> {meal.description}</p>
            </div>
          ))
        )}
      </div>
    
    
    </>
  )
}

export default MealsList