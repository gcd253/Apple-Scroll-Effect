import { useRef } from "react";
import { useInView } from "framer-motion";

const Stack = ({
  background,
  textContent,
  accentColor,
  opacity,
  videoSource,
}) => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { amount: 0.3 });

  return (
    <div
      ref={scrollRef}
      style={{ overflow: "scroll" }}
      className={`w-100 h-[95vh] ${background} flex items-center relative`}
    >
      <div
        className={`text-xl w-2/5 p-36 font-semibold ${accentColor} ml-[3rem]`}
      >
        <span>Lorem ipsum+. </span>
        <span className={opacity}>{textContent}</span>
        <div
          className={`${accentColor} mt-4 hover:underline decoration-2 underline-offset-2 cursor-pointer`}
        >
          Learn More
        </div>
      </div>
      <div className="w-[55rem] h-[29.3rem] fixed z-10 right-[-100px] top-48 shadow-xl border-l-4 border-y-4 border-black overflow-hidden">
        <video
          autoPlay
          loop
          muted
          src={videoSource}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "0.4s"
          }}
          viewport={{ root: scrollRef }}
        ></video>
      </div>
    </div>
  );
};

export default Stack;
