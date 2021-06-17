import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import ExtraInfoBox from './ExtraInfoBox';

export default function DisplayAllPerfumes() {
  const errorMessage = 'There was a problem, please try again later';
  const [result, setResult] = useState({
    name: '',
    brand: '',
    scent: '',
    mood: '',
    season: '',
    time_of_day: '',
    style: '',
    gender: ''
  });
  const [perfumes, setPerfumes] = useState([]);
  let [error, setError] = useState([]);
  let [message, setMessage] = useState('');
  //
  useEffect(() => {
    getPerfumes();
  }, []);
  //
  const handleInputChange = (e) => {
    setResult({ ...result, [e.target.name]: e.target.value });
  };
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    addPerfume();
  };
  //
  const getPerfumes = async () => {
    setError('');

    try {
      //what do next line and next next next line do?
      const response = await fetch('/perfumes');
      if (!response.ok) throw { message: errorMessage };
      const json = await response.json();

      setPerfumes(json);
    } catch (error) {
      //msg.... but in line 68 I have msg...
      setError(error.message);
    }
  };
  const addPerfume = async () => {
    setError('');
    setMessage('');
    try {
      const response = await fetch('/perfumes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify(result)
      });

      const json = await response.json();
      //if I use next 2 lines isnt the catch piece doing the same?
      if (!response.ok) {
        throw { message: errorMessage };
      }

      setMessage(json.msg);

      getPerfumes();
    } catch (error) {
      setError(error.message);
    }
  };
  const deletePerfume = async (id) => {
    setError('');
    setMessage('');

    try {
      const response = await fetch(`/perfumes/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) throw { message: errorMessage };

      const json = await response.json();
      setMessage(json.msg);

      getPerfumes();
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <div className='container px-4'>
        <div>
          <h1 className='display-1 text-center'>Perfume Database</h1>
        </div>
      </div>
      <form method='post' action='/form' autocomplete='off' onSubmit={handleSubmit}>
        {/* Do I need value or key in allmy inputs? difference?*/}
        <div className='container'>
          <div className='mb-3'>
            <label className='form-label exampleFormControlInput1'>
              <p className='lead'>Add new perfume</p>
            </label>
            <div className='row g-2'>
              <div className='col'>
                <h3>Name </h3>
                <input
                  className='form-control border-secondary text-wrap'
                  placeholder='name'
                  name='name'
                  type='text'
                  key='name'
                  value={result.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className='col'>
                <h3>Brand</h3>
                <input
                  className='form-control border-secondary text-wrap'
                  placeholder='brand'
                  name='brand'
                  type='text'
                  key='brand'
                  value={result.brand}
                  onChange={handleInputChange}
                />
              </div>
              <div className='col'>
                <h3>Scent </h3>
                <input
                  className='form-control border-secondary'
                  placeholder='scent'
                  name='scent'
                  type='text'
                  key='scent'
                  value={result.scent}
                  onChange={handleInputChange}
                />
              </div>
              <div className='col'>
                <h3>Mood</h3>
                <input
                  className='form-control border-secondary'
                  placeholder='mood'
                  name='mood'
                  type='text'
                  key='mood'
                  value={result.mood}
                  onChange={handleInputChange}
                />
              </div>
              <div className='row g-2'>
                <div className='col'>
                  <h3>Season</h3>
                  <input
                    className='form-control border-secondary'
                    placeholder='season'
                    name='season'
                    type='text'
                    key='season'
                    value={result.season}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='col'>
                  <h3>Day/Night</h3>
                  <input
                    className='form-control border-secondary'
                    placeholder='time of day'
                    name='time_of_day'
                    type='text'
                    key='time_of_day'
                    value={result.time_of_day}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='col'>
                  <h3>Style</h3>
                  <input
                    className='form-control border-secondary'
                    placeholder='style'
                    name='style'
                    type='text'
                    key='style'
                    value={result.style}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='col'>
                  <h3>Gender</h3>
                  <input
                    className='form-control border-secondary'
                    placeholder='gender'
                    name='gender'
                    type='text'
                    key='gender'
                    value={result.gender}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className='container mt-4'>
                <button className='btn col-12 btn-outline-success shadow p-2 mb-3 bg-body rounded'>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className='container'>
        {perfumes.map((perfume) => (
          <div key={perfume.id}>
            <div className='row'>
              <div /*onClick={handleClick}*/ className='col-9 m-2 p-3 border border-secondary rounded'>
                <div className='row'>
                  <div className='col'>{`Name: ${perfume.name}`}</div>
                  <div className='col'>{`Brand: ${perfume.brand}`}</div>
                  <div className='col'>{`Scent: ${perfume.scent}`}</div>
                  <div className='col'>{`Mood: ${perfume.mood}`}</div>
                  <div className='col'>{`Season: ${perfume.season}`}</div>
                  <div className='col'>{`Day/Night: ${perfume.time_of_day}`} </div>
                  <div className='col'>{`Style: ${perfume.style}`}</div>
                </div>
              </div>
              <div className='col-2'>
                <button
                  onClick={() => deletePerfume(perfume.id)}
                  className='btn btn-outline-danger shadow mt-3 mb-3 bg-body rounded'>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <ExtraInfoBox /> */}
      {/* <AddNewPerfume /> */}
    </div>
  );
}
