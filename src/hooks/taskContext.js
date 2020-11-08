import React, { createContext, useState, useContext } from 'react'
import { node } from 'prop-types'
import uuid from 'react-uuid'

const TaskContext = createContext()

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('@TodoApp:TASKS')) || []
  )

  const addTask = ({ description, userId }) => {
    const newTask = {
      id: uuid(),
      description,
      status: 'todo',
      createdBy: userId,
      createdAt: new Date(),
    }
    const newTasks = [...tasks, newTask]

    localStorage.setItem('@TodoApp:TASKS', JSON.stringify(newTasks))
    setTasks(newTasks)

    return true
  }

  const editTask = ({ taskId, ...newEdit }) => {
    const newTasks = [...tasks]
    const taskIndex = tasks.findIndex((task) => task.id === taskId)
    newTasks[taskIndex] = { ...newTasks[taskIndex], ...newEdit }

    localStorage.setItem('@TodoApp:TASKS', JSON.stringify(newTasks))
    setTasks(newTasks)

    return true
  }

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)

    localStorage.setItem('@TodoApp:TASKS', JSON.stringify(newTasks))
    setTasks(newTasks)

    return true
  }

  return (
    <TaskContext.Provider
      value={{
        addTask,
        editTask,
        deleteTask,
        tasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

const useTask = () => {
  const context = useContext(TaskContext)

  if (!context) {
    throw new Error('useTask must be used within an TaskProvider')
  }

  return context
}

TaskProvider.propTypes = {
  children: node,
}

export { TaskProvider, useTask }
