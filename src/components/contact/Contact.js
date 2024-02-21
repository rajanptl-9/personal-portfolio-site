import React from 'react'
import "./contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Mailbox from './Mailbox';
import { faFacebookF, faGit, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Tag from './Tag';

function Contact() {
    return (
        <div className='contacts'>
            <div className='title'><span id="title_box">CONTACT</span></div>
            <div className='contact'>
                <Mailbox />
                <div className='contact_list'>
                    <div className='subtitle'>More Ways</div>
                    <div className='linkToMySocial'>
                        <Tag link="https://www.linkedin.com/in/rajan-patel-aaa503252/" icon={<FontAwesomeIcon icon={faLinkedinIn} />} name="LinkedIn Profile" bgcolor="#0a66c2" />
                        <Tag link="https://www.facebook.com/profile.php?id=100056040500100" icon={<FontAwesomeIcon icon={faFacebookF} />} name="Facebook Profile" bgcolor="#1877f2" />
                        <Tag link="https://github.com/rajanptl-9" icon={<FontAwesomeIcon icon={faGit} />} name="Git-Hub Profile" bgcolor="#010409" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact