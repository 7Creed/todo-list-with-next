import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const nav = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Info", link: "/info" },
];

function Header() {
  const [active, setActive] = useState(1);
  const router = useRouter();

useEffect(() =>{
  if (router.pathname === "/view/[id]") {
    setActive(2)
  } else {
    setActive(1)
  }
}, [router.pathname])

  return (
    <div className="bg-headBG flex p-2 md:p-4 text-priBG justify-between items-center">
      <div className="logo font-bold">Todo</div>
      <nav className="">
        <ul className="flex space-x-5">
          {nav.map((navigation) => {
            return (
              <li
                key={navigation.id}
                onClick={() => setActive(navigation.id)}
                className={`${
                  navigation.id === active && "px-4 bg-yellow-500 text-white"
                }`}
              >
                <Link href={navigation?.link}>{navigation.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
