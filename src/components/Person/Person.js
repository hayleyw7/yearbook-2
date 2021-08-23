// import React from 'react';
import './Person.css';

function Person() {
  return (
    <div class='flexible'>
      <section>
        <img src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F10%2F13%2Fcorgi-dog-POPDOGNAME1020.jpg'></img>
        <h2>Dog</h2>
        <p>(likes walks)</p>
      </section>
      <section>
        <img src='https://i.natgeofe.com/n/f0dccaca-174b-48a5-b944-9bcddf913645/01-cat-questions-nationalgeographic_1228126.jpg'></img>
        <h2>Cat</h2>
        <p>(likes sunbathing)</p>
      </section>
      <section>
        <img src='https://positively.com/files/bunny-on-side.jpg'></img>
        <h2>Bunny</h2>
        <p>(likes hay)</p>
      </section>
      <section>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRXbjKS85HJ7rTbDalHPJ9lI2Zf-rkW_9QKw&usqp=CAU'></img>
        <h2>Fish</h2>
        <p>(likes swimming)</p>
      </section>
    </div>
  );
}

export default Person;
