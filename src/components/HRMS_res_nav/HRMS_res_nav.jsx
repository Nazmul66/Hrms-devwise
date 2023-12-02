import React, { useEffect, useState } from 'react';
import "./HRMS_res_nav.css"
import { MdArrowForwardIos } from 'react-icons/md';
import Link from 'next/link';

const HRMS_res_nav = ({ path }) => {
     const splitPath = path?.split('/')[2];

    const [drop, setDrop] = useState(false);

    useEffect(() =>{
        const tab_box = document.querySelector(".tab_box");
        let isDragging = false;
        let startX;
    
        const startDragging = (e) => {
          isDragging = true;
          startX = e.touches[0].clientX;
        };
    
        const stopDragging = () => {
          isDragging = false;
        };
    
        const dragging = (e) => {
          if (!isDragging) return;
          const touchX = e.touches[0].clientX;
          const movementX = touchX - startX;
          tab_box.scrollLeft -= movementX;
          startX = touchX;
        };

        tab_box.addEventListener("touchmove", dragging);
        tab_box.addEventListener("touchstart", startDragging);
        tab_box.addEventListener("touchend", stopDragging);

        return () => {
            tab_box.removeEventListener("touchmove", dragging);
            tab_box.removeEventListener("touchstart", startDragging);
            tab_box.removeEventListener("touchend", stopDragging);
        }
    },[])


    return (
    <div className='lg:hidden block sticky-element bg-[#FFF] z-20'>
        <div className='flex items-center'>
            <div className='w-[33.33%]'>
               <div className='w-full hrms_gradient relative py-[14px] px-3' onClick={() => setDrop(!drop)}>
                  <span className='text-[#FFF] font-medium'>HRMS</span>
                  <MdArrowForwardIos className='absolute top-[50%] translate-y-[-50%] right-1 text-[#FFF] text-[12px]' />

                  <div className={`${drop ? "dropdown activeDrop" : "dropdown"} absolute bottom-[-132px] left-0 w-full`}>
                    <Link href="/recruitment" className='bg-[#FFF]'>
                        <div className='w-full angular_gradient relative py-[10px] px-3'>
                        <span className='text-[#FFF] font-medium text_gradient_finance'>Recruitment</span>
                        <MdArrowForwardIos className='absolute top-[50%] translate-y-[-50%] right-1 text-[#20423B] text-[12px]' />
                        </div>
                    </Link>

                    <Link href="/finance" className='bg-[#FFF]'>
                        <div className='w-full angular_gradient relative py-[10px] px-3'>
                        <span className='text-[#FFF] font-medium text_gradient_finance'>Finance</span>
                        <MdArrowForwardIos className='absolute top-[50%] translate-y-[-50%] right-1 text-[#052F38] text-[12px]' />
                        </div>
                    </Link>
                    <Link href="/personal" className='bg-[#FFF]'>
                        <div className='w-full angular_gradient relative py-[10px] px-3'>
                        <span className='text-[#FFF] font-medium text_gradient_personal'>Personal</span>
                        <MdArrowForwardIos className='absolute top-[50%] translate-y-[-50%] right-1 text-[#055055] text-[12px]' />
                        </div>
                    </Link>
                  </div>
               </div>
            </div>

            <div className='w-[66.66%]'>
                 <ul className='tab_box'>
                   {
                     route_pages.map(( routes, index ) =>(
                        <li key={index}>
                            <Link href={routes.link} className={`${ routes.match === splitPath ? "tab_items ActiveNavigation" : "tab_items"}`}>
                            <div className='tab_items_inside'>
                                <img src={routes.img} alt="" className={`${ routes.match === splitPath ? "tab_images ActiveNavigation" : "tab_images"}`} />
                                <span className={`${ routes.match === splitPath ? "tab_content  ActiveNavigation" : "tab_content"}`}>{routes.content}</span>
                            </div>
                            </Link>
                        </li>
                     ))
                   }
                 </ul>
            </div>
        </div>
    </div>
    );
};

export default HRMS_res_nav;


const route_pages = [
    {
       link: "/hrms/employee_Management/#management",
       img: "/HRMS/icons/employee_management.png",
       content: "Employee Management",
       match: "employee_Management"
    },
    {
       link: "/hrms/attendence_management/#management",
       img: "/HRMS/icons/attendance_management.png",
       content: "Attendance Management",
       match: "attendence_management"
       },
    {
       link: "/hrms/performance_management/#management",
       img: "/HRMS/icons/performance_management.png",
       content: "Performance Management",
       match: "performance_management"
    },
    {
       link: "/hrms/noticeboard_management/#management",
       img: "/HRMS/icons/noticeboard_management.png",
       content: "Noticeboard Management",
       match: "noticeboard_management"
    },
    {
       link: "/hrms/report_management/#management",
       img: "/HRMS/icons/report_management.png",
       content: "Report Management",
       match: "report_management"
    },
    {
       link: "/hrms/document_management/#management",
       img: "/HRMS/icons/document_management.png",
       content: "Documents Management",
       match: "document_management"
    },
    {
       link: "/hrms/funds/#management",
       img: "/HRMS/icons/funds.png",
       content: "Funds Management",
       match: "funds"
    },
]