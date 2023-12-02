"use client"
import React, { useEffect, useState } from 'react'
import h from '../style/hero.module.css';
import TextTransition, { presets } from 'react-text-transition';
import Cross from '@/section/Cross';
import { useGlobalContext } from '@/content/globalContext';

const HeroSection = () => {
  const { setOpenScheduleDemo } = useGlobalContext();
  const [colorBg, setColorBg] = useState();
  const [open, setOpen] = useState(false);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (activeSlide.index === 2) {
  //       setActiveSlide({
  //         ...activeSlide,
  //         rotation: activeSlide.rotation - 90,
  //         index: 0
  //       })
  //     } else {
  //       setActiveSlide({
  //         ...activeSlide,
  //         rotation: activeSlide.rotation - 90,
  //         index: activeSlide.index + 1
  //       })
  //     }
  //   }, 6000)
  //   return () => clearInterval(interval)
  // }, [activeSlide.index])


  useEffect(() => {
    let increase = 0;
    let currentIndex = 0;
    const image = ["/team1.png", "/team2.png", "/team3.png"];
    const svg_change = document.querySelector(".svg_change");
    const carousel_img = document.querySelector(".carousel_img");
    const button_bg_change = document.querySelector(".button_bg_change");
    const text_animation = document.querySelector(".text_animation").children;

    const setSvgLink = (index, increase) => {
      setColorBg(index)
      let degIncrease = 90;

      for (let i = 0; i < text_animation.length; i++) {
        text_animation[i].classList.remove("text_in", "text_out");
      }

      text_animation[index].classList.add("text_in");

      setTimeout(() => {
        text_animation[index].classList.add("text_out");
      }, 3800)

      svg_change.style.transform = `rotate(-${increase * degIncrease}deg)`;
      button_bg_change.style.background = `${gradient[index]}`

      carousel_img.style.opacity = 0; // Add opacity transition
      setTimeout(() => {
        carousel_img.src = image[index];
        carousel_img.style.opacity = 1;
      }, 400); // Adjust the duration based on your preference
    }

    const animation = () => {
      currentIndex = (currentIndex + 1) % image.length;
      increase = increase + 1;
      setSvgLink(currentIndex, increase);
    }

    // Initial call to set the active class
    setSvgLink(currentIndex, increase);

    // 5-second later auto loop iteration
    setInterval(animation, 4000);

    // window.addEventListener("load", setSvgLink);
  }, [])
  return (
    <>
      {/* <div className='overflow-hidden hidden'>
      <div className="custom-container">
        <div className="flex items-center">
          <div className='w-1/2 flex flex-col gap-5'>
            <p className='text-secondary-1 text-lg'>A platform built for a new way of working</p>
            <h3 className='text-secondary-1 text-5xl font-normal'>Empowering Businesses with the Ultimate <span className='text-6xl font-semibold'>HRMS</span></h3>


            <TextTransition springConfig={presets.default}>
              <h2 className={`text-LG-${activeSlide.index + 1} text-6xl font-extrabold w-fit leading-normal`}>{TEXTS[activeSlide.index % TEXTS.length]}</h2>
            </TextTransition>
            <div className='flex gap-3 mt-5'>
              <button style={{ background: `var(--LG-${activeSlide.index + 1})` }} className={h.actionBtn}>Schedule A Demo</button>
              <button style={{
                background: `linear-gradient(#fff, #fff) padding-box, var(--LG-${activeSlide.index + 1}) border-box`
              }} className={`${h.actionBtn} ${h.actionBtn_s}`}><span className={`text-LG-${activeSlide.index + 1}`}>Schedule A Demo</span></button>
            </div>
          </div>
          <div className="w-1/2 max-h-[690px]">
            <div className={h.heroImgContainer}>
              <img className={activeSlide.index === 0 ? h.imgActive : ''} src="/team1.png" alt="team" />
              <img className={activeSlide.index === 1 ? h.imgActive : ''} src="/team2.png" alt="team" />
              <img className={activeSlide.index === 2 ? h.imgActive : ''} src="/team3.png" alt="team" />
              <svg style={{ transform: `translate(-50%, -50%) rotate(${activeSlide.rotation}deg)` }} xmlns="http://www.w3.org/2000/svg" width="835" height="836" viewBox="0 0 835 836" fill="none">
                <path d="M234.089 78.1849C258.738 4.92538 351.206 -23.8949 411.757 24.1473C522.235 111.801 627.304 172.054 765.26 227.015C837.642 255.852 857.04 351.829 804.068 408.968C705.199 515.615 648.158 617.705 606.335 755.912C584.194 829.08 494.198 860.103 433.556 813.559C316.211 723.494 208.499 659.953 67.4394 602.042C-1.92972 573.563 -22.2499 482.906 27.6442 426.927C127.467 314.93 188.552 213.53 234.089 78.1849Z" fill="url(#paint0_linear_2363_26449)" />
                <defs>
                  {
                    activeSlide.index === 0 ? (
                      <linearGradient id="paint0_linear_2363_26449" x1="106.069" y1="299.841" x2="745.333" y2="668.92" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#1A2C82" />
                        <stop offset="1" stopColor="#26CCCC" />
                      </linearGradient>

                    ) : activeSlide.index === 1 ? (
                      <linearGradient id="paint0_linear_2363_26449" x1="106.069" y1="299.841" x2="745.333" y2="668.92" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#091D02" />
                        <stop offset="1" stopColor="#51C033" />
                      </linearGradient>
                    ) : (
                      <linearGradient id="paint0_linear_2363_26449" x1="106.069" y1="299.841" x2="745.333" y2="668.92" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4DA2C9" />
                        <stop offset="1" stopColor="#66B172" />
                      </linearGradient>
                    )}
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div> */}
      {/* style={{ background: 'url("/Home/hero_image_bg.png")', backgroundPosition: "center top", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} */}

      {/* Responsive */}
      <div className='py-20 px-4 lg:overflow-x-clip overflow-x-hidden' >
        <div className='main_container'>
          <div className='flex justify-between items-center relative'>
            <div className='lg:w-[50%] w-[60%]'>
              <h5 className='roboto text-[#182F59] font-medium lg:text-[18px] text-[10px] mb-3'>A platform built for a new way of working</h5>
              <p className='roboto text-[#182F59] font-normal lg:text-[48px] text-[16px] lg:leading-[60px] leading-6 lg:mb-5 mb-0'>Empowering Businesses with the Ultimate <span className='text-green lg:text-[62px] text-[18px] font-semibold'>HRMS</span></p>

              <div className='mb-2 text_animation'>
                <span className='noto text_gradient text_in font-black lg:text-[60px] text-[22px]'>HR Solution</span>
                <span className='noto block text_gradient_recruitment font-black lg:text-[60px] text-[22px]'>Talent Acquisition</span>
                <span className='noto block text_gradient_finance font-black lg:text-[60px] text-[22px]'>Finance Manager</span>
              </div>

              <div className='flex flex-col lg:flex-row lg:gap-5  gap-5 mt-10 lg:mt-5'>
                <button
                  onClick={() => setOpenScheduleDemo(true)}
                  className='button_bg_change px-7 py-4 text-center text-white font-bold rounded-lg lg:w-fit w-full'
                >Schedule A Demo</button>
                {/* <button className='w-full lg:w-fit text-center border-[2px] px-7 py-[14px] lg:ml-4 ml-0 border-solid border-[#182F59] font-bold text_gradient rounded-lg'>Watch Live Demo</button> */}
              </div>
            </div>

            {/* position image and svg */}
            <div className='absolute top-0 right-0 lg:translate-x-[300px] translate-x-[105px] lg:translate-y-[-185px] translate-y-[-60px] lg:w-[750px] w-[250px]'>
              <img src="/team1.png" alt="" className='carousel_img' />

              <div className='svg_change'>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 835 836" fill="none">
                  {
                    colorBg === 0 ? <path d="M234.088 78.4388C258.736 5.17929 351.204 -23.641 411.756 24.4012C522.233 112.055 627.302 172.308 765.258 227.269C837.64 256.106 857.038 352.083 804.066 409.222C705.197 515.869 648.156 617.959 606.333 756.166C584.192 829.334 494.196 860.357 433.554 813.813C316.209 723.748 208.497 660.207 67.4375 602.296C-1.93167 573.817 -22.2519 483.16 27.6423 427.181C127.465 315.184 188.55 213.784 234.088 78.4388Z" fill="url(#paint0_linear_4544_83304)" /> :

                      colorBg === 1 ? <path d="M78.099 600.815C4.83945 576.166 -23.9808 483.698 24.0614 423.147C111.715 312.67 171.968 207.6 226.929 69.6444C255.766 -2.73816 351.743 -22.1354 408.882 30.836C515.529 129.705 617.62 186.747 755.826 228.569C828.995 250.71 860.017 340.706 813.473 401.348C723.409 518.693 659.867 626.405 601.956 767.465C573.477 836.834 482.821 857.154 426.841 807.26C314.844 707.437 213.444 646.352 78.099 600.815Z" fill="url(#paint0_linear_4544_83306)" /> :

                        <path d="M600.395 757.794C575.746 831.053 483.278 859.873 422.727 811.831C312.25 724.177 207.18 663.924 69.2245 608.963C-3.15808 580.126 -22.5554 484.149 30.4161 427.011C129.285 320.363 186.327 218.273 228.149 80.0663C250.291 6.898 340.286 -24.1247 400.928 22.4196C518.273 112.484 625.985 176.025 767.045 233.936C836.414 262.415 856.734 353.072 806.84 409.052C707.018 521.049 645.932 622.449 600.395 757.794Z" fill="url(#paint0_linear_4544_83308)" />
                  }

                  {
                    colorBg === 0 ? <path d="M234.088 78.4388C258.736 5.17929 351.204 -23.641 411.756 24.4012C522.233 112.055 627.302 172.308 765.258 227.269C837.64 256.106 857.038 352.083 804.066 409.222C705.197 515.869 648.156 617.959 606.333 756.166C584.192 829.334 494.196 860.357 433.554 813.813C316.209 723.748 208.497 660.207 67.4375 602.296C-1.93167 573.817 -22.2519 483.16 27.6423 427.181C127.465 315.184 188.55 213.784 234.088 78.4388Z" fill="url(#paint1_radial_4544_83304)" fillOpacity="0.2" /> :

                      colorBg === 1 ? <path d="M78.099 600.815C4.83945 576.166 -23.9808 483.698 24.0614 423.147C111.715 312.67 171.968 207.6 226.929 69.6444C255.766 -2.73816 351.743 -22.1354 408.882 30.836C515.529 129.705 617.62 186.747 755.826 228.569C828.995 250.71 860.017 340.706 813.473 401.348C723.409 518.693 659.867 626.405 601.956 767.465C573.477 836.834 482.821 857.154 426.841 807.26C314.844 707.437 213.444 646.352 78.099 600.815Z" fill="#5BBC2E" fillOpacity="0.25" /> :

                        <path d="M600.395 757.794C575.746 831.053 483.278 859.873 422.727 811.831C312.25 724.177 207.18 663.924 69.2245 608.963C-3.15808 580.126 -22.5554 484.149 30.4161 427.011C129.285 320.363 186.327 218.273 228.149 80.0663C250.291 6.898 340.286 -24.1247 400.928 22.4196C518.273 112.484 625.985 176.025 767.045 233.936C836.414 262.415 856.734 353.072 806.84 409.052C707.018 521.049 645.932 622.449 600.395 757.794Z" fill="#003D3D" fillOpacity="0.7" />
                  }

                  {
                    colorBg === 0 ? <path d="M234.088 78.4388C258.736 5.17929 351.204 -23.641 411.756 24.4012C522.233 112.055 627.302 172.308 765.258 227.269C837.64 256.106 857.038 352.083 804.066 409.222C705.197 515.869 648.156 617.959 606.333 756.166C584.192 829.334 494.196 860.357 433.554 813.813C316.209 723.748 208.497 660.207 67.4375 602.296C-1.93167 573.817 -22.2519 483.16 27.6423 427.181C127.465 315.184 188.55 213.784 234.088 78.4388Z" fill="url(#paint2_angular_4544_83304)" fillOpacity="0.1" /> :

                      colorBg === 1 ? <path d="M78.099 600.815C4.83945 576.166 -23.9808 483.698 24.0614 423.147C111.715 312.67 171.968 207.6 226.929 69.6444C255.766 -2.73816 351.743 -22.1354 408.882 30.836C515.529 129.705 617.62 186.747 755.826 228.569C828.995 250.71 860.017 340.706 813.473 401.348C723.409 518.693 659.867 626.405 601.956 767.465C573.477 836.834 482.821 857.154 426.841 807.26C314.844 707.437 213.444 646.352 78.099 600.815Z" fill="url(#paint1_angular_4544_83306)" fillOpacity="0.2" /> :

                        <path d="M600.395 757.794C575.746 831.053 483.278 859.873 422.727 811.831C312.25 724.177 207.18 663.924 69.2245 608.963C-3.15808 580.126 -22.5554 484.149 30.4161 427.011C129.285 320.363 186.327 218.273 228.149 80.0663C250.291 6.898 340.286 -24.1247 400.928 22.4196C518.273 112.484 625.985 176.025 767.045 233.936C836.414 262.415 856.734 353.072 806.84 409.052C707.018 521.049 645.932 622.449 600.395 757.794Z" fill="url(#paint1_angular_4544_83308)" fillOpacity="0.2" />
                  }

                  <defs>
                    {
                      colorBg === 0 ? <linearGradient id="paint0_linear_4544_83304" x1="305.882" y1="177.669" x2="371.265" y2="790.125" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#182F59" />
                        <stop offset="1" stopColor="#020F26" />
                      </linearGradient> :

                        colorBg === 1 ? <linearGradient id="paint0_linear_4544_83306" x1="177.329" y1="529.02" x2="789.785" y2="463.637" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#182F59" />
                          <stop offset="1" stopColor="#020F26" />
                        </linearGradient> :
                          <linearGradient id="paint0_linear_4544_83308" x1="528.601" y1="658.563" x2="463.217" y2="46.1079" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#182F59" />
                            <stop offset="1" stopColor="#020F26" />
                          </linearGradient>
                    }
                    {
                      colorBg === 0 ? <radialGradient id="paint1_radial_4544_83304" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(331.362 279.039) rotate(118.659) scale(371.115 381.223)">
                        <stop stopColor="#182F59" />
                        <stop offset="1" stopColor="#5C7EBC" />
                      </radialGradient> :

                        colorBg === 1 ? <radialGradient id="paint1_angular_4544_83306" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(613.254 346.881) rotate(161.99) scale(581.441 580.01)">
                          <stop stopColor="#4C576B" stopOpacity="0.5" />
                          <stop offset="1" stopOpacity="0.7" />
                        </radialGradient> :

                          <radialGradient id="paint1_angular_4544_83308" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(346.461 222.638) rotate(71.9899) scale(581.441 580.01)">
                            <stop stopColor="#4C576B" stopOpacity="0.5" />
                            <stop offset="1" stopOpacity="0.7" />
                          </radialGradient>
                    }
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          {/* {
            // open &&
            <Modal
              sx={{
                display: !open ? 'none' : 'block',
              }}
              open={true}
              onClose={() => setOpen(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                className='customModalContainer'
              >
                <!-- Calendly inline widget begin -->
                <div className="calendly-inline-widget" data-url="https://calendly.com/techforing/techforing-workwise-demo?hide_gdpr_banner=1" style={{ minWidth: '320px', height: '100%' }}>
                </div>
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async>

                </script>
                <!-- Calendly inline widget end -->
                <Cross
                  onClick={() => setOpen(false)}
                  className='absolute top- right- cursor-pointer'
                />
              </Box>
            </Modal>
          } */}
        </div>
      </div>
    </>
  )
}

export default HeroSection;

const TEXTS = ['HR Solution', 'Talent Acquisition', 'Finance Manager'];

const gradient = [
  "conic-gradient(from -74deg at 70.61% 68.88%, rgba(76, 87, 107, 0.05) 0deg, rgba(0, 0, 0, 0.07) 360deg), radial-gradient(50.59% 50.59% at 30.4% 40.06%, rgba(24, 47, 89, 0.20) 0%, rgba(92, 126, 188, 0.20) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)",

  "conic-gradient(from -74deg at 70.61% 68.88%, rgba(76, 87, 107, 0.10) 0deg, rgba(0, 0, 0, 0.14) 360deg), linear-gradient(0deg, rgba(91, 188, 46, 0.25) 0%, rgba(91, 188, 46, 0.25) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)",

  "conic-gradient(from -74deg at 70.61% 68.88%, rgba(76, 87, 107, 0.10) 0deg, rgba(0, 0, 0, 0.14) 360deg), linear-gradient(0deg, rgba(0, 61, 61, 0.70) 0%, rgba(0, 61, 61, 0.70) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)"
]

