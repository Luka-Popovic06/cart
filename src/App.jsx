import { useState } from "react";
import { mobilesInfo } from "./info.js";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="header">
        <h1 className="title">UseReducer</h1>
        <div className="products-box">
          <svg
            className="icon-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>
          <p className="products-number">5</p>
        </div>
      </header>
      <main className="container">
        <h1>YOUR BAG</h1>
        <ul className="list"></ul>
        <div>
          <p className="p-total">Total</p>
          <p className="total-price">
            $<span>27090</span>
          </p>
        </div>
        <button type="button" className="clear-btn">
          Clear Cart
        </button>
      </main>
    </>
  );
}

export default App;
