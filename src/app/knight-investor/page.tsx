"use client"
import React from 'react';
import Link from 'next/link';

export default function about() {

  return (
        <div className="bg-none justify-center items-center flex-col flex text-center font-serif">
            <h1 className = "text-white text-7xl font-extrabold pb-2"> Knight Investor </h1>
            <div className='bg-sky-200 text-white text-6xl items-center text-center px-8 py-3 space-y-5 w-3/4'>
            <h5 className="italic text-5xl font-bold"> Description: </h5>
                <p className="text-xl text-black font-normal relative -top-3">
                Welcome to Knight Investor: a simple, easy-to-use stock market website that was designed for newcomers to investing.
                On the site, you can create daily, weekly, or monthly stock reports, which give you a rundown of the best, and worst 
                stocks from the period of your choice. Our reports span hundreds of industries and include the biggest stock exchanges 
                in the U.S. and Hong Kong. Additionally, you can use our search feature to learn more about an individual stock you may be curious about.
                All our information is pulled directly from Yahoo Finance by leveraging the YFinance API. 
                </p>
            <h3 className="text-5xl relative -top-3 font-bold"> Skills: </h3>
            <div className="text-xl text-center items-center">
                <h5 className= "italic text-3xl relative -top-8 font-semibold">
                    Languages and Tools:
                </h5>
                <ul className="list-disc list-inside pl-4 text-blue-900 relative -top-8 font-bold">
                    <li> Python </li>
                    <li> Flask </li>
                    <li> YFinance API </li> 
                    <li> HTML </li>
                    <li> Jinja2 </li> 
                    <li> Pandas </li>
                    <li> CSS </li>
                    <li> JavaScript </li> 
                    <li> Git </li>
                </ul>
                <h5 className = "italic text-3xl relative -top-8 font-semibold"> 
                    Topics Covered:
                </h5>
                <ul className="list-disc list-inside pl-4 text-blue-900 font-bold relative -top-8">
                    <li> API Usage: <span className="text-black font-normal">implemented YFinance API to complete long, tedious scrapes</span> </li>
                    <li> Web Deployment/Continuous Deployment: <span className="text-black font-normal"> deployed site live on Render with live updates after github commit</span> </li>
                    <li> UI/UX: <span className="text-black font-normal"> crafted css and HTML code compatible with Jinja2 to create simple, elegant user experience</span> </li>
                    <li> Data Structures: <span className="text-black font-normal"> utilized dictionaries quick insertion and deletion runtimes, enabling optimized report creation</span>
                    </li>
                    <li> Data Manipulation: <span className="text-black font-normal"> employed Pandas DataFrame to quickly and efficiently load data from csv files and sort/filter them based on desired industry</span>
                    </li>
                    <li> Object Oriented Programming: <span className="text-black font-normal"> created classes to contain functionality of stocks, pdf writers, csv helpers, and individual reports</span></li>
                </ul>
            </div>
            <div className="items-center justify-center flex space-x-8 relative -top-8 -left-3">
                    <Link className="text-2xl text-center"href="https://knight-investor.onrender.com/" target="_blank" rel="noreferrer"> 
                        <button className = "bg-black font-bold flex rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                            View Site
                        </button>
                    </Link>
                    <Link className="text-2xl" href="https://github.com/Alex-Shane/Knight-Investor" target="_blank" rel="noreferrer">
                        <button className = "bg-black items-center flex font-bold rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                            View Source Code 
                        </button>
                    </Link>
                    <Link className="bg-black font-bold items-center rounded-xl px-8 py-2 relative -left-2 text-2xl transition ease-in-out hover:bg-blue-800" href="/">
                        <button>
                            Back
                        </button>
                    </Link>
            </div>
            </div>
        </div>
      );
    }
