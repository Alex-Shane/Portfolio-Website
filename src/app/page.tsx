"use client"
import React from 'react';
import Link from 'next/link';


export default function Home() {

  const lineupData = [
    { order: 1, linkText: 'About', linkTo: "/about", position: 'RF'},
    { order: 2, linkText: 'Project #1: Knight Investor', linkTo: '/knight-investor', position: '1B'},
    { order: 3, linkText: 'Project #2: Tree Buddy', linkTo: '/tree-buddy', position: 'CF'},
    { order: 4, linkText: 'Skills', linkTo: "/skills", position: '3B'},
    { order: 5, linkText: 'Resume', linkTo: '/resume', position: 'LF'},
    { order: 6, linkText: 'Referals', linkTo: '/referals', position: '2B'},
    { order: 7, linkText: 'Transcript', linkTo: '/transcript', position: 'SS'},
    { order: 8, linkText: 'Github', linkTo: 'https://github.com/Alex-Shane', position: "C"},
    { order: 9, linkText: 'LinkedIn', linkTo: 'https://www.linkedin.com/in/alex-shane-b34337249/', position: "P"}
  ];

  return (
        <div className="flex justify-center flex-col items-center">
    
            <div className='text-white text-6xl font-extrabold pt-7 pb-4 items-center text-center py-3 space-y-4'>
            <h1> Alex Shane</h1>
            <h3 className = "text-4xl"> Software Engineer </h3>
            </div>
    
            <div className="lineup-slot">
                <div className="slot-number">{lineupData[0].order}</div>
                <Link className="slot-link" href = {lineupData[0].linkTo}> 
                    <button>
                        {lineupData[0].linkText}
                    </button> 
                </Link>
                <div className="slot-position">{lineupData[0].position}</div>
            </div>
    
            <div className="lineup-slot">
                <div className="slot-number">{lineupData[1].order}</div>
                <Link className="slot-link" href = {lineupData[1].linkTo}> 
                    <button>
                        {lineupData[1].linkText}
                    </button> 
                </Link>
                <div className="slot-position">{lineupData[1].position}</div>
            </div>
    
            <div className="lineup-slot">
                <div className="slot-number">{lineupData[2].order}</div>
                <Link className="slot-link" href = {lineupData[2].linkTo}> 
                    <button>
                        {lineupData[2].linkText}
                    </button> 
                </Link>
                <div className="slot-position">{lineupData[2].position}</div>
            </div>
    
            <div className="lineup-slot">
                <div className="slot-number">{lineupData[3].order}</div>
                <Link className="slot-link" href = {lineupData[3].linkTo}> 
                    <button>
                        {lineupData[3].linkText}
                    </button> 
                </Link>
                <div className="slot-position">{lineupData[3].position}</div>
            </div>
    
            <div className="lineup-slot">
                <div className="slot-number">{lineupData[4].order}</div>
                <Link className="slot-link" href = {lineupData[4].linkTo}> 
                    <button>
                        {lineupData[4].linkText}
                    </button> 
                </Link>
                <div className="slot-position">{lineupData[4].position}</div>
            </div>
    
            <div className="lineup-slot">
                <div className="slot-number">{lineupData[5].order}</div>
                <Link className="slot-link" href = {lineupData[5].linkTo}> 
                    <button>
                        {lineupData[5].linkText}
                    </button> 
                </Link>
                <div className="slot-position">{lineupData[5].position}</div>
            </div>
    
            <div className="lineup-slot">
                <div className="slot-number">{lineupData[6].order}</div>
                <Link className="slot-link" href = {lineupData[6].linkTo}> 
                    <button>
                        {lineupData[6].linkText}
                    </button> 
                </Link>
                <div className="slot-position">{lineupData[6].position}</div>
            </div>
    
            <div className="lineup-slot">
                <div className="slot-number">{lineupData[7].order}</div>
                <Link className="slot-link" href = {lineupData[7].linkTo} target = "_blank" rel="noreferrer">
                    <button>
                        {lineupData[7].linkText}
                    </button>
                </Link>
                <div className="slot-position">{lineupData[7].position}</div>
            </div>
    
            <div className="lineup-slot">
                <div className="slot-number">{lineupData[8].order}</div>
                <Link className="slot-link" href = {lineupData[8].linkTo} target = "_blank" rel="noreferrer">
                    <button>
                        {lineupData[8].linkText}
                    </button>
                </Link>
                <div className="slot-position">{lineupData[8].position}</div>
            </div>
    
        </div>
      );
    }
