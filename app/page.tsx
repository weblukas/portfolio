"use client";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "@/components/ThemeSwitch";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import wolf from '../public/wolf-hero.jpg'


export const skilsStyle = {
    skils: " text-[30px] text-orange-action pr-4 ",
};

interface IFormInput {
    firstName: string;
    label: string;
    type: string;
}

export default function Home() {
    //form handlaing

    const { control, handleSubmit } = useForm({
        defaultValues: {
            firstName: "",
            title: "",
            message: "",
            label: "",
            type: "email",
        },
    });

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    //input styling

    return (
        <main className="container mx-auto py-[50px]  bg-dark-bg">
            <header className="flex flex-wrap justify-between px-[35px]">
                <h2 className="pt-[5px] w-[50%] text-xl">Web & Wolf</h2>
                <nav className="hidden sm:block pt-[5px]">
                    <ul className="flex gap-x-9 ">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/">About</Link>
                        </li>
                        <li>
                            <Link href="/">Projects</Link>
                        </li>
                        <li>
                            <Link href="/">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <div className="flex flex-col gap-2 w-[50%] items-end pt-[5px] sm:hidden">
                    <Image src="./menuBar1.svg" alt="" width={24} height={2} />
                    <Image src="./menuBar2.svg" alt="" width={18} height={2} />
                    <Image src="./menuBar3.svg" alt="" width={12} height={2} />
                </div>

                <ThemeSwitch />
            </header>

            {/* hero section */}
            <section className="flex flex-col justify-between mt-20 sm:px-[35px] md:flex-row ">
                <div className="px-[20px]">
                    <h1 className="flex justify-center text-4xl font-bold text-slate-200 ">
                        Hi
                        <br /> I am Łukasz Szmyd
                        <br />
                        Front-end Developer
                    </h1>
                    <div className="flex justify-center md:max-lg:flex-col ">
                        <Link
                            href="#"
                            className=" flex items-center  justify-center md:w-[182px] h-[50px] bg-orange-action rounded-lg mt-8  m-4 w-[150px] md:h-[40px] "
                        >
                            My Projcts
                        </Link>
                        <Link
                            href="#"
                            className=" flex items-center  justify-center md:w-[182px] h-[50px] bg-purple-action rounded-lg mt-8  m-4 w-[150px] md:h-[40px] "
                        >
                            My Resume
                        </Link>
                    </div>
                </div>
                <div className="py-8 md:w-[50vw] ">
                    <Image
                        src={wolf}
                        alt="wolf"
                        placeholder="blur"
                        className="w-full mb-5"
                    />
                    <q className="py-6 mx-5 text-lg">
                        The gaze of the wolf reaches into our soul
                    </q>
                    <p className="mx-9">Barry Lopez</p>
                </div>
            </section>

            {/* About me section */}
            <section className=" bg-[url(/slice7.png)] bg-cover w-full h-fit md:h-[626px] sm:px-[35px] lg-h-[600px] lg:grid lg:grid-rows-[100px_300px_auto] lg:grid-cols-2 font-['Qwigley']  ">
                <h3 className="py-6 text-3xl text-center h-[100px] lg:col-span-2 lg:">
                    About me
                </h3>
                <Image
                    src="/creative-man.png"
                    alt="creative image"
                    width={300}
                    height={310}
                    className="ml-[75px] hidden lg:block lg:row-span-2 "
                />
                <div className="sd:w-[510px] h-[240px] mx-auto">
                    <p className="text-2xl text-center">
                        Front-end developer with over two years of commercial
                        experience. My main stack is React along with TypeScript
                        and Next js. I enjoy exploring the React ecosystem and
                        learning new technologies
                    </p>
                </div>
                <div className=" flex flex-wrap px-[35px] lg:col-span-2">
                    <div className={`text-[24px] ${skilsStyle.skils}`}>
                        Html
                    </div>
                    <div className={`${skilsStyle.skils}`}>Css</div>
                    <div className={`${skilsStyle.skils}`}>Scss</div>
                    <div className={`text-[24px] ${skilsStyle.skils}`}>
                        JavaScript
                    </div>
                    <div className={`text-[24px] ${skilsStyle.skils}`}>
                        TypeScript
                    </div>
                    <div className={`text-[24px] ${skilsStyle.skils}`}>
                        React
                    </div>
                    <div className={`text-[24px] ${skilsStyle.skils}`}>
                        Next.js{" "}
                    </div>
                    <div className={`${skilsStyle.skils}`}>Redux</div>
                    <div className={`${skilsStyle.skils}`}>
                        Styled Components
                    </div>
                    <div className={`${skilsStyle.skils}`}>Redux Toolkit</div>
                    <div className={`text-[24px] ${skilsStyle.skils}`}>
                        Tailwind
                    </div>
                    <div className={`${skilsStyle.skils}`}>NextUI</div>
                    <div className={`${skilsStyle.skils}`}>MaterialUI</div>
                    <div className={`${skilsStyle.skils}`}>TanStack Query</div>
                    <div className={`${skilsStyle.skils}`}>React Hook Form</div>
                    <div className={`${skilsStyle.skils}`}>GraphQl</div>
                    <div className={`${skilsStyle.skils}`}>Apollo Client</div>
                    <div className={`${skilsStyle.skils}`}>Git</div>
                    <div className={`${skilsStyle.skils}`}>Figma</div>
                    <div className={`${skilsStyle.skils}`}>Storybook</div>
                    <div className={`${skilsStyle.skils}`}>DatoCms</div>
                </div>
            </section>

            {/* Projects section  */}
            <section className="px-[75px] pt-[] pb-[100px] ">
                <h3 className="pt-6 text-3xl text-center">Projects</h3>
                <div className="flex items-center justify-center sm:justify-between py-[30px]">
                    <div className=" w-[480px] h-[400px] bg-light-bg overflow-hidden  ">
                        <h4>Shopping App</h4>
                        <Image
                            src="/store-project.png"
                            alt=""
                            width={430}
                            height={350}
                            className=" rotate-[10deg] w-[430px] h-[350px] overflow-hidden mt-14 mx-auto"
                        />
                        {/* <div className="bg-[url(/store-project.png)] bg-no-repeat rotate-[15deg] -z-50 overflow-hidden bg-contain bg-center w-[430px] h-[350px]"></div> */}

                        <Link
                            href="#"
                            className="  inline-block w-[120px] h-[32px] bg-orange-action rounded-lg  text-center leading-[32px]  "
                        >
                            Live
                        </Link>
                        <Link
                            href="#"
                            className=" inline-block w-[120px] h-[32px] bg-purple-action rounded-lg  text-center leading-[32px]"
                        >
                            Code
                        </Link>
                    </div>
                    <Image
                        src="/creative-work.png"
                        alt="men at work"
                        width={419}
                        height={419}
                        className="hidden lg:block"
                    />
                </div>
                <Link href="#">More Projects</Link>
            </section>

            {/* Contact section */}
            <section>
                <h3 className="pt-6 text-3xl text-center">Contact</h3>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mx-auto pt-[100px] max-w-[740px] h-[550px] mt-9 bg-light-bg rounded-lg flex flex-col items-center"
                    // className="mx-auto pt-[100px] max-w-[740px] h-[550px] mt-9 bg-gradient-to-b from-[#E6533C] to-purple-action/60 rounded-lg flex flex-col items-center"
                >
                    <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => (
                            <div className="w-[60%] py-3 ">
                                <input
                                    {...field}
                                    type="text"
                                    placeholder="Name"
                                    className="w-full input input-bordered bg-dark-bg"
                                />
                            </div>
                        )}
                    />
                    <Controller
                        name="title"
                        control={control}
                        render={({ field }) => (
                            <div className="w-[60%] py-3 ">
                                <input
                                    {...field}
                                    type="text"
                                    placeholder="Title"
                                    className="w-full input input-bordered bg-dark-bg"
                                />
                            </div>
                        )}
                    />
                    <Controller
                        name="message"
                        control={control}
                        render={({ field }) => (
                            <div className="w-[60%] py-3 ">
                                <textarea
                                    {...field}
                                    placeholder="Message"
                                    className="w-full textarea bg-dark-bg textarea-bordered textarea-lg"
                                ></textarea>
                            </div>
                        )}
                    />

                    <input
                        type="submit"
                        aria-label="submit"
                        className="bg-orange-action rounded-lg mt-8 text-center leading-[50px] inline-block w-[152px] h-[50px]"
                    />
                </form>
            </section>
        </main>
    );
}
