"use client";

import { NavigationData } from "@/constants";
import { useState, useEffect } from "react";

const NavbarComponent = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects"];
      const offsetY = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (offsetY >= offsetTop && offsetY < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="max-h-screen flex items-center me-40 w-40">
      <nav className="fixed">
        <ul>
          {NavigationData.map(({ href, name }) => (
            <li key={href} className="mb-4">
              <a href={href} className="group flex items-center py-3">
                <span
                  className={`mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 ${
                    activeSection === href.replaceAll("#", "") ? "w-16" : ""
                  }
                group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
                ></span>
                <span>{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default NavbarComponent;
