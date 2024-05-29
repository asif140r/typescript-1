import leftProfilePic from '../assets/1.png';
import logoImg from '../assets/2.svg';
import rightProfilePic from '../assets/3.png'


const Landing = () => {
  return (
    <>
    <div className='text-center mt-[97px] w-[100%]'>
    <p className='text-[16px] text-[#2563EB] font-[600]'>3940+ Happy Landingfolio Users</p>
    <h2 className='text-[#090914] font-[600] text-[52px]'>Don’t just take our words</h2>
    </div>

    <div className='md:flex px-4 '>

    <div className='mt-[92px] mr-8'>
      <div className='flex  gap-[40px]'>
       <img className='md:w-[239px] md:h-[239px] w-[180px] h-[180px]' src={leftProfilePic}  />
       
       <div>
         <div className='flex md:mt-[15px]  gap-[6.6px]'>
             <img src={logoImg} />
             <img src={logoImg} />
             <img src={logoImg} />
             <img src={logoImg} />
             <img src={logoImg} />
         </div>
         <p className='text-left pt-[30.91px] md:text-[18px] font-[500]'>"We love Landingfolio! Our designers
          were using it for their projects, so we 
           already knew what kind of design 
            they want."</p>

        <div className='flex items-center gap-[10px] mt-[22px]'>
         <span className='text-[16px] font-[500] md:font-[600] text-[#090914]'>Jenny Wilson</span>
         <span className='text-[#64748B] font-[500] text-[16px]'>Grower.io</span>
        </div>

       </div>
      </div>

      <div>

      </div>

    </div>

    <div className='mt-[92px] '>
      <div className='flex  gap-[40px]'>
       <img className='md:w-[239px] md:h-[239px] w-[180px] h-[180px]' src={rightProfilePic}  />
       <div>
         <div className='flex md:mt-[15px]  gap-[6.6px]'>
             <img src={logoImg} />
             <img src={logoImg} />
             <img src={logoImg} />
             <img src={logoImg} />
             <img src={logoImg} />
         </div>
         <p className='text-left pt-[30.91px] md:text-[18px] font-[500]'>"We love Landingfolio! Our designers already knew what kind of design they want."</p>

        <div className='flex gap-[10px] mt-[22px] items-center'>
         <span className='text-[16px] font-[500] md:font-[600] text-[#090914]'>Jenny Wilson</span>
         <span className='text-[#64748B] font-[500] text-[16px]'>Grower.io</span>
        </div>

       </div>
      </div>
    </div>

    </div>

    
    </>
  )
}

export default Landing