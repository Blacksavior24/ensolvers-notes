import React, { Fragment, useState } from "react";

const InputTask = () => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { name,description };
      const response = await fetch("http://localhost:3000/api/v1/task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/Home";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Tasks ensolvers</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='task name'
        />
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder='task description'
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTask;