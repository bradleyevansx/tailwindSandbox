import React, { useState } from "react";

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const handleDrawer = () => {
    const drawer = document.getElementById("drawer");
    const inAnimation = [
      {
        transform: "translateX(-500px)",
        opacity: 0,
      },
      {
        transform: "translateX(0)",
        opacity: 1,
      },
    ];

    const outAnimation = [
      {
        transform: "translateX(0)",
        opacity: 1,
      },
      {
        transform: "translateX(-500px)",
        opacity: 0,
      },
    ];

    const timing = {
      duration: 750,
      iterations: 1,
      fill: "forwards",
    };

    if (visible) {
      setVisible(false);
      drawer.animate(outAnimation, timing);
    } else {
      setVisible(true);
      drawer.animate(inAnimation, timing);
    }
  };

  return (
    <>
      <nav className=" z-50 bg-neutral-100 border-neutral-200 dark:bg-neutral-800 shadow-md shadow-neutral-200 dark:shadow-neutral-950">
        <div className="min-w-full flex flex-wrap items-center justify-between mx-auto p-4">
          <button onClick={handleDrawer}>
            <svg
              className="w-6 h-6 text-neutral-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 17 14"
            >
              <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z"></path>
            </svg>
          </button>
          <div className="flex gap-5 w-full md:w-auto h-fit">
            <button>
              <svg
                className="w-6 h-6 text-neutral-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 14 20"
              >
                <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"></path>
              </svg>
            </button>
            <button>
              <svg
                className="w-6 h-6 text-neutral-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div
        id="drawer"
        className="fixed h-full bg-neutral-300 dark:bg-neutral-700 w-64 p-2 flex flex-col items-center shadow-md shadow-neutral-400 dark:shadow-neutral-950"
      >
        <h5 className="heading-medium">Menu</h5>
        <div></div>
      </div>
    </>
  );
};

export default NavBar;