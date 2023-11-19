"use client"
import React from 'react';
import Link from 'next/link';

export default function about() {

  return (
        <div className="bg-none justify-center items-center flex-col flex text-center font-serif min-h-screen">
            <h1 className = "text-white text-7xl font-extrabold p-4"> Tree Buddy </h1>
            <div className='bg-sky-200 text-white text-6xl items-center text-center px-8 py-3 w-3/4'>
            <h5 className="text-5xl font-bold pb-4"> Project Description: </h5>
                <p className="text-xl font-normal text-black pb-4">
                    <strong>Tree Buddy</strong> is a desktop application that empowers residents, arborists, and urban forestry experts to visualize 
                    and engage with a vast database of public sidewalk trees in their neighborhood. With information on over 2700 trees 
                    , users can search, add, or edit tree details, aiding in species identification, health assessment, and 
                    strategic planning. The app fosters community involvement by ensuring accurate and up-to-date tree data through user 
                    authentication and tracking of tree information edits, enabling efficient management of tree health and urban greenery.
                </p>
            <h3 className="text-5xl font-bold pb-4"> Skills: </h3>
            <div className="text-xl text-center items-center pb-4">
                <h5 className= "text-xl font-normal text-black pb-4">
                    <strong>Languages and Tools</strong>: Java, SQL, AWS
                </h5>
                <h5 className = "text-5xl font-bold"> 
                    Topics Covered:
                </h5>
                <p className="text-black font-bold">
                    Database Managment: <span className="text-black font-normal">insertion, deletion, logging actions</span> 
                    <br></br>
                    Java Graphics: <span className="text-black font-normal">JFrame framework, containers, scanners</span> 
                    <br></br>
                    Cloud Hosting: <span className="text-black font-normal">hosted database on AWS</span>
                    <br></br>
                    Data Visualization: <span className="text-black font-normal">pie chart of different status', data table of all trees with vertical scroll bar</span>
                    <br></br>
                    User Authenctication: <span className="text-black font-normal">users must sign in with email, only authorized emails allowed to edit, add, or delete trees from database</span>
                </p>
                <ul className="list-disc list-inside pl-4 text-black font-bold">
                   
                </ul>
            </div>
            <div className="items-center justify-center flex-row flex p-4">
                    <Link className="text-2xl text-center"href="https://www.youtube.com/watch?v=rnfThrgctCs&t=8s&ab_channel=AlexShane" target="_blank" rel="noreferrer"> 
                        <button className = "mr-4 bg-black font-bold flex rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                            Live Demo
                        </button>
                    </Link>
                    <Link className="text-2xl" href="../java_files">
                        <button className = "mr-4 bg-black items-center flex font-bold rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                            View Source Code 
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
