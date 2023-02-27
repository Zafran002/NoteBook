
import React, { useState } from "react";

function Form() {
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  });

  const [selectedOption, setSelectedOption] = useState("");

  const handleCheckboxChange = (event) => {
    setCheckboxes({
      ...checkboxes,
      [event.target.name]: event.target.checked,
    });
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="checkbox"
          id="option1"
          name="option1"
          checked={checkboxes.option1}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="option1">Option 1</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="option2"
          name="option2"
          checked={checkboxes.option2}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="option2">Option 2</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="option3"
          name="option3"
          checked={checkboxes.option3}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="option3">Option 3</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="option4"
          name="option4"
          checked={checkboxes.option4}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="option4">Option 4</label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="optionA"
            checked={selectedOption === "optionA"}
            onChange={handleOptionChange}
          />
          Option A
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="optionB"
            checked={selectedOption === "optionB"}
            onChange={handleOptionChange}
          />
          Option B
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="optionC"
            checked={selectedOption === "optionC"}
            onChange={handleOptionChange}
          />
          Option C
        </label>
      </div>
      <div>
        <label htmlFor="profileUpload">Profile Picture:</label>
        <input type="file" id="profileUpload" name="profileUpload" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

