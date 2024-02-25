import {useRef, useEffect} from 'react'
import { links } from '@/utils/links';

export default function MobileMenu() {

    const ref = useRef<HTMLDialogElement>(null)
    
    const handleShowModal = () => {
        const modal = ref.current;
        modal?.showModal();
    }
    useEffect(() => {
             const modal = ref.current;
        if (!modal) return;
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
            modal.close();
            }
        };
        modal.addEventListener("keydown", handleKeyDown);
        return () => {
            modal.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
  return (
      <div>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
              className="btn"
              onClick={() => handleShowModal()}
          >
              open modal
          </button>
          <dialog id="my_modal_2" className="modal " ref={ref}>
              <div className="modal-box">
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
              <form method="dialog" className="modal-backdrop">
                  <button>close</button>
              </form>
          </dialog>
      </div>
  );
}
