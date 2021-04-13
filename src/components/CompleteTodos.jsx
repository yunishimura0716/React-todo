import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClick } = props;
  return (
    <div className="complete-area">
      <p className="title">Complete ToDo</p>
      <ul>
        {completeTodos.map((todo, idx) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClick(idx)}>Return</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
