const Stack = ({ background, textContent, accentColor }) => {
  return (
    <div className={`w-100 h-[95vh] ${background} flex items-center`}>
      <div className="text-xl w-2/5 p-36 rounded-lg font-semibold text-black ml-[3rem]">
        <span>Lorem ipsum+. </span>
        <span className="opacity-40">{textContent}</span>
        <div className={`text-blue-600 ${accentColor} mt-4 hover:underline decoration-2 underline-offset-2 cursor-pointer`}>
          Learn More
        </div>
      </div>
    </div>
  );
};

export default Stack;
