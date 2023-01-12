import type { NextPage } from "next";
import Head from "next/head";
import ReactPlayer from "react-player";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Apple Scroll Effect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="overflow-hidden">
        <div className="w-[45rem] h-[25.7rem] fixed z-10 right-0 top-48 shadow-xl shadow-red-400 border-l-4 border-y-4 border-black">
          {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            width='100%'
            height='100%'
          /> */}
          <video
            className=""
            autoPlay
            loop
            muted
            src={"/volcano.mp4"}
          />
        </div>
      </div>

      <main>
        <div className="w-100 h-[95vh] bg-red-300 flex items-center">
          <div className="text-lg w-2/5 p-12 bg-white rounded-lg font-bold text-black ml-[2rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>

        <div className="w-100 h-[90vh] bg-orange-300 flex items-center">
          <div className="text-lg w-2/5 p-12 bg-white rounded-lg flex font-bold text-black ml-[2rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="w-100 h-[90vh] bg-yellow-300 flex items-center">
          <div className="text-lg w-2/5 p-12 bg-white rounded-lg flex font-bold text-black ml-[2rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="w-100 h-[95vh] bg-green-300 flex items-center">
          <div className="text-lg w-2/5 p-12 bg-white rounded-lg flex font-bold text-black ml-[2rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
