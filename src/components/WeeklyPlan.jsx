
const WeeklyPlan = ({ weeklyPlan,removeWeeklyPlan }) => {
    const daysOfWeek = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"];

    const handleDelete = (day, mealName) => {
        removeWeeklyPlan(day, mealName); 
      };
  
    return (
      <div className="weekly-plan">
        <h3>Weekly Plan</h3>
        {daysOfWeek.map((day) => (
          <div key={day} className="day-plan">
            <h4>{day}</h4>
           
            {weeklyPlan[day] && weeklyPlan[day].length > 0 ? (
              <ul>
                {weeklyPlan[day].map((meal, index) => (
                  <li key={index}>
                        <strong>{meal.category} : </strong>  {meal.name} - {meal.description}
                        <button onClick={() => handleDelete(day, meal.name)}>
                            🗑️
                        </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No meals assigned</p>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default WeeklyPlan;
  