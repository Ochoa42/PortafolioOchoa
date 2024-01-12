import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export const Contact = ( { isDay, t }) => {

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
            <div className={`pr-10 ${isDay ? "text-gray-700" : "text-white" } `}>
                <h2 className="text-4xl pb-7">{t("contact.title")}</h2>
                <p className="pb-10">
                {t("contact.paragraph")} 
                </p>
            </div>
            <div>
                <form className="[&>label]:grid grid gap-10 [&>label]:gap-1 w-[min(100%,300px)]  lg:w-[600px] sm:mx-auto items-center sm:px-20  rounded-2xl 
                [&>label>span]:text-xl bg-gray-600 py-8 " ref={form} onSubmit={sendEmail}>
                    <label>
                        <span>{t("contact.form.name")}</span>
                        <input className="outline-none bg-gray-700" type="text" name="user_name" />
                    </label>
                    <label className="">
                        <span>{t("contact.form.email")}</span>
                        <input className="outline-none bg-gray-700" type="email" name="user_email" />
                    </label>
                    
                    <label className="">
                        <span>{t("contact.form.message")}</span>
                        <textarea className="outline-none bg-gray-700" name="message" />
                    </label>
                    
                    <input className="bg-slate p-4 rounded-md" type="submit" value={t("contact.form.botton")} />
                </form>
            </div>
        </div>
    </section>
  )
}