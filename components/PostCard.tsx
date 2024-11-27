export default function PostCard() {
  return (
    <div className="w-full h-auto md:h-[356px]  bg-white md:w-[450px] px-5 md:px-9 py-5 flex flex-col justify-around shadow-md">
      {/* Title and Date */}
      <div className="text-[#000000]">
        <h1 className="font-bold text-[22px] md:text-[26px] leading-tight">
          Making a design system from scratch
        </h1>
        <h2 className="text-[14px] md:text-[18px] pt-3 md:pt-5 font-normal text-gray-500">
          12 February 2020 &nbsp;&nbsp; | &nbsp;&nbsp; Design, Pattern
        </h2>
      </div>
      {/* Content */}
      <p className="text-[14px] md:text-[16px] font-normal text-gray-600 mt-3">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
    </div>
  );
}
