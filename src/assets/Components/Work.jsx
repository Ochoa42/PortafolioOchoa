import { IconDatabase } from "@tabler/icons-react"
import { IconBrandReact } from "@tabler/icons-react"
import { IconBrandGithub } from "@tabler/icons-react"
import { IconBrandAdobe } from "@tabler/icons-react"


export const Work = () => {
  return (
    <section id="work" className="text-white">
        <div className="py-[7rem] px-[5%]">   
            <span>Work Experience</span>
            <h2  className="text-4xl max-w-md py-8">Companies I have worked for in the past</h2>
            <div className="grid sm:grid-cols-3 gap-8 ">
                <div>
                    <h2 className="text-8xl text-slate-500 pb-5">01</h2>
                    <span className="text-lime-500">Google, </span><span>Fronted Develop</span>
                    <p className="py-3">I currently am the lead developer on the interaction design team for Google Play.</p>
                </div>
                <div>
                    <h2 className="text-8xl text-slate-500 pb-5">02</h2>
                    <span className="text-blue-700">Facebook, </span><span>Developer Junior</span>
                    <p className="py-3">I’ve worked on a wide variety of internal tools for facebook over the past 6 years.</p>
                </div>
                <div>
                    <h2 className="text-8xl text-slate-500 pb-5">03</h2>
                    <span className="text-red-400">Dribbble, </span>
                    <span>Frontend Developer</span>
                    <p className="py-3">I started my developer career with Dribbble. I was incharge of creating illustrations for the platform.</p>
                </div>
            </div>
        </div>
        <div className="sm:grid sm:grid-cols-2 bg-orange-100 text-black items-center">
            <div className="px-[4rem] py-[2rem]">
                <h2 className="font-bold text-5xl mb-[2rem]">Philosophy & values</h2>
                <p>I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.</p>
                <button className="pt-[8rem] my-[2rem] ">Check my Linkedin</button>
            </div>
            <div>
                <img src="/Images/Rectangle38.png" />
            </div>
        </div>  

        <div className=" py-[5rem] sm:flex pl-[5%]">
            <div className="max-w-[300px] ">
                <h2 className="text-4xl font-bold pb-4">Skillset</h2>
                <p className="text-slate-600 pb-6">With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.</p>
            </div>
            <div className="grid flex-1 sm:grid-cols-2 gap-[2rem] sm:mx-[5rem]  justify-start">
                <div>
                    <span><IconBrandReact className="text-slate-500" size={50}/></span>
                    <h2 className="font-bold text-2xl">Frameworks</h2>
                    <h3 className="text-slate-600">React</h3>
                    <h3 className="text-slate-600">Wordpress</h3>
                    <h3 className="text-slate-600">Boostrap</h3>
                    <h3 className="text-slate-600">Tailwind</h3>
                    <h3 className="text-slate-600">Sprint Boot</h3>
                </div>
                <div>
                    <span><IconDatabase className="text-slate-500" size={50}/></span>
                    <h2 className="font-bold text-2xl">Languages</h2>
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
                    <h2 className="font-bold text-2xl">Source Control</h2>
                    <h3 className="text-slate-600">Git/Github</h3>
                    <h3 className="text-slate-600">Bitbucket</h3>
                    <h3 className="text-slate-600">SCRUM / Agil</h3>
                </div>
                <div>
                    <span><IconBrandAdobe className="text-slate-500" size={50}/></span>
                    <h2 className="font-bold text-2xl">UX/UI</h2>
                    <h3 className="text-slate-600">Wireframing/UML</h3>
                    <h3 className="text-slate-600">Adobe Suite</h3>
                    <h3 className="text-slate-600">Elementor Expert</h3>
                </div>
            </div>
        </div>  

    </section>
  )
}