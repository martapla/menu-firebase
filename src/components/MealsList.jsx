import React, { useState } from 'react';

const MealsList = ({ food, handleEdit, handleDelete }) => {
  const [editingMealId, setEditingMealId] = useState(null);
  const [editedMeal, setEditedMeal] = useState({ name: '', description: '', category: '' });

  const startEditing = (meal) => {
    setEditingMealId(meal.id);
    setEditedMeal({ name: meal.name, description: meal.description, category: meal.category });
  };

  const saveEdit = async (mealId) => {
    await handleEdit(mealId, editedMeal);
    setEditingMealId(null);
  };

  return (
    <div className="meals-container">
      <h3 className="meals-title">Meals Selected</h3>
      {food.length === 0 ? (
        <p>No meals available</p>
      ) : (
        food.map((meal) => (
          <div key={meal.id} className="meal-card">
            {editingMealId === meal.id ? (
              <>
                <div className="meal-card-input">
                    <input
                      type="text"
                      value={editedMeal.category}
                      onChange={(e) => setEditedMeal({ ...editedMeal, category: e.target.value })}
                    />
                    <input
                      type="text"
                      value={editedMeal.name}
                      onChange={(e) => setEditedMeal({ ...editedMeal, name: e.target.value })}
                    />
                    <input
                      type="text"
                      value={editedMeal.description}
                      onChange={(e) => setEditedMeal({ ...editedMeal, description: e.target.value })}
                    />
                </div>
                <div className="meal-input-btn" >
                    <button onClick={() => saveEdit(meal.id)}>✏️</button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <p><strong>Category:</strong> {meal.category}</p>
                  <p><strong>Name:</strong> {meal.name}</p>
                  <p><strong>Description:</strong> {meal.description}</p>
                </div>
                <div>
                  <button onClick={() => startEditing(meal)}>📝</button>
                  <button onClick={() => handleDelete(meal.id)}>🗑️</button>
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default MealsList;





