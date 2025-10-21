import React, { useState, useEffect } from "react";
const Mobile = (props) => {
  const { src, name, price } = props;
  //const [price, setPrice] = useState(0);
  return (
    <li className="list-item">
      <div className="list-item-minibox">
        <img className="mobile-img" src={src} alt={src} />
        <div className="info-box">
          <p className="phone-name">{name}</p>
          <p className="phone-price-p">
            $<span className="phone-price">{price}</span>
          </p>
          <button type="button" className="remove-btn">
            remove
          </button>
        </div>
      </div>
      <div className="list-box">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 448 512"
          className="icon-2"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
        </svg>
        <p className="phones-number">1</p>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 448 512"
          className="icon-2"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
        </svg>
      </div>
    </li>
  );
};
export default Mobile;
