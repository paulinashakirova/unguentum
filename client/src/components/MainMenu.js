import React from 'react';
// import AddNewPerfume from './AddNewPerfume';
import DisplayAllPerfumes from './DisplayAllPerfumes';

export default function MainMenu() {
  // const handleChange = (event) => {
  //   setMessage(event.target.value);
  // };
  return (
    <div>
      <h1>What is the best fragrance for you today?</h1>
      {/* <AddNewPerfume /> */}
      <DisplayAllPerfumes />
      {/* <input type='text' value={message} onChange={handleChange} /> */}
    </div>
  );
}
