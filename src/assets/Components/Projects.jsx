

export const Projects = () => {
  return (
<section id="projects" className="text-white transition-transform duration-1000">
    <div className="sm:flex py-[3rem] px-[5%]  ">
{/*Initial div*/}
        <div className=" pr-[0.5%]">
            <div className=" float-right pb-[1rem]">
                <div className=" h-auto pb-[2rem]"> 
                    <h3>MY PROJECTS</h3>
                    <h2 className="text-4xl font-bold">Work that I've done for the past 8 years</h2>
                </div>
                <div>
                    <img src="public/Images/Rectangle44.png"/>
                </div>
                <div className="bg-gray-700 p-6">
                    <h2 className="text-2xl py-4 font-bold">
                        CoinView Mobile App Design
                    </h2>
                    <p>
                    I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.
                    </p>
                </div>
            </div>
    
            <div className="pb-[1rem]">
                <div>
                    <img src="public/Images/Rectangle41.png"/>
                </div>
                <div className="bg-gray-700 p-6">
                    <h3 className="text-2xl py-4 font-bold">Restaurant Website Design</h3>
                    <p>
                    I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.
                    </p>
                </div>
            </div>
        </div>
{/*Segundo Div */}
            <div className="pl-[0.5rem]">
                <div className="row-span-2 pb-[1rem]">
                    <div>
                    <img src="public/Images/Rectangle42.png"/>
                    </div>
                    <div className="bg-gray-700 p-6">
                        <h2 className="text-2xl py-4 font-bold">T-Box Mobile Design</h2>
                        <p>
                        I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android     and iOS. This project lasted for 4 months and was a very challenging one.  
                        </p>
                    </div>
                </div>          

                <div className="pb-[1rem]">
                    <div>
                        <img src="public/Images/Rectangle43.png"/>    
                    </div>
                    <div className="bg-gray-700 p-6">
                        <h2 className="text-2xl py-4 font-bold">Mobile Dashboard</h2>
                        <p>I worked with the guys at CBRE to redesign their entire website and mobile app fro both  Android and iOS. This project lasted for 4 months and was a very challenging one.</p>
                    </div>
                        <div className="h-full mt-[3rem] text-center">
                            <button className="p-2 border-2">VIEW ALL PROJECTS</button>
                        </div>  
                    
                </div>           
            </div>
    </div>

    <div className="sm:grid sm:grid-cols-2 bg-violet-200 text-black items-center">
            <div className="px-[4rem] py-[2rem]">
                <h2 className="font-bold text-5xl mb-[2rem]">Behance</h2>
                <p>I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.</p>
                <button className="pt-[8rem] my-[2rem] ">Check my Linkedin</button>
            </div>
            <div>
                <img className="w-full" src="public/Images/Rectangle39.png" />
            </div>
        </div> 



</section>
  )
}