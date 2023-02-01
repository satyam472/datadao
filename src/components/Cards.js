import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Featured Courses!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://assets-global.website-files.com/6171e9fea621c60456b9f9ad/62cc4c57a212fe57e2e0cbbb_road-to-web3.png'
              title='The road to web3'
              des='A 10-week self-paced program to make you an advanced web3 developer.'
              label='Web3'
              path='/dashboard'
            />
            <CardItem
               src='https://assets-global.website-files.com/6171e9fea621c60456b9f9ad/62cc4c57a212fe57e2e0cbbb_road-to-web3.png'
               title='The road to web3'
               des='A 10-week self-paced program to make you an advanced web3 developer.'
               label='Web3'
               path='/dashboard'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
               src='https://assets-global.website-files.com/6171e9fea621c60456b9f9ad/62cc4c57a212fe57e2e0cbbb_road-to-web3.png'
               title='The road to web3'
               des='A 10-week self-paced program to make you an advanced web3 developer.'
               label='Web3'
               path='/dashboard'
            />
            <CardItem
              src='https://assets-global.website-files.com/6171e9fea621c60456b9f9ad/62cc4c57a212fe57e2e0cbbb_road-to-web3.png'
              title='The road to web3'
              des='A 10-week self-paced program to make you an advanced web3 developer.'
              label='Web3'
              path='/dashboard'
            />
            <CardItem
               src='https://assets-global.website-files.com/6171e9fea621c60456b9f9ad/62cc4c57a212fe57e2e0cbbb_road-to-web3.png'
               title='The road to web3'
               des='A 10-week self-paced program to make you an advanced web3 developer.'
               label='Web3'
               path='/dashboard'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
