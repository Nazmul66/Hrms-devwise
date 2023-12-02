import React from 'react';
import "./Finance_routes_nav.css"
import { useEffect, useState } from "react";
import Link from 'next/link';

const Finance_routes_nav = ({ path }) => {
   const route_pages = [
      {
         link: "/finance/budget_management/#management",
         img: "/Finance/icons/budget_management.png",
         img2: "/Finance/icons/budget_management_white.png",
         content1: "Budget",
         content2: "Management",
         match: "budget_management"
      },
      {
         link: "/finance/sales_management/#management",
         img: "/Finance/icons/sales_management.png",
         img2: "/Finance/icons/sales_management_white.png",
         content1: "Sales",
         content2: "Management",
         match: "sales_management"
      },
      {
         link: "/finance/cash_flow/#management",
         img: "/Finance/icons/cash_flow.png",
         img2: "/Finance/icons/cash_flow_white.png",
         content1: "Cash Flow",
         content2: "",
         match: "cash_flow"
      },
      {
         link: "/finance/estimate&expense/#management",
         img: "/Finance/icons/estimate_expense.png",
         img2: "/Finance/icons/estimate_expense_white.png",
         content1: "Estimates",
         content2: "& Expenses",
         match: "estimate&expense"
      },
      {
         link: "/finance/payroll/#management",
         img: "/Finance/icons/payroll.png",
         img2: "/Finance/icons/payroll_white.png",
         content1: "Payroll",
         content2: "",
         match: "payroll"
      },
      {
         link: "/finance/asset/#management",
         img: "/Finance/icons/asset.png",
         img2: "/Finance/icons/asset_white.png",
         content1: "Asset",
         content2: "",
         match: "asset"
      },
      {
         link: "/finance/tax/#management",
         img: "/Finance/icons/tax.png",
         img2: "/Finance/icons/tax_white.png",
         content1: "Tax",
         content2: "",
         match: "tax"
      },
      {
         link: "/finance/financial_report/#management",
         img: "/Finance/icons/report.png",
         img2: "/Finance/icons/report_white.png",
         content1: "Financial",
         content2: "Report",
         match: "financial_report"
      }
   ]


   return (
      <div className={`pages_list_finance main_container mt-[60px] lg:block hidden`}>
         <ul className='route_list_finance'>
            {
               route_pages.map((items, index) => <li key={index} className={`${items.match === path ? "active" : ""} h-[70px]`}>
                  <Link href={items.link} >
                     <span className="sub_route_list_finance"></span>
                     {
                        items.match === path ? <img src={items.img2} alt="" />
                           :
                           <img src={items.img} alt="" className="route_image_finance" />
                     }

                     <div className={`ml-4 leading-6 text-[12px] `}>
                        <p className={`${items?.match === path ? "active" : ""}`}>{items.content1}</p>
                        <p className={`${items?.match === path ? "active" : ""}`}>{items.content2}</p>
                     </div>
                  </Link>
               </li>
               )
            }
         </ul>
      </div>
   );
};

export default Finance_routes_nav;