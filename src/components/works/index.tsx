import { Works } from "@/interfaces/works";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

type Props = Works;

const WorkComponent = ({ date, title, description, tags, at, url }: Props) => {
  return (
    <li className="flex group flex-row relative md:p-4 py-4 lg:hover:bg-secondary rounded-lg lg:hover:shadow-xl">
      <div className="md:w-1/3 w-2/5 md:mt-0 mt-1 group-hover:text-white">
        {date}
      </div>
      <div className="grid gap-5 w-2/3">
        <a href={url} target="_blank">
          <h4 className="text-lg font-bold lg:group-hover:text-accent inline-flex items-center">
            {title} | {at}{" "}
            {url && (
              <span className="ms-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                <FaExternalLinkSquareAlt />
              </span>
            )}
          </h4>
        </a>
        <p className="text-sm group-hover:text-white">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary px-2 py-1 rounded-full text-white text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
};

export default WorkComponent;
