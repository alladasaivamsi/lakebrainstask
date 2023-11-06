import React, { useEffect, useState } from "react";

const SearchAPIData = () => {
  const [cityName, setCityName] = useState("");
  const [user, setUser] = useState([]);
  const fetchData = async () => {
    try {
      if (cityName) {
        const APIKey = "840de593b7028de6e424162454790fe5";
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APIKey}`;
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        setUser(data);
        console.log(user);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleClose = () => {
    setUser(null);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter the City Name"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <button onClick={fetchData}>Search</button>
      <div>
        {cityName !== " " && user && (
          <div>
            <p>Name : {user.name}</p>
            <p>Temperature : {user.main.temp}</p>
            <p>Main: {user.weather[0].main}</p>
            <p>Description: {user.weather[0].description}</p>
            <button onClick={handleClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchAPIData;
