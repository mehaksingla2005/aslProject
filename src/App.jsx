import { useState } from "react";


function App() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className='bg-orange-100 min-h-screen'>
        <div className='bg-white rounded-3xl flex justify-between p-4'>
          <div className='font-bold text-black text-2xl'>OpenCV X Rtist</div>
          <div className='gap-3 flex flex-row'>
            <p className='text-normal text-black flex items-center '>Product</p>
            <button onClick={toggleDropdown} className='rounded-3xl border border-1 border-black px-4 py-2 text-black text-normal'>
            Camera
          </button>
          {showDropdown && (
            <div className='absolute top-0 right-full bg-white rounded-lg shadow-md mt-2'>
              <p className='px-4 py-2'>Dropdown Item 1</p>
              <p className='px-4 py-2'>Dropdown Item 2</p>
              <p className='px-4 py-2'>Dropdown Item 3</p>
            </div>
          )}
           <button className='rounded-3xl border border-1 border-black px-4 py-2 text-black text-normal'>Camera</button>
           <button className="rounded-3xl border border-1 border-black bg-black text-white text-normal px-4 py-2">Signs</button>
          </div>

        </div>
       </div>
       
      
    </>
  )
}

export default App
