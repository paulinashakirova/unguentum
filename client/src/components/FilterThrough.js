import React, { useState } from 'react';

export default function FilterThrough() {
  const errorMessage = 'There was a problem, please try again later';
  let [error, setError] = useState([]);
  let [message, setMessage] = useState('');
  const [perfumes, setPerfumes] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    getPerfumes();
  };
  //
  const getPerfumes = async () => {
    setError('');
    try {
      const response = await fetch('/perfumes');
      if (!response.ok) throw { message: errorMessage };
      const json = await response.json();

      setPerfumes(json);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form method='post' action='/form' autocomplete='off' onSubmit={handleSubmit}>
        {/* Do I need value or key in allmy inputs? difference?*/}
        <div className='container'>
          <div className='mb-3'>
            <label className='form-label exampleFormControlInput1'>
              <p className='lead'>Find what you want</p>
            </label>
            <div className='row g-2'>
              <div className='col'>
                <h3>Scent</h3>
                <select
                  className='form-control border-secondary'
                  placeholder='scent'
                  name='scent'
                  type='text'
                  key='scent'
                  // value={result.scent}
                  // onChange={handleInputChange}
                >
                  <option value='empty'>choose</option>
                  <option value='woody'>woody</option>
                  <option value='spicy'>spicy</option>
                  <option value='fruity'>fruity</option>
                  <option value='floral'>floral</option>
                  <option value='citrus'>citrus</option>
                  <option value='powdery'>powdery</option>
                </select>
              </div>
              <div className='col'>
                <h3>Mood</h3>
                <select
                  className='form-control border-secondary'
                  placeholder='mood'
                  name='mood'
                  type='text'
                  key='mood'
                  // value={result.mood}
                  // onChange={handleInputChange}
                >
                  <option value='empty'>choose</option>
                  <option value='confident'>confident</option>
                  <option value='sensual'>sensual</option>
                  <option value='romantic'>romantic</option>
                  <option value='luxurius'>luxurius</option>
                  <option value='flirtatious'>flirtatious</option>
                  <option value='happy'>happy</option>
                  <option value='intimate'>intimate</option>
                  <option value='powdery'>powdery</option>
                </select>
              </div>
              <div className='col'>
                <h3>Season</h3>
                <select
                  className='form-control border-secondary'
                  placeholder='season'
                  name='season'
                  type='text'
                  key='season'
                  // value={result.season}
                  // onChange={handleInputChange}
                >
                  <option value='empty'>choose</option>
                  <option value='winter'>winter</option>
                  <option value='spring'>spring</option>
                  <option value='summer'>summer</option>
                  <option value='fall'>fall</option>
                </select>
              </div>
              <div className='row g-2'>
                <div className='col'>
                  <h3>Day/Night</h3>
                  <select
                    className='form-control border-secondary'
                    placeholder='time of day'
                    name='time_of_day'
                    type='text'
                    key='time_of_day'
                    // value={result.time_of_day}
                    // onChange={handleInputChange}
                  >
                    <option value='empty'>choose</option>
                    <option value='day'>day</option>
                    <option value='night'>night</option>
                  </select>
                </div>
                <div className='col'>
                  <h3>Style</h3>
                  <select
                    className='form-control border-secondary'
                    placeholder='style'
                    name='style'
                    type='text'
                    key='style'
                    // value={result.style}
                    // onChange={handleInputChange}
                  >
                    <option value='empty'>choose</option>
                    <option value='office'>office</option>
                    <option value='chic'>chic</option>
                    <option value='casual'>casual</option>
                    <option value='bohemian'>bohemian</option>
                    <option value='elegant'>elegant</option>
                    <option value='tomboy'>tomboy</option>
                    <option value='punk'>punk</option>
                    <option value='sporty'>sporty</option>
                  </select>
                </div>
                <div className='col'>
                  <h3>Gender</h3>
                  <select
                    className='form-control border-secondary'
                    placeholder='gender'
                    name='gender'
                    type='text'
                    key='gender'
                    // value={result.gender}
                    // onChange={handleInputChange}
                  >
                    <option value='empty'>choose</option>
                    <option value='female'>female</option>
                    <option value='unisex'>unisex</option>
                  </select>
                </div>
              </div>
              <div className='container mt-4'>
                <button className='btn col-12 btn-outline-success shadow p-2 mb-3 bg-body rounded'>
                  Search
                </button>
              </div>
              <div className='container'></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
//Filter drop downs/selects that will be connected to my database to filter through
