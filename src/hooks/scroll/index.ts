import { useState, useEffect } from "react";

const useGetCurrentTitle = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["about", "experience", "certifications", "projects"];

    const handleScroll = () => {
      const aboutPosition =
        document.getElementById(sections[0])?.offsetTop || 0;
      const experiencePosition =
        document.getElementById(sections[1])?.offsetTop || 0;
      const certificationsPosition =
        document.getElementById(sections[2])?.offsetTop || 0;
      const scrollPosition = window.scrollY;
      const isAtBottom =
        window.innerHeight + scrollPosition >=
        document.documentElement.scrollHeight - 100;

      if (isAtBottom) {
        setActiveSection(sections[3]);
      } else if (scrollPosition < aboutPosition) {
        setActiveSection(sections[0]);
      } else if (scrollPosition < experiencePosition) {
        setActiveSection(sections[1]);
      } else if (scrollPosition < certificationsPosition) {
        setActiveSection(sections[2]);
      } else {
        setActiveSection(sections[3]);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
};

export default useGetCurrentTitle;
