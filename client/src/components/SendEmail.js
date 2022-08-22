import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const SendEmail = ({ user, email, selectedEmail }) => {
    console.log(`i am the selected card: ${selectedEmail}`)

    const [emailMessage, setEmailMessage] = useState('')

    const [toSend, setToSend] = useState({
        from_name: '',
        to_email: '',
        message: '',
        reply_to: '',
    });

    function handleMessageChange(e) {
        setEmailMessage(e.target.value)
        console.log(emailMessage)

    }

    const sendEmail = (e) => {
        e.preventDefault();
        setToSend({
            from_name: user,
            to_email: selectedEmail,
            message: emailMessage,
            reply_to: email,
        })

        // console.log(toSend)

        emailjs.sendForm('service_uac4l8j', 'template_nw5puzr', toSend, 'qjhahz_NGtpfZbyo1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="h-full flex justify-center items-center" >
            <form className="shadow-xl flex w-2/3 flex-col justify-center items-center bg-gray-300 rounded-2xl border-red-400 border-b-4 border-t-4 my-12 dark:bg-slate-800 dark:border-slate-600" onSubmit={sendEmail}>

                <label className="font-medium mt-2 mb-1 dark:text-white" >Message</label>

                <textarea className="block border-none p-2 pl-4 rounded-lg w-2/3 dark:bg-slate-700 dark:text-slate-400" 
                name="message" 
                onChange={handleMessageChange}
                value={emailMessage}
                />

                <input className="duration-500 hover:text-gray-100 m-4 bg-gray-100 pl-6 pr-6 pt-2 pb-2 rounded-full hover:bg-red-400 hover:scale-[1.02] dark:bg-slate-500 dark:hover:bg-slate-100 dark:text-slate-200 dark:hover:text-slate-800 dark:shadow-xl" type="submit" value="Send" />
            </form>
        </div>
    );
};

export default SendEmail