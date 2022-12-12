import React, { Fragment, useState } from "react";

const Archived = ({ task }) => {
  const [archived, setArchived] = useState(task.archived)
  //edit description function

  const updateArch = async e => {
    e.preventDefault();
    console.log(task);
    let archivo
    try {
        if (archived) {
            archivo = {archived : false}
        }else{
            archivo = {archived: true}
        }
      const response = await fetch(
        `http://localhost:3000/api/v1/task/${task.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(archivo)
        }
      );

      window.location = "/Home";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-info"
        data-target={`#id${task.id}`}
        onClick={(e)=> updateArch(e)}
      >
        Archived
      </button>

    </Fragment>
  );
};

export default Archived;