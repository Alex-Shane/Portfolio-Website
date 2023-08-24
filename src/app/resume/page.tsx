"use client"
import React from 'react';
import Link from 'next/link';


export default function resume() {

  return (
        <div className="bg-none justify-center items-center flex-col flex text-center">
            <div className="text-white text-7xl font-extrabold pt-7 pb-4 relative -left-2">
                <h1> Resume </h1>
            </div>
            <div className="flex-row pb-5 space-x-3 text-xl pt-4">
                <button className = "bg-blue-200 font-bold rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                    <a
                        href="/files/Alex-Shane-Resume.pdf"
                        download>
                            Download
                    </a>
                </button>
                <button className = "bg-blue-200 font-bold rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                    <a
                        href="/files/Alex-Shane-Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer">
                            View in Browser
                    </a>
                </button>
            </div>
            <div className="bg-blue-200 font-bold rounded-xl px-8 py-2 text-xl relative -left-6 transition ease-in-out hover:bg-blue-800">
                <button>
                    <Link href = "/"> Back </Link>
                </button>
            </div>
        </div>
      );
    }
