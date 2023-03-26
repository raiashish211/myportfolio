import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2wot91l', 'template_uiuntyv', form.current, 'NbNiwWRjdsmO26gu9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };


    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>raiashish523@gmail.com</h5>
                        <a href="mailto:raiashish523@gmail.com" target='_blank'>Send a mail. </a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Facebook</h4>
                        <h5>RaiAshish</h5>
                        <a href="https://m.me/know.me.raisamrat/" target='_blank'>Send a message.</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+919667550540</h5>
                        {/* <a href="https://api.whatsapp.com/send?phone+919667550540" target='_blank'>Send a message</a> */}
                        <a href="https://wa.me/+919667550540" target='_blank'>Send a message</a>
                    </article>
                </div>
                {/* end of contact option */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Enter your full name: ' required />
                    <input type="email" name='email' placeholder='Enter your email: ' required />
                    <textarea name="message" rows="8" placeholder='Your message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>

                </form>
            </div>
        </section>
    )
}

export default Contact
