import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useGlobalContext } from "../../../context/context";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import Modal from "../../../components/Main/Modal";

function Info() {
  const [viewInfo, setViewInfo] = useState(null);
  const [modal, setModal] = useState(false)
  const [modalObj, setModalObj] = useState({})

  const router = useRouter();
  const { todoArr, setTodoArr } = useGlobalContext();
  const { id } = router.query;
  // console.log(router, id)

  /////////////////////////////////////////////
  // not done with this code yet....
  const strike =(idx) => {
    viewInfo?.obj.map((item, id) => {
      idx === id ? {  } : console.log('juju')
    })
  }

  const handleCheckedId = (id) => {
    setTodoArr((prev) =>
      prev?.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const addMore =(id, title, obj) => {
    setModal(true)
    setModalObj({ id: id, title: title, obj: obj });
    console.log('emptry')
  }

  useEffect(() => {
    setViewInfo(todoArr.find((todo) => todo.id === id));
  }, [id, todoArr]);
  console.log(viewInfo);

  return (
    <div className="p-7 h-96 overflow-auto">
      <div>
        <Link href={"/"}>
          <button class="flex items-center bg-priBG hover:bg-[#092c31] text-white text-sm font-semibold py-1 px-2 rounded border">
            <BiArrowBack className="mr-1" />
            Back
          </button>
        </Link>
      </div>
      <div className="my-5 flex justify-between items-center">
        <div>
          <h1 className="text-priText text-3xl">Title: {viewInfo?.title}</h1>
          <h2 className="text-priText font-semibold text-md">
            Status: {viewInfo?.completed ? "Completed" : "Not Completed"}
          </h2>
        </div>
        <input
          type="checkbox"
          checked={viewInfo?.completed}
          onChange={() => handleCheckedId(id)}
        />
      </div>
      {/* checkout this code for me */}
      <ul className="space-y-2 divide divide-y text-lg">
        {viewInfo?.obj
          ?.filter((e) => e !== "")
          .map((obj, idx) => (
            <li key={idx} className={`${obj.status}`} onClick={() => strike(idx)}>
              <span className="mr-2">{idx + 1}.</span>
              <span className={`${viewInfo?.completed && "line-through"}`}>{obj}</span>
            </li>
          ))}
        <div className="py-10 flex justify-center">
          <button
            disabled={viewInfo?.completed}
            class="flex items-center bg-priBG hover:bg-[#092c31] text-white text-sm font-semibold py-1 px-2 rounded border"
            onClick={() => addMore(viewInfo?.id, viewInfo?.title, viewInfo?.obj)}
          >
            add More!
          </button>
        </div>
      </ul>
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

export default Info;
