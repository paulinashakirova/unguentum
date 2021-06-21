import React, { useState, useEffect } from 'react';
import scents from '../utils/scents';
import mood from '../utils/mood';
import season from '../utils/season';
import time_of_day from '../utils/time_of_day';
import styles from '../utils/styles';
import genders from '../utils/genders';
export default function FilterThrough() {
  const errorMessage = 'There was a problem, please try again later';
  let [error, setError] = useState([]);
  let [message, setMessage] = useState('');
  const [result, setResult] = useState({});
  const [perfumes, setPerfumes] = useState([]);
  //
  //When I unclick a filter, all results dissapear and in my GET request i see this
  //GET /perfumes?scent=fruity&mood=romantic&season=&
  //although the request is still 200 OK
  const handleInputChange = (e) => {
    setResult({ ...result, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    // console.log(result);
  }, [result]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getPerfumes();
  };

  const getPerfumes = async () => {
    setError('');
    try {
      let url = '/perfumes?';
      for (const param in result) {
        url += param + '=' + result[param] + '&';
      }

      const response = await fetch(url);
      if (!response.ok) throw { message: errorMessage };
      const json = await response.json();

      setPerfumes(json);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <div className='container'>
          <div className='mb-3'>
            <h1 className='display-1 text-center'>What is the best fragrance for you today?</h1>
            <label className='form-label content-align-center'>
              <p className='lead text-center'>Find what you want</p>
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
              <div className='col'>
                <h3>Season</h3>
                {/* //need to do */}
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
              <div className='row g-2'>
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
                  Search
                </button>
              </div>
              <div className='container'>
                {perfumes.map((perfume) => (
                  <div key={perfume.id}>
                    <div className='row'>
                      <div
                        /*onClick={handleClick}*/ className='col-9 m-2 p-3 border border-secondary rounded'>
                        <div className='row'>
                          <div className='col'>{`Name: ${perfume.name}`}</div>
                          <div className='col'>{`Brand: ${perfume.brand}`}</div>
                          <div className='col'>{`Scent: ${perfume.scent}`}</div>
                          <div className='col'>{`Mood: ${perfume.mood}`}</div>
                          <div className='col'>{`season: ${perfume.season}`}</div>
                          <div className='col'>{`Day/Night: ${perfume.time_of_day}`} </div>
                          <div className='col'>{`Style: ${perfume.style}`}</div>
                          <div className='col'>{`Gender: ${perfume.gender}`}</div>
                        </div>
                      </div>
                      <div className='col-2'></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
