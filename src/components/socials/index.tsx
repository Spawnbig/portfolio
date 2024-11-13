"use client";

import GithubSVG from "../../../public/icons/github.svg";
import LinkedinSVG from "../../../public/icons/linkedin.svg";
import GmailSVG from "../../../public/icons/gmail.svg";
import { useTheme } from "@/context/theme_context";

const SocialsComponent = () => {
  const { isDarkMode } = useTheme();
  const socials = [
    { name: "Github", link: "https://github.com/Spawnbig", IconSVG: GithubSVG },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/nicolas-sanhueza-soto-9677992b5/",
      IconSVG: LinkedinSVG,
    },
    {
      name: "Gmail",
      link: "mailto:nsanhuezasoto97@gmail.com",
      IconSVG: GmailSVG,
    },
  ];

  return (
    <div className="flex gap-5">
      {socials.map(({ name, link, IconSVG }) => (
        <a
          key={name}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-content"
        >
          <div className={`${isDarkMode ? "fill-white" : "fill-black"}`}>
            <IconSVG width="25" height="35" />
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialsComponent;
