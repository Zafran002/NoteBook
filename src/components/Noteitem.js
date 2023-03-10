// import React, { useContext } from "react";
// import noteContext from "../context/noteContext";

const Noteitem = (props) => {
  //   const context = useContext(noteContext);
  //   const { notes, setNotes } = context;
  const { note } = props;
  return (
    <div className="col-md-3">
      <div class="card my-3">
        <div class="card-body">
          <h5 class="card-title mx-2">{note.title}</h5>

          <p class="card-text mx-2">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
