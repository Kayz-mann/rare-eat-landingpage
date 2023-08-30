import { XMarkIcon } from '@heroicons/react/20/solid'
import country from '@/assets/svg/country.svg';
import personIcon from '@/assets/svg/person.svg';
import arrowDownIcon from '@/assets/svg/arrow-down.svg';
import cartIcon from '@/assets/svg/cart.svg';
import searchIcon from '@/assets/svg/search.svg';

type Props = {
  onTogglePress: () => void
}

const Drawer = ({ onTogglePress }: Props) => {
  return (
    <div className='fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50'>
      <div className='flex justify-end p-4'>
        <button onClick={onTogglePress}>
          <XMarkIcon className='h-6 w-6' />
        </button>
      </div>

      <ul className='text-center space-y-4"'>
        <li className='cursor-pointer text-lg'>Store</li>
        <li className='cursor-pointer text-lg'>About</li>
        <li className='cursor-pointer text-lg'>Contact</li>
        <li className='cursor-pointer text-lg'>Blog</li>
      </ul>

      <form className='flex flex-1 items-center rounded-full border border-neutral-10 bg-white p-4 h-5 mx-2 my-4 '>
        <img src={searchIcon} alt='searchIcon' className='pr-4' />
        <input type='text' placeholder='Search' className='text-neutral-40 outline-none w-full' />
        <button hidden type='submit' />
      </form>

      <div className=' flex items-center justify-center bottom-0 h-full'>
        <img src={country} alt='country-logo' />
        <img src={cartIcon} alt='cart' />
        <div className='flex flex-row items-center border border-[#F36F00] rounded-full py-2 px-4 bg-pink-300 bg-opacity-10 cursor-pointer'>
          <img src={personIcon} alt='person' />
          <img src={arrowDownIcon} alt='arrow-down' />
        </div>
      </div>
    </div>
  )
}

export default Drawer