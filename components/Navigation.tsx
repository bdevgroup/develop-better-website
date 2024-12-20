"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "@/components/Transition";
import MobileMenu from "./MobileMenu";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useTheme } from "next-themes";

const Navigation = () => {
  const basePath = process.env.NEXT_PUBLIC_BASEPATH;

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const [isRouting, setIsRouting] = useState(false);
  const path = usePathname();
  const [isActive, setIsActive] = useState(path);
  const [prevPath, setPrevPath] = useState("/");
  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);
  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);
    }
  }, [path, isRouting, setTheme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed z-[51] top-0 left-0 w-full max-mobile:w-screen px-12 mt-5 max-h-[60px] flex justify-center max-tablet:px-0 max-tablet:mt-0 max-tablet:max-h-[100px]">
      {isRouting && <Transition />}
      <div
        className={`flex justify-between w-full rounded-xl items-center max-tablet:px-5 backdrop-blur-xl bg-[rgba(255,255,255,0.02)] dark:bg-[rgba(0,10,19,0.5)] max-tablet:h-[100px]`}
      >
        <div className="flex flex-row gap-3 items-center px-6 max-mobile:pl-1">
          <Link href={"/"}>
            <Image
              src={theme === "light" ? `${basePath}/logo_dark.png` : `${basePath}/logo_light.png`}
              alt="Develop better logo"
              width={80}
              height={40}
              className="relative z-50"
            />
          </Link>
        </div>
        <div className="px-6 py-8 gap-[36px] flex justify-end items-center max-tablet:hidden">
          {NavLinks.map((nav) => (
            <div key={nav.name}>
              {theme === "light" ? (
                <Link
                  key={nav.name}
                  href={nav.link}
                  className={`capitalize font-semibold ${
                    path === nav.name ? "text-blue-950" : "text-blue-950"
                  } hover:text-black`}
                >
                  {nav.title}
                </Link>
              ) : (
                <Link
                  key={nav.name}
                  href={nav.link}
                  className={`capitalize font-extralight ${
                    path === nav.name ? "text-white" : "text-gray-400"
                  } hover:text-white`}
                >
                  {nav.title}
                </Link>
              )}
            </div>
          ))}
          <ThemeSwitcher />
          <button
            type="button"
            title="Français"
            className={`font-semibold bg-transparent ${
              theme === "light"
                ? "text-blue-950 hover:text-blue-900"
                : "text-gray-200 hover:text-white"
            } rounded-md p-2`}
          >
            Fr
          </button>
          <Link
            href="/contact"
            title="Contactez-nous"
            className={`px-6 py-2 font-normal ${
              theme === "light"
                ? "text-blue-950 font-semibold border-blue-950"
                : "text-white border-[rgba(255,255,255,.1)]"
            } bg-transparent hover:bg-[rgba(255,255,255,.05)] rounded-full p-2 flex items-center gap-2 justify-center border `}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-900 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-700"></span>
            </span>
            Contactez-nous
          </Link>
        </div>
        <MobileMenu path={path} />
      </div>
    </div>
  );
};
export default Navigation;
