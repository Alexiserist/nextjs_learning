import Image from "next/image";
import { Button } from "@/app/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-screen items-center bg-white">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 lg:py-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">React Nexjs</h2>
            <img src="next.svg" alt="react" className="py-6" />
            <h3 className="text-xl font-bold">showcasing bestpractice</h3>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow"></div>
              <div className="flex gap-3">
                <Button>asd</Button>
                <Button>Get started</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
