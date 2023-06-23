import React from "react";
import { useRouter } from "next/navigation";


import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";

export default function Navba() {
  const [openNav, setOpenNav] = React.useState(false);
  const router = useRouter();


  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-16">
      <Typography
        as="li"
        variant="small"
        color={router.pathname === "/" ? "green" : "white"}
        className="p-1 font-normal text-lg  hover:text-teal-800"
      >
        <Link href="/">Home</Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color={router.pathname === "/about" ? "green" : "white"}
        className="p-1 font-normal text-lg hover:text-teal-800"
      >
        <Link href="/about">About</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color={router.pathname === "/contactus" ? "green" : "white"}
        className="p-1 font-normal text-lg mr-10  hover:text-teal-800"
      >
        <Link href="/contactus">Contact Us</Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      className="sticky top-0 h-max max-w-full py-2 px-4 lg:px-8 lg:py-4 mt-4 "
      style={{
        backgroundColor: "transparent",
        border: "none",
        borderRadius: 0,
        backdropFilter: "none",
        boxShadow: "none",
      }}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link href="/">
          <Image className="ml-1" src="/logosmall.png" alt="Logo" width={170} height={35} />
        </Link>
        <div className="flex items-center gap-4">
          <div className="mr-4  hidden lg:block">{navList}</div>
          <Button
            variant="outlined"
            size="lg"
            className="hidden lg:inline-block hover:text-white hover:bg-light-blue-800"
          >
            <span>UMT ACTIVATION</span>
          </Button>
          <IconButton
            variant="text"
            className="ml-auto h-24 w-24 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button variant="outlined" size="md" fullWidth className="mb-2">
          <span>UMT ACTIVATION</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
}
