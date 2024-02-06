import React from "react";
import close_icon from "../../../public/clear.svg";
import { CSSTransition } from "react-transition-group";
import "./modal.css";

type LayoutProps = {
  title: string;
  subtitle: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const ModalComponent = ({
  onClose,
  isOpen,
  title,
  subtitle,
  children,
}: LayoutProps) => {
  return (
    <>
      <CSSTransition
        in={isOpen}
        unmountOnExit
        timeout={{ enter: 0, exit: 300 }}
      >
        <div
          className="modal 
            overflow-y-hidden overflow-x-hidden bg-[#344335] 
            bg-opacity-20 fixed top-0 right-0 left-0 z-50 w-full md:inset-0 md:h-screen
            opacity-0 transition-all duration-[0.3s]"
          onClick={onClose}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative p-8 w-full max-w-[60rem] h-full md:h-auto mx-auto mt-[20px] flex justify-center items-center modal-content translate-y-[-200px] transition-all duration-[0.3s]"
          >
            {/* modal content */}
            <div className="relative bg-white rounded-lg pt-5 md:pt-14 pb-3 px-3 md:px-8">
              {/* modal header */}
              {/* <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-base font-semibold text-[#344335]">
                    {title}
                  </h3>
                  <p className="text-[#96A397] text-xs font-medium mt-1">
                    {subtitle}
                  </p>
                </div>

                <div className="cursor-pointer" onClick={onClose}>
                  <img src={close_icon} alt="close icon" />
                </div>
              </div> */}

              {/* modal body */}
              <div>{children}</div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default ModalComponent;
