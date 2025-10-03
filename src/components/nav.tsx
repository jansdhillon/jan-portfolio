"use client";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Socials } from "./socials";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
};

const NavLink = ({ href, children, onClick, isActive }: NavLinkProps) => (
  <a
    href={href}
    className={`text-sm font-medium transition-colors hover:text-primary ${
      isActive ? "text-primary" : "text-muted-foreground"
    }`}
    onClick={onClick}
  >
    {children}
  </a>
);

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("#top");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const updateHash = () => {
      const { hash } = window.location;
      setActiveHash(hash || "#top");
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const setHash = (hash: string) => () => {
    setActiveHash(hash || "#top");
    if (hash.startsWith("#")) {
      setTimeout(() => setIsOpen(false), 0);
    }
  };

  const navItems = [
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },

    { href: "#skills", label: "Skills" },
  ];

  return (
    <header className="bg-card fixed top-0 left-0 right-0 z-50 border-b  ">
      <div className=" mx-auto py-4  px-10 flex items-center justify-evenly space-x-3">
        <nav className="hidden w-full lg:flex items-center justify-between gap-4">
          <div className=" flex space-x-4  items-center">
            <a
              href="#top"
              className="text-primary text-lg font-semibold tracking-wider hover:text-muted-foreground"
              onClick={setHash("#top")}
            >
              Jan-Yaeger Dhillon
            </a>
            <Socials />
          </div>
          <div className="hidden md:flex space-x-6 items-center ">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                href={item.href}
                isActive={activeHash === item.href}
                onClick={setHash(item.href)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>

        <nav className="flex  items-center  lg:hidden justify-between w-full">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <a
              href="#top"
              className="text-primary text-base font-semibold tracking-wider hover:text-muted-foreground"
              onClick={setHash("#top")}
            >
              Jan-Yaeger Dhillon
            </a>

            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="ml-2 text-muted-foreground"
              >
                <RxHamburgerMenu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-6">
                <div className="flex flex-col lg:flex-row text-left items-start lg:items-center font-sm lg:space-y-0 space-y-6 w-full">
                  {navItems.map((item, index) => (
                    <div className="py-1 w-full" key={index}>
                      <NavLink
                        href={item.href}
                        onClick={setHash(item.href)}
                        isActive={activeHash === item.href}
                      >
                        {item.label}
                      </NavLink>
                    </div>
                  ))}
                </div>
                <Socials />
              </div>
            </SheetContent>
          </Sheet>
        </nav>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
