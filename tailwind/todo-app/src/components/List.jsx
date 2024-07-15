import React from "react";

export default function List(props) {
  return (
    <div className="my-10 ml-5 mr-10">
      <ul className="list-none p-0 text-white">
        {props.todo.length > 0 ? (
          props.todo.map((value, index) => (
            <li
              className="border border-gray-300 p-2 flex flex-row justify-between mr-2"
              key={index}
            >
              {value}
              <div>
                <button
                  className="flex-shrink-0 bg-yellow-500 hover:bg-yellow-700 border-yellow-500 hover:border-yellow-700  text-sm border-4 text-white py-1.5 px-4 rounded mr-2"
                  onClick={() => props.editTodo(index, value)}
                  disabled={props.editData.index !== -1 ? true : false}
                >
                  Edit
                </button>
                <button
                  className="flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700  text-sm border-4 text-white py-1.5 px-4 rounded"
                  onClick={() => props.deleteTodo(value)}
                  disabled={props.editData.index !== -1 ? true : false}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="border border-gray-300 p-2">No todos</li>
        )}
      </ul>
    </div>
  );
}
