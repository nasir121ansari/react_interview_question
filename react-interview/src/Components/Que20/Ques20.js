import React, { useState } from 'react'

// Each element in the array is an object with two fields "task" and "subtasks". 
// The "task" field is associated with a string description and the "subtasks" field is associated with an array of string descriptions.

// Output:
// Your component should render a vertical list of the tasks along with the subtasks in an indented list below their associated task. 
// The user should be able to toggle any subtask as completed/uncompleted using a checkbox.
// Also add a button to each subtask to delete the subtask.


const Ques20 = () => {
  const [data, setData] = useState([
    {
      task: 'Clean bedroom',
      subtasks: [
        { description: 'Do Laundry', completed: false },
        { description: 'Organize desk', completed: true },
        { description: 'Wipe floors', completed: false },
      ],
    },
    {
      task: 'Study',
      subtasks: [
        { description: 'Read books', completed: false },
        { description: 'Write notes', completed: false },
      ],
    },
  ]);


  const  handleOnchnage =(taskIndex,subtaskindex) => {
    console.log(taskIndex,subtaskindex)
    const updateData = [...data]
    updateData[taskIndex].subtasks[subtaskindex].completed = !updateData[taskIndex].subtasks[subtaskindex].completed
    setData(updateData)
  } 

  const  handleOnClick =(taskIndex,subtaskindex) => {
    console.log(taskIndex,subtaskindex)
    const updateData = [...data]
    updateData[taskIndex].subtasks.splice(subtaskindex,1)
    setData(updateData)
  } 
  return (
    <div>
      {
        data.map((taskItem, taskIndex) => {
          return (
            <div key={taskIndex}>
              <h3>{taskItem.task}</h3>
              <ul>
                {
                  taskItem.subtasks.map((subtask,subtaskindex) => {
                    return(<li key={subtaskindex}>
                        {subtask.description}
                      <input
                      type='checkbox'
                      checked={subtask.completed}
                      onChange={() => handleOnchnage(taskIndex,subtaskindex)}
                       />
                      <button onClick={() => handleOnClick(taskIndex,subtaskindex)}>Delete</button>
                    </li>)
                  })
                }
              </ul>
            </div>
          )
        })
      }
    </div>
  )
}

export default Ques20

