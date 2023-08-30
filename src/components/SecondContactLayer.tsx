import { useState } from 'react'
import { FormDataProps } from './FirstContactLayer';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Jelly } from '@uiball/loaders';

type SubscriptionFormProp = Pick<FormDataProps, 'email'>;

const SecondContactLayer = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);

    const {
        register,
        setValue,
        handleSubmit,
    } = useForm<FormDataProps>();

    const onSubmit: SubmitHandler<SubscriptionFormProp> = async (data) => {
        setLoading(true);
        if (data) {
            setTimeout(() => {
                setLoading(false);
                setShowModal(true);

            }, 1500);
        }

        setValue('email', '');
    };

    return (
        <div className='my-32 items-center'>
            {loading && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
                    <Jelly size={50} color='#F36F00' />
                </div>
            )}

            <h1 className='font-bold text-[32px] text-center text-[#131313]'>
                Join Our Newsletter: Stay Connected, Savor Exclusives!
            </h1>

            <p className='text-center mt-[16px] font-medium text-[16px] text-[#131313]'>
                Subscribe to our newsletter and be a part of the vibrant Rare Eat Fresh community. Stay connected with the latest updates, exclusive offers, and exciting promotions on rare West African food ingredients.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-row items-center mt-[16px] justify-center'>
                <input
                    className='m-2  bg-white h-[53px] w-[350px] rounded-[50px] px-[20px] py-[10px] outline-none
                placeholder-[#626262] border border-[#131313]'
                    {...register('email')}
                    type='text'
                    placeholder='Email address'
                />

                <button
                    type='submit'
                    className='rounded-full w-[220px] bg-[#F36F00] p-[16px] h-[53px] font-semibold text-white
                            disabled:bg-gray-200'
                >
                    {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
            </form>

            {/* Modal */}
            {showModal && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
                    <div className='bg-white p-8 rounded-md flex flex-col items-center justify-center'>
                        <p className='text-center text-xl font-semibold mb-4'>Congratulations! you have subscribed to our newsletter.</p>
                        <div className='flex justify-center w-full'>
                            <button className='bg-[#F36F00] text-white rounded-md px-4 py-2 font-semibold' onClick={() => setShowModal(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default SecondContactLayer