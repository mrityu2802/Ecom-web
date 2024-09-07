import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { User } from "lucide-react";
import Link from "next/link";

type Link = {
  title: string;
  url: string;
};

type LINKS = Link[];

const links: LINKS = [
  { title: "NEW ARRIVALS", url: "/new-arrival" },
  { title: "BEST SELLING", url: "/best-selling" },
  { title: "SHOP", url: "/shop" },
];

const Navlinks = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon className="w-5 h-5" />
      </SheetTrigger>
      <SheetContent
        className="flex flex-col bg-white dark:bg-black"
        side={"left"}
      >
        <div className="flex gap-4">
          <User />
          <Link href={"/log-in"}>LOG IN</Link>
        </div>
        <hr />

        {links.map((link) => (
          <>
            <Link key={link.title} href={link.url}>
              {link.title}
            </Link>
            <hr />
          </>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default Navlinks;
