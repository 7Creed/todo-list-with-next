import React, { useEffect, useState } from "react";
import TodoCards from "./TodoCards";
import TodoInput from "./TodoInput";
import { v4 } from "uuid";
import Modal from "./Modal";
import { useGlobalContext } from "../../context/context";

function MainPage() {
  const [val, setVal] = useState("");
  const [editId, setEditId] = useState("");
  const { todoArr, setTodoArr } = useGlobalContext();
  const [error, setError] = useState(false);
  const [editing, setEditing] = useState(false);
  const [modal, setModal] = useState(false);
  const [timeOut, setTimeOut] = useState(100);
  const [modalObj, setModalObj] = useState({});
  // const {moreId, setMoreId} = useState({})

  // console.log(todoArr)

  const handleAdd = (e, id, title) => {
    e.preventDefault();
    if (!editing) {
      if (val === "") {
        setError(true);
      } else {
        console.log(val);
        setTodoArr((prevVal) => [
          ...prevVal,
          { title: val, id: v4(), completed: false },
        ]);
        setVal("");
      }
    } else {
      setTodoArr((prev) =>
        prev.map((todo) =>
          todo.id === editId ? { ...todo, title: val } : todo
        )
      );
      setVal("");
      setEditing(false);
    }
  };

  const handleDelete = (id) => {
    // setTodoArr(todoArr.filter(todo => todo.id !== id))
    setTodoArr((prev) => prev.filter((todo) => todo.id !== id));
  };

  // useEffect(() => {

  // }, [error])

  const handleOpenModal = (id, title, obj) => {
    setModal(true);
    console.log(id);
    setModalObj({ id: id, title: title, obj: obj });
  };

  useEffect(() => {
    if (error) {
      const interval = setInterval(() => {
        setTimeOut((timeout) => {
          if (timeout === 1) {
            clearInterval(interval);
            setError(false);
            // return 100;
          }
          return timeout - 1;
        });
      }, 50);

      return () => {
        clearInterval(interval);
      };
    } else {
      setTimeout(() => {
        setTimeOut(100);
      }, 1000);
    }
  }, [error]);


  // console.log(timeOut, error)

  // console.log(todoArr);
  // console.log(v4());
  return (
    <div className="w-[80%]">
      <h1 className="mb-2">Todo-Lists</h1>
      <TodoInput
        val={val}
        setVal={setVal}
        handleAdd={handleAdd}
        error={error}
        editing={editing}
      />
      <TodoCards
        todoArr={todoArr}
        handleDelete={handleDelete}
        setTodoArr={setTodoArr}
        handleAdd={handleAdd}
        editing={editing}
        setEditing={setEditing}
        setEditId={setEditId}
        setVal={setVal}
        setModal={setModal}
        handleOpenModal={handleOpenModal}
      />

      <div
        className={`${
          error ? "right-2" : "-right-96"
        } absolute top-24 rounded-tl-md bg-red-700 text-white text-[12px] transition-all  ease-in-out duration-500`}
      >
        <h2 className="px-3">Input cannot be empty</h2>
        <div className="flex flex-row-reverse">
          <div
            className={`h-[5px] bg-white`}
            style={{ width: `${timeOut}%` }}
          ></div>
        </div>
      </div>

      {modal && (
        <Modal
          setModal={setModal}
          modalObj={modalObj}
          todoArr={todoArr}
          setTodoArr={setTodoArr}
        />
      )}
    </div>
  );
}

export default MainPage;
