"use client"
import React from 'react';
import Link from 'next/link';

export default function about() {

  return (
        <div className="bg-none justify-center items-center flex-col flex text-center font-serif min-h-screen">
            <h1 className = "text-white text-7xl font-extrabold p-4"> Knight Investor </h1>
            <div className='bg-sky-200 text-white text-6xl items-center text-center px-8 py-3 w-3/4'>
            <h5 className="text-5xl font-bold pb-2"> Project Description: </h5>
                <p className="text-xl text-black font-normal">
                Welcome to <strong>Knight Investor</strong>: a simple, easy-to-use stock market website that was designed for newcomers to investing.
                On the site, you can create daily, weekly, or monthly stock reports, which give you a rundown of the best, and worst 
                stocks from the period of your choice. Our reports span hundreds of industries and include the biggest stock exchanges 
                in the U.S. and Hong Kong. Additionally, you can use our search feature to learn more about an individual stock you may be curious about.
                All our information is pulled directly from Yahoo Finance by leveraging the YFinance API. 
                </p>
            <div className="text-xl text-center items-center p-2">
                <h5 className= "text-5xl font-bold pb-2">
                    Skills:
                </h5>
                <p className="text-black pb-2"> 
                    <span className="font-bold">Languages</span>: Python, JavaScript, Tailwind CSS, HTML 
                    <br></br>
                    <span className="font-bold">APIs/Packages</span>: YFinance, Pandas, Jinja2
                    <br></br>
                    <span className="font-bold">Framework</span>: Flask
                    <br></br>
                    <span className="font-bold">Version Control</span>: Git 
                </p>
                <h5 className = "text-5xl font-semibold pb-2"> 
                    Topics Covered:
                </h5>
                <p className="text-black font-bold pb-2">
                    API Usage: <span className="text-black font-normal">implemented YFinance API to complete long, tedious scrapes</span> 
                    <br></br>
                    Web Deployment/Continuous Deployment: <span className="text-black font-normal"> deployed site live on Render with live updates after github commit</span> 
                    <br></br>
                    UI/UX: <span className="text-black font-normal"> crafted css and HTML code compatible with Jinja2 to create simple, elegant user experience</span> 
                    <br></br>
                    Data Structures: <span className="text-black font-normal"> utilized dictionaries quick insertion and deletion runtimes, enabling optimized report creation</span>
                    <br></br>
                    Data Manipulation: <span className="text-black font-normal"> employed Pandas DataFrame to quickly and efficiently load data from csv files and sort/filter them based on desired industry</span>
                    <br></br>
                    Object Oriented Programming: <span className="text-black font-normal"> created classes to contain functionality of stocks, pdf writers, csv helpers, and individual reports</span>
                </p>
                <ul className="list-disc list-inside pl-4 ">
                   
                </ul>
            </div>
            <div className="items-center justify-center flex space-x-8">
                    <Link className="text-2xl text-center"href="https://knight-investor.onrender.com/" target="_blank" rel="noreferrer"> 
                        <button className = "bg-black font-bold flex rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                            View Site
                        </button>
                    </Link>
                    <Link className="text-2xl" href="https://github.com/Alex-Shane/Knight-Investor" target="_blank" rel="noreferrer">
                        <button className = "bg-black items-center flex font-bold rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                            Source Code 
                        </button>
                    </Link>
                    <Link className="bg-black font-bold items-center rounded-xl px-8 py-2 text-2xl transition ease-in-out hover:bg-blue-800" href="/">
                        <button>
                            Back
                        </button>
                    </Link>
            </div>
            </div>
        </div>
      );
    }
