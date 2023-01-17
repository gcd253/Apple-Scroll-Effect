const Stack = ({background, textContent}) => {
  return (
    <div className={`w-100 h-[95vh] ${background} flex items-center`}>
      <div className="text-xl w-2/5 p-36 rounded-lg font-semibold text-black ml-[3rem]">
        <span>Lorem ipsum+. </span>
        <span className="opacity-40">
          Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </span>
        <div className="text-blue-600 mt-4 hover:underline decoration-2 underline-offset-2 cursor-pointer">
          Learn More
        </div>
      </div>
    </div>
  );
};

export default Stack;
