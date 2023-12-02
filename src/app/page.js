"use client"
import HrmsSolution from '@/components/HrmsSolution'
import RecruitmentTool from '@/components/RecruitmentTool'
import Accounting from '@/components/Accounting'
import CustomizableDashboard from '@/components/CustomizableDashboard'
import MediaSlide from '@/components/MediaSlide'
import { CTA, DataSecurity } from '@/components/SharedComponents'
import HrmsPrefer from '@/components/HrmsPrefer'
import Faq from '@/components/Faq'
import CustomerList from '@/components/CustomerList'
import HeroSection from '@/components/HeroSection'
import Header from '@/components/Header'
import { usePathname } from 'next/navigation'

export default function Home() {
  const pathName = usePathname();

  return (
    <>
      {/* header part  */}
      <Header pathName={pathName} />

      <HeroSection />
      <MediaSlide />
      <HrmsSolution />
      <RecruitmentTool />
      <Accounting />
      {/* next level section (common) */}
      <section className='next_level px-4 relative lg:py-0 py-5 lg:mb-10 mb-0 lg:mt-14 mt-8'>
        <img src="/Home/person-2.png" alt="" className='h-[100%] absolute top-0 right-[6px] lg:hidden block' />
        <div className='main_container flex justify-between items-center'>
          <div className="w-[50%] lg:block hidden">
            <img src="/Home/person-2.png" alt="" className='w-[420px] mx-auto' />
          </div>
          <div className="w-[50%]">
            <h2 className='inter lg:text-[36px] text-[14px] font-semibold lg:leading-[48px] leading-[20px] mb-2 lg:pr-[150px] pr-2'><span className='text_gradient_finance'>Upgrade to </span><span className='text-green'>Effortless HR </span></h2>
            <p className='inter font-medium lg:text-[18px] text-[9px] text_gradient_finance lg:pr-[70px] pr-0'>Ditch the Desk, Embrace the Cloud - Experience Seamless HR with TechForing Workwise !</p>
            <div className="lg:mt-10 mt-2 text-left">
              <a href="" className="lg:text-[16px] text-[8.8px] action_btn lg:px-7 px-3 lg:py-[10px] py-[6px] ">Start Today</a>
            </div>
          </div>
        </div>
      </section>

      {/* card stack animation */}
      <CustomizableDashboard />

      <DataSecurity />
      <HrmsPrefer />

      {/* CTA */}
      {/* <section style={{ backgroundImage: 'url(/cta1BG.png)', backgroundRepeat: "no-repeat", backgroundPosition: "center top", backgroundSize: "cover" }} className='lg:py-[100px] py-10 px-4 mt-20 lg:mb-0 mb-10 '>
        <div className='main_container'>
           <h1 className='text-white lg:text-[36px] text-[22px] lg:w-[50%] w-full lg:mx-auto mx-0 text-center font-bold mb-4'>Ready to <span className='text-green'>Grab</span> Ultimate HR Solution</h1>
           <p className='text-center text-[14px] lg:text-[16px] text-white mb-10'>Want to Scale Your Business Rapidly</p>
          <div className='text-center'>
             <button className='roboto px-6 py-[10px] rounded-md text-[#FAFAFA] bg-green'>Schedule A Demo</button>
          </div>
        </div>
      </section> */}

      {/* another CTA */}
      <div className='lg:pt-10 lg:pb-10 pt-6 pb-12'>
        <div className='main_container flex justify-between items-center gap-5'>
          <div className='w-[50%]'>
            <img src="/Home/cta.png" alt="" className='w-[90%] mx-auto' />
          </div>

          <div className='w-[50%] lg:mt-20 mt-0 lg:translate-x-[-40px] translate-x-0'>
            <div className='lg:w-[70%] w-full mx-auto'>
              <div className='flex items-center lg:mb-0 mb-1'>
                <img src="/Home/tic.png" alt="" className='lg:w-[24px] w-[12px]' />
                <span className='inter lg:text-[28px] text-[10px] text-[#182F59] lg:ml-4 ml-2 '><span className='text-green lg:text-[32px] text-[12px] font-semibold'>Safeguard</span> Your Data</span>
              </div>
              <div className='flex items-center lg:mb-0 mb-1'>
                <img src="/Home/tic.png" alt="" className='lg:w-[24px] w-[12px]' />
                <span className='inter lg:text-[28px] text-[10px] text-[#182F59] lg:ml-4 ml-2'><span className='text-green lg:text-[32px] text-[12px] font-semibold'>Engage</span> Your Team</span>
              </div>
              <div className='flex items-center'>
                <img src="/Home/tic.png" alt="" className='lg:w-[24px] w-[12px]' />
                <span className='inter lg:text-[28px] text-[10px] text-[#182F59] lg:ml-4 ml-2'><span className='text-green lg:text-[32px] text-[12px] font-semibold'>Save</span> Time and Money</span>
              </div>
            </div>

            <p className='inter font-light lg:text-center text-left lg:mt-8 mt-3 lg:text-[18px] text-[12px] text-[#333]'>Experience Complete <span className='text-[#182F59] font-medium'>HR Efficiency and Scalability</span> with <span className='font-medium lg:text-[24px] text-[12px] text-green'>TechForing Workwise</span></p>

            <div className='lg:text-center text-left lg:mt-8 mt-5'>
              <a href="" className='px-7 lg:py-[10px] py-2 action_btn font-bold'>Start Today</a>
            </div>
          </div>
        </div>
      </div>

      <CustomerList />
      <Faq className='my-24' more={false} />
      {/* get schedule demo third party form */}
    </>
  )
}
