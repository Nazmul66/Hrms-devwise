import React, { useEffect, useState } from 'react';
import "./Personal_res_nav.css"
import { MdArrowForwardIos } from 'react-icons/md';
import Link from 'next/link';

const Personal_res_nav = () => {
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
    },[]);


    return (
    <div className='lg:hidden block'>
        <div className='flex items-center'>
            <div className='w-[33.33%]'>
               <div className='w-full personal_gradient relative py-[15px] px-3' onClick={() => setDrop(!drop)}>
                  <span className='text-[#FFF] font-medium'>Personal</span>
                  <MdArrowForwardIos className='absolute top-[50%] translate-y-[-50%] right-1 text-[#FFF] text-[12px]' />

                  <div className={`${drop ? "dropdown activeDrop" : "dropdown"} absolute bottom-[-132px] left-0 w-full`}>
                   <Link href="/finance" className='bg-[#FFF]'>
                        <div className='w-full angular_gradient relative py-[10px] px-3'>
                        <span className='text-[#FFF] font-medium text_gradient'>HRMS</span>
                        <MdArrowForwardIos className='absolute top-[50%] translate-y-[-50%] right-1 text-[#1B2F53] text-[12px]' />
                        </div>
                    </Link>

                    <Link href="/recruitment" className='bg-[#FFF]'>
                        <div className='w-full angular_gradient relative py-[10px] px-3'>
                        <span className='text-[#FFF] font-medium text_gradient_finance'>Recruitment</span>
                        <MdArrowForwardIos className='absolute top-[50%] translate-y-[-50%] right-1 text-[#20423B] text-[12px]' />
                        </div>
                    </Link>

                    <Link href="/personal" className='bg-[#FFF]'>
                        <div className='w-full angular_gradient relative py-[10px] px-3'>
                        <span className='text-[#FFF] font-medium text_gradient_personal'>Finance</span>
                        <MdArrowForwardIos className='absolute top-[50%] translate-y-[-50%] right-1 text-[#052E37] text-[12px]' />
                        </div>
                    </Link>
                  </div>
               </div>
            </div>

            <div className='w-[66.66%]'>
                 <ul className='tab_box'>
                   {
                     route_page_slide.map(( routes, index ) =>(
                        <li key={index}>
                            <div className="tab_items" id={`#${routes.link}`}>
                            <div className='tab_items_inside'>
                                <img src={routes.img} alt="" className="tab_images" />
                                <span className= "tab_content ml-3">{routes.content}</span>
                            </div>
                            </div>
                        </li>
                     ))
                   }
                 </ul>
            </div>
        </div>
    </div>
    );
};

export default Personal_res_nav;


const route_page_slide = [ 
    {
       link: "path_1",
       img: "/personal/navbar/calendar.png",
       content: "Attendance Management",
    },
    {
       link: "path_2",
       img: "/personal/navbar/cash_sync.png",
       content: "Finance Management",
    },
    {
       link: "path_3",
       img: "/personal/navbar/document.png",
       content: "Personal Document",
    },
    {
       link: "path_4",
       img: "/personal/navbar/document.png",
       content: "Performance Indicator"
    },
    {
       link: "path_5",
       img: "/personal/navbar/report.png",
       content: "Open Feedback Channel"
    },
    {
       link: "path_6",
       img: "/personal/navbar/person_err.png",
       content: "Complaint & Notification"
    },
    {
       link: "path_7",
       img: "/personal/navbar/group.png",
       content: "know Your Colleagues"
    },
    {
       link: "path_8",
       img: "/personal/navbar/security.png",
       content: "Credential Controls"
    },
    {
        link: "path_9",
        img: "/personal/navbar/training.png",
        content: "On Job Training"
     }
]