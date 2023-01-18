import type { NextPage } from "next";
import Head from "next/head";
import { useRef } from "react";
import { motion } from "framer-motion";
import Stack from "./components/stack";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Apple Scroll Effect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        <div className="w-[55rem] h-[29.3rem] fixed z-10 right-[-100px] top-48 shadow-xl border-l-4 border-y-4 border-black overflow-hidden">
          <motion.video
            className="w-[110%] sticky"
            autoPlay
            loop
            muted
            src={"/surfer.mp4"}
          />
          <motion.video
            className="w-[110%]"
            autoPlay
            loop
            muted
            src={"/volcano.mp4"}
          />
          <motion.video
            className="w-[110%]"
            autoPlay
            loop
            muted
            src={"/sailboat.mp4"}
          />
          <motion.video
            className="w-[110%]"
            autoPlay
            loop
            muted
            src={"/massage.mp4"}
          />
        </div>
      </div>

      <main>
        <Stack
          background={"bg-white"}
          textContent="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat."
          accentColor="text-black"
          opacity="opacity-40"
        />

        <Stack
          background={"bg-green-500"}
          textContent="dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis laboris nisi ut aliquip ex ea commodo."
          accentColor="text-white"
          opacity="opacity-60"
        />

        <Stack
          background={"bg-violet-700"}
          textContent="dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              exercitation ullamco nisi ut aliquip ex ea commodo laboris."
          accentColor="text-white"
          opacity="opacity-60"
        />

        <Stack
          background={"bg-red-500"}
          textContent="dolor sit amet, consectetur elit, sed do tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris ex ea commodo adipiscing."
          accentColor="text-white"
          opacity="opacity-60"
        />

        <div
          className="w-100 h-[90vh] bg-green-500 flex items-center"
          id="green"
        >
          <div className="text-xl w-2/5 p-36 rounded-lg font-semibold text-white ml-[3rem]">
            <span>Lorem ipsum </span>
            <span className="opacity-60">
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis laboris nisi ut aliquip ex ea commodo.
            </span>
            <div className="text-white mt-4 hover:underline decoration-2 underline-offset-2 cursor-pointer">
              Learn More
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

// i need to turn each section div into a component which can be used as a reference for its unique video
