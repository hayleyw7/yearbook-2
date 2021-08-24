import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

function Cohort() {
  return (
    <div class='flexible'>

      <Person name='Dog' pic='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F10%2F13%2Fcorgi-dog-POPDOGNAME1020.jpg' likes='likes walks' trait='MUCH SLOBBER' />

      <Person name='Cat' pic='https://i.natgeofe.com/n/f0dccaca-174b-48a5-b944-9bcddf913645/01-cat-questions-nationalgeographic_1228126.jpg' likes='likes sunbathing' trait='SO SNUGGLY' />      
      
    </div>
  )
}

export default Cohort;
