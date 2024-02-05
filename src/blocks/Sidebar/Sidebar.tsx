"use client";

import { Link } from "react-scroll";
import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const pages = ["about", "projects", "experience"];
  const [selectedPage, setSelectedPage] = useState("");

  const handleSetActive = (to: string) => {
    setSelectedPage(to);
  };

  useEffect(() => {
    if (selectedPage === "") {
      setSelectedPage("about");
    }
  }, [selectedPage]);

  return (
    <div className="w-full md:w-[40%] h-full md:h-screen text-primary-50">
      <div className="w-full md:w-[45%] h-full lg:h-[100vh] pt-[5vh] md:pt-[13vh] block md:fixed  ">
        <div>
          <p className="text-[32px] font-bold text-primary-50 pb-2">
            Omotayo Olaniyan
          </p>
          <p className="text-base font-medium text-primary-50 pb-4">
            Front End Engineer
          </p>

          <p className="text-[15px] font-normal text-primary-50 pb-[64px] leading-6 w-full md:w-[60%]">
            I create pixel-perfect interfaces, so your journey through this
            space isn{"'"}t just smooth but fruity
          </p>
        </div>

        <div className="hidden md:flex gap-4 flex-col h-screen cursor-pointer ">
          {pages?.map((page, index) => {
            return (
              <Link
                activeClass="active"
                to={`${page}`}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
                key={index}
              >
                <div
                  className="flex gap-4 items-center"
                  onClick={() => setSelectedPage(page)}
                >
                  <div
                    className="h-[3px]"
                    style={{
                      width: selectedPage === page ? "140px" : "72px",
                      background:
                        selectedPage === page ? "#7F62FF" : "#FAF6F680",
                      transition: "width 0.3s ease, background 0.3s ease", // Add transition property
                    }}
                  ></div>
                  <p
                    style={
                      selectedPage === page
                        ? { color: "#7F62FF" }
                        : { color: "#FAF6F680" }
                    }
                    className="text-sm font-bold  uppercase"
                  >
                    {page}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div
          className="hidden md:flex gap-4 items-center absolute bottom-[80px]"
          style={{ marginTop: "100px" }}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.99875 0.208176C4.4775 0.208176 5.77059e-06 4.70317 5.77059e-06 10.2482C-0.00225 12.3526 0.656898 14.4045 1.88429 16.114C3.11169 17.8234 4.84526 19.1039 6.84 19.7744C7.34 19.8669 7.5225 19.5569 7.5225 19.2907C7.5225 19.0519 7.51375 18.4207 7.50875 17.5832C4.7275 18.1894 4.14 16.2369 4.14 16.2369C3.68625 15.0769 3.03 14.7682 3.03 14.7682C2.12125 14.1457 3.0975 14.1582 3.0975 14.1582C4.10125 14.2294 4.62875 15.1932 4.62875 15.1932C5.52125 16.7269 6.97 16.2844 7.54 16.0269C7.63 15.3782 7.88875 14.9357 8.175 14.6844C5.955 14.4307 3.62 13.5694 3.62 9.72317C3.62 8.62692 4.01 7.73067 4.65 7.02817C4.54625 6.77442 4.20375 5.75317 4.7475 4.37192C4.7475 4.37192 5.5875 4.10192 7.4975 5.40067C8.31344 5.17769 9.1554 5.06419 10.0013 5.06317C10.8471 5.06485 11.6891 5.17876 12.505 5.40192C14.4137 4.10317 15.2525 4.37317 15.2525 4.37317C15.7975 5.75567 15.455 6.77567 15.3525 7.02942C15.9937 7.73192 16.38 8.62817 16.38 9.72442C16.38 13.5807 14.0425 14.4294 11.815 14.6782C12.1737 14.9882 12.4937 15.6007 12.4937 16.5369C12.4937 17.8794 12.4812 18.9619 12.4812 19.2907C12.4812 19.5594 12.6612 19.8719 13.1687 19.7732C15.1616 19.101 16.893 17.8201 18.1187 16.111C19.3443 14.402 20.0024 12.3513 20 10.2482C20 4.70317 15.5225 0.208176 9.99875 0.208176Z"
                fill="#FAF6F6"
              />
            </svg>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
            >
              <path
                d="M18 0H2C0.895 0 0.00999999 1.00688 0.00999999 2.25L0 15.75C0 16.9931 0.895 18 2 18H18C19.105 18 20 16.9931 20 15.75V2.25C20 1.00688 19.105 0 18 0ZM18 4.5L10 10.125L2 4.5V2.25L10 7.875L18 2.25V4.5Z"
                fill="#FAF6F6"
              />
            </svg>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_721_1168)">
                <path
                  d="M10.0025 0H9.99751C4.48376 0 1.31212e-05 4.485 1.31212e-05 10C-0.00341075 12.1063 0.663324 14.159 1.90376 15.8612L0.657513 19.5763L4.50126 18.3475C6.13173 19.4292 8.04586 20.0042 10.0025 20C15.5163 20 20 15.5138 20 10C20 4.48625 15.5163 0 10.0025 0Z"
                  fill="#FAF6F6"
                />
                <path
                  d="M15.8212 14.1212C15.5799 14.8025 14.6224 15.3675 13.8587 15.5325C13.3362 15.6437 12.6537 15.7325 10.3562 14.78C7.41744 13.5625 5.52494 10.5762 5.37744 10.3825C5.23619 10.1887 4.18994 8.80125 4.18994 7.36625C4.18994 5.93125 4.91869 5.2325 5.21244 4.9325C5.45369 4.68625 5.85244 4.57375 6.23494 4.57375C6.35869 4.57375 6.46994 4.58 6.56994 4.585C6.86369 4.5975 7.01119 4.615 7.20494 5.07875C7.44619 5.66 8.03369 7.095 8.10369 7.2425C8.17494 7.39 8.24619 7.59 8.14619 7.78375C8.05244 7.98375 7.96994 8.0725 7.82244 8.2425C7.67494 8.4125 7.53494 8.5425 7.38744 8.725C7.25244 8.88375 7.09994 9.05375 7.26994 9.3475C7.43994 9.635 8.02744 10.5937 8.89244 11.3637C10.0087 12.3575 10.9137 12.675 11.2374 12.81C11.4787 12.91 11.7662 12.8862 11.9424 12.6987C12.1662 12.4575 12.4424 12.0575 12.7237 11.6637C12.9237 11.3812 13.1762 11.3462 13.4412 11.4462C13.7112 11.54 15.1399 12.2462 15.4337 12.3925C15.7274 12.54 15.9212 12.61 15.9924 12.7337C16.0624 12.8575 16.0624 13.4387 15.8212 14.1212Z"
                  fill="#141922"
                />
              </g>
              <defs>
                <clipPath id="clip0_721_1168">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M20 4.42375C19.2477 4.75188 18.452 4.96995 17.6375 5.07125C18.4958 4.56204 19.1376 3.75571 19.4412 2.805C18.6375 3.28167 17.7582 3.61735 16.8412 3.7975C16.2791 3.19723 15.5493 2.7799 14.7469 2.59974C13.9444 2.41959 13.1063 2.48493 12.3415 2.78728C11.5766 3.08963 10.9204 3.61502 10.458 4.29517C9.99566 4.97533 9.74853 5.77882 9.74875 6.60125C9.74875 6.92625 9.77625 7.23875 9.84375 7.53625C8.2126 7.45628 6.6167 7.03294 5.16038 6.2939C3.70406 5.55486 2.42012 4.51677 1.3925 3.2475C0.866024 4.14982 0.703261 5.21889 0.937354 6.23701C1.17145 7.25512 1.78479 8.14574 2.6525 8.7275C2.00345 8.7101 1.36809 8.5369 0.8 8.2225V8.2675C0.801087 9.21429 1.12833 10.1318 1.72665 10.8656C2.32496 11.5994 3.15781 12.1046 4.085 12.2963C3.73423 12.3887 3.37273 12.4341 3.01 12.4313C2.74949 12.4359 2.48923 12.4124 2.23375 12.3613C2.49868 13.175 3.00936 13.8867 3.69549 14.3982C4.38162 14.9097 5.20945 15.196 6.065 15.2175C4.61367 16.3526 2.82372 16.9683 0.98125 16.9663C0.645 16.9663 0.3225 16.9513 0 16.91C1.87485 18.1182 4.05959 18.7573 6.29 18.75C13.835 18.75 17.96 12.5 17.96 7.0825C17.96 6.90125 17.9538 6.72625 17.945 6.5525C18.7537 5.97373 19.4501 5.25235 20 4.42375Z"
                fill="#FAF6F6"
              />
            </svg>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_721_1173)">
                <path
                  d="M0 2.66409C0 2.02058 0.225232 1.48969 0.675676 1.07143C1.12612 0.653147 1.71172 0.444016 2.43243 0.444016C3.14029 0.444016 3.71299 0.649923 4.15058 1.06178C4.60102 1.48649 4.82625 2.03988 4.82625 2.72201C4.82625 3.33977 4.60747 3.85456 4.16988 4.26641C3.71944 4.69112 3.12741 4.90347 2.39382 4.90347H2.37452C1.66666 4.90347 1.09396 4.69112 0.656371 4.26641C0.218784 3.8417 0 3.30759 0 2.66409ZM0.250965 19.556V6.66023H4.53668V19.556H0.250965ZM6.9112 19.556H11.1969V12.3552C11.1969 11.9047 11.2484 11.5573 11.3514 11.3127C11.5315 10.8752 11.805 10.5051 12.1718 10.2027C12.5386 9.90025 12.9987 9.74903 13.5521 9.74903C14.9936 9.74903 15.7143 10.7207 15.7143 12.6641V19.556H20V12.1622C20 10.2574 19.5496 8.81274 18.6486 7.82818C17.7477 6.84363 16.5573 6.35135 15.0772 6.35135C13.417 6.35135 12.1236 7.06564 11.1969 8.49421V8.53282H11.1776L11.1969 8.49421V6.66023H6.9112C6.93693 7.07206 6.94981 8.35262 6.94981 10.5019C6.94981 12.6512 6.93693 15.6692 6.9112 19.556Z"
                  fill="#FAF6F6"
                />
              </g>
              <defs>
                <clipPath id="clip0_721_1173">
                  <rect
                    width="20"
                    height="19.112"
                    fill="white"
                    transform="translate(0 0.444)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
