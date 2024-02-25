import { FC } from "react";

interface CardProps {
    id: number;
    name: string;
    image: string;
    description: string;
    url: string;
    github?: string;
}

const ProjectCard: FC<CardProps> = ({
    id,
    name,
    image,
    description,
    url,
    github,
}) => {
    return (
        <div
            key={id}
            className="shadow-2xl card w-96 bg-light-bg lg:text-[18px] "
        >
            <figure>
                <img src={image} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-name">{name}</h2>
                <p>{description}</p>
                <div className="justify-end card-actions">
                    <a
                        href={url}
                        target="_blank"
                        className="link text-orange-action text-[20px] pr-6"
                    >
                        Live
                    </a>
                    <a
                        href={github}
                        target="_blank"
                        className="text-white link text-[20px] "
                    >
                        Code
                    </a>
                </div>
            </div>
        </div>
    );
};
export default ProjectCard;
