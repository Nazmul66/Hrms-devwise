import Link from "next/link";
import "./Routes_nav.css"

const Routes_nav = ({ path }) => {

   const route_pages = [
      {
         link: "/hrms/employee_Management/#management",
         img: "/HRMS/icons/employee_management.png",
         img2: "/HRMS/icons/employee_management_white.png",
         content1: "Employee",
         content2: "Management",
         match: "employee_Management"
      },
      {
         link: "/hrms/attendence_management/#management",
         img: "/HRMS/icons/attendance_management.png",
         img2: "/HRMS/icons/attendance_management_white.png",
         content1: "Attendance",
         content2: "Management",
         match: "attendence_management"
      },
      {
         link: "/hrms/performance_management/#management",
         img: "/HRMS/icons/performance_management.png",
         img2: "/HRMS/icons/performance_management_white.png",
         content1: "Performance",
         content2: "Management",
         match: "performance_management"
      },
      {
         link: "/hrms/noticeboard_management/#management",
         img: "/HRMS/icons/noticeboard_management.png",
         img2: "/HRMS/icons/noticeboard_management_white.png",
         content1: "Noticeboard",
         content2: "Management",
         match: "noticeboard_management"
      },
      {
         link: "/hrms/report_management/#management",
         img: "/HRMS/icons/report_management.png",
         img2: "/HRMS/icons/report_management_white.png",
         content1: "Report",
         content2: "Management",
         match: "report_management"
      },
      {
         link: "/hrms/document_management/#management",
         img: "/HRMS/icons/document_management.png",
         img2: "/HRMS/icons/document_management_white.png",
         content1: "Documents",
         content2: "Management",
         match: "document_management"
      },
      {
         link: "/hrms/funds/#management",
         img: "/HRMS/icons/funds.png",
         img2: "/HRMS/icons/funds_white.png",
         content1: "Funds",
         content2: "Management",
         match: "funds"
      },
   ]


   return (
      <div className={`pages_lists main_container lg:block hidden`}>
         <ul className='route_list'>
            {
               route_pages.map((items, index) => <li key={index} className={`${items.match === path ? "active" : ""}`}>
                  <span className={`${items.match === path ? "sub_route_list active" : "sub_route_list"} `}></span>
                  <Link href={items.link} >
                     {
                        items.match === path ? <img src={items.img2} alt="" />
                           :
                           <img src={items.img} alt="" className="route_image" />
                     }

                     <div className={`ml-4 leading-6 text-[12px] `}>
                        <p className={`${items.match === path ? "active" : ""}`}>{items.content1}</p>
                        <p className={`${items.match === path ? "active" : ""}`}>{items.content2}</p>
                     </div>
                  </Link>
               </li>
               )
            }
         </ul>
      </div>
   );
};

export default Routes_nav;