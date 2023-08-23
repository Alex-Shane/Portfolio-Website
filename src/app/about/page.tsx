"use client"
import React from 'react';
import Link from 'next/link';


export default function about() {

  return (
        <div className="bg-none justify-center items-center flex-col flex text-center space-y-5">
            <div className="text-white text-7xl font-extrabold pt-7 pb-4">
                <h1> About </h1>
            </div>
            <div className="text-white text-2xl bg-blue-200 rounded-xl w-3/4 mx-auto pb-4 leading-loose px-5">
                <p>
                    Hi, my name is Alex Shane, and I am currently a sophmore at Johns Hopkins University, studying
                    Computer Science, with minors in Applied Math and Financial Economics. I have a strong passion for both tech and business. I would
                    describe myself as a problem solver and analytical thinker, and I am drawn to making products that serve clients, especially as 
                    it relates to the financial services industry. I am constantly trying to learn new topics and improve my code. 
                    My projects and coursework demonstrate my drive and reflect my skillset. I believe I will be a useful, impactful member of any team I join.
                    Please feel free to contact me and set up a time to chat at ashane1230@gmail.com. I look forward to talking soon!
                </p>
            </div>
            <div className="bg-blue-200 font-bold rounded-xl px-8 py-3 relative top-4 text-xl transition ease-in-out hover:bg-pink-300">
                <button>
                    <Link href = "/"> Back </Link>
                </button>
            </div>
        </div>
      );
    }
