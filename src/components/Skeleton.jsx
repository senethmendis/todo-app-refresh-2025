const Skeleton = () => {

  const color = "bg-gray-300/50";
  return (
    <>
      <Paragraph color={color} />
      <Paragraph color={color} />
      <Paragraph color={color} />
      
    </>
  );
};

export default Skeleton;


const Paragraph = ({ color }) => {
  return (
    <div className="w-full flex flex-col justify-between min-h-48 animate-pulse shadow p-4 rounded-2xl mb-10 relative border border-black/5  transition-all ease-in-out">
      <div className="w-full flex flex-row justify-between">
        <div
          className={`w-[200px] h-[20px]  rounded-3xl animate-pulse transition-all ease-in-out ${color}`}
        />
        <div
          className={`w-[50px] h-[50px]  rounded-full animate-pulse transition-all ease-in-out ${color}`}
        />
      </div>

      <div className="w-full flex flex-col gap-6 py-3 px-2">
        <div className="w-full flex flex-row gap-4">
          <div
            className={`w-[700px] h-[20px]  rounded-3xl animate-pulse transition-all ease-in-out ${color}`}
          />
          <div
            className={`w-[300px] h-[20px]  rounded-3xl animate-pulse transition-all ease-in-out ${color}`}
          />
        </div>
        <div className="w-full flex flex-row gap-4">
          <div
            className={`w-[500px] h-[20px]  rounded-3xl animate-pulse transition-all ease-in-out ${color}`}
          />
          <div
            className={`w-[500px] h-[20px]  rounded-3xl animate-pulse transition-all ease-in-out ${color}`}
          />
        </div>
        <div className="w-full justify-between flex flex-row gap-4">
          <div
            className={`w-[700px] h-[20px]  rounded-3xl animate-pulse transition-all ease-in-out ${color}`}
          />
          <div
            className={`w-[450px] h-[20px]  rounded-3xl animate-pulse transition-all ease-in-out ${color}`}
          />
        </div>
      </div>
    </div>
  );
}
