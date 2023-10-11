/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='grid grid-cols-6 my-20 relative gap-x-10'>
            <div></div>
            <div>
                <p className='font-bold'>¿Necesitas ayuda?</p>
                <button className='bg-zinc-600 text-white font-bold rounded-md py-2 px-5 mt-5 text-sm'>Contáctenos</button>
            </div>
            <div className='space-y-5'>
                <p className='font-bold'>Servicio al cliente</p>
                <a className='hover:underline hover:cursor-pointer block'>Garantía</a>
                <a className='hover:underline hover:cursor-pointer block'>Pagos</a>
                <a className='hover:underline hover:cursor-pointer block'>Envío</a>
                <a className='hover:underline hover:cursor-pointer block'>Términos y condiciones</a>
                <a className='hover:underline hover:cursor-pointer block'>Política de privacidad</a>
            </div>
            <div className='space-y-5'>
                <p className='font-bold'>Supermercado</p>
                <a className='hover:underline hover:cursor-pointer block'>Sobre nosotros</a>
                <a className='hover:underline hover:cursor-pointer block'>Marcas</a>
                <a className='hover:underline hover:cursor-pointer block'>Inversionistas</a>
                <a className='hover:underline hover:cursor-pointer block'>Cookies</a>
            </div>
            <div className='space-y-5'>
                <p className='font-bold'>Ubicación</p>
                <a className='hover:underline hover:cursor-pointer block'>Colombia</a>
            </div>
            <div className='absolute bottom-0 right-20 space-x-5'>
                <FontAwesomeIcon icon={faInstagram} className='cursor-pointer' />
                <FontAwesomeIcon icon={faFacebook} className='cursor-pointer'  />
                <FontAwesomeIcon icon={faYoutube} className='cursor-pointer' />
                <FontAwesomeIcon icon={faXTwitter} className='cursor-pointer'  />
            </div>
        </div>
    )
}

export default Footer;