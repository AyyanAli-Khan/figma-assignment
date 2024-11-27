import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAF5F5] pt-16 pb-8 flex flex-col items-center justify-center">
      <div className="flex items-center gap-6 md:gap-12">
        <Image src="/icons/fb.png" width={30} height={30} alt="Facebook icon" />
        <Image src="/icons/insta.png" width={30} height={30} alt="Instagram icon" />
        <Image src="/icons/vector.png" width={30} height={30} alt="X icon" />
        <Image src="/icons/LinkedIn.png" width={30} height={30} alt="LinkedIn icon" />
      </div>
      <h2 className="text-center text-sm md:text-lg font-medium mt-8">
        Copyright ©2020 All rights reserved
      </h2>
    </footer>
  );
}
