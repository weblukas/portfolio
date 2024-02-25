import { FC, useEffect, useRef } from "react";
import { links } from "@/utils/links";

interface ModalProps {
    // isOpen: boolean;
    onClose: () => void;
}

const ModalMenu: FC<ModalProps> = ({onClose}) => {
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
            
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            className=" bg-dark-bg dark:bg-white w-[100vw] mt-[70px] h-[160px]"
            ref={modalRef}
        >
            <div className="">
                <ul className="menu min-w-full w-56">
                    {links.map((link) => (
                        <li
                            key={link.href}
                            
                        >
                            <a
                                href=""
                                className="text-slate-100 dark:text-dark-bg"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ModalMenu;
