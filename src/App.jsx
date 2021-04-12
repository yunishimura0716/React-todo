import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="Input ToDo" />
        <button>Add</button>
      </div>
      <div className="incomplete-area">
        <p className="title">InComplete ToDo</p>
        <ul>
          <div className="list-row">
            <li>Test Todo</li>
            <button>Complete</button>
            <button>Delete</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">Complete ToDo</p>
        <ul>
          <div className="list-row">
            <li>Test Todo</li>
            <button>Return</button>
          </div>
        </ul>
      </div>
    </>
  );
};
