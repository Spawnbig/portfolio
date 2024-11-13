"use client";

import { NavigationData } from "@/constants";
import { useGetCurrentTitle } from "@/hooks";

const NavbarComponent = () => {
  const activeSection = useGetCurrentTitle();

  return (
    <aside className="max-h-screen md:flex items-center me-56 w-40 hidden">
      <nav className="fixed">
        <ul>
          {NavigationData.map(({ href, name }) => (
            <li key={href} className="mb-4">
              <a href={href} className="group flex items-center py-3">
                <span
                  className={`mr-4 ${
                    activeSection === href.replaceAll("#", "") ? "w-16" : "w-8"
                  } h-px bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
                ></span>
                <span className="tracking-wide">{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default NavbarComponent;
