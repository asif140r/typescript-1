import img from '../assets/Media.jpg';

const Hero = () => {
  return (
    <>
      <div className='w-[100%]  bg-[#FFFFFF] md:flex justify-between px-8'>
        <div>
        <h1 className='md:leading-[86px] md:tracking-[-4px] font-[inter] font-[700] text-[40px] md:text-[80px] mt-8 md:mt-[301px]'>Meet the New <br />
         Landingfolio Kit</h1>
         <p className='text-justify md:text-left text-[18px] md:text-[21px] font-[inter] font-[400] text-[#4B5262] pt-8 md:pt-[34px] md:leading-[34px] '>Clarity gives you the blocks & components you need <br />
          to create a truly professional website, landing page <br />
          or admin panel for your SaaS.</p>
         <button className='bg-[#485AFF] px-[16px] py-[24px] mt-[41px] rounded-[8px] text-[#fff] text-[18px] font-[inter] font-[600] leading-[28px]'>Start using LandingFolio</button>
        </div>
          <img className='mt-16 md:mt-[178px]' src={img} />
      </div>
    </>
  )
}

export default Hero