import type { NextPage } from "next";
import Head from "next/head";
import Stack from "./components/stack";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Apple Scroll Effect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Stack
          background={"bg-white"}
          textContent="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat."
          accentColor="text-black"
          opacity="opacity-40"
          videoSource={"/volcano.mp4"}
        />

        <Stack
          background={"bg-green-500"}
          textContent="dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis laboris nisi ut aliquip ex ea commodo."
          accentColor="text-white"
          opacity="opacity-60"
          videoSource={"/sailboat.mp4"}
        />

        <Stack
          background={"bg-violet-700"}
          textContent="dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              exercitation ullamco nisi ut aliquip ex ea commodo laboris."
          accentColor="text-white"
          opacity="opacity-60"
          videoSource={"/massage.mp4"}
        />

        <Stack
          background={"bg-red-500"}
          textContent="dolor sit amet, consectetur elit, sed do tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris ex ea commodo adipiscing."
          accentColor="text-white"
          opacity="opacity-60"
          videoSource={"/surfer.mp4"}
        />

      </main>
    </div>
  );
};

export default Home;
