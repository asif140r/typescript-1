
const Persent = () => {
    return (
      <>
        <div className="w-[100%] h-[100vh] mt-8 flex items-center justify-center relative">
        <div className="w-[350px] h-[350px] bg-red-400 rounded-[50%]">
        </div>
  
      <div className="absolute top-[500px] md:top-[73px] md:right-[61px] flex flex-col gap-[16px] ">
          <div className="flex items-center gap-[9px]">
            <span className="bg-[#A155B9] w-[21px] h-[8px]"></span>
            <h2 className="font-[inter] font-[400] leading-[14.52px] text-[12px]">A</h2>
          </div>
  
          <div className="flex items-center gap-[9px]">
            <span className="bg-[#F765A3] w-[21px] h-[8px]"></span>
            <h2 className="font-[inter] font-[400] leading-[14.52px] text-[12px]">B</h2>
          </div>
  
          <div className="flex items-center gap-[9px]">
            <span className="bg-[#16BFD6] w-[21px] h-[8px]"></span>
            <h2 className="font-[inter] font-[400] leading-[14.52px] text-[12px]">AB</h2>
          </div>
  
          <div className="flex items-center gap-[9px]">
            <span className="bg-[#FFB800] w-[21px] h-[8px]"></span>
            <h2 className="font-[inter] font-[400] leading-[14.52px] text-[12px]">O</h2>
          </div>
      </div>
        
      </div>
      </>
    )
  }
  
  export default Persent