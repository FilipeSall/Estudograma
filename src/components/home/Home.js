import React from 'react';
import Weather from '../weather/Weather.js';
import './Home.css';

function Home() {
  return (
    <section className='home__container'>
       <Weather />
    </section>
  )
}

export default Home;