"use client";
import { useState } from "react";
import Image from "next/image";
import { links } from "@/utils/links";
import { skils } from "@/utils/skils";
import wolf from "../public/wolf-hero.jpg";
import { projectsData } from "@/utils/projectsData";
import Swap from "@/components/Swap";
import HamburgerMenu from "@/components/HamburgerMenu";
import ModalMenu from "@/components/ModalMenu";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

function App() {

    // handle toggle menu
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
     
    };

    //theme toggle
    const [theme, setTheme] = useState(false);
    const handleThemeChange = () => {
        setTheme(!theme);
    };

    return (
        <div className={`${theme && "dark"} relative `}>
            <main className=" container mx-auto max-w-[1240px] py-[20px] sm:py-[30px] bg-gray-50  text-black dark:bg-dark-bg dark:text-white">
                <header className="grid grid-rows-2 items-center gap-1 lg:px-10">
                    <h1 className=" text-[30px] ml-[35px] col-span-1 self-center bg-orange-action bg-clip-text text-transparent">
                        Web &{" "}
                        <span className="text-black dark:text-slate-100">
                            Wolf
                        </span>
                    </h1>
                    <nav className="hidden lg:text-xl sm:block pt-[5px] mr-[35px] col-span-1 justify-self-end  ">
                        <div className="flex">
                            <ul className="flex gap-9 mr-[80px]">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className=" hover:text-orange-action "
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="https://github.com/weblukas"
                                target="blank"
                                className="text-2xl mr-4"
                                aria-label="github link"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/%C5%82ukasz-szmyd-webflow/"
                                target="blank"
                                className="text-2xl"
                                aria-label="linkedin link"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </nav>
                    <div className="basis-2/5 mr-[35px] flex flex-col gap-2  items-end pt-[5px] sm:hidden">
                        <HamburgerMenu
                            handleCheckboxChange={handleCheckboxChange}
                            isChecked={isChecked}
                        />
                    </div>
                    {!isChecked && (
                        <div className="col-start-2 self-center justify-self-end mr-[35px] ">
                            <Swap
                                theme={theme}
                                handleThemeChange={handleThemeChange}
                            />
                        </div>
                    )}
                    {isChecked && (
                        <div className="absolute top-0 left-0">
                            <ModalMenu onClose={handleCheckboxChange} />
                        </div>
                    )}
                </header>

                {/* hero section */}
                <section className="flex flex-col lg:gap-20 justify-between mt-10 sm:px-10 md:flex-row md:px[48] lg:px-20">
                    <div className="px-[20px] flex flex-col items-center lg:items-start lg:pt-22 lg:px-0">
                        <h2 className=" text-4xl  dark:text-slate-200 lg:pt-10 mb-8 lg:text-[40px] lg:leading-[44px] ">
                            Hello
                            <br /> I&apos;m Łukasz Szmyd
                            <br />
                            Front-end Developer
                        </h2>
                        <div className="flex">
                            <motion.a
                                href="#projects"
                                className=" flex items-center justify-center md:w-[182px]  bg-orange-action rounded-lg md:mt-2 mr-4 w-[150px] md:h-[40px] text-slate-100 focus:scale-[1.15] hover:scale-[1.05] transition"
                                aria-label="projects link"
                            >
                                My Projcts
                            </motion.a>

                            <a
                                href="/resume.pdf"
                                download="Lukasz_Szmyd_resume"
                                className=" flex items-center px-7 py-3  justify-center md:w-[182px] bg-purple-action rounded-lg  md:mt-2  w-[150px] md:h-[40px] text-slate-100 focus:scale-[1.15] hover:scale-[1.05] transition subpixel-antialiased"
                                aria-label="resume link"
                            >
                                My Resume
                            </a>
                        </div>
                    </div>
                    {/* md:max-lg:w-[140px] */}
                    <div className="py-8 md:w-[40%] ">
                        <Image
                            src={wolf}
                            alt="wolf"
                            placeholder="blur"
                            className="w-full mb-5"
                        />
                        <q className="py-6 text-lg px-4 sm:px-0">
                            The gaze of the wolf reaches into our soul
                        </q>
                        <p className="mx-9">Barry Lopez</p>
                    </div>
                </section>

                {/* About me section */}
                <section
                    id="about"
                    className=" bg-cover w-full h-auto  sm:px-[35px] lg:grid lg:grid-rows-[100px_350px_auto] lg:grid-cols-2 font-['Inter'] pt-8 "
                >
                    <h3 className="py-4 text-3xl text-center font-medium lg:h-[100px] lg:col-span-2 lg: lg:text-[40px]">
                        About me
                    </h3>
                    <Image
                        src="/creative-man.png"
                        alt="creative image"
                        width={250}
                        height={310}
                        className="ml-[75px] h-auto hidden lg:block lg:row-span-2 drop-shadow-[0_0_2px_white,0_0_3px_white]"
                    />
                    <div className="sd:w-[510px] sd:h-[240px] mx-auto mb-unit-3 lg:pt-10">
                        <p className="text-[20px] lg:text-[26px] text-center px-4">
                            Front-end developer with over two years of
                            commercial experience. My main stack is React along
                            with TypeScript and Next js. I enjoy exploring the
                            React ecosystem and learning new technologies. In
                            the future I would like to get better at back-and
                            and become a fullstack developer.
                        </p>
                    </div>
                    <h3 className="pb-4 px-4 pt-12 text-2xl lg:col-span-2 text-center lg:text-[36px]">
                        My skils
                    </h3>
                    <div className="lg:col-span-2 px-4 flex flex-wrap text-[18px]">
                        {skils.map((skil) => (
                            <div
                                key={skil.id}
                                className="bg-white border-2 m-1 lg:m-2 rounded-xl px-3 py-1 lg:px-5 lg:py-3 dark:bg-white/5 dark:text-white/80"
                            >
                                {skil.name}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects section  */}
                <section id="projects" className="sm:px-[75px] px-4 pt-8">
                    <h3 className="mt-16 text-3xl text-center">Projects</h3>
                    <div className="flex flex-wrap justify-center py-[30px] gap-16 text-slate-100 ">
                        {/* project card */}
                        {projectsData.map((project) => {
                            const {
                                id,
                                name,
                                image,
                                description,
                                url,
                                github,
                            } = project;
                            return (
                                <ProjectCard
                                    key={id}
                                    id={id}
                                    name={name}
                                    image={image}
                                    description={description}
                                    url={url}
                                    github={github}
                                />
                            );
                        })}
                    </div>
                </section>

                {/* Contact section */}
                <section id="contact">
                    <h3 className="mt-16 text-3xl text-center">Contact</h3>
                    <ContactForm />
                </section>
            </main>
        </div>
    );
}

export default App;
