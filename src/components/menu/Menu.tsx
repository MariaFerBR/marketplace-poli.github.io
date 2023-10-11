/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const Menu = () => {
    return (
        <div className='border-b border-zinc-200 pb-6'>
            <div className='flex justify-between px-10 py-8'>
                <div className="flex items-center">
                    <div className='mr-2'>
                        <FontAwesomeIcon icon={faAt} className='fa-xl' />
                    </div>
                    <p className='font-bold text-lg'>Supermercado</p>
                </div>
                <div>
                    <div className='py-1 pl-4 border rounded-full'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <input type="text" placeholder='Buscar productos...' className='outline-none ml-3 w-96 text-xs' />
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='flex items-center mr-5'>
                        <FontAwesomeIcon icon={faUser} />
                        <a href="#" className='ml-2'>Login</a>
                    </div>
                    <div className='relative'>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <div className='absolute w-2 h-2 bg-red-500 rounded-full bottom-4 left-3.5' />
                    </div>
                </div>
            </div>

            <div className='flex justify-between mx-20'>
                <div className='flex space-x-10 font-bold'>
                    <a href="#" className='hover:underline'>Productos</a>
                    <a href="#" className='hover:underline'>OFERTAS</a>
                    <a href="#" className='hover:underline'>Categorías</a>
                </div>
                <div className='flex space-x-10 font-bold'>
                    <a href="#" className='hover:underline'>Envío</a>
                    <a href="#" className='hover:underline'>Garantía</a>
                    <a href="#" className='hover:underline'>Contacto</a>
                </div>
            </div>
        </div>
    )
}

export default Menu;