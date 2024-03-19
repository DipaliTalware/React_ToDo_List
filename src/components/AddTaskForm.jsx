import React from 'react'

const AddTaskForm = () => {
  return (
    <div>
        <form action="" className='flex justify-center mt-10'>
        <input type="text" placeholder='Add new task' className='border-2 mr-4 px-5 py-2 w-80'/>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' >Add</button>
        </form>
    </div>
  )
}

export default AddTaskForm