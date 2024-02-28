import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";
import { X } from "lucide-react";


function Follow() {
  return (
    <>
      <div className="bg-orange-100 ">
        <div><img src="src/Image.png" alt="image" className="mx-auto p-4 pt-10"/></div>
        <div className="border-t border-black w-full p-20 mt-10 text-center font-extrabold text-2xl">
          <h2>Follow R-tist</h2>
          <div className="flex justify-center items-center gap-6 p-4 m-4">
            <a href=""><Linkedin color="black" size={48} /></a>
            <a href=""><Instagram color="black" size={48} /></a>
            <a href=""><X color="black" size={48} /></a>
            {/* <FontAwesomeIcon icon="fa-brands fa-x-twitter" /> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Follow;
