import React, { useState } from "react";

function SubmitForm() {
  const [value, setValue] = useState("");  // Initialize state with useState

  const handleSubmit = (event) => {
    event.preventDefault();  // Prevent the form from refreshing the page
    console.log(value);  // Do something with the value
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SubmitForm;
