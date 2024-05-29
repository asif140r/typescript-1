
import icon from '../assets/i.jpg'

const Task = () => {
  return (
    <>
    <div className='bg-white mt-[46px]'>
    <div className='w-[100%] md:w-[729px] bg-[#E9F1FF] p-[16px]'>
    <div className='flex gap-[10px]'>
    <img className='w-[16px] h-[16px]' src={icon} />
    <h2 className='font-[inter] font-[600] text-[14px] tracking-[-0.5px] leading-[18px] text-[#0041D1]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
    </div>
  </div>

  <div className='w-[100%] md:w-[729px] bg-[#E9F1FF] p-[16px] mt-[24px]'>
  <div className='flex items-center gap-[10px]'>
     <img className='w-[16px] h-[16px]' src={icon} />
     <h2 className='font-[inter] font-[600] text-[14px] tracking-[-0.5px] leading-[18px] text-[#0041D1]'>Placeholder</h2>
  </div>
  <p className='text-left ml-7 font-inter font-[500] text-[14px] leading-[20px]
      tracking-[-0.5px] text-[#0053E8]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae arcu, in nisi convallis rhoncus facilisi fames purus. Dictum sed phasellus dolor porttitor eget nulla vitae porttitor.</p>
  </div>
   

  <div className='w-[100%] md:w-[729px] bg-[#E9F1FF] p-[16px] mt-[24px]'>
  <div className='flex items-center gap-[10px]'>
     <img className='w-[16px] h-[16px]' src={icon} />
     <h2 className='font-[inter] font-[600] text-[14px] tracking-[-0.5px] leading-[18px] text-[#0041D1]'>Placeholder</h2>
  </div>
   <div className='ml-[29px] md:ml-[-325px]'>
    <li className='font-inter font-[500] text-[14px] leading-[20px]
    tracking-[-0.5px] text-[#0053E8] ml-[-8px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
    <li className='font-inter font-[500] text-[14px] leading-[20px]
    tracking-[-0.5px] text-[#0053E8] ml-[-8px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
   </div>
  </div>  
  

  <div className='w-[100%] md:w-[729px] bg-[#E9F1FF] p-[16px] mt-[24px]'>
    <div className='flex items-center gap-[16px]'>
    <img className='w-[16px] h-[16px]' src={icon} />
    <h2 className='font-[inter] font-[600] text-[14px] tracking-[-0.5px] leading-[18px] text-[#0041D1]'>Placeholder</h2>
    </div>
   <p className='font-inter font-[500] text-[14px] leading-[20px]
    tracking-[-0.5px] text-[#0053E8] ml-[22px] md:ml-[-8px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae arcu, in nisi convallis rhoncus facilisi fames purus.</p>
   <div className='flex items-center gap-[32px] mt-[16px] ml-7'>
    <span className='font-[inter] text-[#0031BA] text-[14px] text-[600] tracking-[-0.5px] leading-[24px]'>Lavel</span>
    <span className='font-[inter] text-[#0031BA] text-[14px] text-[600] tracking-[-0.5px] leading-[24px]'>Lavel</span>
   </div>
  </div>

   </div>
    
    </>
  )
}

export default Task