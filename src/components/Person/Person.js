// import React from 'react';
import './Person.css';

function Person(props) {
  return (
      <section>
        <img src={props.pic}></img>
        <h2>{props.name}</h2>
        <p class='likes'>{props.likes}</p>
        <p class='trait'>{props.trait}</p>        
      </section>
  );
}

export default Person;
