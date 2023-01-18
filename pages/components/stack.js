const Stack = ({ background, textContent, accentColor, opacity }) => {
  return (
    <div className={`w-100 h-[95vh] ${background} flex items-center`}>
      <div className={`text-xl w-2/5 p-36 rounded-lg font-semibold ${accentColor} ml-[3rem]`}>
        <span>Lorem ipsum+. </span>
        <span className={opacity}>{textContent}</span>
        <div className={`${accentColor} text-blue-600 mt-4 hover:underline decoration-2 underline-offset-2 cursor-pointer`}>
          Learn More
        </div>
      </div>
    </div>
  );
};

export default Stack;
