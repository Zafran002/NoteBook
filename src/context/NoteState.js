import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6401ae7c2c53aebe86ee0d01",
      user: "6401a7b2d23bf9e0b43a124d",
      title: "Bitcoin",
      description: "This is my new note ",
      tag: "personal",
      date: "2023-03-03T08:23:24.705Z",
      __v: 0,
    },
    {
      _id: "6401ae872c53aebe86ee0d03",
      user: "6401a7b2d23bf9e0b43a124d",
      title: "Ethereum",
      description: "This is my new note ",
      tag: "personal",
      date: "2023-03-03T08:23:35.569Z",
      __v: 0,
    },
    {
      _id: "6401bcaebc497cde6389964b",
      user: "6401a7b2d23bf9e0b43a124d",
      title: "ChainLink",
      description: "This is my new note ",
      tag: "personal",
      date: "2023-03-03T09:23:58.121Z",
      __v: 0,
    },
    {
      _id: "6401bcb2bc497cde6389964d",
      user: "6401a7b2d23bf9e0b43a124d",
      title: "ChainLink",
      description: "This is my new note ",
      tag: "personal",
      date: "2023-03-03T09:24:02.081Z",
      __v: 0,
    },
    {
      _id: "6401bcb2bc497cde6389964d",
      user: "6401a7b2d23bf9e0b43a124d",
      title: "ChainLink",
      description: "This is my new note ",
      tag: "personal",
      date: "2023-03-03T09:24:02.081Z",
      __v: 0,
    },
    {
      _id: "6401bcb2bc497cde6389964d",
      user: "6401a7b2d23bf9e0b43a124d",
      title: "ChainLink",
      description: "This is my new note ",
      tag: "personal",
      date: "2023-03-03T09:24:02.081Z",
      __v: 0,
    },
    {
      _id: "6401bcb2bc497cde6389964d",
      user: "6401a7b2d23bf9e0b43a124d",
      title: "ChainLink",
      description: "This is my new note ",
      tag: "personal",
      date: "2023-03-03T09:24:02.081Z",
      __v: 0,
    },
    {
      _id: "6401bcb2bc497cde6389964d",
      user: "6401a7b2d23bf9e0b43a124d",
      title: "ChainLink",
      description: "This is my new note ",
      tag: "personal",
      date: "2023-03-03T09:24:02.081Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

    // const s1 = {
    //   name: "Harry",
    //   class: "12",
    // };
    // const [state, setState] = useState(s1);
    // const update = () => {
    //   setTimeout(() => {
    //     setState({
    //       name: "zafran",
    //       class: "12",
    //     });
    //   }, 1000);
    // };

  return (
    <NoteContext.Provider value={{ notes, setNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
