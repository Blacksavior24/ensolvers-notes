import React, { Fragment, useEffect, useState } from "react";

import EditTask from "./EditTask";


const ListTask = () => {
    const [tasks, setTasks] = useState([]);

    //delete task function

    const deleteTask = async id => {
      try {
        const deleteTask = await fetch(`http://localhost:3000/api/v1/task/${id}`, {
          method: "DELETE"
        });

        setTasks(tasks.filter(task => task.id !== id));
      } catch (err) {
        console.error(err.message);
      }
    };

    const getTasks = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/task");
        const jsonData = await response.json();

        setTasks(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };

    /*const archTask = async e =>{
      console.log('tarea mandada'+e);
      e.preventDefault();
      try {
        const body = {archived};
        const response = await fetch(
          `http://localhost:3000/api/v1/task/${task.id}`,
          {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
          }
        );
        window.location = '/';
        setTasks(tasks.filter(task => task.id !== id));
      } catch (err) {
        console.error(err.message);
      }
    }*/
    

    useEffect(() => {
      getTasks();
    }, []);

    console.log(tasks);

    return (
      <Fragment>
        {" "}
        <table class="table mt-5 text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Active</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/*<tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr> */}
            {tasks.map(task => (
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>{task.description}</td>
                <td>{task.archived?('true'):'false'}</td>
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
                {/*<td>
                  <button
                    className="btn btn-info"
                    onClick={()=>archTask(task)}
                  >
                    Archivar
                  </button>
            </td>*/}
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
};

export default ListTask;