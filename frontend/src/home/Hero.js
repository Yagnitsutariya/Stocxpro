import React from 'react';

function Hero() {
  return (
    <div className='container py-5'>
      <div className='row justify-content-center text-center'>
        <div className='col-12 col-md-10'>
          <img
            src='images/homeHero.png'
            alt='HeroImg'
            className='img-fluid mb-4'
          />

          <h1 className='mt-4'>Invest in everything</h1>
          <p className='mb-4'>
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>

          <a
            href='/signup'
            className='btn btn-primary fs-5 px-4 py-2'
            style={{ minWidth: '200px' }}
          >
            Signup Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
