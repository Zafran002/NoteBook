import React, { useState, useEffect } from "react";
// import {} from "../";
import axios from 'axios';


// import axios from "axios";

const RefForm = () => {
  const customStyle = {
    color: "red",
    fontSize: "20px",
    // border : "1.9 px solid black",
  };
  customStyle.color = "blue ";

  const [user, setUser] = useState({
    name: "",
    rollNumber: "",
    email: "",
    student: "",
    message: "",
    // profile: "",
    // gallery: "",
    // language: [],
    // hobbies: "",
    gender: [],
  });
  // all data in user
  const {
    name,
    rollNumber,
    email,
    student,
    message,
    // profile,
    // gallery,
    // language,
    // hobbies,
    gender,
  } = user;
  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(e.target.value);
    // console.log('user');
    // console.log(...user);
  };

  // .....
  // language Json data
  const userData = [
    { name: "English" },
    { name: "Hindi" },
    { name: "Chinese" },
    { name: "Urdu" },
  ];
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(userData);
  }, []);
  //language handle
  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
      // console.log(name)
      console.log(e.target.name)
    }
  };


  const handleOnClick = async (e) => {
    // e.preventDefault(); this is used for- page refresh na ho
    console.log(user);
    e.preventDefault();
    await axios.post("http://localhost:8000/api/formroute", user).then((res) => {
      console.log(res);
    });
    // setUser({
    //   name: "",
    //   email: "",
    //   rollNumber: "",
    //   student: "",
    //   message: "",
    //   profile: "",
    //   gallery: "",
    //   language: "",
    //   hobbies: "",
    //   gender: "",
    // });
    // user.name = "";
    // user.rollNumber = "";
    // user.email = "";
    // user.student = "";
    // user.message = "";
    // user.profile = "";
    // user.gallery = "";
    // user.language = [];
    // // user.hobbies = [];
    // user.gender = [];
    // setUser({ ...user });
  };

  return (
    <div
      className=" mx-auto mt-3 container border border-info"
      style={{ width: 500, height: "65%" }}
      // style={customStyle}
    >
      <table
      // style={customStyle}
      >
        <tr>
          <td className="form-group col-lg-2 col-md-4 ">
            <label htmlFor="inputname" className="my-2">
              <strong contentEditable="true" spellCheck="true">
                Name:
              </strong>
            </label>
            <input
              type="name"
              name="name"
              className="form-control "
              id="inputname"
              placeholder="Name"
              autoComplete="off"
              value={name}
              onChange={(e) => {
                handleInputs(e);
              }}
            />
          </td>
          <td className="form-group col-md-2 ">
            <label htmlFor="inputRollNo" className="my-2 mx-2">
              <strong contentEditable="true" spellCheck="true">
                Roll Number:
              </strong>
            </label>
            <input
              type="text"
              name="rollNumber"
              className="form-control mx-2 "
              id="inputRollNo"
              placeholder="Roll Number"
              autoComplete="off"
              value={rollNumber}
              onChange={(e) => {
                handleInputs(e);
              }}
            />
          </td>
        </tr>
        <tr>
          <td className="form-group col-md-2">
            <label htmlFor="inputEmail4" className="my-2 mx-2">
              <strong>Email:</strong>
            </label>
            <input
              type="email"
              name="email"
              className="form-control "
              id="inputEmail4"
              placeholder="Email"
              autoComplete="off"
              value={email}
              onChange={(e) => {
                handleInputs(e);
              }}
            />
          </td>
          <td className="form-group col-md-2">
            <label htmlFor="inputStudentName " className="my-2 mx-2">
              <strong>Student:</strong>
            </label>
            <input
              type="name"
              name="student"
              className="form-control mx-2"
              id="inputStudentName"
              value={student}
              onChange={(e) => {
                handleInputs(e);
              }}
              placeholder="Student Name"
              autoComplete="off"
            />
          </td>
        </tr>
      </table>
      <div>
        <label htmlFor="messageText" className="text-bold my-2">
          <strong>Message:</strong>
        </label>
        <textarea
          rows="7"
          cols="55"
          name="message"
          value={message}
          id="messageText"
          onChange={(e) => {
            handleInputs(e);
          }}
        ></textarea>
      </div>
      <div className="mb-3 col-md-5">
        <label htmlFor="formFile" className="form-label">
          Profile
        </label>
        <input
          className="form-control mx-2"
          type="file"
          id="formFile"
          name="profile"
          // value={profile}
          onChange={(e) => {
            handleInputs(e);
          }}
        />
      </div>
      <img
        className="col-sm-4"
        // src={profile}
        alt="profile"
        style={{ width: "200px", height: "100px" }}
      />
      <div className="mb-3 col-md-4">
        <label htmlFor="formFileMultiple" className="form-label">
          Gallery:
        </label>
        <input
          className="form-control "
          type="file"
          name="gallery"
          id="formFileMultiple"
          multiple
          // value={gallery}
          onChange={(e) => {
            handleInputs(e);
          }}
        />
      </div>
      <img
        className="col-sm-4"
        // src={gallery}
        alt="gallery"
        style={{ width: "200px", height: "100px" }}
      />
      <br />

      {/* language */}
      {/* <form class="form-group">
        <div className="row">
          <strong className="col-form-label col-sm-2 pt-0" htmlFor="gridCheck">
            Language:
          </strong>
          <div className="col-sm-10">
            <input
              className="form-check-input"
              name="language"
              type="checkbox"
              checked={isenglish}
              id="gridCheck"
              value="english"
              onChange={(e) => {
                handleCheck(e);
              }}
            />
            <label className="form-check-label" htmlFor="gridCheck">
              English
            </label>
            <div className="form-check ms-2">
              <input
                className="form-check-input"
                name="language"
                type="checkbox"
                checked={ishindi}
                id="gridCheck"
                value="hindi"
                onChange={(e) => {
                  handleCheck(e);
                }}
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Hindi
              </label>
            </div>
            <div className="form-check mx-2">
              <input
                className="form-check-input"
                name="language"
                type="checkbox"
                id="gridCheck"
                checked={isother}
                value="other"
                onChange={(e) => {
                  handleCheck(e);
                }}
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Other
              </label>
            </div>
          </div>
        </div>
      </form> */}
      {/* Language part */}
      <div className="row">
      <form className="form w-100 ">
        <h5 htmlFor="gridCheck">Select Language:</h5>
        <div className="form-check  ">
          <input
            type="checkbox"
            className="form-check-input"
            name="allSelect"
            // value={language}
            id="gridCheck"
            // checked={
            //   users.filter((user) => user?.isChecked !== true).length < 1
            // }
            checked={!users.some((user) => user?.isChecked !== true)}
            onChange={handleCheckbox}
           />
           <label className="form-check-label ms-2" htmlFor="gridCheck">
            All Select
           </label>
         </div>
        {users.map((user, index) => (
          <div className="form-check" key={index}>
            <input
              type="checkbox"
              id="gridCheck"
              className="form-check-input"
              name={user.name}
              checked={user?.isChecked || false}
              onChange={handleCheckbox}
            />
            <label className=" form-check-label ms-2" htmlFor="gridCheck">
              {user.name}
            </label>
          </div>
        ))}
      </form>
</div>
      {/* hobbies part */}
      {/* 
      <form className="form w-100">
        <h4 htmlFor="gridCheck" >Select Hobbies:</h4>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="allSelect2"
            // checked={
            //   users.filter((user) => user?.isChecked !== true).length < 1
            // }
            checked={!users.some((user) => user?.isChecked !== true)}
            onChange={handleChange}
          />
          <label className="form-check-label ms-2" htmlFor="gridCheck">All Select</label>
        </div>
        {users.map((user, index) => (
          <div className="form-check" key={index}>
            <input
              type="checkbox"
              className="form-check-input"
              
              name={user.hobby}
              checked={user?.isChecked || false}
              onChange={handleChange2}
            />
            <label className="form-check-label ms-2" htmlFor="gridCheck">{user.hobby}</label>
          </div>
        ))}
      </form> */}

      {/* hobby part */}
      {/* <div className="col-12">
        <fieldset className="row-12">
          <legend htmlFor="gridCheck" >Hobbies:</legend>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="hobbies"
              id="gridCheck"
              value={hobbies}
              // onChange={(e) => {
              //   handleInputsOfCheckbox(e);
              // }}
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Singing
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Dancing
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Cricket
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Football
            </label>
          </div>
        </fieldset>
      </div> */}

      {/* radio buton pushpe */}
      <fieldset class="form-group">
        <div class="row">
          <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
          <div class="col-sm-10">
            <div>
              <input
                className="mx-2"
                checked={gender === "male"}
                onChange={(e) => {
                  handleInputs(e);
                }}
                type="radio"
                value="male"
                name="gender"
              />
              Male
              <input
                className="mx-2"
                checked={gender === "female"}
                onChange={(e) => {
                  handleInputs(e);
                }}
                type="radio"
                value="female"
                name="gender"
              />
              Female
              <input
                className="mx-2"
                checked={gender === "other"}
                onChange={(e) => {
                  handleInputs(e);
                }}
                type="radio"
                value="other"
                name="gender"
              />
              Other
            </div>
          </div>
        </div>
      </fieldset>
      <button
        // onClick={handleOnClick}
        onClick={(e) => {
                  handleOnClick(e);
                }}
        className="btn btn-outline-info rounded-pill my-2"
      >
        Submit
      </button>
    </div>
  );
};

export default RefForm;
