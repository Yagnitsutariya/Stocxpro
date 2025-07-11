import React from 'react'

function Hero() {
    return ( 
        <div className='conatainer p-5'>
            <div className='row text-center'>
                <img src='images/homeHero.png' alt='HeroImg' className='mb-5'></img>

                <h1 className='mt-5'>Invest in everything</h1>
                <p className=''>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary fs-5' style={{width:"20%", margin:'0 auto'}}>Signup Now</button>
            </div>
        </div>
     );
}

export default Hero;