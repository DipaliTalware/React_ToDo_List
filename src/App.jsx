import { useState } from 'react'
import TaskTabs from './components/TaskTabs'
import AddTaskForm from './components/AddTaskForm'


function App() {

  return (
    <>
      <AddTaskForm/>
      <TaskTabs/>
    </>
  )
}

export default App
