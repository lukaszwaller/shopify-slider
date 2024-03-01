"use client"
import React from "react"
import Link from "next/link"

const Navbar = () => {
  const menu = [
    { name: "Slider 1", url: "/" },
    { name: "Slider 2", url: "/" },
    { name: "Slider 3", url: "/" },
    { name: "Slider 4", url: "/" },
  ];

  return (
    <nav className="bg-gray-800 h-14">
      <div className="flex h-full items-center justify-center">
        <ul className="flex justify-between w-96">
          {menu.map(({ name, url }, index) => (
            <li key={index} className="text-white">
              <Link href={url}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
