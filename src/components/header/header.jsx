import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { GoogleAuthProvider, getAuth, provider, signInWithPopup } from '../Firebase/firebase'
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
function Header() {
    function logingoogle () {
        const auth = getAuth();
        signInWithPopup(auth,provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log('user====>', user)

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }
    const [modal2Open, setModal2Open] = useState(false);
    const items = [
        {
            label: (
                <div>
                    <p onClick={() => setModal2Open(true)}>
                        Login
                    </p>
                    <Modal
                        centered
                        open={modal2Open}
                        onOk={() => setModal2Open(false)}
                        onCancel={() => setModal2Open(false)}
                    >
                        <div className='ant-modal-header'>
                            <h1>
                                Welcome Back
                            </h1>
                        </div>
                        <div className='ant-modal-body'>
                            <div className='login-inputs'>
                                <div className="email-login">
                                    <label htmlFor="email-login">Email</label>
                                    <input type="text" placeholder='Email' />
                                </div>
                                <div className="password-login">
                                    <label htmlFor="email-login">Password</label>
                                    <input type="text" placeholder='Password' />
                                </div>
                            </div>
                            <span style={{ textAlign: 'center', marginBottom: '8px' }}>or</span>
                        </div>
                        <button className='modal-button' onClick={logingoogle}>
                            <span className='modal-icons'>
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-60w4ze" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.6 12.227c0-.709-.064-1.39-.182-2.045H12v3.868h5.382a4.6 4.6 0 0 1-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35Z" fill="#4285F4"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H3.064v2.59A9.996 9.996 0 0 0 12 22Z" fill="#34A853"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.405 13.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V7.51H3.064A9.996 9.996 0 0 0 2 12c0 1.614.386 3.14 1.064 4.49l3.34-2.59Z" fill="#FBBC05"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.996 5.977c1.469 0 2.787.505 3.823 1.496l2.868-2.868C16.955 2.99 14.692 2 11.997 2 8.086 2 4.705 4.24 3.06 7.51l3.341 2.59c.786-2.364 2.99-4.123 5.595-4.123Z" fill="#EA4335"></path></svg>
                            </span>
                            <span >
                                Continue with Google
                            </span>
                        </button>
                        <button className='modal-button'>
                            <span className='modal-icons'>
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-60w4ze" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.001 12c0-5.523-4.477-10-10-10C6.477 2 2 6.477 2 12c0 4.992 3.657 9.13 8.438 9.88V14.89h-2.54v-2.89h2.54V9.796c0-2.506 1.493-3.89 3.777-3.89 1.095 0 2.239.195 2.239.195v2.46h-1.261c-1.242 0-1.63.772-1.63 1.563V12h2.774l-.444 2.891h-2.33v6.988c4.781-.75 8.438-4.887 8.438-9.879Z" fill="#1877F2"></path></svg>
                            </span>
                            <span >
                                Continue with FaceBook
                            </span>
                        </button>
                    </Modal>

                </div>
            ),
            key: '0',
        },
        {
            label: (
                <div>
                    <p onClick={() => setModal2Open(true)}>
                        Sign up
                    </p>
                    <Modal
                        centered
                        open={modal2Open}
                        onOk={() => setModal2Open(false)}
                        onCancel={() => setModal2Open(false)}
                    >
                        <div className='ant-modal-header'>
                            <h1>
                                Welcome To Turo
                            </h1>
                        </div>
                        <div className='ant-modal-body'>
                            <div className='login-inputs'>
                                <div className="email-login">
                                    <label htmlFor="email-login">Email</label>
                                    <input type="text" placeholder='Email' />
                                </div>
                                <div className="password-login">
                                    <label htmlFor="email-login">Password</label>
                                    <input type="text" placeholder='Password' />
                                </div>
                            </div>
                            <span style={{ textAlign: 'center', marginBottom: '8px' }}>or</span>
                        </div>
                        <button className='modal-button'>
                            <span className='modal-icons'>
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-60w4ze" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.6 12.227c0-.709-.064-1.39-.182-2.045H12v3.868h5.382a4.6 4.6 0 0 1-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35Z" fill="#4285F4"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H3.064v2.59A9.996 9.996 0 0 0 12 22Z" fill="#34A853"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.405 13.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V7.51H3.064A9.996 9.996 0 0 0 2 12c0 1.614.386 3.14 1.064 4.49l3.34-2.59Z" fill="#FBBC05"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.996 5.977c1.469 0 2.787.505 3.823 1.496l2.868-2.868C16.955 2.99 14.692 2 11.997 2 8.086 2 4.705 4.24 3.06 7.51l3.341 2.59c.786-2.364 2.99-4.123 5.595-4.123Z" fill="#EA4335"></path></svg>
                            </span>
                            <span>
                                Continue with Google
                            </span>
                        </button>
                        <button className='modal-button'>
                            <span className='modal-icons'>
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-60w4ze" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.001 12c0-5.523-4.477-10-10-10C6.477 2 2 6.477 2 12c0 4.992 3.657 9.13 8.438 9.88V14.89h-2.54v-2.89h2.54V9.796c0-2.506 1.493-3.89 3.777-3.89 1.095 0 2.239.195 2.239.195v2.46h-1.261c-1.242 0-1.63.772-1.63 1.563V12h2.774l-.444 2.891h-2.33v6.988c4.781-.75 8.438-4.887 8.438-9.879Z" fill="#1877F2"></path></svg>
                            </span>
                            <span >
                                Continue with FaceBook
                            </span>
                        </button>
                    </Modal>

                </div>
            ),
            key: '1',
        },

        {
            label: (
                <div>
                    <p>
                        Become a host
                    </p>
                </div>
            ),
            key: '2',
        },

    ];

    return (
        <>
            <Navbar expand="lg" variant="light" bg="light">
                <Navbar.Brand href="#" className='headertitle'>Turo has launched in New York! Tap to explore cars.</Navbar.Brand>
            </Navbar>
            <div className="container-fluid headertwo">
                <div className="logo">
                    <svg width="88px" height="32px" viewBox="0 0 88 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="eaq1ank0 seo-pages-rzeulm-NavbarLogoIcon" role="img" version="1.1"><path d="m77.416 2.853-.529-.666a5.833 5.833 0 0 0-.556-.614C75.261.56 73.824 0 72.305 0H0v32h72.319a5.86 5.86 0 0 0 4.026-1.573c.203-.187.38-.387.556-.6.013-.014.013-.027.027-.04l10.817-13.774-10.33-13.16Z" fill="#121214"></path><path d="M65.513 22.927c-4.162 0-7.429-3.213-7.429-7.333 0-3.867 3.349-7.014 7.456-7.014 1.993 0 3.85.747 5.246 2.08a7.056 7.056 0 0 1 2.183 5.134c0 3.933-3.349 7.133-7.456 7.133Zm0-11.867c-1.37 0-2.63.48-3.538 1.334-.922.866-1.423 2.093-1.423 3.426 0 1.267.528 2.44 1.504 3.307.936.84 2.21 1.32 3.498 1.32 1.328 0 2.562-.48 3.497-1.373a4.652 4.652 0 0 0 1.464-3.387c0-1.293-.529-2.48-1.478-3.333-.949-.84-2.182-1.294-3.524-1.294ZM31.76 22.874c-3.322 0-4.772-1.587-5.246-2.28-.732-1.067-.8-2.094-.8-3.227v-8.4h2.48v8.4c0 .88.055 1.547.665 2.16.61.6 1.653.88 3.199.88 1.26 0 2.087-.2 2.643-.627.583-.466.868-1.253.868-2.413v-8.4h2.453v8.4c0 1.307-.067 2.32-1.003 3.507-1.328 1.733-3.863 2-5.26 2Zm20.482-.267-2.792-4.933h-4.528v4.933h-2.494V8.967h8.16c2.63 0 4.474 1.8 4.474 4.373 0 2.014-1.125 3.6-2.942 4.16l2.942 5.107h-2.82Zm-1.64-7.387c.596 0 1.992-.186 1.992-1.973 0-1.133-.759-1.84-1.992-1.84h-5.666v3.813h5.666Zm-35.963 7.387V11.42H9.895V8.967h11.928v2.453H17.08v11.187h-2.44Z" fill="#fff"></path><path d="M65.541 8.607c1.98 0 3.836.734 5.232 2.08a7.067 7.067 0 0 1 2.17 5.12c0 3.907-3.335 7.094-7.43 7.094-4.147 0-7.414-3.214-7.414-7.307.014-3.853 3.348-6.987 7.442-6.987Zm0 11.867a5.1 5.1 0 0 0 3.51-1.373 4.629 4.629 0 0 0 1.465-3.4 4.512 4.512 0 0 0-1.478-3.36c-.935-.84-2.182-1.307-3.524-1.307-1.383 0-2.643.48-3.565 1.346-.922.88-1.437 2.107-1.437 3.454 0 1.267.529 2.453 1.505 3.333a5.415 5.415 0 0 0 3.524 1.307ZM50.603 8.994c2.697 0 4.446 1.867 4.446 4.36 0 1.933-1.07 3.587-2.942 4.146l2.928 5.094H52.27l-2.792-4.934h-4.569v4.934h-2.453v-13.6h8.147Zm-5.694 6.253h5.694c1.667 0 2.02-1.2 2.02-2 0-1.066-.678-1.867-2.02-1.867h-5.694v3.867Zm-6.9-6.253v8.373c0 1.293-.067 2.307-1.002 3.493-1.343 1.734-3.864 1.987-5.246 1.987-3.308 0-4.758-1.587-5.22-2.267-.731-1.066-.786-2.08-.786-3.213V8.994h2.427v8.373c0 .88.054 1.56.678 2.174.61.6 1.667.893 3.212.893 1.261 0 2.101-.2 2.657-.64.597-.467.881-1.267.881-2.44V8.98h2.4v.013Zm-16.212 0v2.413h-4.744v11.187h-2.4V11.407H9.91V8.994h11.888Zm43.744-.427c-4.12 0-7.47 3.16-7.47 7.04 0 4.12 3.281 7.347 7.456 7.347 4.121 0 7.47-3.2 7.47-7.147 0-1.96-.773-3.8-2.183-5.16-1.41-1.346-3.28-2.08-5.273-2.08Zm0 11.867c-1.288 0-2.548-.48-3.47-1.307-.963-.866-1.491-2.04-1.491-3.293 0-1.333.501-2.547 1.423-3.413.908-.854 2.155-1.334 3.524-1.334 1.329 0 2.562.467 3.484 1.307a4.413 4.413 0 0 1 1.464 3.32 4.58 4.58 0 0 1-1.45 3.36 5.109 5.109 0 0 1-3.484 1.36ZM50.603 8.954h-8.187v13.68h2.534v-4.92h4.487l2.779 4.907.013.026h2.888l-.04-.066-2.902-5.04c1.803-.56 2.928-2.16 2.928-4.174-.013-2.613-1.857-4.413-4.5-4.413Zm-5.653 2.48h5.64c1.233 0 1.965.68 1.965 1.813 0 1.76-1.383 1.96-1.966 1.96H44.95v-3.773Zm-6.886-2.48H35.57V17.38c0 1.16-.285 1.933-.868 2.4-.542.426-1.369.626-2.616.626-1.532 0-2.576-.293-3.186-.88-.61-.6-.664-1.267-.664-2.146V8.954h-2.521V17.38c0 1.133.054 2.16.8 3.24.474.693 1.938 2.293 5.26 2.293 1.395 0 3.93-.267 5.286-2.014.935-1.186 1.003-2.213 1.003-3.52V8.955Zm-16.213 0H9.882v2.506h4.744v11.174h2.48V11.46h4.745V8.954Z" fill="#fff"></path></svg>
                </div>
                <div className="rightheader">
                    <div className="hostbtn">
                        <button>
                            Become a host
                        </button>
                    </div>
                    <div className="headericons">
                        <Dropdown
                            menu={{
                                items,
                            }}
                            trigger={['click']}
                            placement="bottomRight"
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <div className="menu"><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-htr69o" role="img" version="1.1"><path d="M19.15 6.85H4.85a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h14.3c.41 0 .75.34.75.75s-.34.75-.75.75Zm0 5.76H4.85a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h14.3c.41 0 .75.34.75.75s-.34.75-.75.75Zm0 6.01H4.85a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h14.3c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill="#121214"></path></svg></div>
                                </Space>
                            </a>
                        </Dropdown>
                        {/* <div className="menu"><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-htr69o" role="img" version="1.1"><path d="M19.15 6.85H4.85a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h14.3c.41 0 .75.34.75.75s-.34.75-.75.75Zm0 5.76H4.85a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h14.3c.41 0 .75.34.75.75s-.34.75-.75.75Zm0 6.01H4.85a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h14.3c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill="#121214"></path></svg></div> */}
                        <div className="user"><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-htr69o" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.368 18.847a9.575 9.575 0 0 0 6.592 2.624 9.573 9.573 0 0 0 6.488-2.527c-2.387-3.465-6.419-3.5-6.485-3.5a4.957 4.957 0 0 1-4.954-4.951 4.957 4.957 0 0 1 4.95-4.951 4.956 4.956 0 0 1 4.193 7.587.625.625 0 0 1-1.058-.666 3.705 3.705 0 0 0-3.134-5.671 3.705 3.705 0 0 0-3.701 3.701 3.705 3.705 0 0 0 3.7 3.701c.183-.022 4.597.018 7.369 3.83a9.569 9.569 0 0 0 2.242-6.164c0-5.298-4.311-9.61-9.61-9.61-5.299 0-9.61 4.312-9.61 9.61 0 2.292.807 4.4 2.151 6.054.887-1.178 2.042-1.989 2.909-2.483a.625.625 0 0 1 .62 1.085c-.807.459-1.892 1.225-2.662 2.33Zm14.38.575a.62.62 0 0 1-.104.106 10.826 10.826 0 0 1-7.684 3.193c-5.988 0-10.86-4.872-10.86-10.861C1.1 5.872 5.972 1 11.96 1c5.988 0 10.86 4.872 10.86 10.86 0 2.937-1.172 5.605-3.072 7.562Z" fill="#121214"></path></svg></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header

