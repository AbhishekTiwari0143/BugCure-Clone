import schedule from "../assets/1f5d3.svg";

const ButtonSchedule = () => {
  return (
    <>
      <div className="schedule flex items-center gap-2 px-[20px] bg-white text-base rounded-full box-shadow cursor-pointer md:text-2xl md:h-12 md:gap-4 md:px-8">
        <img src={schedule} alt="image" className="object-contain w-[1em] " />
        <h1 className="font-semibold text-shadow text-xl text-[#441151]">
          Schedule A Call
        </h1>
      </div>
    </>
  );
};

export default ButtonSchedule;
