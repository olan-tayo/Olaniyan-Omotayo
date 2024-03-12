import React from "react";

type Header = {
  children: React.ReactNode;
  style?: string;
};

const Header = ({ children, style }: Header) => {
  return (
    <div>
      <p
        className={`${style} text-base md:text-sm font-bold text-primary-50 uppercase mb-6`}
      >
        {children}
      </p>
    </div>
  );
};

export default Header;
