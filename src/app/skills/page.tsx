import React from 'react';
import Link from 'next/link';

export default function skills() {
  return (
    <div className="bg-none justify-center items-center flex-col flex text-center">
      <h1 className="text-white text-7xl font-extrabold pb-2"> Skills </h1>
      <div className="bg-sky-200 text-white text-6xl items-center text-center px-8 py-5 space-y-7 w-3/4 h-4/5">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-xl text-center space-y-2">
            <h3 className="text-3xl font-bold">Languages (by proficiency)</h3>
            <ul className="list-disc list-inside pl-4 text-blue-900 relative font-bold">
              <li> Java</li>
              <li> Python</li>
              <li> JavaScript</li>
              <li> C++ </li>
              <li> HTML </li>
              <li> CSS (Tailwind) </li>
              <li> TypeScript </li>
              <li> C </li>
              <li> R </li>
              <li> SQL </li>
            </ul>
          </div>
          <div className="text-xl text-center space-y-2">
            <h3 className="text-3xl font-bold">Tools/Frameworks</h3>
            <ul className="list-disc list-inside pl-4 text-blue-900 font-bold">
              <li> Flask</li>
              <li> Git </li>
              <li> Terminal </li>
              <li> React</li>
              <li> Next.js</li>
              <li> AWS</li>
              <li> Render </li>
            </ul>
          </div>
          <div className="text-xl text-center space-y-2">
            <h3 className="text-3xl font-bold">Topics Studied</h3>
            <ul className="list-disc list-inside pl-4 text-blue-900 font-bold">
              <li> Data Structures</li>
              <li> API Integration</li>
              <li> Algorithms </li>
              <li> Dynamic Programming </li>
              <li> Object Oriented Programming </li>
              <li> Artificial Intelligence </li>
              <li> Web Development</li>
              <li> Computer Logic</li>
              <li> Databases</li>
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
