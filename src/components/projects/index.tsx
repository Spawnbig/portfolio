import { ProjectsData } from "@/constants";
import Image from "next/image";

const ProjectsComponent = () => {
  return (
    <div className="2xl:grid 2xl:grid-cols-2 flex flex-col justify-center items-center gap-5">
      {ProjectsData.map(({ image, name, description, keywords, url }) => (
        <div
          key={name}
          className="group flex flex-col relative gap-2 bg-secondary rounded-xl text-center items-center p-5 text-sm bg-opacity-50 transition transform duration-300 md:hover:scale-110"
        >
          <Image
            src={image}
            alt={name}
            height={150}
            width={100}
            className="mx-auto max-h-24"
          />
          <h4 className="font-semibold text-lg underline">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </h4>
          <p>{description}</p>
          <div className="flex gap-2 justify-center flex-wrap">
            {keywords.map((keyword) => (
              <span
                key={keyword}
                className="bg-primary px-2 py-1 rounded-full text-white text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsComponent;
