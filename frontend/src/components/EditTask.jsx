import React, { Fragment, useState } from "react";

const EditTask = ({ task }) => {
  const [description, setDescription] = useState(task.description);
  const [name, setName] = useState(task.name);
  //edit description function

  const updateTask = async e => {
    e.preventDefault();
    console.log(task);
    try {
      const body = { name, description };
      const response = await fetch(
        `http://localhost:3000/api/v1/task/${task.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${task.id}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`id${task.id}`}
        onClick={() => setDescription(task.description)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Task</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setDescription(task.description)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
                <input 
                    type="text"
                    className="form-control"
                    value={name}
                    onChange= {e=>setName(e.target.value)}
                />
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateTask(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(task.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTask;