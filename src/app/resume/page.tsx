"use client"
import React from 'react';
import Link from 'next/link';


export default function resume() {

  return (
        <div className="text-white bg-none justify-center items-center flex-col flex text-center font-serif">
            <div className="text-7xl font-extrabold pt-7 pb-4 relative -left-2">
                <h1> Resume </h1>
            </div>
            <div className="flex-row pb-5 space-x-3 text-xl pt-4">
                <a href="/files/Alex-Shane-Resume.pdf" download>
                    <button className = "bg-black font-bold rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                        Download
                   </button>    
                </a>
                <a href="/files/Alex-Shane-Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <button className = "bg-black font-bold rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                        View in Browser
                   </button>
                </a>
            </div>
            <Link className="bg-black font-bold rounded-xl px-8 py-2 text-xl relative -left-6 transition ease-in-out hover:bg-blue-800" href="/">
                <button>
                    Back
                </button>
            </Link>
        </div>
      );
    }
