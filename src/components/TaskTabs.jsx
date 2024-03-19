import React from 'react'

const TaskTabs = () => {
  return (
    <div className='flex justify-center mt-10'>
        <button className='px-5'>All Task</button>
        <button className='px-5'>Active Task</button>
        <button className='px-5'>Completed Task</button>
    </div>
  )
}

export default TaskTabs