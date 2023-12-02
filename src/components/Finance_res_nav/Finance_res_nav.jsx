import React, { useEffect, useState } from 'react';
import "./Finance_res_nav.css"
import { MdArrowForwardIos } from 'react-icons/md';
import Link from 'next/link';

const Finance_res_nav = ({ path }) => {
    const splitPath = path.split('/')[2];
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
    <div className='lg:hidden block finance_sticky z-40'>
        <div className='flex items-center'>
            <div className='w-[33.33%]'>
               <div className='w-full finance_gradient relative py-[15px] px-3' onClick={() => setDrop(!drop)}>
                  <span className='text-[#FFF] font-medium'>Finance</span>
                  <MdArrowForwardIos className='absolute top-[50%] translate-y-[-50%] right-1 text-[#FFF] text-[12px]' />

                  <div className={`${drop ? "dropdown activeDrop" : "dropdown"} absolute bottom-[-132px] left-0 w-full`}>
                   <Link href="/hrms" className='bg-[#FFF]'>
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
                        <span className='text-[#FFF] font-medium text_gradient_personal'>Personal</span>
                        <MdArrowForwardIos className='absolute top-[50%] translate-y-[-50%] right-1 text-[#055055] text-[12px]' />
                        </div>
                    </Link>
                  </div>
               </div>
            </div>

            <div className='w-[66.66%]'>
                 <ul className='tab_box bg-[#FFF]'>
                   {
                     route_pages.map(( routes, index ) =>(
                        <li key={index}>
                            <Link href={routes.link} className={`${ routes.match === splitPath ? "tab_items ActiveNavigation" : "tab_items"}`}>
                            <div className='tab_items_inside'>
                                <img src={routes.img} alt="" className={`${ routes.match === splitPath ? "tab_images ActiveNavigation" : "tab_images"}`} />
                                <span className={`${ routes.match === splitPath ? "tab_content  ActiveNavigation" : "tab_content"} ml-3`}>{routes.content}</span>
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

export default Finance_res_nav;

const route_pages = [
    {
       link: "/finance/budget_management/#management",
       img: "/Finance/icons/budget_management.png",
       content: "Budget Management",
       match: "budget_management"
    },
    {
       link: "/finance/sales_management/#management",
       img: "/Finance/icons/sales_management.png",
       content: "Sales Management",
       match: "sales_management"
       },
    {
       link: "/finance/cash_flow/#management",
       img: "/Finance/icons/cash_flow.png",
       content: "Cash Flow",
       match: "cash_flow"
    },
    {
       link: "/finance/estimate&expense/#management",
       img: "/Finance/icons/estimate_expense.png",
       content: "Estimates & Expenses",
       match: "estimate&expense"
    },
    {
       link: "/finance/payroll/#management",
       img: "/Finance/icons/payroll.png",
       content: "Payroll",
       match: "payroll"
    },
    {
       link: "/finance/asset/#management",
       img: "/Finance/icons/asset.png",
       content: "Asset",
       match: "asset"
    },
    {
       link: "/finance/tax/#management",
       img: "/Finance/icons/tax.png",
       content: "Tax",
       match: "tax"
    },
    {
        link: "/finance/financial_report/#management",
        img: "/Finance/icons/report.png",
        content: "Financial Report",
        match: "financial_report"
     },
]