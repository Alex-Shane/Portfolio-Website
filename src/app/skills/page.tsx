import React from 'react';
import Link from 'next/link';

export default function skills() {
  return (
    <div className="bg-none justify-center items-center flex-col flex text-center font-serif">
      <h1 className="text-white text-7xl font-extrabold p-4"> Skills </h1>
      <div className="bg-sky-200 text-white text-6xl items-center text-center px-8 py-5 space-y-7 w-3/4 h-4/5">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-xl text-center space-y-2">
            <h3 className="text-3xl font-bold">Languages</h3>
            <ul className="list-disc list-inside pl-4 text-black relative font-bold">
              <li> Python</li>
              <li> JavaScript/TypeScript</li>
              <li> Java</li>
              <li> C++ </li>
              <li> C </li>
              <li> HTML </li>
              <li> CSS (Tailwind) </li>
              <li> SQL/Postgres SQL</li>
              <li> R </li>
            </ul>
          </div>
          <div className="text-xl text-center space-y-2">
            <h3 className="text-3xl font-bold">Tools/Frameworks</h3>
            <ul className="list-disc list-inside pl-4 text-black font-bold">
              <li> React</li>
              <li> Node.js </li>
              <li> Git </li>
              <li> Flask</li>
              <li> Next.js</li>
              <li> AWS</li>
              <li> Linux </li>
            </ul>
          </div>
          <div className="text-xl text-center space-y-2">
            <h3 className="text-3xl font-bold">Topics Studied</h3>
            <ul className="list-disc list-inside pl-4 text-black font-bold">
              <li> Data Structures and Algorithms</li>
              <li> API Integration, Creation, and Design</li>
              <li> Object Oriented Programming </li>
              <li> Artificial Intelligence </li>
              <li> Web Development</li>
              <li> Databases</li>
              <li> Machine Learning </li>
              <li> Operating Systems </li>
            </ul>
          </div>
        </div>
        <Link className="bg-black font-bold items-center rounded-xl px-8 py-3 relative  text-2xl transition ease-in-out hover:bg-blue-800" href="/">
          <button>
              Back
          </button>
        </Link>
      </div>
    </div>
  );
}
