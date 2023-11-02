import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_qajlxx3', 'template_4x5rpnw', form.current, '_hqyjbvbxVwcKRPLw')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <section id="contacts" className="text-white">
        <div className="p-[7rem] grid sm:grid-cols-2 ">
            <div className="pr-10">
                <h2 className="text-4xl pb-7">Let's talk business</h2>
                <p className="pb-10">
                Now that you know a lot about me, let me know if you are interested to work with me.  
                </p>
            </div>
            <div>
                <form className="[&>label]:grid grid gap-10 [&>label]:gap-5 w-[min(100%,300px)]  lg:w-[600px] sm:mx-auto items-center sm:px-20  rounded-2xl 
                [&>label>span]:text-xl" ref={form} onSubmit={sendEmail}>
                    <label>
                        <span>Name</span>
                        <input className="outline-none bg-gray-700" type="text" name="user_name" />
                    </label>
                    <label className="">
                        <span>Email</span>
                        <input className="outline-none bg-gray-700" type="email" name="user_email" />
                    </label>
                    
                    <label className="">
                        <span>Message</span>
                        <textarea className="outline-none bg-gray-700" name="message" />
                    </label>
                    
                    <input className="bg-slate p-4 rounded-md" type="submit" value="LET’S GET STARTED" />
                </form>
            </div>
        </div>
    </section>
  )
}