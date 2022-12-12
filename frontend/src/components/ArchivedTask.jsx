import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import EditTask from './EditTask'

export default function ArchivedTask() {
    const [tasks, setTasks] = useState([]);

    const deleteTask = async id =>{
        try {
            const deletetask = await fetch(`http://localhost:3000/api/v1/task/${id}`, {
                method: "DELETE"
            })

            setTasks(tasks.filter(task =task.id !== id));

        } catch (error) {
            console.log("archived"+err.message);
        }
    }
    const getTask = async id =>{
        try {
            const response = await fetch(`http://localhost:3000/api/v1/task`)
            const jsonData = await response.json()
            
            setTasks(jsonData)
        } catch (error) {
            console.log("traer archived"+err.message);
        }
    }

    useEffect(()=>{
        getTask();
    }, [])

    const arch = tasks.filter(task => task.archived == false);

    console.log('tareas de acrhivados'+tasks);

    return (
    <Fragment>
        {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/**/}
          {arch.map(task => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>
                <EditTask task={task} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}
