import React from 'react';
import Link from 'next/link';

export default function skills() {
  return (
    <div className="bg-none justify-center items-center flex-col flex text-center">
      <h1 className="text-white text-5xl font-extrabold pt-5 pb-4"> Java Files for Tree Buddy </h1>
      <div className="bg-sky-200 text-white text-6xl items-center text-center px-8 py-3 space-y-7 w-3/4 h-4/5">
        <div className="font-bold items-center justify-center rounded-xl px-8 py-3 relative -left-2 text-2xl space-y-3">
            <div className="grid grid-cols-3 gap-4 relative left-12 text-2xl text-center">
                <div className="col-span-1 space-y-2">
                    <a href="/files/java_files/AddPage.java" download="AddPage.java">
                        <button className="bg-black mb-4 font-bold flex rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                            Add Page
                        </button>
                    </a>
                    <a href="/files/java_files/Checker.java" download="Checker.java">
                        <button className="bg-black mb-4 text-center font-bold flex rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                            Checker
                        </button>
                    </a>
                    <a href="/files/java_files/EditPageFromTable.java" download="EditPage.java">
                        <button className="bg-black mb-4 text-2xl text-center font-bold flex rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                            Edit Page
                        </button>
                    </a>
                    <a href="/files/java_files/FunctionsPage2.java" download="FunctionsPage.java">
                        <button className="bg-black mb-4 font-bold flex rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                            Functions Page
                        </button>
                    </a>
                </div>
        
                <div className="col-span-1 space-y-2">
                    <a href="/files/java_files/Logger.java" download="Logger.java">
                        <button className="bg-black mb-4 font-bold flex rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                            Logger
                        </button>
                    </a>
                    <a href="/files/java_files/Searcher.java" download="Searcher.java">
                        <button className="bg-black mb-4 font-bold flex rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                            Searcher
                        </button>
                    </a>
                    <a href="/files/java_files/SearchPage.java" download="SearchPage.java">
                        <button className="bg-black mb-4 font-bold flex rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                            Search Page
                        </button>
                    </a>
                </div>

                <div className="col-span-1 space-y-2">
                    <a href="/files/java_files/SearchTable.java" download="SearchTable.java">
                        <button className="bg-black mb-4 font-bold flex rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                            Search Table
                        </button>
                    </a>
                    <a href="/files/java_files/Tree.java" download="Tree.java">
                        <button className="bg-black mb-4 font-bold flex rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                           Tree
                        </button>
                    </a>
                    <a href="/files/java_files/WelcomePage.java" download="WelcomePage.java">
                        <button className="bg-black mb-4 font-bold flex rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                            Welcome Page
                        </button>
                    </a>
                </div>
            </div>
            <p className ="text-lg text-black">
                * Note: code is currently not functional, please see live demonstration to view functionality
            </p>
            <br></br>
                <Link className="bg-black font-bold items-center rounded-xl px-8 py-3 relative -left-2 text-2xl transition ease-in-out hover:bg-blue-800" href = "/">
                    <button>
                         Back
                    </button>
                </Link>
        </div>
      </div>
    </div>
  );
}
