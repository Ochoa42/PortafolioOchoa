

export const Projects = ({isDay, t}) => {
  return (
<section id="projects" className="text-white transition-transform duration-1000">
    <div className="sm:flex py-[3rem] px-[5%]  ">
{/*Initial div*/}
        <div className=" pr-[0.5%]">
            <div className=" float-right pb-[1rem]">
                <div className={`h-auto pb-[2rem] ${isDay ? "text-gray-700" : "text-white" } `}> 
                    <h3>{t("project.title")}</h3>
                    <h2 className="text-4xl font-bold">{t("project.subtitle")}</h2>
                </div>
                <div>
                    <img src="/Images/AppClima.jpeg"/>
                </div>
                <div className="bg-gray-700 p-6">
                    <h2 className="text-2xl py-4 font-bold">
                    {t("project.01.title")}
                    </h2>
                    <p>
                    {t("project.01.paragraph")}
                    </p>
                </div>
            </div>
    
            <div className="pb-[1rem]">
                <div>
                    <img src="/Images/AppE-commers.png"/>
                </div>
                <div className="bg-gray-700 p-6">
                    <h3 className="text-2xl py-4 font-bold">{t("project.02.title")}</h3>
                    <p>
                    {t("project.02.paragraph")}
                    </p>
                </div>
            </div>

            <div className="pb-[1rem]">
                <div>
                    <img src="/Images/AppUser.jpeg"/>
                </div>
                <div className="bg-gray-700 p-6">
                    <h3 className="text-2xl py-4 font-bold">{t("project.03.title")}</h3>
                    <p>
                    {t("project.03.paragraph")}
                    </p>
                </div>
            </div>
        </div>
{/*Segundo Div */}
            <div className="pl-[0.5rem]">
                <div className="row-span-2 pb-[1rem]">
                    <div>
                    <img src="/Images/AppPokedex.jpeg"/>
                    </div>
                    <div className="bg-gray-700 p-6">
                        <h2 className="text-2xl py-4 font-bold">{t("project.04.title")}</h2>
                        <p>
                        {t("project.04.paragraph")}
                        </p>
                    </div>
                </div>  

                <div className="pb-[1rem]">
                    <div>
                       <img src="/Images/ApptodoList.png"/>
                    </div>
                    <div className="bg-gray-700 p-6">
                        <h3 className="text-2xl py-4 font-bold">{t("project.05.title")}</h3>
                        <p>
                        {t("project.05.paragraph")}
                        </p>
                      </div>
                </div>        

                <div className="pb-[1rem]">
                    <div>
                        <img src="/Images/AppSpotify.jpeg"/>    
                    </div>
                    <div className="bg-gray-700 p-6">
                        <h2 className="text-2xl py-4 font-bold">{t("project.06.title")}</h2>
                        <p>{t("project.06.paragraph")}</p>
                    </div>
                        <div className="h-full mt-[3rem] text-center">
                            <button className={`p-2 border-2 ${isDay  ? "text-gray-700" : "text-white"}`}>{t("project.pie.title")}</button>
                        </div>  
                    
                </div>           
            </div>
    </div>

    <div className="sm:grid sm:grid-cols-2 bg-violet-200 text-black items-center">
            <div className="px-[4rem] py-[2rem]">
                <h2 className="font-bold text-5xl mb-[2rem]">{t("project.page2.title")}</h2>
                <p>{t("project.page2.paragraph")}</p>
                <button className="pt-[8rem] my-[2rem] ">{t("project.page2.paragraph2")}</button>
            </div>
            <div>
                <img className="w-full" src="/Images/Rectangle39.png"/>
            </div>
        </div> 



</section>
  )
}