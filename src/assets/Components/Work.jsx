import { IconDatabase } from "@tabler/icons-react"
import { IconBrandReact } from "@tabler/icons-react"
import { IconBrandGithub } from "@tabler/icons-react"
import { IconBrandAdobe } from "@tabler/icons-react"


export const Work = ( { isDay, t }) => {
  return (
    <section id="work" className={`${isDay ? "text-black font-bold" : " text-white" }`}>
        <div className="py-[7rem] px-[5%]">   
            <span>{t("work.banner1.title")}</span>
            <h2  className="text-4xl max-w-md py-8">{t("work.banner1.subtitle")}</h2>
            <div className="grid sm:grid-cols-3 gap-8 ">
                <div>
                    <h2 className="text-8xl text-slate-500 pb-5">01</h2>
                    <span className="text-lime-500">{t("work.banner1.number.01.title")}</span><span>{t("work.banner1.number.01.subtitle")}</span>
                    <p className="py-3">{t("work.banner1.number.01.paragraph")}</p>
                </div>
                <div>
                    <h2 className="text-8xl text-slate-500 pb-5">02</h2>
                    <span className="text-blue-700">{t("work.banner1.number.02.title")}</span><span>{t("work.banner1.number.02.subtitle")}</span>
                    <p className="py-3">{t("work.banner1.number.02.paragraph")}</p>
                </div>
                <div>
                    <h2 className="text-8xl text-slate-500 pb-5">03</h2>
                    <span className="text-red-400">{t("work.banner1.number.03.title")}</span>
                    <span>{t("work.banner1.number.03.subtitle")}</span>
                    <p className="py-3">{t("work.banner1.number.03.paragraph")}</p>
                </div>
            </div>
        </div>
        <div className="sm:grid sm:grid-cols-2 bg-orange-100 text-black items-center">
            <div className="px-[4rem] py-[2rem]">
                <h2 className="font-bold text-5xl mb-[2rem]">{t("work.banner2.title")}</h2>
                <p>{t("work.banner2.paragraph")}</p>
                <button className="pt-[8rem] my-[2rem] ">{t("work.banner2.paragraph2")}</button>
            </div>
            <div>
                <img src="/Images/Rectangle38.png"/>
            </div>
        </div>  

        <div className=" py-[5rem] sm:flex pl-[5%]">
            <div className="max-w-[300px] ">
                <h2 className="text-4xl font-bold pb-4">{t("work.banner3.skills.title")}</h2>
                <p className="text-slate-600 pb-6">{t("work.banner3.skills.subtitle")}</p>
            </div>
            <div className="grid flex-1 sm:grid-cols-2 gap-[2rem] sm:mx-[5rem]  justify-start">
                <div>
                    <span><IconBrandReact className="text-slate-500" size={50}/></span>
                    <h2 className="font-bold text-2xl">{t("work.banner3.tools.01.title")}</h2>
                    <h3 className="text-slate-600">React</h3>
                    <h3 className="text-slate-600">Wordpress</h3>
                    <h3 className="text-slate-600">Boostrap</h3>
                    <h3 className="text-slate-600">Tailwind</h3>
                    <h3 className="text-slate-600">Sprint Boot</h3>
                </div>
                <div>
                    <span><IconDatabase className="text-slate-500" size={50}/></span>
                    <h2 className="font-bold text-2xl">{t("work.banner3.tools.02.title")}</h2>
                    <h3 className="text-slate-600">HTML</h3>
                    <h3 className="text-slate-600">CSS/SASS</h3>
                    <h3 className="text-slate-600">JavaScript</h3>
                    <h3 className="text-slate-600">JavaFX</h3>
                    <h3 className="text-slate-600">C++</h3>
                    <h3 className="text-slate-600">MySQL</h3>
                    <h3 className="text-slate-600">NoSQL</h3>

                </div>
                <div>
                    <span><IconBrandGithub className="text-slate-500" size={50}/></span>
                    <h2 className="font-bold text-2xl">{t("work.banner3.tools.03.title")}</h2>
                    <h3 className="text-slate-600">Git/Github</h3>
                    <h3 className="text-slate-600">Bitbucket</h3>
                    <h3 className="text-slate-600">SCRUM / Agil</h3>
                </div>
                <div>
                    <span><IconBrandAdobe className="text-slate-500" size={50}/></span>
                    <h2 className="font-bold text-2xl">{t("work.banner3.tools.04.title")}</h2>
                    <h3 className="text-slate-600">Wireframing/UML</h3>
                    <h3 className="text-slate-600">Adobe Suite</h3>
                    <h3 className="text-slate-600">Elementor Expert</h3>
                </div>
            </div>
        </div>  

    </section>
  )
}