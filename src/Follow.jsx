import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";
import { X } from "lucide-react";


function Follow() {
  return (
    <>
      <div className="bg-orange-100 ">
        <img src="src/Image.png" alt="image" />
        <div className="border-t border-black w-full">
          <h2>FOLLOW RTIST</h2>
          <div>
            <Linkedin color="black" size={48} />
            <Instagram color="black" size={48} />
            <X color="black" size={48} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Follow;
