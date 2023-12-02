"use client"
import React from 'react';
import Finance_Banner_section from '@/components/Finance_Banner_section/Finance_Banner_section';
import Finance_routes_nav from '@/components/Finance_routes_nav/Finance_routes_nav';
import { usePathname } from 'next/navigation';
import Accordion_component from '@/components/Accordion_component/Accordion_component';
import Manual_Finanace_section from '@/components/Manual_Finanace_section/Manual_Finanace_section';
import Finance_software_details from '@/components/Finance_software_details/Finance_software_details';
import Finance_software_details_two from '@/components/Finance_software_details_two/Finance_software_details_two';
import Finance_res_nav from '@/components/Finance_res_nav/Finance_res_nav';
import Header from '@/components/Header';

const Tax = () => {
    const pathName = usePathname();
    const path = usePathname();
    const splits = path.split("/")[2];

    // For Manual_Finance_Section system follow up
    const manual_resource = {
        headTitle: "The Hidden Costs of Manual Tax Handling",
        img1 : "/Finance/Tax/icons/calculator.png",
        img2 : "/Finance/Tax/icons/calender.png",
        img3 : "/Finance/Tax/icons/doc_search.png",
        img4 : "/Finance/Tax/icons/doc_secure.png",
        img5 : "/Finance/Tax/icons/cash_analysis.png",
        manualImage : "/Finance/Tax/Finance_tax.png",
        content1: "Manual errors in tax calculations and reporting can lead to financial misstatements, potentially triggering audits and investigations by tax authorities.",
        content2: "Missing tax filing deadlines can result in late fees and interest charges, increasing your organization's tax liabilities and affecting cash flow.",
        content3: "Failing to identify and claim eligible tax credits and deductions can result in higher tax liabilities and missed opportunities to reduce tax expenses.",
        content4: "Manual record keeping may lead to data security vulnerabilities, potentially exposing sensitive tax-related information to unauthorized access or breaches.",
        content5: "Cumulative effects of compliance issues, penalties, and increased tax liabilities can lead to financial strain and potential budgetary crises for your organization."
    }

    const details01 = {
        ScreenShot: '/Finance/Tax/screenshot_1.png',
        headTitle: "Complete Tax Overview",
        content01: "HR professionals often struggle to keep track of multiple tax responsibilities and deadlines manually, leading to missed payments and compliance issues.",
        content02: "The Tax Dashboard provides an at-a-glance view of all tax-related tasks, deadlines, and statuses, allowing HR professionals to stay organized and on top of their tax responsibilities easily. Automated reminders further help prevent missed deadlines."
    }
    
    const details02 = {
        ScreenShot: '/Finance/Tax/screenshot_2.png',
        headTitle: "Automated Tax Calculation",
        content01: "Manually calculating tax rates can take a lot of time and may introduce errors, leading to inaccurate deductions and potential compliance issues.",
        content02: "The Tax Rate feature streamlines tax rate calculations, reducing any chances of errors. The feature also keeps tax rate information up-to-date, ensuring accurate deductions and compliance with changing regulations."
    }

    const details03 = {
        ScreenShot: '/Finance/Tax/screenshot_3.png',
        headTitle: "Comprehensive Tax Reports",
        content01: "Generating comprehensive tax reports manually can be a time-consuming process, delaying financial analysis and decision-making.",
        content02: "The Tax Report feature automates the report generation process, providing HR professionals with instant access to detailed tax data, accelerating financial analysis, and facilitating on-time decision-making."
    }
    
    const details04 = {
        ScreenShot: '/Finance/Tax/screenshot_4.png',
        headTitle: "Streamlined VAT Reports",
        content01: "Managing VAT reports manually for international transactions can be complex, and introduce errors and potential compliance issues.",
        content02: "The VAT report streamlines VAT reporting and makes international transactions easier with customizable filters for specific criteria (country name, bank name, VAT type, etc.), simplifying compliance in multiple regions."
    }

    ///  Accordion list element
    const accordion_list = [
        {
            headContent: " What is the HRMS Tax Management Module, and why is it important for HR professionals?",
            paraContent: "The HRMS Tax Management Module is a software solution designed to streamline tax-related tasks and ensure financial compliance. It's essential for HR professionals because it simplifies tax management, optimizes accuracy, and provides valuable insights through detailed reports, ultimately reducing the risk of costly errors and penalties."
        },
        {
            headContent: " How does the Tax Dashboard benefit HR teams?",
            paraContent: "The Tax Dashboard offers an intuitive overview of tax responsibilities, payments, due amounts, balances, and tax statuses. It benefits HR teams by providing a centralized, at-a-glance view of tax-related tasks, helping them stay organized, avoid missed deadlines, and enhance tax compliance."
        },
        {
            headContent: "Can the Tax Management Module help us calculate tax rates accurately?",
            paraContent: "Yes, the module simplifies tax rate calculations, reducing the risk of errors. It also keeps tax rate information up-to-date to ensure precise deductions and compliance with changing regulations."
        },
        {
            headContent: "How does the Tax Report feature improve tax-related reporting and analysis?",
            paraContent: "The Tax Report feature automates the generation of comprehensive tax reports, providing HR professionals with instant access to detailed tax data. This accelerates financial analysis, facilitates timely decision-making, and minimizes the delays associated with manual reporting."
        },
        {
            headContent: "What advantages does the VAT Report feature offer for international transactions?",
            paraContent: "The VAT Report feature streamlines VAT reporting for international transactions, reducing complexity and the potential for errors. It offers customizable filters, making it easier to ensure compliance in diverse regions and provides detailed VAT insights."
        },
        {
            headContent: "How can the Tax Management Module save time and resources for HR teams?",
            paraContent: "By automating tax-related tasks and calculations, the module can save HR teams significant time and resources. It reduces manual data entry, minimizes errors, and frees up HR professionals to focus on more strategic HR initiatives."
        },
        {
            headContent: "Is data security a concern with the Tax Management Module?",
            paraContent: "Employees can easily access their fund details, promoting transparency and trust. They can view their contributions, balances, and other relevant information with a single click."
        },
        {
            headContent: "How do I get started with the Fund Management Module?",
            paraContent: "Data security is a priority. The module ensures the secure handling of sensitive tax-related information and provides tools to maintain compliance with data protection regulations."
        },
        {
            headContent: "What kind of support and training options are available for users implementing the Tax Management Module?",
            paraContent: "Users typically have access to training resources, documentation, and customer support to ensure a smooth implementation process. Additionally, some providers may offer personalized training sessions and ongoing support."
        },
        {
            headContent: "How can we get started with the Tax Management Module for our organization?",
            paraContent: "You can typically get started by contacting the module provider or requesting a demo. They can guide you through the implementation process, customization options, and provide pricing information based on your organization's needs."
        }
    ]

    const indicator_1 = () =>{
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

    const indicator_2 = () =>{
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

    const indicator_3 = () =>{
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

    const indicator_4 = () =>{
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
            <Header pathName = { pathName } />

            {/* Finance responsive routes */}  
            <Finance_res_nav path={ path } />

           {/* Finance banner section */}  
            <Finance_Banner_section />

            {/* navigation header */}
            <div id="management"></div>
            <Finance_routes_nav path={ splits } />

            {/* animated section (common)  */}
            <section className='lg:pt-[60px] lg:pb-[60px] pt-[80px] mb-10 px-4'>
                <div className='main_container flex lg:flex-row flex-col-reverse justify-between items-center'>
                    <div className="lg:w-[45%] w-full">
                        <h2 className='noto text_gradient_finance lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-4 lg:block hidden'>Simplified Tax Management</h2>
                        <p className='roboto text-light-gray font-light text-[14px] lg:text-[16px] lg:leading-7 leading-[24px] text-justify lg:ml-0 ml-3'>Is manual tax management causing headaches for your HR department? Tracking tax returns, payments, and compliance can be a constant challenge. Our Tax Management module simplifies tasks, improves accuracy, and equips you with the tools needed to master tax-related responsibilities. Say farewell to manual tax complexities and tackle tax challenges with confidence!</p>
                    </div>

                    <div className="lg:w-[55%] w-full flex lg:flex-row flex-col justify-end lg:mb-0 mb-12">
                         <h2 className='noto text_gradient_finance lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-8 lg:hidden block '>Simplified Tax Management</h2>
                        <div className='lg:w-[530px] w-[200px] lg:mx-0 mx-auto lg:h-[395px] h-full relative'>
                            <img src="/Finance/Tax/combine_image/blob.png" alt="" /> 
                            <img src="/Finance/Tax/combine_image/person.png" alt="" className='absolute lg:bottom-[5px] bottom-[1px] left-[50%] translate-x-[-50%]'/>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4th individual section start */}
            <section className="lg:block hidden py-20">
                <div className="main_container">
                    <h2 className="text-center inter mb-8 text-[36px] font-bold leading-[50px] text_gradient">Efficient Tax Management, Exceptional Results</h2>
                    <p className="mb-16 leading-6 text-light-gray px-14 text-center">Efficiency breeds excellence. Discover how our Tax Management Module delivers exceptional results by streamlining tax processes for your HR team</p>
                   <div className="grid grid-cols-2 justify-between gap-[80px]">

                        <div className="relative z-10 translate-x-[40px] translate-y-[40px] border_right border_bottom">
                            <div className="px-[40px] py-[60px] bg-light-white2 h-[300px]">
                                <div className="absolute top-0 left-0 w-full h-full bg-light-white -z-10 translate-x-[-40px] translate-y-[-40px]"></div>
                                <div className="flex items-end mb-5">
                                    <img src="/Finance/Tax/icons/tax.png" alt="" />
                                    <h2 className="ml-4 font-bold text-[18px] leading-6 text-light-gray">Tax Dashboard</h2>
                                </div>
                                <p className="font-light leading-6 text-light-gray text-justify">Get an instant overview of your tax responsibilities and status in one glance with our intuitive Tax Dashboard.</p>
                            </div>
                        </div>

                        <div className="relative z-10 translate-x-[-40px] translate-y-[40px] border_bottom">
                            <div className="px-[40px] py-[60px] bg-light-white2 h-[300px]">
                                <div className="absolute top-0 left-0 w-full h-full bg-light-white -z-10 translate-x-[40px] translate-y-[-40px]"></div>
                                <div className="flex items-end mb-5">
                                    <img src="/Finance/Tax/icons/cash_percentage.png" alt="" />
                                    <h2 className="ml-4 font-bold text-[18px] leading-6 text-light-gray">Tax Rate</h2>
                                </div>
                                <p className="font-light leading-6 text-light-gray text-justify">Simplify tax rate calculations and ensure compliance effortlessly with our user-friendly Tax Rate feature.</p>
                            </div>
                        </div>

                        <div className="relative z-10 translate-x-[40px] translate-y-[-40px] border_right">
                            <div className="px-[40px] py-[60px] bg-light-white2 h-[300px]">
                                <div className="absolute top-0 left-0 w-full h-full bg-light-white -z-10 translate-x-[-40px] translate-y-[40px]"></div>
                                <div className="flex items-end mb-5">
                                    <img src="/Finance/Tax/icons/all.png" alt="" />
                                    <h2 className="ml-4 font-bold text-[18px] leading-6 text-light-gray">Tax Report</h2>
                                </div>
                                <p className="font-light leading-6 text-light-gray text-justify">Generate comprehensive tax reports with ease, including vital details for informed decision-making.</p>
                            </div>
                        </div>

                        <div className="relative z-10 translate-x-[-40px] translate-y-[-40px] ">
                            <div className="px-[40px] py-[60px] bg-light-white2 h-[300px]">
                                <div className="absolute top-0 left-0 w-full h-full bg-light-white -z-10 translate-x-[40px] translate-y-[40px]"></div>
                                <div className="flex items-end mb-5">
                                    <img src="/Finance/Tax/icons/list_data.png" alt="" />
                                    <h2 className="ml-4 font-bold text-[18px] leading-6 text-light-gray">VAT Report</h2>
                                </div>
                                <p className="font-light leading-6 text-light-gray text-justify">Streamline your VAT reporting process and access detailed VAT reports for compliance and financial insights.</p>
                            </div>
                        </div>

                   </div>
                </div>
            </section>

             {/* responsive carousel */}
            <section className='px-4 lg:hidden block pb-20'>
                  <h2 className="text-center inter mb-3 text-[20px] font-bold leading-[34px] text_gradient">Efficient Tax Management, Exceptional Results</h2>
                  <p className="mb-10 text-[14px] leading-6 text-light-gray text-justify">Efficiency breeds excellence. Discover how our Tax Management Module delivers exceptional results by streamlining tax processes for your HR team</p>

                    <div className="w-[90%] relative z-10 translate-x-[35px] translate-y-[35px]">
                        <div className="bg-light-white2">
                           <div className='main_verticle_div'>
                                <div className='verticle_div_control'>
                                    <div className='content_div_control p-[30px] bg-light-white2'>
                                        <div className="flex items-end mb-5">
                                            <img src="/Finance/Tax/icons/tax.png" alt="" className='w-[58px] h-[58px] ' />
                                            <h2 className="ml-4 font-bold text-[16px] leading-6 text-light-gray">Tax Dashboard</h2>
                                        </div>
                                        <p className="font-light leading-6 text-light-gray text-justify">Get an instant overview of your tax responsibilities and status in one glance with our intuitive Tax Dashboard.</p>
                                    </div>

                                    <div className='content_div_control p-[30px] bg-light-white2'>
                                        <div className="flex items-end mb-5">
                                            <img src="/Finance/Tax/icons/cash_percentage.png" alt="" className='w-[58px] h-[58px] ' />
                                            <h2 className="ml-4 font-bold text-[16px] leading-6 text-light-gray">Tax Rate</h2>
                                        </div>
                                        <p className="font-light leading-6 text-light-gray text-justify">Simplify tax rate calculations and ensure compliance effortlessly with our user-friendly Tax Rate feature.</p>
                                    </div>

                                    <div className='content_div_control p-[30px] bg-light-white2'>
                                        <div className="flex items-end mb-5">
                                            <img src="/Finance/Tax/icons/all.png" alt="" className='w-[48px] h-[48px]r' />
                                            <h2 className="ml-4 font-bold text-[16px] leading-6 text-light-gray">Tax Report</h2>
                                        </div>
                                        <p className="font-light leading-6 text-light-gray text-justify">Generate comprehensive tax reports with ease, including vital details for informed decision-making.</p>
                                    </div>

                                    <div className='content_div_control p-[30px] bg-light-white2'>
                                        <div className="flex items-end mb-5">
                                            <img src="/Finance/Tax/icons/list_data.png" alt="" className='w-[48px] h-[48px]' />
                                            <h2 className="ml-4 font-bold text-[16px] leading-6 text-light-gray">VAT Report</h2>
                                        </div>
                                        <p className="font-light leading-6 text-light-gray text-justify">Streamline your VAT reporting process and access detailed VAT reports for compliance and financial insights.</p>
                                    </div>
                                </div>
                           </div>

                            <div className="absolute top-0 left-0 w-full h-full bg-light-white -z-10 translate-x-[-30px] translate-y-[-30px]"></div>
                        </div>

                        {/* indicator btn */}
                        <div className='indicator_div '>
                                <span className='indicator_1' onClick={ indicator_1 }></span>
                                <span className='indicator_2' onClick={ indicator_2 }></span>
                                <span className='indicator_3' onClick={ indicator_3 }></span>
                                <span className='indicator_4' onClick={ indicator_4 }> </span>
                            </div>
                    </div>
            </section>
            {/* 4th section individual section end */}

            {/* business strength policy */}
            <Manual_Finanace_section manual_resource={ manual_resource } />

            {/* Employee organization incomplete */}
            <section className='tax_organized lg:mt-20 mt-0 lg:mb-16 mb-8 '>
                <div className='main_container flex lg:flex-row flex-col justify-between items-center lg:gap-6 gap-0'>
                    <div className='lg:w-[55%] w-full'>
                        <p className='inter font-extralight text-[#FFF] text-center leading-10 text-[28px]'><span className='lg:text-[92px] text-[32px] sura font-medium'>67<span className='lg:text-[46px] text-[11.5px]'>%</span></span></p>
                        <p className='inter font-extralight text-[#FFF] text-center lg:text-[28px] text-[12px]'>Reduction in Manual Workload</p>

                        <div className='lg:mt-6 mt-1'>
                           <h3 className='inter text-center lg:text-[37.5px] text-[16px] lg:leading-[50px] text-[#FFF] font-semibold'> <span className='text-green'>Master</span> Tax Management Effortlessly</h3>
                            <div className="lg:mt-[30px] mt-5 text-center ">
                                <a className="action_btn2 lg:px-7 px-5 lg:py-[12px] py-2">Start Today !</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Left data schedule field  part-1 (common) */}
            <section className='lg:py-[100px] py-[40px] px-4 overflow-hidden lg:mb-10 mb-0'>
                <div className='main_container flex_container relative'>
                    <div className='lg:w-[50%] w-full'>
                     <Finance_software_details details3={ details01 } />
                    </div>

                    <div className='absolute top-[50%] right-0 w-[55%] h-[140%] bg-[#EAEAEA] translate-x-[100px] translate-y-[-50%] border_bottom_left_radius lg:block hidden'></div>
                    <div className='absolute top-[50%] translate-y-[-50%] translate-x-[75px] right-0 w-[640px] h-[440px] lg:block hidden'>
                        <img src="/Finance/Tax/screenshot_1.png" alt="" className='w-full h-full' />
                    </div>
                </div>
            </section>

            {/* right data schedule field  part-2 (common) */}
            <section className='lg:py-[100px] py-[40px] px-4 overflow-hidden lg:mb-10 mb-8'>
                <div className='main_container flex_container relative'>
                    <div className='absolute top-[50%] left-0 w-[40%] h-[150%] bg-[#EAEAEA] translate-x-[-100px] translate-y-[-50%] border_top_right_radius lg:block hidden'></div>
                    <div className='absolute top-[50%] translate-y-[-50%] translate-x-[-50px] left-0 w-[640px] h-[440px] lg:block hidden'>
                        <img src="/Finance/Tax/screenshot_2.png" alt="" className='w-full h-full lg:object-contain object-none' />
                    </div> 
                    
                    <div className='lg:w-[50%] lg:ml-auto ml-0 w-full'>
                    <Finance_software_details_two details4={ details02 } />
                    </div>
                </div>
            </section>

            {/* working flow section (common) */}
            <section className='working_flow lg:mt-20 mt-0 lg:mb-16 mb-0'>
                <div className='max-w-[1040px] mx-auto flex justify-between items-center px-4 relative lg:py-[100px] py-10'>
                    <div className="lg:w-[70%] w-[50%]">
                    <h2 className='inter lg:text-[37.5px] text-[15px] mb-2 font-semibold lg:leading-[48px] leading-[22px] lg:text-center text-left'><span className='text-green'>Eliminate</span> <span className='text_gradient_finance'>Tax Compliance Worries</span></h2>
                    <h4 className='noto lg:text-[18px] text-[9px] mb-2 lg:leading-9 leading-2 text_gradient_finance font-light lg:text-center text-left'>Ensure <span className='font-medium'>Error-free</span> tax management and reduce <span className='font-medium'>compliance</span> risks</h4>
                       <div className="lg:mt-10 mt-4 lg:text-center text-left">
                          <a href="" className="action_btn lg:text-[16px] text-[8.8px] lg:px-7 px-3 lg:py-[10px] py-[6px]">Schedule A Consultation</a>
                        </div>
                    </div>
                    <img src="/Finance/Tax/business_person_banner.png" alt="" className='lg:object-none object-cover w-[45%] h-[100%] absolute top-0 right-0 lg:translate-x-[154px] translate-x-0' />
                </div>
            </section>

            {/* Left data schedule field  part-3 (common) */}
            <section className='lg:py-[100px] py-[40px] px-4 overflow-hidden lg:mb-10 mb-0'>
                <div className='main_container flex_container relative'>
                    <div className='lg:w-[50%] w-full'>
                     <Finance_software_details details3={ details03 } />
                    </div>

                    <div className='absolute top-[50%] right-0 w-[55%] h-[140%] bg-[#EAEAEA] translate-x-[100px] translate-y-[-50%] border_bottom_left_radius lg:block hidden'></div>
                    <div className='absolute top-[50%] translate-y-[-50%] translate-x-[75px] right-0 w-[640px] h-[440px] lg:block hidden'>
                        <img src="/Finance/Tax/screenshot_3.png" alt="" className='w-full h-full' />
                    </div>
                </div>
            </section>

            {/* right data schedule field  part-4 (common) */}
            <section className='lg:py-[100px] py-[40px] px-4 overflow-hidden lg:mb-10 mb-8'>
                <div className='main_container flex_container relative'>
                    <div className='absolute top-[50%] left-0 w-[40%] h-[150%] bg-[#EAEAEA] translate-x-[-100px] translate-y-[-50%] border_top_right_radius lg:block hidden'></div>
                    <div className='absolute top-[50%] translate-y-[-50%] translate-x-[0px] left-0 w-[640px] h-[440px] lg:block hidden'>
                        <img src="/Finance/Tax/screenshot_4.png" alt="" className='w-[800px] h-[380px] lg:object-contain object-none absolute top-[50%] translate-y-[-50%]' />
                    </div> 
                    
                    <div className='lg:w-[50%] lg:ml-auto ml-0 w-full'>
                    <Finance_software_details_two details4={ details04 } />
                    </div>
                </div>
            </section>

            {/* Business team section part-2 (common) */}
            <section className="bg-[#FAFAFA] shadow-shadow1x text-[#FAFAFA] lg:my-20 my-0 overflow-hidden">
                <div className="main_container flex justify-between items-center lg:py-[80px] py-[20px] px-4 relative">
                    <div className="w-[51%] lg:pl-[18px] pl-0 lg:ml-0 ml-auto">
                       <h3 className="lg:text-[42px] text-[15px] font-semibold inter text-green lg:pr-[100px] pr-0 lg:mb-5 mb-2 text-left">Experience <span className='text_gradient_finance'> Seamless Tax Management</span></h3>
                       <p className="inter font-extralight lg:text-[22px] text-[10px] text_gradient_finance text-left">Simplify tax compliance and financial accuracy with our Tax Management Module</p>

                        <div className="lg:mt-10 mt-5 text-left">
                            <a href="" className="action_btn text-[16px] lg:px-[28px] px-[18px] lg:py-2 py-[6px]">Get Started Today!</a>
                        </div>
                    </div>

                    <div className="image_container_unique2 lg:translate-x-[110px] translate-x-[70%]">
                        <img src="/Finance/Tax/tax_business_team.png" alt="" className="w-ful h-full" />
                    </div>
                </div>
            </section>

            {/* Frequently Ask Questions */}
            <Accordion_component accordion_list={ accordion_list } />

            {/* footer bottom CTA (common) */}
            <section className="footer_bottom_cta_tax">
                <div className="main_container">
                    <div className="lg:w-[70%] w-full mx-auto text-center">
                    <img src="/Finance/Tax/footer_bottom_cta.png" alt="" className="block mx-auto mb-5 lg:w-[198px] w-[100px]" />
                    <h2 className="inter lg:text-[37.5px] text-[20px] text-light-white2 font-semibold lg:mb-2 mb-2">Ready to Navigate Taxes With <span className="text-green font-semibold">Confidence</span>?</h2>
                    <p className="lg:text-[18px] text-[12px] lg:font-semibold font-normal inter text-light-white2">Say goodbye to manual tax hassles and embrace streamlined tax management today!</p>
                    <div className="lg:mt-[30px] mt-5">
                        <a className="action_btn2 lg:text-[20px] text-[15px] lg:px-6 px-5 lg:py-[12px] py-2">Contact US</a>
                        </div>
                    </div>
                </div>
            </section>  

        </>
    );
};

export default Tax;