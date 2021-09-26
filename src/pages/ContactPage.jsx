/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { ContactItem } from '../components/contact/ContactItem';
import phone from '../assets/phone.svg';
import email from '../assets/emailme.svg';
import location from '../assets/location.svg';
import { Title } from '../components/common/Title';

export const ContactPage = () => {
    return (
        <div>
            <div className="title">
                <Title title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.26483343897!2d-58.50333811002399!3d-34.61580373631014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1632644108653!5m2!1ses-419!2sar" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+5491133145314'} text2={'12333333334'} title="Phone" />
                    <ContactItem icon={email} text1={'magaliantonella.gaiani@gmail.com'} text2={'12333333334'} title="Email" />
                    <ContactItem icon={location} text1={'Buenos Aires'} text2={'Argentina'} title="Address" />
                </div>
            </div>
        </div>
    )
}
