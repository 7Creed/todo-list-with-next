import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiFillPlusSquare, AiFillDelete } from "react-icons/ai";

function Modal({ todoArr, setModal, modalObj, setTodoArr }) {
  const [inputs, setInputs] = useState([""]);
  const [addVal, setAddVal] = useState("");

  // useEffect(() => {
  //   setInputs(
  //     todoArr?.map((todo) => todo.obj && todoArr.obj) !== ""
  //       ? [...todoArr?.map((todo) => todo.obj && todoArr.obj)]
  //       : ""
  //   );
  // }, []);

  useEffect(() => {
    if (modalObj?.obj) {
      setInputs(modalObj.obj);
    }
  }, [modalObj]);

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleAddInp = (id, title) => {
    inputs[inputs.length - 1] && setInputs([...inputs, ""]);
    // console.log(addVal);
    // console.log(inputs);
  };

  const handleDelInp = (idx) => {
    setInputs((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleChange = (value, idx) => {
    setInputs((prev) => prev.map((val, i) => (i === idx ? value : val)));
  };

  const handleSave = () => {
    setTodoArr((prev) =>
      prev.map((each) =>
        each.id === modalObj.id ? { ...each, obj: [...inputs] } : each
      )
    );
    setModal(false);
  };

  return (
    <div className="modal">
      <AiOutlineClose
        className="absolute top-5 right-5 text-red-300 text-2xl opacity-100 z-10"
        onClick={handleCloseModal}
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-80 w-[100%] h-[100%]">
        {" "}
        {/* how do I put this function here (onClick={ handleCloseModal }) */}
        <div className="content fixed w-[80%] h-[70%] bg-gray-300 rounded-lg px-2 z-20 overflow-auto">
          <div className="text-black text-center font-bold">
            {modalObj?.title}
          </div>
          <div className="border-b-2 py-2 border-priBG mb-6">
            <h1 className="text-black">Add Items</h1>
          </div>

          {inputs.map((inp, idx) => {
            return (
              <form
                action=""
                key={idx}
                className="flex items-center px-4 space-x-2 mb-2"
              >
                <input
                  type="text"
                  onChange={(e) => {
                    handleChange(e.target.value, idx);
                  }}
                  value={inp}
                  //   onFocus
                  placeholder="Add item..."
                  className="bg-priBG px-2 py-1 placeholder:text-gray rounded-sm w-full"
                />
                {idx !== inputs.length - 1 && (
                  <AiFillDelete
                    className="text-[2.5rem] text-red-600"
                    onClick={() => {
                      handleDelInp(idx);
                    }}
                  />
                )}

                {idx === inputs.length - 1 && (
                  <AiFillPlusSquare
                    className="text-[2.6rem] text-priBG"
                    onClick={handleAddInp}
                  />
                )}
              </form>
            );
          })}

          <div className="px-4">
            <button
              className="px-5 py-2 bg-green-700 text-sm rounded-md"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
