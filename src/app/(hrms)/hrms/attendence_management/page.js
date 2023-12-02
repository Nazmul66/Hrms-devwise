"use client"
import React from 'react';
import { useEffect, useState } from "react";
import HRMS_Banner_section from "@/components/HRMS_Banner_section/HRMS_Banner_section";
import Routes_nav from "@/components/Routes_nav/Routes_nav";
import Manual_HR_section from '@/components/Manual_HR_section/Manual_HR_section';
import Software_details_content from '@/components/Software_details_content/Software_details_content';
import Software_details_content2 from '@/components/Software_details_content2/Software_details_content2';
import Accordion_component from '@/components/Accordion_component/Accordion_component';
import { usePathname } from 'next/navigation';
import HRMS_res_nav from '@/components/HRMS_res_nav/HRMS_res_nav';
import Header from '@/components/Header';

const attendence_management = () => {
    const pathName = usePathname();
    const path = usePathname();
    const splits = path.split("/")[2];

    const [isAnimated, setIsAnimated] = useState(false);
    const [frame1, setFrame1] = useState(false);
    const [frame2, setFrame2] = useState(false);

    // This one is animation sections functionality
    useEffect(() => {
        const mainFrameElement = document.querySelector('.main_frame');
        const frame_1_Element = document.querySelector('.attend_Frame_1');
        const frame_2_Element = document.querySelector('.attend_Frame_2');

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


    // For Manual_HR_Section system follow up
    const manual_resource = {
        headTitle: "Reasons to Upgrade from Manual Attendance Tracking",
        img1: "/HRMS/attendence_management/icons/calender.png",
        img2: "/HRMS/attendence_management/icons/multi_scrow.png",
        img3: "/HRMS/attendence_management/icons/user_circle.png",
        img4: "/HRMS/attendence_management/icons/coin.png",
        img5: "/HRMS/attendence_management/icons/doc_error.png",
        manualImage: "/HRMS/attendence_management/HRMS_attendence_management.png",
        content1: "Increased risk of errors in attendance data, leading to inaccurate records and payroll discrepancies",
        content2: "Slower and inefficient when compared to automated systems",
        content3: "Manual processes become increasingly challenging to manage effectively as organizations grow",
        content4: "The need for additional administrative personnel to manage manual attendance processes can inflate costs.",
        content5: "Manual records are more susceptible to data loss, theft, or unauthorized access compared to digital systems."
    }

    const details01 = {
        ScreenShot: '/HRMS/attendence_management/screenshot_1.png',
        headTitle: "Error-Free Attendance Reports",
        content01: "Manual attendance tracking is prone to errors, making it challenging to maintain accurate records and calculate payroll correctly.",
        content02: "With automated attendance tracking, HR professionals can ensure precision and reduce errors, providing them with reliable data for payroll processing and compliance."
    }

    const details02 = {
        ScreenShot: '/HRMS/attendence_management/screenshot_2.png',
        headTitle: "Minimize Wasted Time in Your HR",
        content01: "HR professionals often have to spend significant time addressing attendance-related queries and disputes from employees.",
        content02: "Eliminate all attendance-related confusions and disputes with TechForing WorkWise. The Attendance management feature also provides the employees with self-service tools to manage their attendance records."
    }

    const details03 = {
        ScreenShot: '/HRMS/attendence_management/screenshot_3.png',
        headTitle: "Trouble-Free Leave Management",
        content01: "Manual leave management involves paperwork, approval delays, and tracking different leave types.",
        content02: "Leave “leave-management complexities” behind, our automated leave management simplifies the process, simplifies leave approvals, tracks various types of leaves, and provides clear insights into remaining leave balances."
    }

    const details04 = {
        ScreenShot: '/HRMS/attendence_management/screenshot_4.png',
        headTitle: "Easily Integrate New Hires Into the System",
        content01: "Onboarding new employees into the attendance system can be time-consuming and error-prone, leading to delays and wasted time.",
        content02: "Utilize WorkWise’s streamlined onboarding process and integrate new hires into the attendance system with zero wasted time, reducing manual tasks and ensuring precise record-keeping from day one."
    }

    const details05 = {
        ScreenShot: '/HRMS/attendence_management/screenshot_5.png',
        headTitle: "Complete Control Over Shift Scheduling",
        content01: "Manual roster management can lead to errors, scheduling conflicts, and inefficient workforce management.",
        content02: "Experience total control over shift management with WorkWise, track shifts accurately, schedule different shifts easily, reduce errors, enhance coordination among employees, and ensure efficient workforce planning with just a few clicks."
    }


    ///  Accordion list element
    const accordion_list = [
        {
            headContent: "What is the Centralized Noticeboard Module, and how does it benefit HR operations?",
            paraContent: "The Centralized Noticeboard Module is a feature within our HRMS software designed to streamline communication, event tracking, employee separation processes, announcements, and employee feedback collection. It benefits HR operations by simplifying these tasks, enhancing communication, and improving overall efficiency."
        },
        {
            headContent: " How does the Event Tracking feature work, and why is it essential for HR professionals?",
            paraContent: "The Event Tracking feature allows HR to centrally manage meetings, holidays, and celebrations. It is essential for HR professionals as it reduces scheduling conflicts, enhances coordination, and ensures everyone is well-informed about upcoming events, improving overall productivity."
        },
        {
            headContent: "How does the Centralized Noticeboard Module simplify the employee separation process?",
            paraContent: "The module simplifies employee separation by offering the Termination and Resignation features. It allows HR to efficiently manage terminations, exit interviews, document handling, and resignation processes, ensuring a smooth and compliant transition for departing employees."
        },
        {
            headContent: "How can the Centralized Announcements feature improve organization-wide communication?",
            paraContent: "The Centralized Announcements feature empowers HR to share important updates, notices, and announcements with precision. HR can target announcements to specific departments or the entire organization, ensuring consistent communication and reducing the risk of misunderstandings."
        },
        {
            headContent: "What are the benefits of the Empower Employee Feedback feature, and how does it work?",
            paraContent: "The Empower Employee Feedback feature enables HR to create automated surveys with carefully crafted questions. Employees can participate securely from their dashboard, submitting concerns, complaints, suggestions, or feedback. This enhances employee engagement, fosters a better work environment, and ensures that employee voices are heard and addressed."
        },
        {
            headContent: " How does the Centralized Noticeboard Module contribute to improved compliance management?",
            paraContent: "The module improves compliance management by ensuring that critical compliance-related notifications are consistently communicated to employees. This reduces the risk of compliance breaches and legal/regulatory issues associated with missed notifications."
        },
        {
            headContent: "Can the Centralized Noticeboard Module be customized to suit our organization's specific needs?",
            paraContent: "Yes, our Centralized Noticeboard Module is designed to be customizable. You can tailor it to meet the unique communication and HR process needs of your organization, ensuring that it aligns with your specific requirements and workflows."
        },
        {
            headContent: "Is the Centralized Noticeboard Module user-friendly, and does it require extensive training for HR staff?",
            paraContent: "The module is designed to be user-friendly, with an intuitive interface. Minimal training is typically required for HR staff to use it effectively. We also offer support and resources to help you get the most out of the module."
        },
        {
            headContent: "How can our organization get started with implementing the Centralized Noticeboard Module?",
            paraContent: "To get started, simply reach out to our support team or sales representatives. We will guide you through the implementation process, provide training as needed, and help you tailor the module to your organization's requirements."
        },
        {
            headContent: "What kind of technical support and assistance does your company provide for users of the Centralized Noticeboard Module?",
            paraContent: "We offer comprehensive technical support and assistance to our users. Our dedicated support team is available to address any questions or issues you may encounter while using the module. Additionally, we provide resources, such as documentation and training materials, to help you maximize the benefits of the module."
        }
    ]

    const indicator_1 = () => {
        const verticle_div_control = document.querySelector(".verticle_div_control");
        const indicator_1 = document.querySelector(".indicator_1");
        const indicator_2 = document.querySelector(".indicator_2");
        const indicator_3 = document.querySelector(".indicator_3");
        const indicator_4 = document.querySelector(".indicator_4");

        indicator_1.style.background = "#182F59";
        indicator_2.style.background = "#CCC"
        indicator_3.style.background = "#CCC"
        indicator_4.style.background = "#CCC"

        verticle_div_control.style.transform = "translateY(0%)";
    }

    const indicator_2 = () => {
        const verticle_div_control = document.querySelector(".verticle_div_control");
        const indicator_1 = document.querySelector(".indicator_1");
        const indicator_2 = document.querySelector(".indicator_2");
        const indicator_3 = document.querySelector(".indicator_3");
        const indicator_4 = document.querySelector(".indicator_4");

        indicator_1.style.background = "#CCC";
        indicator_2.style.background = "#182F59";
        indicator_3.style.background = "#CCC";
        indicator_4.style.background = "#CCC";

        verticle_div_control.style.transform = "translateY(-27%)";
    }

    const indicator_3 = () => {
        const verticle_div_control = document.querySelector(".verticle_div_control");
        const indicator_1 = document.querySelector(".indicator_1");
        const indicator_2 = document.querySelector(".indicator_2");
        const indicator_3 = document.querySelector(".indicator_3");
        const indicator_4 = document.querySelector(".indicator_4");

        indicator_1.style.background = "#CCC";
        indicator_2.style.background = "#CCC";
        indicator_3.style.background = "#182F59";
        indicator_4.style.background = "#CCC";

        verticle_div_control.style.transform = "translateY(-51%)";
    }

    const indicator_4 = () => {
        const verticle_div_control = document.querySelector(".verticle_div_control");
        const indicator_1 = document.querySelector(".indicator_1");
        const indicator_2 = document.querySelector(".indicator_2");
        const indicator_3 = document.querySelector(".indicator_3");
        const indicator_4 = document.querySelector(".indicator_4");

        indicator_1.style.background = "#CCC";
        indicator_2.style.background = "#CCC";
        indicator_3.style.background = "#CCC";
        indicator_4.style.background = "#182F59";

        verticle_div_control.style.transform = "translateY(-76%)";
    }


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
            <section className='lg:py-[60px] py-16 px-4' >
                <div className='main_container flex lg:flex-row flex-col-reverse justify-between items-center'>
                    <div className="lg:w-[45%] w-full">
                        <h2 className='noto text_gradient lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-4 lg:block hidden'>Automate Attendance Management</h2>
                        <p className='roboto text-light-gray font-light text-[14px] lg:text-[16px] lg:leading-7 leading-[24px] text-justify lg:ml-0 ml-3'>Tracking employee attendance shouldn’t involve battling with tedious spreadsheets and paperwork in today’s world. Embrace the future with TechForing WorkWise. Managing leave requests, onboarding new employees, and juggling shift schedules should not be an uphill battle anymore, revolutionize your HR process and say goodbye to the hassles of manual attendance management today.</p>
                    </div>


                    <div className="lg:w-[55%] w-full flex lg:flex-row flex-col justify-end lg:mb-0 mb-16">
                        <h2 className='noto text_gradient lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-8 lg:hidden block'>Automate Attendance Management</h2>

                        <div className='lg:w-[530px] w-[200px] lg:mx-0 mx-auto lg:h-[395px] h-full relative'>
                            <img src="/HRMS/attendence_management/combine_image/blob.png" alt="" />
                            <img src='/HRMS/attendence_management/combine_image/main-frame.png' alt="" className={`main_frame ${isAnimated ? 'animate' : ''}`} />
                            <img src="/HRMS/attendence_management/combine_image/person.png" alt="" className='absolute bottom-[5px] left-[50%] translate-x-[-50%]' />
                            <img src="/HRMS/attendence_management/combine_image/Frame-1.png" alt="" className={`attend_Frame_1 absolute lg:bottom-[55px] bottom-0 lg:left-[-45px] left-[16px] ${frame1 ? 'animate' : ''}`} />
                            <img src="/HRMS/attendence_management/combine_image/Frame-2.png" alt="" className={`attend_Frame_2 absolute lg:bottom-[-5px] bottom-[-30px] lg:right-[180px] right-[56px] ${frame2 ? 'animate' : ''}`} />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4th section individual section start */}
            <section className="lg:block hidden py-20">
                <div className="main_container">
                    <h2 className="text-center inter mb-8 text-[36px] font-bold leading-[50px] text_gradient">Optimize Workforce Efficiency </h2>
                    <p className="mb-16 leading-6 text-light-gray px-14 text-center">Experience a seamless transition from manual processes to a world of precision and productivity. Let our attendance management module help you to save time, reduce errors, and make data-driven decisions with confidence, so you can focus on what matters most.</p>
                    <div className="grid grid-cols-2 justify-between gap-[80px]">

                        <div className="relative z-10 translate-x-[40px] translate-y-[40px] border_right border_bottom">
                            <div className="px-[40px] py-[60px] bg-light-white2 h-[300px]">
                                <div className="absolute top-0 left-0 w-full h-full bg-light-white -z-10 translate-x-[-40px] translate-y-[-40px]"></div>
                                <div className="flex items-end mb-5">
                                    <img src="/HRMS/attendence_management/icons/Layer_1.png" alt="" />
                                    <h2 className="ml-4 font-bold text-[18px] leading-6 text-light-gray">Effortless Attendance Tracking</h2>
                                </div>
                                <p className="font-light leading-6 text-light-gray text-justify">Streamline attendance monitoring with precision, from daily check-ins to monthly reporting, while your employees can keep track of their attendance with just one click.</p>
                            </div>
                        </div>

                        <div className="relative z-10 translate-x-[-40px] translate-y-[40px] border_bottom">
                            <div className="px-[40px] py-[60px] bg-light-white2 h-[300px]">
                                <div className="absolute top-0 left-0 w-full h-full bg-light-white -z-10 translate-x-[40px] translate-y-[-40px]"></div>
                                <div className="flex items-end mb-5">
                                    <img src="/HRMS/attendence_management/icons/Layer_2.png" alt="" />
                                    <h2 className="ml-4 font-bold text-[18px] leading-6 text-light-gray">Trouble-Free Leave Management</h2>
                                </div>
                                <p className="font-light leading-6 text-light-gray text-justify">Simplify leave management. Handle leave requests with a simple, click-based approval process and insightful leave insights.</p>
                            </div>
                        </div>

                        <div className="relative z-10 translate-x-[40px] translate-y-[-40px] border_right">
                            <div className="px-[40px] py-[60px] bg-light-white2 h-[300px]">
                                <div className="absolute top-0 left-0 w-full h-full bg-light-white -z-10 translate-x-[-40px] translate-y-[40px]"></div>
                                <div className="flex items-end mb-5">
                                    <img src="/HRMS/attendence_management/icons/Layer_3.png" alt="" />
                                    <h2 className="ml-4 font-bold text-[18px] leading-6 text-light-gray">Seamless Onboarding</h2>
                                </div>
                                <p className="font-light leading-6 text-light-gray text-justify">Forget wasting time on manual employee onboarding and welcome new hires into the attendance system with just a few clicks.</p>
                            </div>
                        </div>

                        <div className="relative z-10 translate-x-[-40px] translate-y-[-40px] ">
                            <div className="px-[40px] py-[60px] bg-light-white2 h-[300px]">
                                <div className="absolute top-0 left-0 w-full h-full bg-light-white -z-10 translate-x-[40px] translate-y-[40px]"></div>
                                <div className="flex items-end mb-5">
                                    <img src="/HRMS/attendence_management/icons/Layer_4.png" alt="" />
                                    <h2 className="ml-4 font-bold text-[18px] leading-6 text-light-gray">Simplified Shift Tracking</h2>
                                </div>
                                <p className="font-light leading-6 text-light-gray text-justify">Make shift-scheduling confusions a thing of the past. Maximize workforce productivity with easy shift scheduling and attendance data synchronization.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* responsive carousel */}
            <section className='px-4 lg:hidden block pb-20'>
                <h2 className="text-center inter text-[20px] mb-5 font-bold leading-[50px] text_gradient">Optimize Workforce Efficiency </h2>

                <div className="w-[90%] relative z-10 translate-x-[35px] translate-y-[35px]">
                    <div className="bg-light-white2">
                        <div className='main_verticle_div'>
                            <div className='verticle_div_control'>
                                <div className='content_div_control p-[30px] bg-light-white2'>
                                    <div className="flex items-end mb-5">
                                        <img src="/HRMS/attendence_management/icons/Layer_1.png" alt="" className='w-[58px] h-[58px] ' />
                                        <h2 className="ml-4 font-bold text-[16px] leading-6 text-light-gray">Effortless Attendance Tracking</h2>
                                    </div>
                                    <p className="font-light leading-6 text-light-gray text-justify">Streamline attendance monitoring with precision, from daily check-ins to monthly reporting, while your employees can keep track of their attendance with just one click.</p>
                                </div>

                                <div className='content_div_control p-[30px] bg-light-white2'>
                                    <div className="flex items-end mb-5">
                                        <img src="/HRMS/attendence_management/icons/Layer_2.png" alt="" className='w-[58px] h-[58px] ' />
                                        <h2 className="ml-4 font-bold text-[16px] leading-6 text-light-gray">Effortless Attendance Tracking</h2>
                                    </div>
                                    <p className="font-light leading-6 text-light-gray text-justify">Simplify leave management. Handle leave requests with a simple, click-based approval process and insightful leave insights.</p>
                                </div>

                                <div className='content_div_control p-[30px] bg-light-white2'>
                                    <div className="flex items-end mb-5">
                                        <img src="/HRMS/attendence_management/icons/Layer_3.png" alt="" className='w-[48px] h-[48px]r' />
                                        <h2 className="ml-4 font-bold text-[16px] leading-6 text-light-gray">Seamless Onboarding</h2>
                                    </div>
                                    <p className="font-light leading-6 text-light-gray text-justify">Forget wasting time on manual employee onboarding and welcome new hires into the attendance system with just a few clicks.</p>
                                </div>

                                <div className='content_div_control p-[30px] bg-light-white2'>
                                    <div className="flex items-end mb-5">
                                        <img src="/HRMS/attendence_management/icons/Layer_4.png" alt="" className='w-[48px] h-[48px]' />
                                        <h2 className="ml-4 font-bold text-[16px] leading-6 text-light-gray">Simplified Shift Tracking</h2>
                                    </div>
                                    <p className="font-light leading-6 text-light-gray text-justify">Make shift-scheduling confusions a thing of the past. Maximize workforce productivity with easy shift scheduling and attendance data synchronization.</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-0 left-0 w-full h-full bg-light-white -z-10 translate-x-[-30px] translate-y-[-30px]"></div>
                    </div>

                    {/* indicator btn */}
                    <div className='indicator_div '>
                        <span className='indicator_1' onClick={indicator_1}></span>
                        <span className='indicator_2' onClick={indicator_2}></span>
                        <span className='indicator_3' onClick={indicator_3}></span>
                        <span className='indicator_4' onClick={indicator_4}> </span>
                    </div>
                </div>

                <p className="text-[14px] mt-20 leading-6 text-light-gray text-justify">Experience a seamless transition from manual processes to a world of precision and productivity. Let our attendance management module help you to save time, reduce errors, and make data-driven decisions with confidence, so you can focus on what matters most.</p>
            </section>
            {/* 4th section individual section end */}

            {/* business strength policy */}
            <Manual_HR_section manual_resource={manual_resource} />

            {/* Business team section  (common) */}
            <section className="bg-[#FAFAFA] shadow-shadow1x text-[#FAFAFA] lg:my-20 my-0">
                <div className="main_container flex justify-between items-center lg:py-[110px] py-[20px] px-4 relative">
                    <div className="w-[51%] ml-auto lg:pl-[18px] pl-0">
                        <h3 className="inter font-light lg:text-[36px] text-[16px] mb-3 lg:text-center text-left lg:leading-[48px] leading-[22px]"><span className="text_gradient">Simplify </span> <span className="text-green font-semibold">Attendance</span> <span className="text_gradient">Management</span></h3>
                        <p className="font-medium lg:text-[18px] text-[9px] lg:leading-[36px] leading-[16px] lg:text-center text-left text_gradient">Boost Productivity and Empower Your Workforce with Our Smart Employee Attendance Management Solution</p>

                        <div className="lg:mt-10 mt-5 lg:text-center text-left">
                            <a href="" className="action_btn lg:text-[20px] text-[16px] lg:px-[28px] px-[14px] lg:py-[10px] py-2">Get Started!</a>
                        </div>
                    </div>

                    <div className="image_container lg:translate-x-[-110px] translate-x-0">
                        <img src="/HRMS/attendence_management/attendence_business_team.png" alt="" className="w-ful h-full" />
                    </div>
                </div>
            </section>

            {/* Left data schedule field  part-1 (common) */}
            <section className='lg:py-[120px] py-[40px] px-4 overflow-hidden lg:mb-20 mb-0'>
                <div className='main_container flex_container relative'>
                    <div className='lg:w-[50%] w-full'>
                        <Software_details_content details={details01} />
                    </div>

                    <div className='absolute top-[50%] right-0 w-[40%] h-[160%] bg-[#EAEAEA] translate-x-[100px] translate-y-[-50%] border_top_left_radius lg:block hidden'></div>
                    <div className='absolute top-[50%] translate-y-[-50%] translate-x-[75px] right-0 w-[640px] h-[440px] lg:block hidden'>
                        <img src="/HRMS/attendence_management/screenshot_1.png" alt="" className='w-full h-full' />
                    </div>
                </div>
            </section>

            {/* right data schedule field  part-2 (common) */}
            <section className='lg:py-[100px] py-[40px] px-4 overflow-hidden lg:mb-20 mb-8'>
                <div className='main_container flex_container relative'>
                    <div className='div_shape_line_left lg:block hidden'></div>
                    <div className='absolute top-[50%] translate-y-[-50%] translate-x-[-25px] left-0 w-[640px] h-[440px] lg:block hidden'>
                        <img src='/HRMS/attendence_management/screenshot_2.png' alt="" className='w-full h-full lg:object-contain object-none' />
                    </div>

                    <div className='lg:w-[50%] lg:ml-auto ml-0 w-full'>
                        <Software_details_content2 details2={details02} />
                    </div>
                </div>
            </section>

            {/* Employee organization incomplete */}
            <section className='attendence_organized lg:mb-16 mb-8'>
                <div className='main_container flex lg:flex-row flex-col justify-between items-center lg:gap-6 gap-0'>
                    <div className='lg:w-[55%] w-full'>
                        <p className='inter font-extralight text-[#FFF] lg:text-center text-left leading-10 text-[28px]'><span className='lg:text-[92px] text-[32px] sura font-medium'>80<span className='lg:text-[46px] text-[11.5px]'>%</span></span> of</p>
                        <p className='inter font-extralight text-[#FFF] lg:text-center text-left lg:text-[28px] text-[12px]'>Timesheets Have to be Corrected</p>

                        <div className='lg:mt-6 mt-1'>
                            <h3 className='inter lg:text-center text-left lg:text-[37.5px] text-[16px] lg:leading-[50px] text-[#FFF] font-semibold'>Enjoy <span className='text-green'>Error-Free</span> Timesheets</h3>
                            <div className="lg:mt-[30px] mt-5 lg:text-center text-left ">
                                <a className="action_btn2 lg:px-7 px-5 lg:py-[12px] py-2">Start Today !</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Left data schedule field  part-3 (common) */}
            <section className='lg:py-[110px] py-[40px] px-4 overflow-hidden lg:mb-16 mb-0'>
                <div className='main_container flex_container relative'>
                    <div className='lg:w-[50%] w-full'>
                        <Software_details_content details={details03} />
                    </div>

                    <div className='absolute top-[50%] right-0 w-[40%] h-[156%] bg-[#EAEAEA] translate-x-[100px] translate-y-[-50%] border_bottom_left_radius lg:block hidden'></div>
                    <div className='absolute top-[50%] translate-y-[-52%] translate-x-[20px] right-0 w-[640px] h-[440px] lg:block hidden'>
                        <img src="/HRMS/attendence_management/screenshot_3.png" alt="" className='w-full lg:h-[500px] h-full' />
                    </div>
                </div>
            </section>

            {/* right data schedule field  part-4 (common) */}
            <section className='lg:py-[90px] py-[40px] px-4 overflow-hidden lg:mb-16 mb-8'>
                <div className='main_container flex_container relative'>
                    <div className='absolute top-[50%] left-0 w-[40%] h-[140%] bg-[#EAEAEA] translate-x-[-100px] translate-y-[-50%] border_top_right_radius lg:block hidden'></div>
                    <div className='absolute top-[50%] translate-y-[-50%] translate-x-[-25px] left-0 w-[640px] h-[440px] lg:block hidden'>
                        <img src="/HRMS/attendence_management/screenshot_4.png" alt="" className='w-full h-full lg:object-contain object-none' />
                    </div>

                    <div className='lg:w-[50%] lg:ml-auto ml-0 w-full lg:translate-x-[42px] translate-x-0'>
                        <Software_details_content2 details2={details04} />
                    </div>
                </div>
            </section>

            {/* Business team section part-2 (common) */}
            <section className="bg-[#FAFAFA] shadow-shadow1x text-[#FAFAFA] lg:my-20 my-0 overflow-hidden">
                <div className="main_container flex justify-between items-center lg:py-[110px] py-[20px] px-4 relative">
                    <div className="w-[51%] lg:pl-[18px] pl-0">
                        <h3 className="sura lg:text-[82px] text-[41px] mb-3 lg:text-center text-left lg:leading-[48px] leading-[22px] text-green">88<span className="lg:text-[41px] text-[20px]">%</span></h3>
                        <p className="inter font-medium lg:text-[18px] text-[9px] lg:leading-[36px] leading-[16px] lg:text-center text-left"><span className='text_gradient font-extralight'>of the </span><span className='lg:text-[22px] text-[14px] font-semibold text-green'>“Best in Class"</span> <span className="text_gradient font-extralight">Organizations Automate Their Time and Attendance Data Collection</span></p>

                        <div className="lg:mt-10 mt-5 lg:text-center text-left">
                            <a href="" className="action_btn text-[16px] lg:px-[28px] px-[18px] lg:py-2 py-[6px]">Start Today</a>
                        </div>
                    </div>

                    <div className="image_container2 lg:translate-x-[110px] translate-x-0">
                        <img src="/HRMS/attendence_management/attendence_business_team_2.png" alt="" className="w-ful h-full" />
                    </div>
                </div>
            </section>

            {/* Left data schedule field  part-5 (common) */}
            <section className='lg:py-[80px] py-[40px] px-4 overflow-hidden lg:mb-16 mb-0'>
                <div className='main_container flex_container relative'>
                    <div className='lg:w-[50%] w-full'>
                        <Software_details_content details={details05} />
                    </div>

                    <div className='absolute top-[50%] right-0 w-[55%] h-[140%] bg-[#EAEAEA] translate-x-[100px] translate-y-[-50%] border_bottom_left_radius lg:block hidden'></div>
                    <div className='absolute top-[50%] translate-y-[-50%] translate-x-[75px] right-0 w-[640px] h-[440px] lg:block hidden'>
                        <img src="/HRMS/attendence_management/screenshot_5.png" alt="" className='w-full h-full' />
                    </div>
                </div>
            </section>

            {/* Frequently Ask Questions */}
            <Accordion_component accordion_list={accordion_list} />

            {/* footer bottom CTA (common) */}
            <section className="footer_bottom_cta_attendence">
                <div className="main_container">
                    <div className="lg:w-[70%] w-full mx-auto text-center">
                        <img src="/HRMS/attendence_management/footer_bottom_cta.png" alt="" className="block mx-auto mb-5 lg:w-[198px] w-[100px]" />
                        <p className='lg:text-[18px] text-[12px] lg:font-semibold font-normal inter text-light-white2 lg:mb-2 mb-2'>Stop Wasting Time on Manual Attendance Tracking</p>
                        <h2 className="inter lg:text-[37.5px] text-[20px] text-light-white2 font-normal">Get Our<span className="text-green font-semibold"> Automated</span> Attendance System Today!</h2>
                        <div className="lg:mt-[30px] mt-5">
                            <a className="action_btn2 lg:text-[20px] text-[15px] lg:px-6 px-5 lg:py-[12px] py-2">Try For Free</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default attendence_management;