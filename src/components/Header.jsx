"use client"
import React, { useEffect, useState } from 'react';
import h from '../style/header.module.css';
import Image from 'next/legacy/image';
import { Employee, Performance, Arrow, Report, Document, Fund, Notice, Support, Filter, User, List, Money, Sales, Cash, MoneyBundle, Payroll, Asset, Percentage, ReportBar, Attendance } from './Icon';
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { BiMenu } from 'react-icons/bi';
import { IoCloseSharp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = ({ pathName }) => {
  const split = pathName.split("/")[1];
  const [subOpen, setSubOpen] = useState("");
  const [open, setOpen] = useState(false);

  const handle_sub_menu = (data) => {
    if (data === subOpen) {
      setSubOpen("");
      return;
    }
    setSubOpen(data);
  }

  const linkRedirect = (index) => {
    if (index) {
      setOpen(false);
    }
  }

  useEffect(() => {
    // const subMenus = document.querySelectorAll('.sub_menu');

    //     subMenus.forEach((subMenu) => {
    //       const subMenuHead = subMenu.querySelector('.sub_menu_head');
    //       const dropDown = subMenu.querySelector('.dropDown');

    //       subMenuHead.addEventListener('click', () => {
    //         if (!subMenuHead.classNameList.contains('sub_active')) {
    //           // Close all dropdowns
    //           closeAllDropdowns();
    //         }

    //         if(subMenuHead ){
    //           subMenuHead.classNameList.add('sub_active');
    //         }
    //         else{
    //           subMenuHead.classNameList.remove('sub_active');
    //         }


    //         if (subMenuHead.classNameList.contains('sub_active')) {
    //           dropDown.style.height = `${dropDown.scrollHeight}px`;
    //         } else {
    //           dropDown.style.height = '0px';
    //           subMenuHead.classNameList.remove('sub_active');
    //         }
    //       });
    //     });

    //     function closeAllDropdowns() {
    //       subMenus.forEach((subMenu) => {
    //         const subMenuHead = subMenu.querySelector('.sub_menu_head');
    //         const dropDown = subMenu.querySelector('.dropDown');

    //         subMenuHead.classNameList.remove('sub_active');
    //         dropDown.style.height = '0px';
    //       });
    //     }


  }, [])

  useEffect(() => {
    const nav_link = document.querySelectorAll(".nav_link");

    nav_link.forEach((link, index) => {
      link.addEventListener("click", () => {

        nav_link.forEach((link2, i) => {
          if (index === i) {
            nav_link[i].classList.add("link_active");
          }
          else {
            nav_link[i].classList.remove("link_active");
          }
        })
      })
    })
  }, [])

  const headerList = [
    {
      title: 'Home',
      link: '/',
      match: ""
    },
    {
      title: 'HRMS',
      link: '/hrms/',
      match: "hrms"
    },
    {
      title: 'Recruitment',
      link: '/recruitment/',
      match: "recruitment"
    },
    {
      title: 'Finance',
      link: '/finance/',
      match: "finance"
    },
    {
      title: 'Personal',
      link: '/personal/',
      match: "personal"
    },
    {
      title: 'Price',
      link: '/price/',
      match: "price"
    },
    {
      title: 'FAQ\'s',
      link: '/faq/',
      match: "faq"
    },
    {
      title: 'About Us',
      link: '/about-us/',
      match: "about-us"
    },
    {
      title: 'Contact Us',
      link: '/contact-us/',
      match: "contact-us"
    },
  ]


  return (
    <>
      <nav className='py-3 px-4 lg:block hidden header_nav sticky top-0 bg-white z-40'>
        <div className='main_container flex justify-between items-center'>
          <div className='w-[15%]'>
            <Link href="/">
              <img src="/footer/logo.png" alt="" className='logo' />
            </Link>
          </div>
          <div className='w-[70%]'>
            <div className=''>
              <ul className='flex items-center'>
                {
                  headerList.slice(0, 8).map((list, index) =>
                    <li key={index} className='nav_list'>
                      <Link href={list.link} className={`${list.match === split ? "nav_link link_active" : "nav_link"} roboto`} >{list.title}</Link>
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
          <div className='w-[15%]'>
            <div className=''>
              {
                headerList.slice(8, 9).map((lists, i) => (
                  <div key={i}>
                    <Link href="/contact-us" className={`${lists.match === split ? "nav_link link_active" : "nav_link"} roboto`}>Contact Us</Link>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </nav>

      {/* responsive header section */}
      <div className='lg:hidden block px-4 py-1 res_nav'>
        <div className='flex justify-between items-center'>
          <div className='w-[25%]'>
            <img src="/footer/logo.png" alt="" className='w-[80px]' />
          </div>
          <div className='w-[15%] flex justify-end'>
            <BiMenu className='text-[35px] opacity-90' onClick={() => setOpen(true)} />
          </div>
        </div>
      </div>

      <div className={`${open ? "all_res_nav_list active_nav" : "all_res_nav_list"} flex flex-col `}>
        <img src="/footer/logo.png" alt="" className='logo ml-5 mt-[50px] mb-[10px]' />
        <hr className='border-none w-[50%] h-[2px] bg-[#000] ml-5 mb-[15px] opacity-60' />
        <ul className='text-left mx-5'>
          <li className='res_nav_list'>
            <Link href="/" className="res_nav_link roboto" onClick={() => linkRedirect(true)}>Home</Link>
          </li>

          {/* hrms */}
          <li className='res_nav_list'>
            <div className="res_nav_link roboto" >
              <div className={`${subOpen === "hrms" ? "sub_menu sub_active" : "sub_menu"}`} onClick={() => handle_sub_menu("hrms")}>
                <div className="sub_menu_head" >
                  <span>HRMS</span>
                  <MdKeyboardArrowDown className={`${subOpen === "hrms" ? "icon_UD sub_active" : "icon_UD"} `} />
                </div>
                <div className={`${subOpen === "hrms" ? "dropDown sub_active" : "dropDown"}`}>
                  <ul>
                    <li>
                      <Link href="/hrms/employee_Management/#management" onClick={() => linkRedirect(true)}>Employee Management</Link>
                    </li>
                    <li>
                      <Link href="/hrms/attendence_management/#management" onClick={() => linkRedirect(true)}>Attendance Management</Link>
                    </li>
                    <li>
                      <Link href="/hrms/performance_management/#management" onClick={() => linkRedirect(true)}>Performance Management</Link>
                    </li>
                    <li>
                      <Link href="/hrms/noticeboard_management/#management" onClick={() => linkRedirect(true)}>NoticeBoard Management</Link>
                    </li>
                    <li>
                      <Link href="/hrms/report_management/#management" onClick={() => linkRedirect(true)}>Report Management</Link>
                    </li>
                    <li>
                      <Link href="/hrms/document_management/#management" onClick={() => linkRedirect(true)}>Documents Management</Link>
                    </li>
                    <li>
                      <Link href="/hrms/funds/#management" onClick={() => linkRedirect(true)}>Funds Management</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          {/* recruitment */}
          <li className='res_nav_list'>
            <div className="res_nav_link roboto" >
              <div className={`${subOpen === "Recruitment" ? "sub_menu sub_active" : "sub_menu"}`} onClick={() => handle_sub_menu("Recruitment")}>
                <div className="sub_menu_head" >
                  <span>Recruitment</span>
                  <MdKeyboardArrowDown className={`${subOpen === "finance" ? "icon_UD sub_active" : "icon_UD"} `} />
                </div>
                <div className={`${subOpen === "finance" ? "dropDown sub_active" : "dropDown"}`}>
                  <ul>
                    <li>
                      <Link href="/recruitment#path_1" onClick={() => linkRedirect(true)}>Dynamic Job Board</Link>
                    </li>
                    <li>
                      <Link href="/recruitment#path_2" onClick={() => linkRedirect(true)}>Hiring Process</Link>
                    </li>
                    <li>
                      <Link href="/recruitment#path_3" onClick={() => linkRedirect(true)}>Applicant Management</Link>
                    </li>
                    <li>
                      <Link href="/recruitment#path_4" onClick={() => linkRedirect(true)}>Talent Sorting</Link>
                    </li>
                    <li>
                      <Link href="/recruitment#path_5" onClick={() => linkRedirect(true)}>Candidate Support</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          {/* Finance */}
          <li className='res_nav_list'>
            <div className="res_nav_link roboto" >
              <div className={`${subOpen === "finance" ? "sub_menu sub_active" : "sub_menu"}`} onClick={() => handle_sub_menu("finance")}>
                <div className="sub_menu_head" >
                  <span>Finance</span>
                  <MdKeyboardArrowDown className={`${subOpen === "finance" ? "icon_UD sub_active" : "icon_UD"} `} />
                </div>
                <div className={`${subOpen === "finance" ? "dropDown sub_active" : "dropDown"}`}>
                  <ul>
                    <li>
                      <Link href="/finance/budget_management/#management" onClick={() => linkRedirect(true)}>Budget Management</Link>
                    </li>
                    <li>
                      <Link href="/finance/sales_management/#management" onClick={() => linkRedirect(true)}>Sales Management</Link>
                    </li>
                    <li>
                      <Link href="/finance/cash_flow/#management" onClick={() => linkRedirect(true)}>Cash Flow</Link>
                    </li>
                    <li>
                      <Link href="/finance/estimate&expense/#management" onClick={() => linkRedirect(true)}>Estimates & Expenses</Link>
                    </li>
                    <li>
                      <Link href="/finance/payroll/#management" onClick={() => linkRedirect(true)}>Payroll</Link>
                    </li>
                    <li>
                      <Link href="/finance/asset/#management" onClick={() => linkRedirect(true)}>Asset</Link>
                    </li>
                    <li>
                      <Link href="/finance/tax/#management/#management" onClick={() => linkRedirect(true)}>Tax</Link>
                    </li>
                    <li>
                      <Link href="/finance/financial_report/#management" onClick={() => linkRedirect(true)}>Financial Report</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          {/* personal */}
          <li className='res_nav_list'>
            <div className="res_nav_link roboto" >
              <div className={`${subOpen === "personal" ? "sub_menu sub_active" : "sub_menu"}`} onClick={() => handle_sub_menu("personal")}>
                <div className="sub_menu_head" >
                  <span>Personal</span>
                  <MdKeyboardArrowDown className={`${subOpen === "finance" ? "icon_UD sub_active" : "icon_UD"} `} />
                </div>
                <div className={`${subOpen === "finance" ? "dropDown sub_active" : "dropDown"}`}>
                  <ul>
                    <li>
                      <Link href="/personal#path_1" onClick={() => linkRedirect(true)}>Attendance Management</Link>
                    </li>
                    <li>
                      <Link href="/personal#path_2" onClick={() => linkRedirect(true)}>Finance Management</Link>
                    </li>
                    <li>
                      <Link href="/personal#path_3" onClick={() => linkRedirect(true)}>Personal Document</Link>
                    </li>
                    <li>
                      <Link href="/personal#path_4" onClick={() => linkRedirect(true)}>Performance Indicator</Link>
                    </li>
                    <li>
                      <Link href="/personal#path_5" onClick={() => linkRedirect(true)}>Open Feedback Channel</Link>
                    </li>
                    <li>
                      <Link href="/personal#path_6" onClick={() => linkRedirect(true)}>Complaint & Notification</Link>
                    </li>
                    <li>
                      <Link href="/personal#path_7" onClick={() => linkRedirect(true)}>Know Your Colleagues</Link>
                    </li>
                    <li>
                      <Link href="/personal#path_8" onClick={() => linkRedirect(true)}>Credential Controls</Link>
                    </li>
                    <li>
                      <Link href="/personal#path_9" onClick={() => linkRedirect(true)}>On Job Training</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li className='res_nav_list'>
            <Link href="/price" className="res_nav_link roboto" onClick={() => linkRedirect(true)}>Price</Link>
          </li>
          <li className='res_nav_list'>
            <Link href="/faq" className="res_nav_link roboto" onClick={() => linkRedirect(true)}>FAQ's</Link>
          </li>
          <li className='res_nav_list'>
            <Link href="/about-us" className="res_nav_link roboto" onClick={() => linkRedirect(true)}>About Us</Link>
          </li>
          <li className='res_nav_list'>
            <Link href="/contact-us" className="res_nav_link roboto" onClick={() => linkRedirect(true)}>
              Contact Us</Link>
          </li>
        </ul>

        <IoCloseSharp className='absolute top-[40px] right-[12px] text-[40px] text-[#182F59] opacity-90' onClick={() => setOpen(false)} />
      </div>
    </>
  )
}

export default Header;
