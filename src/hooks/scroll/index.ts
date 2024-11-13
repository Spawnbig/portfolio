import { useState, useEffect } from "react";

const useGetCurrentTitle = () => {
  const [activeSection, setActiveSection] = useState("");
  
  useEffect(() => {
    const sections = ["about", "experience", "projects"];
    const handleScroll = () => {
      const aboutPosition =
        document.getElementById(sections[0])?.offsetTop || 0;
      const experiencePosition =
        document.getElementById(sections[1])?.offsetTop || 0;
      const scrollPosition = window.scrollY;
      if (scrollPosition < aboutPosition) {
        setActiveSection(sections[0]);
      } else if (scrollPosition < experiencePosition) {
        setActiveSection(sections[1]);
      } else {
        setActiveSection(sections[2]);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
};

export default useGetCurrentTitle;
