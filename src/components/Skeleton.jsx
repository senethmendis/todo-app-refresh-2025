const Skeleton = () => {
  return (
    <>
      <div className="w-full flex flex-row justify-between min-h-48 bg-gray-200 animate-pulse shadow p-4 rounded-2xl mb-5 relative  transition-all ease-in-out">
        <div className="w-[200px] h-[40px] bg-gray-300/50 rounded-3xl animate-pulse transition-all ease-in-out"></div>
        <div className="w-[50px] h-[50px] bg-gray-300/50 rounded-full animate-pulse transition-all ease-in-out"></div>
      </div>
      <div className="w-full flex flex-row justify-between min-h-48 bg-gray-200 animate-pulse shadow p-4 rounded-2xl mb-5 relative  transition-all ease-in-out">
        <div className="w-[200px] h-[40px] bg-gray-300/50 rounded-3xl animate-pulse transition-all ease-in-out"></div>
        <div className="w-[50px] h-[50px] bg-gray-300/50 rounded-full animate-pulse transition-all ease-in-out"></div>
      </div>
      <div className="w-full flex flex-row justify-between min-h-48 bg-gray-200 animate-pulse shadow p-4 rounded-2xl mb-5 relative  transition-all ease-in-out">
        <div className="w-[200px] h-[40px] bg-gray-300/50 rounded-3xl animate-pulse transition-all ease-in-out"></div>
        <div className="w-[50px] h-[50px] bg-gray-300/50 rounded-full animate-pulse transition-all ease-in-out"></div>
      </div>
    </>
  );
};

export default Skeleton;
