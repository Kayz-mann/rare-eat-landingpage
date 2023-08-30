import logo from '@/assets/logo.png';
import facebookIcon from '@/assets/svg/white-icon/wFacebook.svg';
import instagramIcon from '@/assets/svg/white-icon/wInstagram.svg';
import twitterIcon from '@/assets/svg/white-icon/wTwitter.svg';
import linkedInIcon from '@/assets/svg/white-icon/wLinkedIn.svg';
const Footer = () => {
    return (
        <footer className="bg-[#131313] px-[64px] py-[32px]">
            <div className='item-center'>
                <img src={logo} alt='rare-fit-logo' className='h-12 w-20' />

                <div className='flex flex-row flex-wrap justify-between md:flex-nowrap'>
                    <ul className='mt-[32px] gap-[16px] text-white text-[16px]'>
                        <li className='text-[20px] font-bold text-[#F36F00] cursor-pointer'>Company</li>
                        <li className='cursor-pointer font-light mt-[16px]'>About Us</li>
                        <li className='cursor-pointer font-light mt-[16px]'>Store</li>
                        <li className='cursor-pointer font-light mt-[16px]'>Blog</li>
                    </ul>

                    <div className='item-center'>

                        <ul className='mt-[32px] gap-[16px] text-white text-[16px]'>
                            <li className='text-[20px] font-bold text-[#F36F00] cursor-pointer'>Terms and Conditions</li>
                            <li className='cursor-pointer font-light mt-[16px]'>Privacy Policy</li>
                            <li className='cursor-pointer font-light mt-[16px]'>Shipping Policy</li>
                            <li className='cursor-pointer font-light mt-[16px]'>Returns & Refund</li>
                            <li className='cursor-pointer font-light mt-[16px]'>Cookies</li>
                        </ul>
                    </div>

                    <div className='item-center'>

                        <ul className='mt-[32px] gap-[16px] text-white text-[16px]'>
                            <li className='text-[20px] font-bold text-[#F36F00] cursor-pointer'>Need Help?</li>
                            <li className='cursor-pointer font-light mt-[16px]'>Track Order</li>
                            <li className='cursor-pointer font-light mt-[16px]'>FAQ's</li>
                        </ul>
                    </div>

                    <div className='item-center'>
                        <ul className='mt-[32px] gap-[16px] text-white text-[16px]'>
                            <li className='text-[20px] font-bold text-[#F36F00] cursor-pointer'>Contact Us</li>
                            <li className='cursor-pointer font-light mt-[16px]'>support@rareeatfresh.com</li>
                            <li className='cursor-pointer font-light mt-[16px]'>020 7205 4031</li>
                            <li className='cursor-pointer font-light mt-[16px]'>
                                International House, 64 Nile Street, London,<br /> N1 7SR, United Kingdom
                            </li>
                        </ul>
                        <div className='flex flex-row gap-9 mt-6'>
                            <img src={facebookIcon} alt='facebook-icon' />
                            <img src={instagramIcon} alt='instagram-icon' />
                            <img src={twitterIcon} alt='twitter-icon' />
                            <img src={linkedInIcon} alt='linkedin-icon' />
                        </div>
                    </div>
                </div>
            </div>

            <hr className='w-full border border-[#BEBCBD] mt-[40px] ' />

            <p className='text-[#94A3B8] text-[16px] text-center mt-[24px] mb-[32px]'>Copyright © 2023 Rare Eat Fresh. All rights reserved.</p>
        </footer>
    )
}

export default Footer