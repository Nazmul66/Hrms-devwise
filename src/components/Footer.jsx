"use client"
import React, { useEffect, useState } from 'react'
import "../app/globals.css";
import f from '../style/footer.module.css'
import Image from 'next/legacy/image'
import { SocialLinks, Button } from './SharedComponents';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Link from 'next/link';
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';

const Footer = () => {
  const [footer01, setFooter01] = useState(false);
  const [footer02, setFooter02] = useState(false);
  const [footer03, setFooter03] = useState(false);

  const footerList = [
    {
      title: 'Company',
      list: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'Price',
          link: '/price'
        },
        {
          name: 'FAQ\'s',
          link: '/faq'
        },
        {
          name: 'About Us',
          link: '/about-us'
        },
        {
          name: 'Contact Us',
          link: '/contact-us'
        }
      ]
    },
    {
      title: 'Feature',
      list: [
        {
          name: 'HRMS',
          link: '/hrms'
        },
        {
          name: 'Recruitment',
          link: '/recruitment'
        },
        {
          name: 'Finance',
          link: '/finance'
        },
        {
          name: 'Personal',
          link: '/personal'
        }
      ]
    },
    {
      title: 'Locations',
      list: [
        {
          name: 'USA',
          link: '/contact-us#world_map'
        },
        {
          name: 'Canada',
          link: '/contact-us#world_map'
        },
        {
          name: 'UK',
          link: '/contact-us#world_map'
        },
        {
          name: 'Turkey',
          link: '/contact-us#world_map'
        },
        {
          name: 'India',
          link: '/contact-us#world_map'
        },
        {
          name: 'Bangladesh',
          link: '/contact-us#world_map'
        }
      ]
    }
  ]

  const companyDetails = {
    title: 'Company Details',
    list: ['Business Name:  TechForing LLC.', 'Company No:  802448332', 'License Provided by:  Michigan Department of Licensing and regulatory Affairs',]
  }


  return (
    <>
      <div className={`${f.footer} bg-[#FAFAFA] lg:block hidden`}>
        <div className="custom-container flex gap-12">
          <div className={`${f.right} bg-white`}>
            <div>
              <img src="/footer/logo.png" alt="" className='w-[180px] h-[90px] mx-auto mb-8' />
            </div>

            {/* existing footer details section */}
            {/* <div className='bottomLinearDivider relative'>
            <p className={`mb-5 font-normal ${f.companyDetails}`}>{companyDetails.title}</p>
            <ul className='flex flex-col gap-4'>
              {
                companyDetails.list.map((listItem, index) => (
                  <li key={index} className='text-dark-text-2 font-light text-base'>{listItem}</li>
                ))
              }
            </ul>
          </div> */}

            <div className='w-fit'>
              <p className='mb-4 text-dark-text-3 text-center'>Follow Us</p>
              <SocialLinks style={{ fill: "var(--primary)" }} />
            </div>

            <div className="copyright w-full mt-6">
              <p className='text-dark-text-2 font-normal text-sm text-center'>
                Copyright © 2023 Techforing Ltd.
              </p>
            </div>
          </div>

          <div className={`${f.left} py-12 relative`}>
            <div className="bottomLinearDivider relative">
              <p className='text-dark-text-2 font-light text-center mb-4'>Subscribe to stay tuned for the latest updates. Let's do it! </p>
              <div className="flex gap-4">
                <input type="text" placeholder='Enter your email address' className='bg-white w-full h-12 px-4 rounded-lg focus:outline-none focus:ring-transparent border-none placeholder:text-cold-grey-30' />
                <a href="" className="px-7 lg:py-[10px] py-2 action_btn font-bold">Subscription</a>
              </div>
            </div>

            {/* existing footer details section */}
            {/* <div className="w-full relative">
            <div>
              <p className='text-dark-text-2 font-light'>Subscribe to stay tuned for the latest updates. Let's do it! </p>
              <div className="flex gap-4">
                <input type="text" placeholder='Enter your email address' className='bg-white w-96 h-12 px-4 rounded-lg focus:outline-none focus:ring-transparent border-none placeholder:text-cold-grey-30' />
                <Button text='Subscribe' />
              </div>
            </div>
          </div> */}

            <div className="bottom flex items-start">
              {
                footerList.map((item, index) => (
                  <div key={index} style={{ width: `${100 / footerList.length}%`, minWidth: 'fit-content' }}>
                    <p className='mb-8 font-normal'>{item.title}</p>
                    <ul className='flex flex-col gap-4'>
                      {
                        item.list.map((listItem, i2) => (
                          <li key={i2} className='text-dark-text-2 font-light text-base'><a href={listItem.link}>{listItem.name}</a></li>
                        ))
                      }
                    </ul>
                  </div>
                ))
              }
            </div>

            <a className="absolute bottom-[40px] right-0 " href="#">
              <img src="/footer/up.png" alt="" className="w-[25px]" />
            </a>
          </div>
        </div>
      </div>

      {/* Responsive footer */}
      <footer className='py-10 px-4 lg:hidden block'>
        <div>
          <img src="/footer/logo.png" alt="" className='w-[200px] mx-auto mb-8' />
          <p className='roboto text-[14px] font-light leading-5 text-[#333] text-center'>Subscribe to stay tuned for the latest updates. Let's do it! </p>
        </div>
        <div className='form_field'>
          <input type="email" name='email' placeholder='Enter your email Address' required autoComplete='off' className='bg-[#FAFAFA] px-5 py-[6px] w-full rounded-md input_fields' />
          <button className='roboto text-white bg-green rounded-md px-6 py-[6px] font-bold text-[12px]'>Subscribe</button>
        </div>
        {/* <div className='py-5'>
           <h3 className='roboto text-center font-medium text-[14px] leading-5 text-light-gray'>Company Details</h3>
           <hr className='w-[100px] h-[1px] mx-auto bg-light-gray mt-2 mb-4 border-none' />
           <p className='text-[14px] font-light leading-5 text-[#333] text-center mb-3'>Business Name:&nbsp;&nbsp;&nbsp;&nbsp;TechForing LLC</p>
           <p className='text-[14px] font-light leading-5 text-[#333] text-center mb-3'>Company No:&nbsp;&nbsp;&nbsp;&nbsp;802448332</p>
           <p className='text-[14px] font-light leading-5 text-[#333] text-center mb-3'>License Provided by:&nbsp;&nbsp;&nbsp;&nbsp; Michigan Department of</p>
           <p className='text-[14px] font-light leading-5 text-[#333] text-center'> Licensing and regulatory Affairs</p>
        </div> */}

        <div className='py-5'>
          <div className={`${footer01 ? "f_accordion_main_div f_Active" : "f_accordion_main_div"} mb-5`} onClick={() => setFooter01(!footer01)}>
            <div className='f_accordion_head'>
              <span className='roboto text-[14px] font-medium leading-5 text-[#333] '>Company</span>
              <MdKeyboardArrowDown className='arrow_toggle' />
            </div>
            <div className={`${footer01 ? "f_accordion_body f_Active" : "f_accordion_body"}`}>
              <ul className='unOrderList'>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/price">Price</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ's</Link>
                </li>
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={`${footer02 ? "f_accordion_main_div f_Active" : "f_accordion_main_div"} mb-5`} onClick={() => setFooter02(!footer02)}>
            <div className='f_accordion_head'>
              <span className='roboto text-[14px] font-medium leading-5 text-[#333] '>Feature</span>
              <MdKeyboardArrowDown className='arrow_toggle' />
            </div>
            <div className={`${footer02 ? "f_accordion_body f_Active" : "f_accordion_body"}`}>
              <ul className='unOrderList'>
                <li>
                  <Link href="/hrms">HRMS</Link>
                </li>
                <li>
                  <Link href="/recruitment">Recruitment</Link>
                </li>
                <li>
                  <Link href="/finance">Finance</Link>
                </li>
                <li>
                  <Link href="/personal">Personal</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={`${footer03 ? "f_accordion_main_div f_Active" : "f_accordion_main_div"} mb-5`} onClick={() => setFooter03(!footer03)}>
            <div className='f_accordion_head'>
              <span className='roboto text-[14px] font-medium leading-5 text-[#333] '>Locations</span>
              <MdKeyboardArrowDown className='arrow_toggle' />
            </div>
            <div className={`${footer03 ? "f_accordion_body f_Active" : "f_accordion_body"}`}>
              <ul className='unOrderList'>
                <li>
                  <Link href="/contact-us#world_map">USA</Link>
                </li>
                <li>
                  <Link href="/contact-us#world_map">Canada</Link>
                </li>
                <li>
                  <Link href="/contact-us#world_map">UK</Link>
                </li>
                <li>
                  <Link href="/contact-us#world_map">Turkey</Link>
                </li>
                <li>
                  <Link href="/contact-us#world_map">India</Link>
                </li>
                <li>
                  <Link href="/contact-us#world_map">Bangladesh</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='flex justify-between items-center py-7 social_media'>
          <p className='roboto text-[16px] font-medium text-light-gray'>Follow us</p>
          <div className='social_Links'>
            <ul className='flex items-center'>
              <li>
                <Link href="https://www.facebook.com/techforing/?kuid=6e496004-ebf2-4cd9-975f-39ca5b297a24&kref=https%3A%2F%2Fmain.techforing.com%2F"><img src="/footer/Facebook-round.png" alt="" /></Link>
              </li>
              <li className='ml-3'>
                <Link href="https://www.linkedin.com/company/techforingltd./?kuid=6e496004-ebf2-4cd9-975f-39ca5b297a24&kref=https%3A%2F%2Fmain.techforing.com%2F"><img src="/footer/Linkedin-round.png" alt="" /></Link>
              </li>
              <li className='ml-3'>
                <Link href="https://twitter.com/techforingltd?lang=en&kuid=6e496004-ebf2-4cd9-975f-39ca5b297a24&kref=https%3A%2F%2Fmain.techforing.com%2F"><img src="/footer/Twitter-round.png" alt="" /></Link>
              </li>
              <li className='ml-3'>
                <Link href="https://www.instagram.com/techforingltd/?kuid=6e496004-ebf2-4cd9-975f-39ca5b297a24&kref=https%3A%2F%2Fmain.techforing.com%2F"><img src="/footer/Youtube-round.png" alt="" /></Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='copyRIght pt-5 relative'>
          <p className='roboto leading-6 text-[12px] text-light-gray text-center'>Copyright © 2023 Techforing Ltd.</p>
          <Link href="#" className='absolute bottom-0 right-0 '>
            <img src="/footer/up.png" alt="" className='w-[25px]' />
          </Link>
        </div>
        {/* Add the Bitrix24 script to the head of your document */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,u){
                var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
                var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
              })(window,document,'https://cdn.bitrix24.com/b15773863/crm/site_button/loader_176_vi9yy0.js');
            `,
          }}
        />
      </footer>
    </>
  )
}

export default Footer;


