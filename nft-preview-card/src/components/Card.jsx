import React from 'react'
import './Card.css'
import nftImage from '../images/image-equilibrium.jpg'
import profilePictures from '../images/image-avatar.png'
import ethIcon from '../images/icon-ethereum.svg'
import clockIcon from '../images/icon-clock.svg'
import eyeIcon from '../images/icon-view.svg'

function Card() {
  return (
    <article>

      <div className='nft-image-container'>
        <img src={nftImage} alt="nft" className='nft-image'/>
        <div>
          <img src={eyeIcon} alt="an eye icon" />
        </div>
      </div>

      <div>

        <h1>
          Equilibrium #3429
        </h1>

        <p className='description'>
        Our Equilibrium collection promotes balance and calm.
        </p>

        <div className='price-info'>

          <div className='flex-group'>
            <img src={ethIcon} alt='Ethereum icon'/>
            <p className='price'>0.041 ETH</p>
          </div>
          <div className='flex-group'>
            <img src={clockIcon} alt="clock icon" />
            <p className='deadline'>3 days left</p>
          </div>
          
        </div>

      </div>

      <hr/>

      <div className='user-info'>
        <img className='profile-picture' src={profilePictures} alt="user profile" />
        <p>Creation of <span className='user-name'>Jules Wyvern</span></p>
      </div>

    </article>
  )
}

export default Card