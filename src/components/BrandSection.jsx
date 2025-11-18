import Rolex from "../assets/watchPic/7.webp";
import Omega from "../assets/watchPic/12.webp";
import Seiko from "../assets/watchPic/16.webp";
import Breitling from "../assets/watchPic/3.webp";

export default function BrandSection() {
  return (
    <section>
      <div className="w-full">
        <div className="flex gap-0 h-180 items-center justify-center w-full overflow-hidden">
          <div className="flex w-[50%]">
            <img
              src={Rolex}
              alt="Watch pic"
              className="h-full  block object-cover object-center opacity-85 hover:opacity-60 transition-all duration-600 cursor-pointer "
            />
          </div>
          <div className="flex w-[50%] px-5 flex-col gap-20 -mt-10">
            <h2 className="block w-[30%] mx-auto cursor-context-menu text-center font-cormorant text-gray-200 hover:text-amber-500 hover:scale-115 hover:drop-shadow-lg transition-all transform-gpu duration-500 text-2xl md:text-[2rem] lg:text-[6.5rem] font-light uppercase">
              Rolex
            </h2>
            <p className=" text-sm lg:text-[1.8rem] px-10 m-0 font-lato text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores itaque temporibus, delectus perferendis rem qui! Quos
              itaque possimus tempore deserunt, exercitationem in ea quas quasi
              voluptate explicabo dolores architecto enim? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Aperiam pariatur enim eius id
            </p>
          </div>
        </div>
        <div className="flex gap-0 h-180 items-center justify-center w-full overflow-hidden">
          <div className="flex w-[50%] px-5 flex-col gap-16">
            <h2 className="block w-[30%] mx-auto cursor-context-menu text-center font-cormorant text-gray-200 hover:text-amber-500 hover:scale-115 hover:drop-shadow-lg transition-all transform-gpu duration-500 text-2xl md:text-[2rem] lg:text-[6.5rem] font-light uppercase">
              Omega
            </h2>
            <p className=" text-sm lg:text-[1.8rem] px-10 m-0 font-lato text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores itaque temporibus, delectus perferendis rem qui! Quos
              itaque possimus tempore deserunt, exercitationem in ea quas quasi
              voluptate explicabo dolores architecto enim? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Aperiam pariatur enim eius id
            </p>
          </div>
          <div className="flex w-[50%] overflow-hidden">
            <img
              src={Omega}
              alt="Watch pic"
              className="h-full  block object-cover object-center opacity-85 hover:opacity-60 transition-all duration-600 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex gap-0 h-180 items-center justify-center w-full overflow-hidden">
          <div className="flex w-[50%] h-full">
            <img
              src={Seiko}
              alt="Watch pic"
              className="h-full block object-cover object-center opacity-85 hover:opacity-60 transition-all duration-600 cursor-pointer"
            />
          </div>
          <div className="flex w-[50%] px-5 flex-col gap-16">
            <h2 className="block w-[30%] mx-auto cursor-context-menu text-center font-cormorant text-gray-200 hover:text-amber-500 hover:scale-115 hover:drop-shadow-lg transition-all transform-gpu duration-500 text-2xl md:text-[2rem] lg:text-[6.5rem] font-light uppercase">
              Seiko
            </h2>
            <p className=" text-sm lg:text-[1.8rem] px-10 m-0 font-lato text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores itaque temporibus, delectus perferendis rem qui! Quos
              itaque possimus tempore deserunt, exercitationem in ea quas quasi
              voluptate explicabo dolores architecto enim? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Aperiam pariatur enim eius id
            </p>
          </div>
        </div>
        <div className="flex gap-0 h-180 items-center justify-center w-full overflow-hidden">
          <div className="flex w-[50%] px-5 flex-col gap-20">
            <h2 className="block w-[50%] mx-auto cursor-context-menu text-center font-cormorant text-gray-200 hover:text-amber-500 hover:scale-115 hover:drop-shadow-lg transition-all transform-gpu duration-500 text-2xl md:text-[2rem] lg:text-[6.5rem] font-light uppercase">
              Breitling
            </h2>
            <p className=" text-sm lg:text-[1.8rem] px-10 m-0 font-lato text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores itaque temporibus, delectus perferendis rem qui! Quos
              itaque possimus tempore deserunt, exercitationem in ea quas quasi
              voluptate explicabo dolores architecto enim? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Aperiam pariatur enim eius id
            </p>
          </div>
          <div className="flex w-[50%]">
            <img
              src={Breitling}
              alt="Watch pic"
              className="h-full  block object-cover object-center opacity-85 hover:opacity-60 transition-all duration-600 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
