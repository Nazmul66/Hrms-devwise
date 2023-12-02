"use client"
import React from 'react';
import "../../../globals.css"
import { useEffect, useState } from "react";
import HRMS_Banner_section from "@/components/HRMS_Banner_section/HRMS_Banner_section";
import Routes_nav from '@/components/Routes_nav/Routes_nav';
import Manual_HR_section from '@/components/Manual_HR_section/Manual_HR_section';
import Software_details_content from '@/components/Software_details_content/Software_details_content';
import Software_details_content2 from '@/components/Software_details_content2/Software_details_content2';
import Accordion_component from '@/components/Accordion_component/Accordion_component';
import { usePathname } from 'next/navigation';
import HRMS_res_nav from '@/components/HRMS_res_nav/HRMS_res_nav';
import Header from '@/components/Header';

const Noticeboard_management = () => {
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
        const frame_2_Element = document.querySelector('.notice_Frame_2');

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
        headTitle: "What Happens Without a Centralized Noticeboard?",
        img1: "/HRMS/noticeBoard_management/icons/user.png",
        img2: "/HRMS/noticeBoard_management/icons/alert_msg.png",
        img3: "/HRMS/noticeBoard_management/icons/yes_no.png",
        img4: "/HRMS/noticeBoard_management/icons/document_lock.png",
        img5: "/HRMS/noticeBoard_management/icons/group_discuss.png",
        manualImage: "/HRMS/noticeBoard_management/HRMS_noticeBoard_management.png",
        content1: "Manually notifying each employee is a time-consuming process that impacts HR operations",
        content2: "Manual notifications are error-prone and can lead to missed or delayed messages",
        content3: "Important updates might not reach employees in time, impacting decision-making and responsiveness",
        content4: "Employees may miss notifications regarding sensitive, security-related issues in the manual notification process",
        content5: "Poor communication can lead to dissatisfaction among employees, affecting morale"
    }

    const details01 = {
        ScreenShot: '/HRMS/noticeBoard_management/screenshot_1.png',
        headTitle: "Overcome Event Tracking Challenges",
        content01: "Coordinating and communicating about events, such as meetings, holidays, and celebrations, can be time-consuming and prone to errors when done manually.",
        content02: "The Noticeboard Module streamlines event tracking by providing a centralized platform where HR can easily create, update, and share event information with all employees. This ensures that everyone is on the same page and reduces the risk of scheduling conflicts and misunderstandings."
    }

    const details02 = {
        ScreenShot: '/HRMS/noticeBoard_management/screenshot_1.png',
        headTitle: "Simplify Employee Termination",
        content01: "Managing employee terminations and resignations manually can be a complex and potentially error-prone process, leading to compliance and operational risks.",
        content02: "The Termination feature of the module simplifies the offboarding process. HR can efficiently add employees to the termination list, conduct exit interviews, and manage documents, ensuring a smooth, discreet, and compliant transition for departing employees."
    }

    const details03 = {
        ScreenShot: '/HRMS/noticeBoard_management/screenshot_3.png',
        headTitle: "Centralize Organizational Announcements",
        content01: "Sharing important updates and notices across the organization can be challenging for HR, causing inconsistent communication and confusion.",
        content02: "The Notice/Announcement feature lets your HR centralize and customize announcements. This ensures that every employee, or specific department, receives essential information consistently and promptly, reducing the risk of miscommunication."
    }

    const details04 = {
        ScreenShot: '/HRMS/noticeBoard_management/screenshot_4.png',
        headTitle: "Hear Everyone’s Voices with Custom Surveys",
        content01: "Gathering employee feedback and complaints manually can be time-consuming and may not provide the confidentiality and security required for honest feedback.",
        content02: "The Survey feature allows your HR to create automated surveys with carefully crafted questions. Employees can participate in surveys directly from their dashboard, securely submitting their concerns, complaints, suggestions, or feedback. This fosters a better work environment and ensures that employee voices are heard and addressed."
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
            headContent: " How does the Centralized Noticeboard Module simplify the employee separation process?",
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
            headContent: "How does the Centralized Noticeboard Module contribute to improved compliance management?",
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

    const handleSlide1 = () => {
        const sub_color_line = document.querySelector(".sub_color_line");
        const para_resize_notice = document.querySelector(".para_resize_notice");
        const head_resize_notice = document.querySelector(".head_resize_notice");
        const click_btn_2 = document.querySelector(".click_btn2");
        const click_btn_3 = document.querySelector(".click_btn3");
        const click_btn_4 = document.querySelector(".click_btn4");

        sub_color_line.style.width = "0%";
        click_btn_2.style.background = "transparent";
        click_btn_3.style.background = "transparent";
        click_btn_4.style.background = "transparent";
        para_resize_notice.style.transform = "translateX(0%)";
        head_resize_notice.style.transform = "translateX(0%)";
    }

    const handleSlide2 = () => {
        const sub_color_line = document.querySelector(".sub_color_line");
        const para_resize_notice = document.querySelector(".para_resize_notice");
        const head_resize = document.querySelector(".head_resize_notice");
        const click_btn_2 = document.querySelector(".click_btn2");
        const click_btn_3 = document.querySelector(".click_btn3");
        const click_btn_4 = document.querySelector(".click_btn4");

        sub_color_line.style.width = "35%";
        click_btn_2.style.background = "conic-gradient(from -47deg at 70.61% 68.88%, rgba(76, 87, 107, 0.05) 0deg, rgba(0, 0, 0, 0.07) 360deg), radial-gradient(50.59% 50.59% at 30.4% 40.06%, rgba(24, 47, 89, 0.20) 0%, rgba(92, 126, 188, 0.20) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)";
        click_btn_3.style.background = "transparent";
        click_btn_4.style.background = "transparent";
        para_resize_notice.style.transform = "translateX(-24.5%)";
        head_resize.style.transform = "translateX(-24.5%)";
    }

    const handleSlide3 = () => {
        const sub_color_line = document.querySelector(".sub_color_line");
        const para_resize_notice = document.querySelector(".para_resize_notice");
        const head_resize_notice = document.querySelector(".head_resize_notice");
        const click_btn_2 = document.querySelector(".click_btn2");
        const click_btn_3 = document.querySelector(".click_btn3");
        const click_btn_4 = document.querySelector(".click_btn4");

        sub_color_line.style.width = "60%";
        click_btn_2.style.background = "conic-gradient(from -47deg at 70.61% 68.88%, rgba(76, 87, 107, 0.05) 0deg, rgba(0, 0, 0, 0.07) 360deg), radial-gradient(50.59% 50.59% at 30.4% 40.06%, rgba(24, 47, 89, 0.20) 0%, rgba(92, 126, 188, 0.20) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)";
        click_btn_3.style.background = "conic-gradient(from -47deg at 70.61% 68.88%, rgba(76, 87, 107, 0.05) 0deg, rgba(0, 0, 0, 0.07) 360deg), radial-gradient(50.59% 50.59% at 30.4% 40.06%, rgba(24, 47, 89, 0.20) 0%, rgba(92, 126, 188, 0.20) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)";
        click_btn_4.style.background = "transparent";
        para_resize_notice.style.transform = "translateX(-50.5%)";
        head_resize_notice.style.transform = "translateX(-50.5%)";
    }

    const handleSlide4 = () => {
        const sub_color_line = document.querySelector(".sub_color_line");
        const para_resize_notice = document.querySelector(".para_resize_notice");
        const head_resize_notice = document.querySelector(".head_resize_notice");
        const click_btn_2 = document.querySelector(".click_btn2");
        const click_btn_3 = document.querySelector(".click_btn3");
        const click_btn_4 = document.querySelector(".click_btn4");

        sub_color_line.style.width = "100%";
        click_btn_2.style.background = "conic-gradient(from -47deg at 70.61% 68.88%, rgba(76, 87, 107, 0.05) 0deg, rgba(0, 0, 0, 0.07) 360deg), radial-gradient(50.59% 50.59% at 30.4% 40.06%, rgba(24, 47, 89, 0.20) 0%, rgba(92, 126, 188, 0.20) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)";
        click_btn_3.style.background = "conic-gradient(from -47deg at 70.61% 68.88%, rgba(76, 87, 107, 0.05) 0deg, rgba(0, 0, 0, 0.07) 360deg), radial-gradient(50.59% 50.59% at 30.4% 40.06%, rgba(24, 47, 89, 0.20) 0%, rgba(92, 126, 188, 0.20) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)";
        click_btn_4.style.background = "conic-gradient(from -47deg at 70.61% 68.88%, rgba(76, 87, 107, 0.05) 0deg, rgba(0, 0, 0, 0.07) 360deg), radial-gradient(50.59% 50.59% at 30.4% 40.06%, rgba(24, 47, 89, 0.20) 0%, rgba(92, 126, 188, 0.20) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)";
        para_resize_notice.style.transform = "translateX(-76%)";
        head_resize_notice.style.transform = "translateX(-75.5%)";
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
            <section className='lg:pt-[60px] lg:pb-[60px] pt-[80px] pb-8 px-4'>
                <div className='main_container flex lg:flex-row flex-col-reverse justify-between items-center'>
                    <div className="lg:w-[45%] w-full">
                        <h2 className='noto text_gradient lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-4 lg:block hidden'>Centralized Noticeboard for Easy Communication</h2>
                        <p className='roboto text-light-gray font-light text-[14px] lg:text-[16px] lg:leading-7 leading-[24px] text-justify lg:ml-0 ml-3'>Tired of manual HR announcements and scattered notifications? Transform your communication method with TechForing WorkWise - the Centralized Noticeboard feature. Share vital updates and simplify internal communications with a single click. Say goodbye to chaotic notification juggling, and say hello to the on-click solution for all your organization’s internal communications!</p>
                    </div>

                    <div className="lg:w-[55%] w-full flex lg:flex-row flex-col justify-end lg:mb-0 mb-16">
                        <h2 className='noto text_gradient lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-8 lg:hidden block'>Centralized Noticeboard for Easy Communication</h2>
                        <div className='lg:w-[530px] w-[200px] lg:mx-0 mx-auto lg:h-[395px] h-full relative'>
                            <img src="/HRMS/noticeBoard_management/combine_image/blob.png" alt="" />
                            <img src="/HRMS/noticeBoard_management/combine_image/main-frame.png" alt="" className={`main_frame ${isAnimated ? 'animate' : ''}`} />
                            <img src="/HRMS/noticeBoard_management/combine_image/person.png" alt="" className='absolute bottom-[0px] left-[50%] translate-x-[-50%]' />
                            <img src="/HRMS/noticeBoard_management/combine_image/Frame-1.png" alt="" className={`Frame_1 ${frame1 ? 'animate' : ''}`} />
                            <img src="/HRMS/noticeBoard_management/combine_image/Frame-2.png" alt="" className={`notice_Frame_2 absolute lg:bottom-[-15px] bottom-[-12px] lg:left-[110px] right-[35px] ${frame2 ? 'animate' : ''}`} />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4th section individual section start */}
            <section className='lg:block hidden py-[60px] '>
                <h2 className="text-center inter mb-8 text-[36px] font-bold leading-[50px] text_gradient">Optimize Communication for Enhanced Employee Engagement</h2>
                <p className="mb-16 leading-6 text-light-gray px-[165px] text-center">The Centralized Noticeboard module is your one platform to reach every employee in one click, share vital updates, and keep your workforce in the loop</p>
                <div className='main_container flex justify-between items-center gap-8'>

                    <div className="w-[45%] relative z-20">
                        <img src="/HRMS/noticeBoard_management/growth_team.png" alt="" className="shadow-shadow3.5x relative z-10" />
                    </div>

                    <div className="w-[55%] relative z-10">
                        <div className='absolute top-[50%] translate-y-[-50%] left-[-240px] w-[100%] h-[110%] bg-[#EAEAEA] rounded-[100%]'>
                            <div className='absolute top-0 right-0 w-[50%] h-full bg-[#FFF]'></div>
                        </div>
                        <div className=''>

                            <div className="relative flex items-center p-5 border-[#182F59] border-l-2 rounded-lg shadow-shadow0.5x mb-8 bg-[#FFF]">
                                <div className="ml-3">
                                    <h4 className="font-bold leading-6 text-light-gray mb-1">Event Tracking</h4>
                                    <p className="font-light leading-6 text-light-gray">Effortlessly manage meetings, holidays, and celebrations from a centralized hub.</p>
                                </div>
                            </div>

                            <div className="relative flex items-center p-5 border-[#182F59] border-l-2 rounded-lg shadow-shadow0.5x mb-8 bg-[#FFF]">
                                <div className="ml-3">
                                    <h4 className="font-bold leading-6 text-light-gray mb-1">Employee Separation</h4>
                                    <p className="font-light leading-6 text-light-gray"> Keep your employees informed about workplace changes (resignations/terminations) so they can take appropriate action.</p>
                                </div>
                            </div>

                            <div className="relative flex items-center p-5 border-[#182F59] border-l-2 rounded-lg shadow-shadow0.5x mb-8 bg-[#FFF]">
                                <div className="ml-3">
                                    <h4 className="font-bold leading-6 text-light-gray mb-1">Centralized Announcements</h4>
                                    <p className="font-light leading-6 text-light-gray"> Share important updates and notices on time, reaching everyone or specific departments effortlessly.</p>
                                </div>
                            </div>

                            <div className="relative flex items-center p-5 border-[#182F59] border-l-2 rounded-lg shadow-shadow0.5x bg-[#FFF]">
                                <div className="ml-3">
                                    <h4 className="font-bold leading-6 text-light-gray mb-1">Gather Employee Feedback</h4>
                                    <p className="font-light leading-6 text-light-gray"> Create custom monthly surveys and collect feedback and confidential complaints securely, fostering a better work environment and employee satisfaction.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* responsive for custom carousel/slider */}
            <div className='px-4 py-10 lg:hidden block mb-16 overflow-x-hidden'>
                <h2 className="inter mb-6 text-[20px] font-bold leading-[30px] text_gradient">Say Goodbye to Manual Fund Hassles</h2>
                <p className="mb-10 leading-6 text-justify text-light-gray relative z-10">Simplify HR financial tasks and ensure compliance, free yourself from spreadsheets, and calculations with our Fund Management feature, so you can focus on what truly matters: your employees’ financial well-being and your organization’s financial stability.</p>

                <div className='relative mb-10'>
                    <img src="/HRMS/noticeBoard_management/growth_team.png" alt="" className="shadow-shadow3.5x relative z-10" />
                    <div className='absolute top-[50%] translate-y-[-50%] right-0 translate-x-[200px] w-[100%] h-[150%] bg-[#EAEAEA] rounded-[100%]'>
                        <div className='absolute top-0 right-0 w-[50%] h-full bg-transparent'></div>
                    </div>
                </div>

                <div className='mx-auto mt-0 mb-[50px] rounded-[4px] w-[90%] px-6 py-7 shadow-shadow0.5x relative z-10 bg-[#FFF]'>
                    <div className='mb-4'>
                        <div className='head_resize_div'>
                            <div className='head_resize_notice'>
                                <div className='head_part_div'>
                                    <h3 className='font-bold leading-[22px] text-light-gray'>Event Tracking</h3>
                                </div>
                                <div className='head_part_div'>
                                    <h3 className='font-bold leading-[22px] text-light-gray'>Employee Separation</h3>
                                </div>
                                <div className='head_part_div'>
                                    <h3 className='font-bold leading-[22px] text-light-gray'>Centralized Announcements</h3>
                                </div>
                                <div className='head_part_div'>
                                    <h3 className='font-bold leading-[22px] text-light-gray'>Gather Employee Feedback</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='para_resize_div'>
                        <div className='para_resize_notice'>
                            <div className='part_part_div'>
                                <p className='font-light text-[14px] text-light-gray leading-[22px] text-justify'>Effortlessly manage meetings, holidays, and celebrations from a centralized hub.</p>
                            </div>
                            <div className='part_part_div'>
                                <p className='font-light text-[14px] leading-[22px] text-justify text-light-gray'>Keep your employees informed about workplace changes (resignations /terminations) so they can take appropriate action.</p>
                            </div>
                            <div className='part_part_div'>
                                <p className='font-light text-[14px] leading-[22px] text-justify text-light-gray'>Share important updates and notices on time, reaching everyone or specific departments effortlessly.</p>
                            </div>
                            <div className='part_part_div'>
                                <p className='font-light text-[14px] leading-[22px] text-justify text-light-gray'>Create custom monthly surveys and collect feedback and confidential complaints securely, fostering a better work environment and employee satisfaction.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-[70%] mx-auto'>
                    <ul className='slide_btn flex justify-between items-center relative'>
                        <div className='color_line'>
                            <div className='sub_color_line'></div>
                        </div>
                        <span className='slide_1' onClick={handleSlide1}>
                            <span className='click_btn1'></span>
                        </span>
                        <span className='slide_2' onClick={handleSlide2}>
                            <span className='click_btn2'></span>
                        </span>
                        <span className='slide_3' onClick={handleSlide3}>
                            <span className='click_btn3'></span>
                        </span>
                        <span className='slide_4' onClick={handleSlide4}>
                            <span className='click_btn4'></span>
                        </span>
                    </ul>
                </div>
            </div>
            {/* 4th section individual section end */}

            {/* business strength policy */}
            <Manual_HR_section manual_resource={manual_resource} />

            {/* Business team section  (common) */}
            <section className="bg-[#FAFAFA] shadow-shadow1x text-[#FAFAFA] lg:mt-20 lg:mb-20 mt-0 mb-10">
                <div className="main_container flex justify-between items-center lg:py-[110px] py-[20px] px-4 relative">
                    <div className="lg:w-[51%] w-[50%] ml-auto lg:pl-[70px] pl-0">
                        <h3 className="inter font-light lg:text-[36px] text-[16px] mb-3 lg:text-center text-left lg:leading-[48px] leading-[22px]"><span className="text_gradient">Keep Your Workforce </span> <span className="text-green font-semibold">Informed, Engaged, & Aligned</span></h3>
                        <p className="font-medium lg:text-[18px] text-[9px] lg:leading-[36px] leading-[16px] lg:text-center text-left text_gradient">Ensure Effective Communication and Enhance Employee Engagement Today!</p>

                        <div className="lg:mt-10 mt-5 lg:text-center text-left">
                            <a href="" className="action_btn lg:text-[20px] text-[16px] lg:px-[28px] px-[14px] lg:py-[10px] py-2">Take A Tour</a>
                        </div>
                    </div>

                    <div className="image_container lg:translate-x-[-110px] translate-x-0">
                        <img src="/HRMS/noticeBoard_management/noticeBoard_business_team.png" alt="" className="w-full h-full" />
                    </div>
                </div>
            </section>

            {/* Left data schedule field  part-1 (common) */}
            <section className='lg:py-[80px] py-[40px] px-4 overflow-hidden lg:mb-16 mb-12'>
                <div className='main_container flex_container relative'>
                    <div className='lg:w-[50%] w-full'>
                        <Software_details_content details={details01} />
                    </div>

                    <div className='absolute top-[50%] right-0 w-[55%] h-[120%] bg-[#EAEAEA] translate-x-[100px] translate-y-[-50%] border_bottom_left_radius lg:block hidden'></div>
                    <div className='absolute top-[50%] translate-y-[-50%] translate-x-[75px] right-0 w-[640px] h-[440px] lg:block hidden'>
                        <img src="/HRMS/noticeBoard_management/screenshot_1.png" alt="" className='w-full h-full' />
                    </div>
                </div>
            </section>

            {/* Employee organization */}
            <section className='noticeBoard_organized lg:mb-16 mb-8'>
                <div className='main_container flex lg:flex-row flex-col justify-between items-center lg:gap-6 gap-0'>
                    <div className='lg:w-[50%] w-full'>
                        <p className='inter lg:text-[24px] text-[14px] lg:leading-[58px] leading-[28px] font-light text-center text-[#FFF] lg:px-0 px-10'>Communication Impacts Daily Task Efficiency of  <span className="font-semibold lg:text-[82.5px] text-[28px]"><span className="sura">97<span className='lg:text-[41px] text-[14px]'>%</span> </span></span> Employees</p>
                    </div>

                    <div className='middle_hr mt-4 mb-4'></div>

                    <div className='lg:w-[45%] w-full left_line'>
                        <h3 className='inter lg:text-[37.5px] text-[16px] lg:leading-[38.5px] leading-[24px] text-center lg:text-left w-[60%] lg:w-full mx-auto lg:mx-0 text-[#FFF]'><span className='text-green font-semibold'>Improve</span> Your Organizational Communication Today</h3>
                        <div className="lg:mt-[30px] mt-5 text-center lg:text-left">
                            <a className="action_btn2 lg:px-7 px-5 lg:py-[12px] py-2">Get Started</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* right data schedule field  part-2 (common) */}
            <section className='lg:py-[80px] py-[40px] px-4 overflow-hidden lg:mb-16 mb-8'>
                <div className='main_container flex_container relative'>
                    <div className='absolute top-[50%] left-0 w-[40%] h-[120%] bg-[#EAEAEA] translate-x-[-100px] translate-y-[-50%] border_top_right_radius lg:block hidden'></div>
                    <div className='absolute top-[50%] translate-y-[-50%] translate-x-[-25px] left-0 w-[640px] h-[440px] lg:block hidden'>
                        <img src="/HRMS/noticeBoard_management/screenshot_2.png" alt="" className='w-full h-full lg:object-contain object-none' />
                    </div>

                    <div className='lg:w-[50%] lg:ml-auto ml-0 w-full lg:translate-x-[42px] translate-x-0'>
                        <Software_details_content2 details2={details02} />
                    </div>
                </div>
            </section>

            {/* Left data schedule field  part-3 (common) */}
            <section className='lg:py-[80px] py-[40px] px-4 overflow-hidden lg:mb-16 mb-0'>
                <div className='main_container flex_container relative'>
                    <div className='lg:w-[50%] w-full'>
                        <Software_details_content details={details03} />
                    </div>

                    <div className='absolute top-[50%] right-0 w-[55%] h-[100%] bg-[#EAEAEA] translate-x-[100px] translate-y-[-50%] border_bottom_left_radius lg:block hidden'></div>
                    <div className='absolute top-[50%] translate-y-[-50%] translate-x-[75px] right-0 w-[640px] h-[440px] lg:block hidden'>
                        <img src="/HRMS/noticeBoard_management/screenshot_3.png" alt="" className='w-full h-full' />
                    </div>
                </div>
            </section>

            {/* next level section (common) */}
            <section className='next_level px-4 relative lg:py-0 py-5 lg:mb-20 mb-0 lg:mt-0 mt-8'>
                <img src="/HRMS/noticeBoard_management/person-2.png" alt="" className='h-[100%] absolute top-0 right-[6px] lg:hidden block' />
                <div className='main_container flex justify-between items-center'>
                    <div className="w-[51%]">
                        <h4 className='inter lg:text-[18px] text-[7.2px] mb-2 lg:leading-9 leading-2'>Improved Internal Communication Can Boost Productivity By Up To <span className='sura text_gradient font-black'>30%</span></h4>
                        <h2 className='inter lg:text-[37.5px] text-[15px] font-semibold lg:leading-[48px] leading-[18px]'><span className='text_gradient'>Take</span> <span className='text-green'>Control</span> <span className='text_gradient'>of Your Internal Communication Flow</span></h2>
                        <div className="lg:mt-10 mt-2 text-left">
                            <a href="" className="lg:text-[16px] text-[8.8px] action_btn lg:px-7 px-3 lg:py-[10px] py-[6px] ">Try Today</a>
                        </div>
                    </div>
                    <div className="w-[48%] lg:block hidden">
                        <img src="/HRMS/noticeBoard_management/person-2.png" alt="" className='w-[420px] mx-auto' />
                    </div>
                </div>
            </section>

            {/* right data schedule field  part-4 (common) */}
            <section className='lg:py-[80px] py-[40px] px-4 overflow-hidden lg:mb-16 mb-8'>
                <div className='main_container flex_container relative'>
                    <div className='absolute top-[50%] left-0 w-[40%] h-[120%] bg-[#EAEAEA] translate-x-[-100px] translate-y-[-50%] border_top_right_radius lg:block hidden'></div>
                    <div className='absolute top-[50%] translate-y-[-50%] translate-x-[-25px] left-0 w-[640px] h-[440px] lg:block hidden'>
                        <img src="/HRMS/noticeBoard_management/screenshot_4.png" alt="" className='w-full h-full lg:object-contain object-none' />
                    </div>

                    <div className='lg:w-[50%] lg:ml-auto ml-0 w-full lg:translate-x-[42px] translate-x-0'>
                        <Software_details_content2 details2={details04} />
                    </div>
                </div>
            </section>

            {/* Frequently Ask Questions */}
            <Accordion_component accordion_list={accordion_list} />

            {/* footer bottom CTA (common) */}
            <section className="footer_bottom_cta_noticeBoard">
                <div className="main_container">
                    <div className="lg:w-[50%] w-full mx-auto text-center">
                        <img src="/HRMS/noticeBoard_management/footer_bottom_cta.png" alt="" className="block mx-auto mb-5 lg:w-[198px] w-[100px]" />
                        <p className="lg:text-[18px] text-[12px] lg:font-semibold font-normal inter text-light-white2 lg:mb-2 mb-2">Ready to Simplify Your Organization’s Communications?</p>
                        <h2 className="inter lg:text-[37.5px] text-[20px] text-light-white2 font-normal">Try Our <span className="text-green font-semibold">Centralized</span> Noticeboard</h2>
                        <div className="lg:mt-[30px] mt-5">
                            <a className="action_btn2 lg:text-[20px] text-[15px] lg:px-6 px-5 lg:py-[12px] py-2">Talk To Us</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Noticeboard_management;