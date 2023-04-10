import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { NavLink } from 'react-router-dom'

const Register = () => {
    return (
        <>
            <Meta title={'Registro'} />
            <BreadCrumb title='Register' />

            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Registrate</h3>
                            <form action='' className='d-flex flex-column gap-15'>
                                <div>
                                    <input type='username' name='username' className='form-control' placeholder='Nombre de Usuario' ></input>
                                </div>
                                <div>
                                    <input type='email' name='email' className='form-control' placeholder='Email' ></input>
                                </div>
                                <div className='mt-1'>
                                    <input type='password' name='password' className='form-control' placeholder='Contraseña' ></input>
                                </div>
                                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                    <button className='button border-0'>Regístrate</button>
                                    <NavLink to='/login' className='button signup'>Inicia Sesión</NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register