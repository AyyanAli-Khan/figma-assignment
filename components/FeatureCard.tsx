import Image from "next/image";

interface PROPS {
  Imagepath: string;
}

export default function FeatureCard({ Imagepath }: PROPS) {
  return (
    <div className="mt-5">
      <div className="flex flex-col md:flex-row gap-5 h-auto md:h-44">
        {/* Image */}
        <div className="w-full md:w-1/2 h-[200px] md:h-44">
          <Image
            className="w-full h-full rounded-lg object-cover"
            src={Imagepath}
            alt="featureImage"
            width={100}
            height={100}
          />
        </div>
        {/* Text Content */}
        <div className="flex flex-col justify-between">
          {/* Main Heading */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              Designing Dashboards
            </h1>
            {/* Sub Heading */}
            <div className="flex flex-wrap gap-4 items-center pt-3">
              <h2 className="bg-[#F98585] text-sm md:text-lg font-bold w-fit px-3  text-white rounded-3xl">
                2020
              </h2>
              <h2 className="text-[16px] md:text-[20px] font-normal text-[#0000009E]">
                Dashboard
              </h2>
            </div>
          </div>
          {/* Paragraph */}
          <p className="text-[14px] md:text-[18px]  md:mb-3 font-light pt-5">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </div>
  );
}
