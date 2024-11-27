import PostCard from "./PostCard";
import { Heebo } from "next/font/google";

const heebo = Heebo({
  subsets: ['latin'],
});

export default function RecentPost() {
  return (
    <section className={`py-5 px-5 md:px-[100px] lg:px-[273px] font-medium w-full bg-[#F4E2E2] ${heebo.className}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-secondary  md:text-[24px]">Recent Posts</h1>
        <h1 className="text-secondary text-[#F98585]  md:text-[18px] cursor-pointer">
          View all
        </h1>
      </div>
      {/* Posts */}
      <div className="flex flex-col justify-between md:flex-row gap-5">
        <PostCard />
        <PostCard />
      </div>
    </section>
  );
}
