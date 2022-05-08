import React from 'react';
import Items from '../Items/Items/Items';
import './Home.css'

const Home = () => {
  return (
    <div>

      <div className='banner'>
        <h2>Image using</h2>
      </div>
<div>
  items 
  <Items></Items>
</div>
    </div>
  );
};

export default Home;