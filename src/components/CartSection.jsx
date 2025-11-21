import Omega from "../assets/watchPic/27.webp";
import Seiko from "../assets/watchPic/17.webp";
import Heuer from "../assets/watchPic/18.webp";
import CustomButton from "../utilities/CustomButton";

export default function CartSection() {
  return (
    <section>
      <div className="flex justify-center items-center py-40">
        <h2 className="header-secondary">Style, Precision & Confidence</h2>
      </div>
      <div className="flex w-[80%] justify-center mx-auto items-center gap-4 my-5">
        <div className="flex w-1/3 h-[500px] group overflow-hidden relative">
          <h3 className="cart-header">New Arrivals</h3>
          <img src={Omega} alt="Omega watch" className="arrival-img" />
          <div className="block absolute rounded-t-[3.5rem] h-65 bottom-0 left-0 right-0 bg-transparent backdrop-blur-sm opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-600">
            <p className="flex absolute bottom-43 w-full justify-center text-[1.6rem] group-hover:translate-y-0 duration-600 left-1/2 font-lato font-normal -translate-x-1/2 translate-y-10 capitalize">
              discover the latest models
            </p>
          </div>
          <CustomButton />
        </div>
        <div className="flex w-1/3 h-[500px] group overflow-hidden relative">
          <h3 className="cart-header w-full justify-center">
            Precision & Craftsmanship
          </h3>
          <img src={Seiko} alt="Omega watch" className="arrival-img" />
          <div className="block absolute rounded-t-[3.5rem] h-65 bottom-0 left-0 right-0 bg-transparent backdrop-blur-sm opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-600">
            <p className="flex absolute bottom-43 w-full justify-center text-[1.6rem] group-hover:translate-y-0 duration-600 left-1/2 font-lato font-normal -translate-x-1/2 translate-y-10 capitalize">
              Precision in every second
            </p>
          </div>
          <CustomButton />
        </div>
        <div className="flex w-1/3 h-[500px] group overflow-hidden relative">
          <img src={Heuer} alt="Omega watch" className="arrival-img" />
          <h3 className="cart-header w-full justify-center">
            Service & Guarantee
          </h3>

          <div className="block absolute rounded-t-[3.5rem] h-65 bottom-0 left-0 right-0 bg-transparent backdrop-blur-sm opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-600">
            <p className="flex absolute bottom-43 w-full justify-center text-[1.6rem] group-hover:translate-y-0 duration-600 left-1/2 font-lato font-normal -translate-x-1/2 translate-y-10 capitalize">
              Confidence, Warranty, Pro service
            </p>
          </div>
          <CustomButton />
        </div>
      </div>
    </section>
  );
}
