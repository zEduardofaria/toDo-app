import React, { createContext, useState, useContext } from 'react'
import { node } from 'prop-types'
import uuid from 'react-uuid'

const TaskContext = createContext()

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    localStorage.getItem('@TodoApp:TASKS') || {}
  )

  const addTask = ({ description, createdBy }) => {
    const newTask = {
      id: uuid(),
      description,
      createdBy,
      createdAt: new Date(),
    }
    const newTasks = [...tasks, newTask]

    localStorage.setItem('@TodoApp:TASKS', JSON.stringify(newTasks))
    setTasks(newTasks)

    return true
  }

  const editTask = ({ taskId, description }) => {
    const newTasks = [...tasks]
    const taskIndex = tasks.findIndex((task) => task.id === taskId)
    newTasks[taskIndex] = { ...newTasks[taskIndex], description }

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

  const getTasks = (userId) => tasks.filter((task) => task.createdBy === userId)

  return (
    <TaskContext.Provider
      value={{
        USERS: tasks,
        addTask,
        editTask,
        deleteTask,
        getTasks,
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
