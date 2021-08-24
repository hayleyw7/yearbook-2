// import React from 'react';
import './Person.css';

function Person(props) {
  return (
    <div class='flexible'>
      <section>
        <img src={props.pic}></img>
        <h2>Dog</h2>
        <p class='likes'>{props.likes}</p>
        <p class='trait'>{props.trait}</p>        
      </section>
    </div>






  );
}

export default Person;
