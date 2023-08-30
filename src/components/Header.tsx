import { useState, useRef, useEffect } from 'react';
import logo from '@/assets/logo.png';
import country from '@/assets/svg/country.svg';
import personIcon from '@/assets/svg/person.svg';
import arrowDownIcon from '@/assets/svg/arrow-down.svg';
import cartIcon from '@/assets/svg/cart.svg';
import searchIcon from '@/assets/svg/search.svg';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/20/solid';
import Drawer from './Drawer';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const overlayRef = useRef(null); // Ref for the background shade overlay

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === overlayRef.current) {
            toggleMenu();
        }
    };

    useEffect(() => {
        // Close the drawer when screen size is enlarged to large
        const handleResize = () => {
            if (window.innerWidth >= 1024 && isMenuOpen) {
                toggleMenu();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuOpen]);

    return (
        <header className='flex items-center justify-between font-mulish py-3 px-16 bg-white shadow-lg sticky top-0 z-50'>
            <div className='flex items-center'>
                <img src={logo} alt='rare-fit-logo' className='flex-shrink-0 mr-16 cursor-pointer' />

                <ul className='hidden md:flex flex-row gap-16 mr-16'>
                    <li className='cursor-pointer'>Store</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Contact</li>
                    <li className='cursor-pointer'>Blog</li>
                </ul>
            </div>

            <form className='hidden md:flex flex-1 items-center rounded-full border border-neutral-10 bg-white p-4 mr-16'>
                <img src={searchIcon} alt='searchIcon' className='pr-4' />
                <input type='text' placeholder='Search' className='text-neutral-40 outline-none w-full' />
                <button hidden type='submit' />
            </form>

            <div className={`hidden md:flex gap-30 ${isMenuOpen ? 'flex' : 'hidden'}`}>
                <img src={country} alt='country-logo' />
                <img src={cartIcon} alt='cart' />
                <div className='flex flex-row items-center border border-[#F36F00] rounded-full py-2 px-4 bg-pink-300 bg-opacity-10 cursor-pointer'>
                    <img src={personIcon} alt='person' />
                    <img src={arrowDownIcon} alt='arrow-down' />
                </div>
            </div>

            <div className='md:hidden flex items-center'>
                <button onClick={toggleMenu} className='mr-4'>
                    {isMenuOpen ? <XMarkIcon className='h-6 w-6' /> : <Bars4Icon className='h-6 w-6' />}
                </button>
            </div>

            {/* Background Shade */}
            {isMenuOpen && <div ref={overlayRef} className='fixed inset-0 bg-black opacity-50' onClick={handleOverlayClick} />}

            {/* Drawer Sheet */}
            {isMenuOpen && (
                <Drawer onTogglePress={toggleMenu} />
            )}
        </header>
    );
};

export default Header;
