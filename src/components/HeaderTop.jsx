import React from 'react';
import h from '../style/header.module.css';
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SocialLinks } from './SharedComponents';
import Link from 'next/link';

const HeaderTop = () => {
	return (
		<div className={h.headerTop}>
			<div className='custom-container'>
				<div className="text-white flex items-center justify-between py-3">
					<div className="flex items-center justify-center lg:gap-8 gap-3">
						<div className="flex items-center justify-center lg:gap-2 gap-0">
							<AiOutlineMail className='text-primary lg:text-[16px] text-[10px]' />
							<a href="mailto:info@techforing.com" className='lg:text-sm text-[8px] leading-[6px] ml-1'>info@techforing.com</a>
						</div>
						<div className="flex items-center justify-center lg:gap-2 gap-0">
							<BsFillTelephoneFill className='text-primary lg:text-[16px] text-[10px]' />
							<a href="tel:+1 616 271 8544" className='lg:text-sm text-[8px] leading-[6px] ml-1'>+1 616 271 8544</a>
						</div>
					</div>

					<div className='lg:block hidden'>
						<SocialLinks style={{ fill: "#ffffff" }} />
					</div>

					<div className='lg:hidden block'>
						<ul className='flex items-center'>
							<li className='mr-2'>
								<a href="https://www.facebook.com/techforing/?kuid=6e496004-ebf2-4cd9-975f-39ca5b297a24&kref=https%3A%2F%2Fmain.techforing.com%2F" target="_blank" rel="noreferrer">
									<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
										<path d="M5.99999 0C2.7 0 0 2.70482 0 6.03615C0 9.04819 2.196 11.5482 5.06399 12V7.78313H3.54V6.03615H5.06399V4.70482C5.06399 3.19277 5.95799 2.36145 7.33199 2.36145C7.98599 2.36145 8.66999 2.4759 8.66999 2.4759V3.96386H7.91399C7.16999 3.96386 6.93599 4.42771 6.93599 4.90362V6.03615H8.60399L8.33399 7.78313H6.93599V12C8.34986 11.7758 9.63731 11.0515 10.5659 9.95787C11.4946 8.86422 12.0032 7.47328 12 6.03615C12 2.70482 9.29999 0 5.99999 0Z" fill="white" />
									</svg>
								</a>
							</li>

							<li className='mr-2'>
								<a href="https://www.linkedin.com/company/techforingltd./?kuid=6e496004-ebf2-4cd9-975f-39ca5b297a24&kref=https%3A%2F%2Fmain.techforing.com%2F" target="_blank" rel="noreferrer">
									<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
										<path d="M6 0C2.68625 0 0 2.68625 0 6C0 9.31375 2.68625 12 6 12C9.31375 12 12 9.31375 12 6C12 2.68625 9.31375 0 6 0ZM4.53125 8.48688H3.31625V4.57687H4.53125V8.48688ZM3.91625 4.09687C3.5325 4.09687 3.28437 3.825 3.28437 3.48875C3.28437 3.14562 3.54 2.88187 3.93187 2.88187C4.32375 2.88187 4.56375 3.14562 4.57125 3.48875C4.57125 3.825 4.32375 4.09687 3.91625 4.09687ZM8.96875 8.48688H7.75375V6.32C7.75375 5.81562 7.5775 5.47312 7.13813 5.47312C6.8025 5.47312 6.60313 5.705 6.515 5.92813C6.4825 6.0075 6.47438 6.12 6.47438 6.23188V8.48625H5.25875V5.82375C5.25875 5.33563 5.24312 4.9275 5.22687 4.57625H6.2825L6.33813 5.11937H6.3625C6.5225 4.86438 6.91438 4.48812 7.57 4.48812C8.36938 4.48812 8.96875 5.02375 8.96875 6.175V8.48688Z" fill="#FAFAFA" />
									</svg>
								</a>
							</li>
							<li className='mr-2'>
								<a href="https://twitter.com/techforingltd?lang=en&kuid=6e496004-ebf2-4cd9-975f-39ca5b297a24&kref=https%3A%2F%2Fmain.techforing.com%2F" target="_blank" rel="noreferrer">
									<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
										<path d="M6 0C9.31714 0 12 2.68286 12 6C12 9.31714 9.31714 12 6 12C2.68286 12 0 9.31714 0 6C0 2.68286 2.68286 0 6 0ZM4.90286 9.16286C7.56 9.16286 9.01714 6.96 9.01714 5.04857V4.86C9.3 4.65429 9.54857 4.39714 9.73714 4.10571C9.48 4.21714 9.19714 4.29429 8.90571 4.33714C9.20571 4.15714 9.43714 3.87429 9.54 3.54C9.25714 3.70286 8.94857 3.82286 8.62286 3.89143C8.35714 3.60857 7.98 3.43714 7.56857 3.43714C6.77143 3.43714 6.12 4.08857 6.12 4.88571C6.12 4.99714 6.12857 5.10857 6.16286 5.21143C4.96286 5.15143 3.89143 4.57714 3.18 3.70286C3.06 3.91714 2.98286 4.16571 2.98286 4.43143C2.98286 4.92857 3.24 5.37429 3.62571 5.63143C3.38571 5.63143 3.16286 5.56286 2.97429 5.45143V5.46857C2.97429 6.17143 3.47143 6.75429 4.13143 6.89143C4.01143 6.92571 3.88286 6.94286 3.75429 6.94286C3.66 6.94286 3.57429 6.93429 3.48 6.91714C3.66 7.49143 4.2 7.91143 4.82571 7.92C4.32857 8.30571 3.70286 8.53714 3.02571 8.53714C2.90571 8.53714 2.79429 8.53714 2.68286 8.52C3.31714 8.93143 4.08 9.17143 4.89429 9.17143" fill="#FAFAFA" />
									</svg>
								</a>
							</li>

							<li>
								<a href="https://www.instagram.com/techforingltd/" target="_blank" rel="noreferrer">
									<svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#FFF" />
										<path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#FFF" />
										<path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#FFF" />
									</svg>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderTop