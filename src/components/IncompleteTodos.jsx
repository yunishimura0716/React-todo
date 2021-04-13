import React from "react";

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">InComplete ToDo</p>
      <ul>
        {incompleteTodos.map((todo, idx) => {
          return (
            <div key={todo} className="list-row">
              <li>
                {idx + 1}: {todo}
              </li>
              <button onClick={() => onClickComplete(idx)}>Complete</button>
              <button onClick={() => onClickDelete(idx)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
