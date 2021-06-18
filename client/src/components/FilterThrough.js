import React, { useState, useEffect } from "react";
import scents from "../utils/scents";

export default function FilterThrough() {
  const errorMessage = "There was a problem, please try again later";
  let [error, setError] = useState([]);
  let [message, setMessage] = useState("");
  const [result, setResult] = useState({});
  const [perfumes, setPerfumes] = useState([]);
  //i know for sure that result is working.
  // console.log(result);
  const handleInputChange = (e) => {
    setResult({ ...result, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(result);
  }, [result]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getPerfumes();
    // console.log(result);
    // let myUrlWithParams = new URL('localhost:5000/perfumes/');
    // myUrlWithParams.searchParams.append('scent', 'woody');
    // console.log(myUrlWithParams.href);
    ////////////////////////////////
    //how do i grab params?
    ///////////////////////////////
    //result <= contains all chosen "key:value" pairs from handleInputChange
    // take params, create URL based on parmas
    // fetch using this url - getPerfumes1()
    // setParfumes(retrieved from fetch)
  };

  // const handleInputChange = ({ target }) => {
  //   const { name, value } = target;
  //   console.log('target = ' + target);
  // 2. param should be saved somewhere
  /*setPerfumes((state) => ({
      ...state,
      [name]: value
    }));*/

  /*
  1. user selects Scent
  2. scent=woody is saved somewhere 
  3. user clicks Search
  4. App creates URL with query parameters ?scent=woody&mood=...
   and sends fetch request for perfumes
   
  5. setPerfumes(returned perfumes)
  */

  // const getPerfumes = async () => {
  //   setError('');
  //   //why next three lines are not working?
  //   //new URL works only with fool url... starting with https:
  //   // How do I apply it to my localhost:5000?
  //   // let myUrlWithParams = new URL('localhost:5000/perfumes/');
  //   // myUrlWithParams.searchParams.append('scent', 'woody');
  //   // console.log(myUrlWithParams.href);
  //   //
  //   //just a solution from stackoverflow that i dont know how to implement
  //   // function encodeQueryData(result) {
  //   //   const ret = [];
  //   //   for (let d in result) ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(result[d]));
  //   //   return ret.join('&');
  //   // }
  //   try {
  //     const response = await fetch('myUrlWithParams');
  //     if (!response.ok) throw { message: errorMessage };
  //     const json = await response.json();

  //     setPerfumes(json);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };
  //!!!apart from url being broken it also saves all entries in my DB which i dont want
  const getPerfumes = async () => {
    setError("");
    try {
      let url = "/perfumes";
      for (const param in result) {
        url += "?" + param + "=" + result[param] + "&";
      }

      console.log(url);

      const response = await fetch(url);
      if (!response.ok) throw { message: errorMessage };
      const json = await response.json();
      console.log(json);
      setPerfumes(json);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form autocomplete="off" onSubmit={handleSubmit}>
        {/* Do I need value or key in allmy inputs? difference?*/}
        <div className="container">
          <div className="mb-3">
            <label className="form-label exampleFormControlInput1">
              <p className="lead">Find what you want</p>
            </label>
            <div className="row g-2">
              <div className="col">
                <h3>Scent</h3>
                <select
                  className="form-control border-secondary"
                  placeholder="scent"
                  name="scent"
                  type="text"
                  key="scent"
                  value={perfumes.scent}
                  onChange={handleInputChange}
                >
                  <option value="empty">choose</option>
                  <option value="woody">woody</option>
                  <option value="spicy">spicy</option>
                  <option value="fruity">fruity</option>
                  <option value="floral">floral</option>
                  <option value="citrus">citrus</option>
                  <option value="powdery">powdery</option>
                </select>
              </div>
              <div className="col">
                <h3>Mood</h3>
                <select
                  className="form-control border-secondary"
                  placeholder="mood"
                  name="mood"
                  type="text"
                  key="mood"
                  value={perfumes.mood}
                  onChange={handleInputChange}
                >
                  <option value="">choose</option>

                  {scents.map((scent) => (
                    <option key={scent} value={scent}>
                      {scent}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col">
                <h3>Season</h3>
                <select
                  className="form-control border-secondary"
                  placeholder="season"
                  name="season"
                  type="text"
                  key="season"
                  value={perfumes.season}
                  onChange={handleInputChange}
                >
                  <option value="empty">choose</option>
                  <option value="winter">winter</option>
                  <option value="spring">spring</option>
                  <option value="summer">summer</option>
                  <option value="fall">fall</option>
                </select>
              </div>
              <div className="row g-2">
                <div className="col">
                  <h3>Day/Night</h3>
                  <select
                    className="form-control border-secondary"
                    placeholder="time of day"
                    name="time_of_day"
                    type="text"
                    key="time_of_day"
                    value={perfumes.time_of_day}
                    onChange={handleInputChange}
                  >
                    <option value="empty">choose</option>
                    <option value="day">day</option>
                    <option value="night">night</option>
                  </select>
                </div>
                <div className="col">
                  <h3>Style</h3>
                  <select
                    className="form-control border-secondary"
                    placeholder="style"
                    name="style"
                    type="text"
                    key="style"
                    value={perfumes.style}
                    onChange={handleInputChange}
                  >
                    <option value="empty">choose</option>
                    <option value="office">office</option>
                    <option value="chic">chic</option>
                    <option value="casual">casual</option>
                    <option value="bohemian">bohemian</option>
                    <option value="elegant">elegant</option>
                    <option value="tomboy">tomboy</option>
                    <option value="punk">punk</option>
                    <option value="sporty">sporty</option>
                  </select>
                </div>
                <div className="col">
                  <h3>Gender</h3>
                  <select
                    className="form-control border-secondary"
                    placeholder="gender"
                    name="gender"
                    type="text"
                    key="gender"
                    value={perfumes.gender}
                    onChange={handleInputChange}
                  >
                    <option value="empty">choose</option>
                    <option value="female">female</option>
                    <option value="unisex">unisex</option>
                  </select>
                </div>
              </div>
              <div className="container mt-4">
                <button className="btn col-12 btn-outline-success shadow p-2 mb-3 bg-body rounded">
                  Search
                </button>
              </div>
              <div className="container">
                {perfumes.map((perfume) => (
                  <div key={perfume.id}>
                    <div className="row">
                      <div
                        /*onClick={handleClick}*/ className="col-9 m-2 p-3 border border-secondary rounded"
                      >
                        <div className="row">
                          <div className="col">{`Name: ${perfume.name}`}</div>
                          <div className="col">{`Brand: ${perfume.brand}`}</div>
                          <div className="col">{`Scent: ${perfume.scent}`}</div>
                          <div className="col">{`Mood: ${perfume.mood}`}</div>
                          <div className="col">{`Season: ${perfume.season}`}</div>
                          <div className="col">
                            {`Day/Night: ${perfume.time_of_day}`}{" "}
                          </div>
                          <div className="col">{`Style: ${perfume.style}`}</div>
                        </div>
                      </div>
                      <div className="col-2"></div>
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
//Filter drop downs/selects that will be connected to my database to filter through
