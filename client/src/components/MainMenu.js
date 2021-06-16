import React from 'react';
import DisplayAllPerfumes from './DisplayAllPerfumes';
// import AddNewPerfume from './AddNewPerfume';
export default function MainMenu() {
  // const handleChange = (event) => {
  //   setMessage(event.target.value);
  // };
  return (
    <div>
      <h1 className='text-center'>What is the best fragrance for you today?</h1>
      {/* <AddNewPerfume /> */}
      <DisplayAllPerfumes />
      {/* <input type='text' value={message} onChange={handleChange} /> */}
    </div>
  );
}
