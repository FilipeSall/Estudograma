import React from 'react';
import Calendar from '../Calendar/Calendar.js';
import Weather from '../weather/Weather.js';
import './Home.css';

function Home() {

  return (
    <section className='home__container'>
       <Weather />
       <Calendar />
    </section>
  )
}

export default Home;