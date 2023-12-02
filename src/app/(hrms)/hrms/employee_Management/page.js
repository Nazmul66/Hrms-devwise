"use client"
import "../../../globals.css"
import { useEffect, useState } from "react";
import HRMS_Banner_section from "@/components/HRMS_Banner_section/HRMS_Banner_section";
import Accordion_component from "@/components/Accordion_component/Accordion_component";
import Routes_nav from "@/components/Routes_nav/Routes_nav";
import Manual_HR_section from "@/components/Manual_HR_section/Manual_HR_section";
import Software_details_content from "@/components/Software_details_content/Software_details_content";
import Software_details_content2 from "@/components/Software_details_content2/Software_details_content2";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { usePathname } from "next/navigation";
import HRMS_res_nav from "@/components/HRMS_res_nav/HRMS_res_nav";
import Header from '@/components/Header';

const Employee_management = () => {
    const pathName = usePathname();
    const path = usePathname();
    const splits = path.split("/")[2];

    const [isAnimated, setIsAnimated] = useState(false);
    const [frame1, setFrame1] = useState(false);
    const [frame2, setFrame2] = useState(false);

    // This one is animation sections functionality
    useEffect(() => {
        const mainFrameElement = document.querySelector('.main_frame');
        const frame_1_Element = document.querySelector('.Frame_1');
        const frame_2_Element = document.querySelector('.Frame_2');

        const handleScroll = () => {
            const mainFrameOffsetTop = mainFrameElement.offsetTop;
            const frame_1_OffsetTop = frame_1_Element.offsetTop;
            const frame_2_OffsetTop = frame_2_Element.offsetTop;
            const scrollPosition = window.scrollY + window.innerHeight;

            // Check if the main_frame is within the viewport
            if (scrollPosition >= mainFrameOffsetTop + 50) {
                setTimeout(() => setIsAnimated(true), 1000);
            } else {
                setIsAnimated(false);
            }

            if (scrollPosition >= frame_1_OffsetTop) {
                setTimeout(() => setFrame1(true), 2000);
            } else {
                setFrame1(false);
            }

            if (scrollPosition >= frame_2_OffsetTop) {
                setTimeout(() => setFrame2(true), 3000);
            } else {
                setFrame2(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    // // For Manual_HR_Section system follow up
    const manual_resource = {
        headTitle: "Challenges of Manual HR Management",
        img1: "/HRMS/icons/paper.png",
        img2: "/HRMS/icons/document.png",
        img3: "/HRMS/icons/all_people.png",
        img4: "/HRMS/icons/desktop.png",
        img5: "/HRMS/icons/list.png",
        manualImage: "/HRMS/Employee_management/HRMS_Employee_management.png",
        content1: "Getting stuck with large volumes of paperwork",
        content2: "Losing track of former employees’ data",
        content3: "Overall disarray in administration",
        content4: "Struggles with workplace planning",
        content5: "Inability to maintain a consistent employee evaluation"
    }

    /// employee details list
    const employee_data = [
        {
            img: "/HRMS/Employee_management/icons/Group_01.png",
            head: "Employee Info",
            content: "Easily access and manage current employee information."
        },
        {
            img: "/HRMS/Employee_management/icons/Group_05.png",
            head: "Department Management",
            content: "Organize your workforce into distinct departments for streamlined management."
        },
        {
            img: "/HRMS/Employee_management/icons/Group_02.png",
            head: "Ex-Employee Record",
            content: "Maintain historical records of former employees for compliance and reference.."
        },
        {
            img: "/HRMS/Employee_management/icons/Group_06.png",
            head: "Position Details",
            content: "Keep track of various job positions and roles within your company's hierarchy."
        },
        {
            img: "/HRMS/Employee_management/icons/Group_03.png",
            head: "Admin Info",
            content: "Efficiently oversee administrative roles and permissions within your organization."
        },
        {
            img: "/HRMS/Employee_management/icons/Group_07.png",
            head: "Training Program",
            content: "Plan and monitor employee training and development programs  with precision."
        },
        {
            img: "/HRMS/Employee_management/icons/Group_04.png",
            head: "Employee Evaluation",
            content: "Assess employee performance and track progress effectively."
        },
        {
            img: "/HRMS/Employee_management/icons/Group_08.png",
            head: "Resignation",
            content: "Manage employee resignations and offboarding seamlessly."
        },
    ]

    const details01 = {
        ScreenShot: '/HRMS/Employee_management/screenshot_1.png',
        headTitle: "Automate Record-Keeping for Efficiency",
        content01: "Maintaining and updating employee records manually is time-consuming and riddled with errors.",
        content02: "Streamline your HR operations by automating record management to ensure accurate and up-to-date employee information is readily accessible, right at your fingertips."
    }

    const details02 = {
        ScreenShot: '/HRMS/Employee_management/screenshot_2.png',
        headTitle: "Easily Retrieve Ex-Employee Data!",
        content01: "Without a comprehensive archive of former employee records, it’s challenging and time-consuming to conduct reference checks or evaluate rehiring.",
        content02: "Easily store all the Ex-employee’s historical data with just a few clicks for future reference checks, assess rehiring, or perform any inquiries efficiently."
    }

    const details03 = {
        ScreenShot: '/HRMS/Employee_management/screenshot_3.png',
        headTitle: "Efficiently Track & Relegate Admin Changes",
        content01: "Manual HR administration often faces challenges like administrative chaos, difficulty tracking admin changes, trouble communication efficiency, etc. due to a lack of centralized control and granular permissions, ultimately hindering efficient HR operations.",
        content02: "Save time and effort with centralized administrative control, enhanced data security through granular permissions, and efficient admin change tracking, This feature centralizes admin management, ensures authorized access, and maintains a historical record of changes."
    }

    const details04 = {
        ScreenShot: '/HRMS/Employee_management/screenshot_4.png',
        headTitle: "Gain Comprehensive Insights into Every Department",
        content01: "Manual HR management makes it challenging to gain insights into departmental performance and resource allocation.",
        content02: "Get comprehensive department data, facilitating better insight into every department, optimize resource allocation, and promote collaboration."
    }
    const details05 = {
        ScreenShot: '/HRMS/Employee_management/screenshot_5.png',
        headTitle: "Make Data-Driven Workforce Planning",
        content01: "Identifying staffing needs, and skill gaps, and making informed decisions without sufficient data becomes exceptionally complex.",
        content02: "Simplify the process with a complete list of employee positions and departments, aiding in workforce planning, identifying skill gaps, and optimizing staffing."
    }

    const details06 = {
        ScreenShot: '/HRMS/Employee_management/screenshot_6.png',
        headTitle: "Untangle Training Management Complexity",
        content01: "Manually keeping track of all your employee training needs, progress, and completion can be very cumbersome. What if you could do it from one simple dashboard?",
        content02: "TechForing WorkWise comes with a simplified training management system, Helping HR to keep tabs on employee development, monitor progress, and ensure timely completion."
    }

    const details07 = {
        ScreenShot: '/HRMS/Employee_management/screenshot_7.png',
        headTitle: "Resignations Don’t Have to be Messy",
        content01: "Handling employee resignations without proper documentation and organization can lead to many complications.",
        content02: "Simplify the offboarding process by systematically recording the resignation details, including dates and reasons, making the transition smooth for both employees and HR."
    }

    const details08 = {
        ScreenShot: '/HRMS/Employee_management/screenshot_8.png',
        headTitle: "Inconsistent Employee Evaluation? Never Again!",
        content01: "You can do your best, but conducting consistent and objective employee evaluations will always be challenging, often resulting in inconsistent outcomes.",
        content02: "Automate your evaluation process with the dedicated evaluation feature and feel the change today! Our employee evaluation section streamlines the evaluation process, making it easier to manage and record performance data, track goals, and provide feedback consistently, whenever you need it!"
    }

    ///  Accordion list element
    const accordion_list = [
        {
            headContent: "What is the Employee Management Module, and why is it important for HR operations?",
            paraContent: "The Employee Management Module is a component of HR software that centralizes and automates various HR processes related to employee data, administration, training, evaluations, and more. It is crucial for improving efficiency, organization, and data accuracy in HR operations."
        },
        {
            headContent: "How does the module help with onboarding and offboarding processes?",
            paraContent: "The module streamlines onboarding by automating the collection of new employee information and simplifies offboarding by organizing and documenting the resignation process, making it smoother for both HR and departing employees."
        },
        {
            headContent: "Can I track employee training and development using this module?",
            paraContent: "Yes, the module includes a training feature that allows HR to track employee training progress, completion, and ongoing development initiatives."
        },
        {
            headContent: "How does the module assist in performance evaluations?",
            paraContent: "The module provides a dedicated section for employee evaluations, making it easier to record and manage performance data, set goals, and provide feedback consistently across the organization.4"
        },
        {
            headContent: " Is it possible to customize the module to match our company's specific HR processes and needs?",
            paraContent: "Of course! The employee management modules offer customization options to tailor the system to match your organization's unique HR workflows and requirements."
        },
        {
            headContent: " Does the module support reporting and analytics for HR decision-making?",
            paraContent: "Yes, most modules provide reporting and analytics tools, allowing HR professionals to generate insights and data-driven reports to make informed decisions."
        },
        {
            headContent: "How can the module help with workforce planning and resource allocation??",
            paraContent: "The Employee Position List and Department List features offer insights into staffing needs, departmental performance, and resource allocation, helping HR plan and optimize the workforce effectively."
        }
    ]

    return (
        <>
            {/* header part  */}
            <Header pathName={pathName} />

            {/* responsive Nav routes */}
            <HRMS_res_nav path={path} />

            {/* HRMS banner section */}
            <HRMS_Banner_section />

            {/* navigation header */}
            <div id="management"></div>
            <Routes_nav path={splits} />

            {/* animated section (common)  */}
            <section className='lg:py-[60px] py-[80px] px-4'>
                <div className='main_container flex lg:flex-row flex-col-reverse justify-between items-center'>
                    <div className="lg:w-[45%] w-full">
                        <h2 className='noto text_gradient lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-4 lg:block hidden'>Employee Management Made Easy</h2>
                        <p className='roboto text-light-gray font-light text-[14px] lg:text-[16px] lg:leading-7 leading-[24px] text-justify lg:ml-0 ml-3'>Overwhelming amount of HR processes slowing you down? It’s time to change your approach to HR management! Revolutionize your company’s HR processes and unlock unparalleled efficiency with TechForing WorkWise - Our Employee Module is the ultimate solution for streamlining your HR operations and taking your organization to the next level.</p>
                    </div>

                    <div className="lg:w-[55%] w-full flex lg:flex-row flex-col justify-end lg:mb-0 mb-16">
                        <h2 className='noto text_gradient lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-8 lg:hidden block '>Employee Management Made Easy</h2>
                        <div className='lg:w-[530px] w-[200px] lg:mx-0 mx-auto lg:h-[395px] h-full relative'>
                            <img src="/HRMS/Employee_management/combine_image/blob.png" alt="" />
                            <img src="/HRMS/Employee_management/combine_image/main-frame.png" alt="" className={`main_frame ${isAnimated ? 'animate' : ''}`} />
                            <img src="/HRMS/Employee_management/combine_image/person.png" alt="" className='absolute bottom-[0px] left-[50%] translate-x-[-50%]' />
                            <img src="/HRMS/Employee_management/combine_image/Frame-1.png" alt="" className={`Frame_1 ${frame1 ? 'animate' : ''}`} />
                            <img src="/HRMS/Employee_management/combine_image/Frame-2.png" alt="" className={`Frame_2 ${frame2 ? 'animate' : ''}`} />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4th unique sections */}
            <section className="py-[70px] lg:block hidden">
                <div className="main_container">
                    <h2 className="inter font-bold text-[36px] leading-[56px] text_gradient text-center mb-8 ">Effortless Employee Management</h2>
                    <p className="px-20 mb-10 font-light leading-[26px] text-light-gray text-center">WorkWise Employee Management Module is a sophisticated solution, designed to ease your HR processes with a comprehensive suite of essential features</p>

                    <div className="grid grid-cols-2 gap-x-9 gap-y-5 justify-between">
                        {
                            employee_data.map((employee, index) => <div key={index} className="flex items-center p-5 angular_gradient border-[#182F59] border-l-2 rounded-lg">
                                <img src={employee.img} alt="" />
                                <div className="ml-8">
                                    <h4 className="font-bold leading-6 text-light-gray mb-1">{employee.head}</h4>
                                    <p className="font-light leading-6 text-light-gray">{employee.content}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </section>

            <section className="pt-5 pb-[60px] px-4 lg:hidden block">
                <h2 className="inter font-bold text-[20px] leading-22px] text_gradient mb-4 ">Effortless Employee Management</h2>
                <p className="mb-10 text-[14px] font-light leading-[20px] text-light-gray">WorkWise Employee Management Module is a sophisticated solution, designed to ease your HR processes with a comprehensive suite of essential features</p>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50
                        }
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="pb-[60px]">
                            <div className="p-5 angular_gradient border-[#182F59] border-l-2 rounded-lg mb-5">
                                <div className="flex items-center mb-3">
                                    <img src="/HRMS/Employee_management/icons/Group_01.png" alt="" />
                                    <h2 className="ml-5 font-bold leading-6 text-light-gray">Employee Info</h2>
                                </div>
                                <p className="font-light leading-6 text-light-gray">Easily access and manage current employee information.</p>
                            </div>

                            <div className="p-5 angular_gradient border-[#182F59] border-l-2 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <img src="/HRMS/Employee_management/icons/Group_02.png" alt="" />
                                    <h2 className="ml-5 font-bold leading-6 text-light-gray">Ex-Employee Record</h2>
                                </div>
                                <p className="font-light leading-6 text-light-gray">Maintain historical records of former employees for compliance and reference.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="pb-[60px]">
                            <div className="p-5 angular_gradient border-[#182F59] border-l-2 rounded-lg mb-5">
                                <div className="flex items-center mb-3">
                                    <img src="/HRMS/Employee_management/icons/Group_03.png" alt="" />
                                    <h2 className="ml-5 font-bold leading-6 text-light-gray">Admin Info</h2>
                                </div>
                                <p className="font-light leading-6 text-light-gray">Efficiently oversee administrative roles and permissions within your organization.</p>
                            </div>

                            <div className="p-5 angular_gradient border-[#182F59] border-l-2 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <img src="/HRMS/Employee_management/icons/Group_04.png" alt="" />
                                    <h2 className="ml-5 font-bold leading-6 text-light-gray">Employee Evaluation</h2>
                                </div>
                                <p className="font-light leading-6 text-light-gray">Assess employee performance and track progress effectively.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="pb-[60px]">
                            <div className="p-5 angular_gradient border-[#182F59] border-l-2 rounded-lg mb-5">
                                <div className="flex items-center mb-3">
                                    <img src="/HRMS/Employee_management/icons/Group_05.png" alt="" />
                                    <h2 className="ml-5 font-bold leading-6 text-light-gray">Department Management</h2>
                                </div>
                                <p className="font-light leading-6 text-light-gray">Organize your workforce into distinct departments for streamlined management.</p>
                            </div>

                            <div className="p-5 angular_gradient border-[#182F59] border-l-2 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <img src="/HRMS/Employee_management/icons/Group_06.png" alt="" />
                                    <h2 className="ml-5 font-bold leading-6 text-light-gray">Position Details</h2>
                                </div>
                                <p className="font-light leading-6 text-light-gray">Keep track of various job positions and roles within your company's hierarchy.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="pb-[60px]">
                            <div className="p-5 angular_gradient border-[#182F59] border-l-2 rounded-lg mb-5">
                                <div className="flex items-center mb-3">
                                    <img src="/HRMS/Employee_management/icons/Group_07.png" alt="" />
                                    <h2 className="ml-5 font-bold leading-6 text-light-gray">Training Program</h2>
                                </div>
                                <p className="font-light leading-6 text-light-gray">Plan and monitor employee training and development programs  with precision.</p>
                            </div>

                            <div className="p-5 angular_gradient border-[#182F59] border-l-2 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <img src="/HRMS/Employee_management/icons/Group_08.png" alt="" />
                                    <h2 className="ml-5 font-bold leading-6 text-light-gray">Resignation</h2>
                                </div>
                                <p className="font-light leading-6 text-light-gray">Manage employee resignations and offboarding seamlessly.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
            {/* 4th unique sections */}

            {/* business strength policy */}
            <Manual_HR_section manual_resource={manual_resource} />

            {/* Business team section  (common) */}
            <section className="bg-[#FAFAFA] shadow-shadow1x text-[#FAFAFA] lg:my-20 my-0">
                <div className="main_container flex justify-between items-center lg:py-[110px] py-[20px] px-4 relative">
                    <div className="w-[50%] ml-auto lg:pl-[70px] pl-0">
                        <h3 className="inter font-light lg:text-[36px] text-[16px] mb-3 pr-0 lg:pr-[162px] text-left lg:leading-[48px] leading-[22px]"><span className="text_gradient">Still Stuck With </span> <span className="text_gradient font-semibold">Manual HR</span> <span className="text_gradient">Process?</span></h3>
                        <p className="text-green font-light lg:text-[18px] pr-0 lg:pr-[190px] text-[9px] lg:leading-[27px] leading-[16px] text-left"><span className="text_gradient">Dive into Employee Data, Training Insights, and More With</span> <span className="text-green font-bold lg:text-[22px] text-[9px]">TechForing Workwise!</span></p>

                        <div className="lg:mt-10 mt-5 text-left">
                            <a href="" className="action_btn lg:text-[20px] text-[16px] lg:px-[28px] px-[14px] lg:py-[10px] py-2">Get Started</a>
                        </div>
                    </div>

                    <div className="image_container lg:translate-x-[-110px] translate-x-0">
                        <img src="/HRMS/Employee_management/employee_business_team.png" alt="" className="business_image" />
                    </div>
                </div>
            </section>

            {/* Left data schedule field  part-1 (common) */}
            <section className='lg:py-[100px] py-[60px] px-4 overflow-hidden lg:mb-20 mb-0'>
                <div className='main_container flex_container relative'>
                    <div className='lg:w-[50%] w-full'>
                        <Software_details_content details={details01} />
                    </div>

                    <div className='div_shape_line_right lg:block hidden'></div>
                    <div className='absolute top-[50%] translate-y-[-50%] translate-x-[75px] right-0 w-[640px] h-[440px] lg:block hidden'>
                        <img src="/HRMS/Employee_management/screenshot_1.png" alt="" className='w-full h-full' />
                    </div>
                </div>
            </section>

            {/* right data schedule field  part-2 (common) */}
            <section className='lg:py-[100px] py-[40px] px-4 overflow-hidden lg:mb-20 mb-8'>
                <div className='main_container flex_container relative'>
                    <div className='div_shape_line_left lg:block hidden'></div>
                    <div className='absolute top-[50%] translate-y-[-50%] translate-x-[-25px] left-0 w-[640px] h-[440px] lg:block hidden'>
                        <img src='/HRMS/Employee_management/screenshot_2.png' alt="" className='w-full h-full lg:object-contain object-none' />
                    </div>

                    <div className='lg:w-[50%] lg:ml-auto ml-0 w-full lg:translate-x-[42px] translate-x-0'>
                        <Software_details_content2 details2={details02} />
                    </div>
                </div>


            </section>

            {/* working flow section (common) */}
            <section className='working_flow lg:mb-16 mb-0'>
                <div className='max-w-[1040px] mx-auto flex justify-between items-center px-4 relative lg:py-[100px] py-5'>
                    <div className="w-[50%]">
                        <h2 className='inter lg:text-[37.5px] text-[15px] mb-2 font-semibold lg:leading-[48px] leading-[22px]'><span className='text_gradient'>Elevate Your</span> <span className='text-green'>HR</span> <span className='text_gradient'>Workflow</span></h2>
                        <h4 className='inter lg:text-[18px] text-[7.2px] mb-2 lg:leading-9 leading-2'>Experience the Future of HR management Today !</h4>
                        <div className="lg:mt-10 mt-2 text-left">
                            <a href="" className="action_btn lg:text-[16px] text-[8.8px] lg:px-7 px-3 lg:py-[10px] py-[6px]">Get A Demo</a>
                        </div>
                    </div>
                    <img src="/HRMS/Employee_management/business_person_banner.png" alt="" className='lg:object-none object-cover w-[45%] h-[100%] absolute top-0 right-0 lg:translate-x-[154px] translate-x-0' />
                </div>
            </section>

            {/* Left data schedule field part-3 (common) */}
            <section className='lg:py-[100px] py-[40px] px-4 overflow-hidden lg:mb-20 mb-0'>
                <div className='main_container flex_container relative'>
                    <div className='lg:w-[50%] w-full'>
                        <Software_details_content details={details03} />
                    </div>

                    <div className='div_shape_line_right lg:block hidden'></div>
                    <div className='absolute top-[50%] translate-y-[-50%] translate-x-[75px] right-0 w-[640px] h-[440px] lg:block hidden'>
                        <img src='/HRMS/Employee_management/screenshot_3.png' alt="" className='w-full h-full' />
                    </div>
                </div>
            </section>

            {/* right data schedule field part-4 (common) */}
            <section className='lg:py-[100px] py-[40px] px-4 overflow-hidden lg:mb-20 mb-8'>
                <div className='main_container flex_container relative'>
                    <div className='div_shape_line_left lg:block hidden'></div>
                    <div className='absolute top-[50%] translate-y-[-50%] translate-x-[-25px] left-0 w-[640px] h-[440px] lg:block hidden'>
                        <img src='/HRMS/Employee_management/screenshot_4.png' alt="" className='w-full h-full lg:object-contain object-none' />
                    </div>

                    <div className='lg:w-[50%] lg:ml-auto ml-0 w-full lg:translate-x-[42px] translate-x-0'>
                        <Software_details_content2 details2={details04} />
                    </div>
                </div>
            </section>

            {/* Left data schedule field part-5 (common) */}
            <section className='lg:py-[100px] py-[40px] px-4 overflow-hidden lg:mb-16 mb-0'>
                <div className='main_container flex_container relative'>
                    <div className='lg:w-[50%] w-full'>
                        <Software_details_content details={details05} />
                    </div>

                    <div className='div_shape_line_right lg:block hidden'></div>
                    <div className='absolute top-[50%] translate-y-[-50%] translate-x-[75px] right-0 w-[640px] h-[440px] lg:block hidden'>
                        <img src='/HRMS/Employee_management/screenshot_1.png' alt="" className='w-full h-full' />
                    </div>
                </div>
            </section>

            {/* next level section (common) */}
            <section className='next_level px-4 relative lg:py-0 py-5 lg:mb-20 mb-0 lg:mt-0 mt-8'>
                <img src="/HRMS/Employee_management/person-2.png" alt="" className=' h-[100%] absolute top-0 right-[10px] lg:hidden block' />
                <div className='main_container flex justify-between items-center'>
                    <div className="w-[50%]">
                        <h4 className='inter lg:text-[18px] text-[7.2px] mb-2 lg:leading-9 leading-2'>Efficiency, Accuracy and Transparency</h4>
                        <h2 className='inter lg:text-[37.5px] text-[15px] font-semibold lg:leading-[48px] leading-[22px]'><span className='text_gradient'>Take Your</span> <span className='text-green'>HR</span> <span className='text_gradient'>Management to the Next Level!</span></h2>
                        <div className="lg:mt-10 mt-2 text-left">
                            <a href="" className="lg:text-[16px] text-[8.8px] action_btn lg:px-7 px-3 lg:py-[10px] py-[6px]">Start Today</a>
                        </div>
                    </div>
                    <div className="w-[50%] lg:block hidden">
                        <img src="/HRMS/Employee_management/person-2.png" alt="" className='w-[420px] mx-auto' />
                    </div>
                </div>
            </section>

            {/* right data schedule field part-6 (common) */}
            <section className='lg:py-[100px] py-[40px] px-4 overflow-hidden lg:mb-20 mb-8'>
                <div className='main_container flex_container relative'>
                    <div className='div_shape_line_left lg:block hidden'></div>
                    <div className='absolute top-[50%] translate-y-[-50%] translate-x-[-25px] left-0 w-[640px] h-[440px] lg:block hidden'>
                        <img src='/HRMS/Employee_management/screenshot_6.png' alt="" className='w-full h-full lg:object-contain object-none' />
                    </div>

                    <div className='lg:w-[50%] lg:ml-auto ml-0 w-full lg:translate-x-[42px] translate-x-0'>
                        <Software_details_content2 details2={details06} />
                    </div>
                </div>
            </section>

            {/* Left data schedule field part-7  (common) */}
            <section className='lg:py-[100px] py-[40px] px-4 overflow-hidden lg:mb-16 mb-0'>
                <div className='main_container flex_container relative'>
                    <div className='lg:w-[50%] w-full'>
                        <Software_details_content details={details07} />
                    </div>

                    <div className='div_shape_line_right lg:block hidden'></div>
                    <div className='absolute top-[50%] translate-y-[-50%] translate-x-[75px] right-0 w-[640px] h-[440px] lg:block hidden'>
                        <img src='/HRMS/Employee_management/screenshot_7.png' alt="" className='w-full h-full' />
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="shadow-shadow1x bg-[#FFF] overflow-x-clip lg:mt-40 mt-10 lg:mb-14 mb-5">
                <div className="lg:py-28 py-6 px-4 main_container relative flex justify-between items-center ">
                    <div className="lg:w-[55%] w-[50%]">
                        <h2 className="noto font-extralight lg:text-[28px] text-[14px] lg:leading-[44px] leading-[22px] lg:mb-5 mb-3 text_gradient">Over <span className="font-normal lg:text-[36px] text-[16px]">95%</span> of businesses still use <span className="font-normal lg:text-[36px] text-[16px]">paper-based</span> documentation</h2>

                        <div className="lg:mt-6 hidden mt-5 lg:flex items-center">
                            <p><span className='inter font-semibold lg:text-[42px] text-[20px]'>Join the </span> <span className='inter text-green font-semibold lg:text-[52px] text-[24px]'> 5%</span> </p>

                            <a href="" className="action_btn lg:ml-6 ml-0 text-[14px] lg:px-[28px] px-[14px] py-[6px]">Get Started</a>
                        </div>

                        <p className="mb-2"><span className='inter font-semibold lg:text-[42px] text-[18px]'>Join the </span> <span className='inter text-green font-semibold lg:text-[52px] text-[20px'> 5%</span> </p>
                        <a href="" className="action_btn text-[14px] px-5 py-[6px]">Get Started</a>

                    </div>

                    <img src="/HRMS/document_management/C_CTA.png" alt="" className="absolute lg:bottom-[-26px] bottom-[-14px] lg:right-0 right-[-24px] lg:w-[550px] w-[240px]"  />
                </div>
            </section>


            {/* right data schedule field part-8 (common) */}
            <section className='lg:py-[100px] py-[40px] px-4 overflow-hidden lg:mb-0 mb-0'>
                <div className='main_container flex_container relative'>
                    <div className='div_shape_line_left lg:block hidden'></div>
                    <div className='absolute top-[50%] translate-y-[-50%] translate-x-[-25px] left-0 w-[640px] h-[440px] lg:block hidden'>
                        <img src='/HRMS/Employee_management/screenshot_8.png' alt="" className='w-full h-full lg:object-contain object-none' />
                    </div>

                    <div className='lg:w-[50%] lg:ml-auto ml-0 w-full lg:translate-x-[42px] translate-x-0'>
                        <Software_details_content2 details2={details08} />
                    </div>
                </div>
            </section>

            {/* Frequently Ask Questions */}
            <Accordion_component accordion_list={accordion_list} />

            {/* footer bottom CTA (common) */}
            <section className="footer_bottom_cta_employee">
                <div className="main_container">
                    <div className="lg:w-[50%] w-full mx-auto text-center">
                        <img src="/HRMS/Employee_management/footer_bottom_cta.png" alt="" className="block mx-auto mb-5 lg:w-[198px] w-[100px]" />
                        <h2 className="inter lg:text-[28px] text-[15px] text-light-white2 font-normal"><span className="text-green font-semibold">Embrace</span> the Future of HR Management</h2>
                        <div className="lg:mt-[30px] mt-5">
                            <a className="action_btn2 lg:text-[20px] text-[15px] lg:px-6 px-5 lg:py-[12px] py-2">Start Your Journey</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Employee_management;


