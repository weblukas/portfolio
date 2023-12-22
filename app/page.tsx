"use client";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "@/components/ThemeSwitch";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Input } from "@nextui-org/react";

export const skilsStyle = {
    skils: " text-lg text-orange-action px-4 ",
};

interface IFormInput {
    firstName: string;
    label: string;
    type: string;
}

export default function Home() {
    //form handlaing

    const { control, handleSubmit, watch } = useForm({
        defaultValues: {
            firstName: "",
            email: "",
            label: "",
            type: "email",
        },
    });
    console.log(watch("firstName"));

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    return (
        <main className="container mx-auto py-[50px]  bg-dark-bg">
            <header className="flex justify-between px-[75px]">
                <h2>Web & Wolf</h2>
                <nav>
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
                <ThemeSwitch />
            </header>
            <section className="flex justify-between my-40 px-[75px]">
                <div className="mt-8">
                    <h1 className="text-slate-200 text-4xl font-bold">
                        Hi
                        <br /> I am Łukasz Szmyd
                        <br />
                        Front-end Developer
                    </h1>
                    <Link
                        href="#"
                        className="  inline-block w-[182px] h-[50px] bg-orange-action rounded-lg mt-8 text-center leading-[50px] mr-8"
                    >
                        My Projcts
                    </Link>
                    <Link
                        href="#"
                        className=" inline-block w-[182px] h-[50px] bg-purple-action rounded-lg mt-8 text-center leading-[50px]"
                    >
                        My Resume
                    </Link>
                </div>
                <div>
                    <Image
                        src="/wolfgrtiny.jpg"
                        alt="wolf"
                        width={720}
                        height={482}
                        className="mb-5"
                    />
                    <q className="text-lg mx-5 py-6">
                        The gaze of the wolf reaches into our soul
                    </q>
                    <p className="mx-9">Barry Lopez</p>
                </div>
            </section>

            {/* About me section */}
            <section className="bg-light-bg w-full h-[676px] font-['Qwigley'] relative">
                <h3 className="text-3xl text-center pt-6">About me</h3>
                <div className="flex justify-between items-center">
                    <Image
                        src="/creativio3.png"
                        alt="creative image"
                        width={391}
                        height={391}
                        className="ml-[75px]"
                    />
                    <Image
                        src="/slice4.svg"
                        alt="dsf"
                        width={773}
                        height={26}
                        className="absolute top-0 right-0 z-0"
                    />
                </div>
                <div className="w-[510px] h-[340px] absolute top-[160px] right-[100px]">
                    <p className="text-2xl">
                        Front-end developer with over two years of commercial
                        experience. My main stack is React along with TypeScript
                        and Next js. I enjoy expoloring the React ecosystem and
                        learning new technologies
                    </p>
                </div>
                <div className="w-full z-50 absolute">
                    <span className={`text-3xl ${skilsStyle.skils}`}>Html</span>
                    <span className={`${skilsStyle.skils}`}>Css</span>
                    <span className={`${skilsStyle.skils}`}>Scss</span>
                    <span className={`${skilsStyle.skils}`}>JavaScript</span>
                    <span className={`${skilsStyle.skils}`}>TypeScript</span>
                    <span className={`text-3xl ${skilsStyle.skils}`}>
                        React
                    </span>
                    <span className={`${skilsStyle.skils}`}>Next.js </span>
                    <span className={`${skilsStyle.skils}`}>Redux</span>
                    <span className={`${skilsStyle.skils}`}>Redux Toolkit</span>
                    <span className={`${skilsStyle.skils}`}>
                        TanStack Query
                    </span>
                    <span className={`${skilsStyle.skils}`}>Tailwind</span>
                    <span className={`${skilsStyle.skils}`}>NextUI</span>
                    <span className={`${skilsStyle.skils}`}>MaterialUI</span>
                    <span className={`${skilsStyle.skils}`}>
                        Styled Components
                    </span>
                    <span className={`${skilsStyle.skils}`}>
                        React Hook Form
                    </span>
                    <span className={`${skilsStyle.skils}`}>GraphQl</span>
                    <span className={`${skilsStyle.skils}`}>Apollo Client</span>
                    <span className={`${skilsStyle.skils}`}>Git</span>
                    <span className={`${skilsStyle.skils}`}>Figma</span>
                    <span className={`${skilsStyle.skils}`}>Storybook</span>
                    <span className={`${skilsStyle.skils}`}>DatoCms</span>
                </div>
            </section>
            <section>
                <h3>Projects</h3>
                <div>
                    <h4>Shopping App</h4>
                    <Image
                        src="/store.png"
                        alt="app sreenshot"
                        width={555}
                        height={410}
                    />
                    <Link href="/">Live</Link>
                    <Link href="/">Code</Link>
                </div>
                <Image
                    src="/creativio1.png"
                    alt="men at work"
                    width={419}
                    height={419}
                />
                <Link href="#">More Projects</Link>
            </section>
            <section>
                <h3>Contact</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => (
                            <div className="flex w-[400px] flex-wrap md:flex-nowrap gap-4">
                                <Input {...field} label="name" />
                            </div>
                        )}
                    />
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <div className="flex w-[400px] flex-wrap md:flex-nowrap gap-4">
                                <Input {...field} type="email" label="email" />
                            </div>
                        )}
                    />
                    <input type="submit" aria-label="submit" />
                </form>
                <div>a</div>
                <div>c</div>
                <div>f</div>
                <div>r</div>
            </section>
        </main>
    );
}
