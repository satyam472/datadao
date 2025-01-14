import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img pd-3'
              alt='Featured Course'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h2 className='cards__item__text__title'>{props.title}</h2>
            <h5 className='cards__item__text'>{props.des}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
