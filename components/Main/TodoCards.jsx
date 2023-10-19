import React from "react";
import Link from "next/link";
import { AiTwotoneEdit, AiFillDelete, AiFillFileAdd } from "react-icons/ai";

// prettier-ignore
function TodoCards({ todoArr, handleDelete, setTodoArr, handleAdd, 
  editing, setEditing, setEditId, setVal, setModal, handleOpenModal }) {
  
    const handleChecked = (id) => {
    const checkIt = todoArr.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoArr(checkIt);

    // setTodoArr((prev) =>
    //   prev.map((todo) => {
    //     // if (todo.id !== id) return todo;
    //     if (todo.id === id) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     } else {
    //       return todo;
    //     }
    //   })
    // );
  };
  // console.log(todoArr);

  // const viewDetails =(id) => {
  //   set
  // }

  return (
    <ul className="divide-y divide-solid">
      {todoArr.length > 0 ? (
        todoArr
          .map((todo, idx) => {
            const { title, id, completed, obj } = todo;
            return (
              <li
                key={id}
                className={`${
                  completed && "bg-gray-600"
                } grid grid-cols-7 justify-between px-1 py-2`}
              >
                <div className="flex col-span-1">
                  <p className="pr-3">{idx + 1}.</p>
                  <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => handleChecked(id)}
                  />
                </div>
                
                <Link href={`/view/${id}`} className="col-span-4 "> 
                  <div className="w-[100%] mx-auto overflow-x-auto">
                    <h1 className={`${completed && "line-through"} `} >{title}</h1>
                  </div>
                </Link>
                {/* <h1>{completed}</h1> */}

                <div className="flex items-center justify-end col-span-2 space-x-4">
                  <AiTwotoneEdit
                    className="text-blue-200 border border-blue-300 rounded-sm"
                    onClick={(e) => {
                      setEditId(id);
                      setEditing(true);
                      setVal(title)
                    }}
                  />
                  <AiFillFileAdd className="" onClick={ () => { handleOpenModal(id, title, obj) } } />
                  <AiFillDelete
                    className="text-red-600"
                    onClick={() => handleDelete(id)}
                  />
                </div>
              </li>
            );
          })
          .reverse()
      ) : (
        <div className="flex justify-center items-center h-[100%] mt-20">
          No todo item
        </div>
      )}
    </ul>
  );
}

export default TodoCards;
