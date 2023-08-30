import logo from '@/assets/logo.png';
import facebookIcon from '@/assets/svg/facebook.svg';
import instagramIcon from '@/assets/svg/instagram.svg';
import twitterIcon from '@/assets/svg/twitter.svg';
import linkedInIcon from '@/assets/svg/linkedIn.svg';
import phoneBgIcon from '@/assets/phoneBg.png';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { Jelly } from '@uiball/loaders';


export type FormDataProps = {
    firstName: string;
    lastName: string;
    email: string;
    description: string;
};

const FirstContactLayer = () => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { dirtyFields },
    } = useForm<FormDataProps>({ mode: 'all' });
    const [loading, setLoading] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);

    const onSubmit: SubmitHandler<FormDataProps> = async (data) => {
        setLoading(true);
        if (data) {
            setTimeout(() => {
                setLoading(false);
                setShowModal(true);

            }, 1500);
        }

        setValue('firstName', '');
        setValue('lastName', '');
        setValue('email', '');
        setValue('description', '');
    };

    const isFormDirty = Object.keys(dirtyFields).length > 0;


    return (
        <div className='flex flex-col md:flex-row justify-between item md:justify-between my-20'>
            {loading && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
                    <Jelly size={50} color='#F36F00' />
                </div>
            )}
            <div className='absolute inset-0 w-[90%] h-full z-[-10] mt-[200px] object-contain' style={{ backgroundImage: `url(${phoneBgIcon})`, filter: 'blur(1px)' }} />

            {/* Left Section */}
            <div className='relative flex-shrink-0 w-full md:w-80 mb-10 md:mb-0 my-[400px] sm:flex md:justify-center sm:justify-center z-[20]'>
                <div className='w-80 h-[400px] bg-[#131313] rounded-tr-32 rounded-bl-32 bg-opacity-5 backdrop-blur-md absolute bottom-0 md:items-center justify-center text-center' />

                <div className='absolute bottom-14 left-4  md:justify-center md:items-center'>
                    <img src={logo} alt='rare-fit-logo' className='h-12 w-20' />

                    <div className='my-4 text-[16px] flex-wrap max-w-[300px]'>
                        RARE EAT FRESH represents a range of unique ingredients and the vibrancy of different Cultures, every
                        product in the Rare Eat range has a story inspired by different Cultures
                    </div>

                    <div className='flex flex-col'>
                        <p className='font-bold text-[16px]'>020 7205 4031</p>
                        <p className='font-bold text-[16px]'>support@rareeatfresh.com</p>
                    </div>

                    <div className='flex flex-row gap-9 mt-6'>
                        <img src={facebookIcon} alt='facebook-icon' />
                        <img src={instagramIcon} alt='instagram-icon' />
                        <img src={twitterIcon} alt='twitter-icon' />
                        <img src={linkedInIcon} alt='linkedin-icon' />
                    </div>
                </div>
            </div>


            {/* Right Section */}
            <div className='relative w-full md:w-[70%] flex-shrink-0 z-[20]'>
                <div className='w-full rounded-tr-32 rounded-br-32 p-16 bg-black bg-opacity-5 backdrop-blur-md'>
                    <h1 className='font-bold text-[16] text-black text-3xl'>Get in touch</h1>
                    <p className='text-[#626262] text-[16px]'>
                        Your Questions and Feedback Matter to Us - Reach Out, Let's Connect, and Explore<br /> Together to Ensure
                        Your Rare Eat Fresh Experience Is Exceptional and Delightful.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className='mt-[32px] items-center'>
                        <div className='flex justify-between items-center w-full'>
                            <input
                                className='m-2 flex-1 bg-white h-[60px] w-[50%] rounded-[50px] px-[20px] py-[10px]  outline-none
                                placeholder-[#626262]'
                                {...register('firstName')}
                                type='text'
                                placeholder='First Name'
                            />
                            <input
                                className='m-2 flex-1 bg-white h-[60px] w-[50%] rounded-[50px] px-[20px] py-[10px]  outline-none
                                placeholder-[#626262]'
                                {...register('lastName')}
                                type='text'
                                placeholder='Last Name'
                            />
                        </div>

                        <input
                            className='mt-[32px] flex-1 bg-white h-[60px] w-full rounded-[50px] px-[30px] py-[10px]  outline-none
                                placeholder-[#626262]'
                            {...register('email')}
                            type='text'
                            placeholder='Email'
                        />

                        <textarea
                            className='mt-[32px] w-full rounded-[20px] px-[20px] py-[30px]
                            maxLength-none disabled:bg-gray-50 outline-none h-[296px] placeholder-[#626262]'
                            placeholder='Describe your issues'
                            {...register('description')}
                        />
                        <button
                            type='submit'
                            className='mt-[32px] rounded-full w-full bg-[#F36F00] p-[16px] h-[53px] font-semibold text-white
                            disabled:bg-gray-200'
                            disabled={loading || !isFormDirty ||
                                !watch('firstName') ||
                                !watch('lastName') ||
                                !watch('email') ||
                                !watch('description')
                            }
                        >
                            {loading ? 'Sending...' : 'Send'}
                        </button>

                    </form>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
                    <div className='bg-white p-8 rounded-md flex flex-col items-center justify-center'>
                        <p className='text-center text-xl font-semibold mb-4'>Form submitted successfully!</p>
                        <button className='bg-[#F36F00] text-white rounded-md px-4 py-2 font-semibold mt-4' onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FirstContactLayer;