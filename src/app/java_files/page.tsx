import React from 'react';
import Link from 'next/link';

export default function skills() {
  return (
    <div className="bg-none justify-center items-center flex-col flex text-center">
      <h1 className="text-white text-5xl font-extrabold pt-5 pb-4"> Java Files for Tree Buddy </h1>
      <div className="bg-sky-200 text-white text-6xl items-center text-center px-8 py-3 space-y-7 w-3/4 h-4/5">
        <div className="font-bold items-center justify-center rounded-xl px-8 py-3 relative -left-2 text-2xl space-y-3">
            <div className="grid grid-cols-3 gap-4 relative left-12">
                <div className="col-span-1 space-y-2">
                    <button className="bg-blue-200 font-bold flex rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                        <a href="/files/java_files/AddPage.java" download="AddPage.java" className="text-2xl text-center">
                            Add Page
                        </a>
                    </button>
                    <button className="bg-blue-200 font-bold flex rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                        <a href="/files/java_files/Checker.java" download="Checker.java" className="text-2xl text-center">
                            Checker
                        </a>
                    </button>
                    <button className="bg-blue-200 font-bold flex rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                        <a href="/files/java_files/EditPageFromTable.java" download="EditPage.java" className="text-2xl text-center">
                            Edit Page
                        </a>
                    </button>
                    <button className="bg-blue-200 font-bold flex rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                        <a href="/files/java_files/FunctionsPage2.java" download="FunctionsPage.java" className="text-2xl text-center">
                            Functions Page
                        </a>
                    </button>
                </div>
                <div className="col-span-1 space-y-2">
                    <button className="bg-blue-200 font-bold flex rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                        <a href="/files/java_files/Logger.java" download="Logger.java" className="text-2xl text-center">
                            Logger
                        </a>
                    </button>
                    <button className="bg-blue-200 font-bold flex rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                        <a href="/files/java_files/Searcher.java" download="Checker.java" className="text-2xl text-center">
                            Searcher
                        </a>
                    </button>
                    <button className="bg-blue-200 font-bold flex rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                        <a href="/files/java_files/SearchPage.java" download="SearchPage.java" className="text-2xl text-center">
                            Search Page 
                        </a>
                    </button>
                </div>
                <div className="col-span-1 space-y-2">
                    <button className="bg-blue-200 font-bold flex rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                        <a href="/files/java_files/SearchTable.java" download="SearchTable.java" className="text-2xl text-center">
                            Search Table
                        </a>
                    </button>
                    <button className="bg-blue-200 font-bold flex rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                        <a href="/files/java_files/Tree.java" download="Tree.java" className="text-2xl text-center">
                            Tree
                        </a>
                    </button>
                    <button className="bg-blue-200 font-bold flex rounded-xl px-8 py-2 transition ease-in-out hover:bg-blue-800">
                        <a href="/files/java_files/WelcomePage.java" download="WelcomePage.java" className="text-2xl text-center">
                            Welcome Page
                        </a>
                    </button>
                </div>
            </div>
            <p className ="text-lg">
                * Note: code is currently not functional, please see live demonstration to view functionality
            </p>
            <div className="bg-blue-200 font-bold items-center rounded-xl px-8 py-3 relative -left-2 text-2xl transition ease-in-out hover:bg-blue-800">
                <button>
                    <Link href = "/"> Back </Link>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}
