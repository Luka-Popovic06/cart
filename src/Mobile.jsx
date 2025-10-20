import React, { useState, useEffect } from "react";
const Mobile = () => {
  return (
    <li className="list-item">
      <img src="" alt="" />
      <div className="info-box">
        <p className="phone-name"></p>
        <p className="phone-price"></p>
        <button type="button" className="remove-btn">
          remove
        </button>
      </div>
      <div className="list-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="icon-number"
        >
          <path
            fill-rule="evenodd"
            d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
            clip-rule="evenodd"
          />
        </svg>
        <p className="phones-number"></p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="icon-2"
        >
          <path
            fill-rule="evenodd"
            d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </li>
  );
};
export default Mobile;
