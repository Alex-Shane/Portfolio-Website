"use client"
import React from 'react';
import Link from 'next/link';

export default function about() {

  return (
        <div className="bg-none justify-center items-center flex-col flex text-center space-y-2">
            <h1 className = "text-white text-7xl font-extrabold pt-4"> Tree Buddy </h1>
            <div className='bg-sky-200 text-white text-6xl pb-4 items-center text-center px-8 py-3 space-y-7 w-3/4'>
            <h5 className="italic text-5xl font-bold"> Description: </h5>
                <p className="text-xl font-normal relative -top-3 text-black">
                    Tree Buddy is a desktop application that empowers residents, arborists, and urban forestry experts to visualize 
                    and engage with a vast database of public sidewalk trees in their neighborhood. With information on over 2700 trees 
                    , users can search, add, or edit tree details, aiding in species identification, health assessment, and 
                    strategic planning. The app fosters community involvement by ensuring accurate and up-to-date tree data through user 
                    authentication and tracking of tree information edits, enabling efficient management of tree health and urban greenery.
                </p>
            <h3 className="text-5xl relative -top-3 font-bold"> Skills: </h3>
            <div className="text-xl text-center items-center">
                <h5 className= "italic text-3xl relative -top-6 font-semibold">
                    Languages and Tools:
                </h5>
                <ul className="list-disc list-inside pl-4 text-blue-900 relative -top-6 font-bold">
                    <li> Java </li>
                    <li> SQL </li>
                    <li> AWS </li>
                </ul>
                <h5 className = "italic text-3xl relative -top-6 font-semibold"> 
                    Topics Covered:
                </h5>
                <ul className="list-disc list-inside pl-4 text-blue-900 relative -top-6 font-bold">
                    <li> Database Managment: <span className="text-black font-normal">insertion, deletion, logging actions</span> </li>
                    <li> Java Graphics: <span className="text-black font-normal">JFrame framework, containers, scanners</span> </li>
                    <li> Cloud Hosting: <span className="text-black font-normal">hosted database on AWS</span> </li>
                    <li> Data Visualization: <span className="text-black font-normal">pie chart of different status', <br></br>
                         data table of all trees with vertical scroll bar</span>
                    </li>
                    <li> User Authenctication: <span className="text-black font-normal">users must sign in with email, only authorized emails <br></br>
                        allowed to edit, add, or delete trees from database</span>
                    </li>
                </ul>
            </div>
            <div className="items-center justify-center flex-col flex space-y-2 relative -top-3">
                    <Link className="text-2xl text-center"href="https://www.youtube.com/watch?v=rnfThrgctCs&t=8s&ab_channel=AlexShane" target="_blank" rel="noreferrer"> 
                        <button className = "bg-black font-bold flex rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                            Live Demonstration: 3 Minute Run Through
                        </button>
                    </Link>
                    <Link className="text-2xl" href="../java_files">
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
