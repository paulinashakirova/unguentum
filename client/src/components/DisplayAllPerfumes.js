import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import ExtraInfoBox from './ExtraInfoBox';
import scents from '../utils/scents';
import mood from '../utils/mood';
import season from '../utils/season';
import time_of_day from '../utils/time_of_day';
import styles from '../utils/styles';
import genders from '../utils/genders';
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
      <form method='post' action='/form' autoComplete='off' onSubmit={handleSubmit}>
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

                <select
                  className='form-control border-secondary'
                  placeholder='scent'
                  name='scent'
                  type='text'
                  key='mood'
                  value={perfumes.scent}
                  onChange={handleInputChange}>
                  <option value=''>choose</option>

                  {scents.map((scent) => (
                    <option key={scent} value={scent}>
                      {scent}
                    </option>
                  ))}
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
                  value={perfumes.mood}
                  onChange={handleInputChange}>
                  <option value=''>choose</option>

                  {mood.map((mood) => (
                    <option key={mood} value={mood}>
                      {mood}
                    </option>
                  ))}
                </select>
              </div>
              <div className='row g-2'>
                <div className='col'>
                  <h3>Season</h3>

                  <select
                    className='form-control border-secondary'
                    placeholder='season'
                    name='season'
                    type='text'
                    key='season'
                    value={perfumes.season}
                    onChange={handleInputChange}>
                    <option value=''>choose</option>

                    {season.map((season) => (
                      <option key={season} value={season}>
                        {season}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='col'>
                  <h3>Day/Night</h3>

                  <select
                    className='form-control border-secondary'
                    placeholder='time_of_day'
                    name='time_of_day'
                    type='text'
                    key='time_of_day'
                    value={perfumes.time_of_day}
                    onChange={handleInputChange}>
                    <option value=''>choose</option>

                    {time_of_day.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
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
                    value={perfumes.style}
                    onChange={handleInputChange}>
                    <option value=''>choose</option>

                    {styles.map((style) => (
                      <option key={style} value={style}>
                        {style}
                      </option>
                    ))}
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
                    value={perfumes.genders}
                    onChange={handleInputChange}>
                    <option value=''>choose</option>

                    {genders.map((gender) => (
                      <option key={gender} value={gender}>
                        {gender}
                      </option>
                    ))}
                  </select>
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
