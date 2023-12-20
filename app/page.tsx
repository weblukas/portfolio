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
            email: '',
            label: '',
            type: 'email'
        },
    });
    console.log(watch("firstName"));

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    return (
        <main className="container mx-auto bg-dark-bg">
            <header className="flex">
                <h2>Web & Wolf</h2>
                <nav className="flex">
                    <ul className="flex">
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
            <section>
                <h1 className="text-secondary">
                    Hi
                    <br /> I am Łukasz Szmyd
                    <br />
                    Front-end Developer
                </h1>
                <Image
                    src="/wolfgrtiny.jpg"
                    alt="wolf"
                    width={720}
                    height={482}
                />
                <q>The gaze of the wolf reaches into our soul</q>
                <p>Barry Lopez</p>
            </section>
            <section>
                <h3>About me</h3>
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
