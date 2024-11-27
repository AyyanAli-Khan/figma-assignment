import { Heebo } from "next/font/google";
import Image from "next/image";

const heebo = Heebo({
  subsets: ['latin'],
});

export default function Hero() {
  return (
    <div className="bg-[#FAF5F5] w-full h-[86.3vh] border-2 flex justify-center items-center">
      <div className="max-w-[1030px] w-full h-auto md:h-[308px] flex flex-col md:flex-row items-center gap-8 md:gap-[211px] px-5 md:px-0">
        {/* Text Section */}
        <div
          className={`w-full md:w-[521px] flex flex-col items-start gap-5 md:gap-[29px] ${heebo.className}`}
        >
          <h1 className="text-[28px] md:text-[47px] text-[#21243D] font-[900] leading-[34px] md:leading-[61px] tracking-[1px] md:tracking-[2px]">
            Hi, I am John, Creative Technologist
          </h1>
          <p className="text-[14px] md:text-[16px] font-[400] leading-[20px] md:leading-[23.5px] text-[#21243D]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="w-full md:w-[205px] text-white bg-[#F98585] shadow-sm h-[50px] text-[16px] md:text-[18px] font-[500] rounded-[2px]">
            Download Resume
          </button>
        </div>
        {/* Image Section */}
        <div className="w-[200px] md:w-[298px] h-[200px] md:h-full bg-orange-600 rounded-full overflow-hidden">
          <Image
            src="/images/heroimg.png"
            alt="hero image"
            width={300}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
