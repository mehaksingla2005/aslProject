import { useState } from "react";

function App() {
  return (
    <>
      <div className="bg-orange-50 min-h-screen">
        <div className="bg-white rounded-3xl flex justify-between p-4">
          <div className="font-inika font-bold text-black text-2xl">
            OpenCV X Rtist
          </div>
          <div className="gap-3 flex flex-row">
            <p className="text-normal text-black flex items-center ">Product</p>

            <button className="rounded-3xl border border-1 border-black px-4 py-2 text-black text-normal hover:bg-black hover:text-white">
              Camera
            </button>
            <button className="rounded-3xl border border-1 border-black hover:bg-black hover:text-white text-black text-normal px-4 py-2">
              Signs
            </button>
          </div>
        </div>
        <div className="m-2">
          <img src="src/div1.png" alt="downloaded image" className="mx-auto w-full h-full"/>
        </div>
        <div className="flex gap-24 items-center justify-center">
          <div className="border border-1 border-gray-800 rounded-xl p-2 "></div>
          <div>
            <p className="font-inter text-normal font-xl text-gray-800">
              Designed for
            </p>
            <p className="font-inter text-normal font-normal text-gray-400">
              1. People with special abilities
            </p>
            <p className="font-inter text-normal font-normal text-gray-400">
              2. For you and me
            </p>
          </div>
        </div>
        <div className="bg-gray-800 mx-1 p-2 px-40 mt-4 ">
          <div className="border border-gray-100 border-1 rounded-xl ">
            <p className="font-inter text-normal text-xl text-white p-16 mx-8">
              “Sign language is the equal of speech, lending itself equally to
              the rigorous and the poetic, to philosophical analysis or to
              making love." - Oliver Sacks
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
