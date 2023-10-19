import React, { useState } from "react";

function TodoInput({ handleAdd, val, setVal, error, editing }) {
  
// console.log(val)
  return (
    <div className="fixe ">
      <form className="flex justify-between items-center space-x-6 shadow-md">
        <input
          type="text"
          value={val}
          className={`${error && 'border border-red-500'} w-full bg-black text-white rounded-md text-[12px] placeholder:text-gray-100 placeholder:text-[10px] px-2 py-1 focus:outline-none`}
          placeholder="Enter a Todo..."
          onChange={(e) => setVal(e.target.value)}
        />
        <button className="bg-yellow-500 px-3 rounded-md text-black cursor-pointer" onClick={ handleAdd }>
          {editing ? 'Save' : 'Add'}
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
