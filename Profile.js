// Profile.js
import React, { useState } from 'react';

const Profile = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <div>
      <h2>Profile Page</h2>
      <div>
        <label>Name: </label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label>Age: </label>
        <input type="text" value={age} onChange={handleAgeChange} />
      </div>
      <Summary name={name} age={age} />
    </div>
  );
};

const Summary = ({ name, age }) => {
  return (
    <div>
      <h3>Summary:</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default Profile;
