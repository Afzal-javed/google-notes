import React from 'react'

function Headers() {
    const logo=<img src="https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png" alt='logo'/>
  return (
    <div className='header'>
        {logo}
        <h3>Keep</h3>
    </div>
  );
}

export default Headers;