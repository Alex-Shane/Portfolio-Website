"use client"
import React from 'react';
import Link from 'next/link';


export default function transcipt() {

  return (
        <div className="bg-none justify-center items-center flex-col flex text-center">
            <div className="text-white text-7xl font-extrabold pt-7 pb-4 relative -left-2">
                <h1> Transcript </h1>
            </div>
            <div className="flex-row pb-5 space-x-3 text-xl pt-4">
                <a href="/files/Transcript.pdf" download>
                    <button className = "bg-black font-bold rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                        Download
                    </button>
                </a>
                <a href="/files/Transcript.pdf" target="_blank" rel="noopener noreferrer">
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
