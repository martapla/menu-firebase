import React from 'react'

const MealsEditor = ({name, setName, description, setDescription, category, setCategory}) => {

    const[newMeal, setNewMeal]= useState([])

    const addMeal = () => {
       const addedMeal = [...name,newMeal]
       setNewMeal('')
    }

  return (
    <>
    <h3>New meal</h3>
    <div>
        <form action="">
            <input 
                type="text"
                placeholder='name'
                onChange={((e)=>setName(e.target.value))}
                value={name}
            />
            <input 
                type="text"
                placeholder='description'
                onChange={((e)=>setDescription(e.target.value))}
                value={description}
            />
            <input 
                type="text"
                placeholder='category'
                onChange={((e)=>setCategory(e.target.value))}
                value={category}
            />
            <button onClick={addMeal}>Add</button>

        </form>

    </div>
    
    </>
  )
}

export default MealsEditor