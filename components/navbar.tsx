"use client";
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import Navlinks from "./navlinks";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [clientRendered, setClientRendered] = useState(false);

  useEffect(() => {
    setClientRendered(true);
  }, []);

  return (
    <header className="p-8">
      <nav className="flex justify-between">
        <Navlinks />
        <Link href={"/"} className="flex gap-2">
          <Image
            width={30}
            height={30}
            src={"./assets/e.svg"}
            color="#fff"
            alt="ecom"
          />
          <h1 className="text-3xl font-bold leading-9">SNITCH</h1>
        </Link>
        <Button
          variant={"ghost"}
          className="hover:bg-slate-400/80 rounded-full p-2"
        >
          {clientRendered && resolvedTheme === "dark" ? (
            <Sun
              className="rounded-full w-5 h-5"
              onClick={() => setTheme("light")}
            />
          ) : (
            <Moon
              className="rounded-full w-5 h-5"
              onClick={() => setTheme("dark")}
            />
          )}
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
