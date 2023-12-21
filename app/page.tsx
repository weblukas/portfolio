"use client";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "@/components/ThemeSwitch";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Input } from "@nextui-org/react";

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
        <main className="container mx-auto py-[50px] px-[75px] bg-dark-bg">
            <header className="flex justify-between">
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
            <section className="flex justify-between my-40">
                <div className="mt-8">
                    <h1 className="text-slate-200 text-4xl font-bold">
                        Hi
                        <br /> I am Łukasz Szmyd
                        <br />
                        Front-end Developer
                    </h1>
                    <Link
                        href="#"
                        className="  inline-block w-[182px] h-[50px] bg-[#F98A43] rounded-lg mt-8 text-center leading-[50px] mr-8"
                    >
                        My Projcts
                    </Link>
                    <Link
                        href="#"
                        className=" inline-block w-[182px] h-[50px] bg-[#7A29DC] rounded-lg mt-8 text-center leading-[50px]"
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
            <section>
                <h3 className="">About me</h3>
                <Image
                    src="/creativio3.png"
                    alt="creative image"
                    width={391}
                    height={391}
                />
                <p>
                    Front-end developer with over two years of commercial
                    experience. My main stack is React along with TypeScript and
                    Next js. I enjoy expoloring the React ecosystem and learning
                    new technologies
                </p>
                <div>
                    <span>Html</span>
                    <span>Css</span>
                    <span>Scss</span>
                    <span>JavaScript</span>
                    <span>TypeScript</span>
                    <span>React</span>
                    <span>Next.js </span>
                    <span>Redux</span>
                    <span>Redux Toolkit</span>
                    <span>TanStack Query</span>
                    <span>Tailwind</span>
                    <span>NextUI</span>
                    <span>MaterialUI</span>
                    <span>Styled Components</span>
                    <span>React Hook Form</span>
                    <span>GraphQl</span>
                    <span>Apollo Client</span>
                    <span>Git</span>
                    <span>Figma</span>
                    <span>Storybook</span>
                    <span>DatoCms</span>
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
