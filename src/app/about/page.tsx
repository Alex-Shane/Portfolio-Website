"use client"
import React from 'react';
import Link from 'next/link';


export default function about() {

  return (
        <div className="bg-none justify-center items-center flex-col flex text-center font-serif">
            <div className="text-white text-7xl font-extrabold py-5 relative -left-2">
                <h1> About </h1>
            </div>
            <div className="text-black text-2xl bg-sky-200 rounded-xl w-3/4 mx-auto pb-4 leading-loose px-5 py-5">
                <p>
                    Hi, my name is Alex Shane, and I am currently a Sophmore student-athlete at Johns Hopkins University, studying
                    Computer Science, with minors in Applied Math and Financial Economics while competing for national championships in baseball.
                    I am high performing, competitive person both academically and athletically. I have a strong passion for both tech and business, specifically
                    their intersection in quantitative analysis of problems and data facing clients in the financial services industry.
                    I am drawn to designing and executing on the production of impactful software and analysis for clients, and I am constantly researching new topics to 
                    improve my coding and quantitative capabilities. My projects and success in the classroom demonstrate my drive and reflect my skillset. I believe I will be a useful, 
                    impactful member of any team I join. Please feel free to contact me and set up a time to chat at {' '}
                    <a href="mailto:ashane1230@gmail.com" className="text-blue-800 underline font-bold" target = "_blank">
                         ashane1230@gmail.com
                    </a> I look forward to talking soon!
                </p>
                <Link href = "/"> 
                    <button className="bg-black text-white font-bold rounded-xl px-8 py-3 relative top-3 text-xl transition ease-in-out hover:bg-blue-800">
                        Back 
                    </button>
                </Link>
            </div>
            
        </div>
      );
    }
