import React from "react";
import FeatureCard from "./FeatureCard";
import { Heebo } from "next/font/google";

const heebo = Heebo({
  subsets: ['latin'],
});


export default function FeatureWork() {
  return (
    <div className={`px-5 md:px-[273px] py-10 bg-[#FAF5F5] ${heebo.className}`}>
      <h1 className="text-secondary font-medium text-lg md:text-2xl mb-10">Featured works</h1>
      <div className="flex flex-col gap-10 md:gap-20">
        <FeatureCard Imagepath="/images/features1.png" />
        <FeatureCard Imagepath="/images/feature2.png" />
        <FeatureCard Imagepath="/images/feature3.png" />
      </div>
    </div>
  );
}
