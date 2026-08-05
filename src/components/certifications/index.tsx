import { Certification } from "@/interfaces/certifications";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

type Props = Certification;

const CertificationComponent = ({ name, issuer, date, url }: Props) => {
  return (
    <li className="flex group flex-row relative md:p-4 py-4 lg:hover:bg-secondary rounded-lg lg:hover:shadow-xl">
      <div className="md:w-1/3 w-2/5 md:mt-0 mt-1 group-hover:text-white">
        {date}
      </div>
      <div className="flex items-center justify-between w-2/3">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h4 className="text-lg font-bold lg:group-hover:text-accent">
            {name} | {issuer}
          </h4>
        </a>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
          >
            <FaExternalLinkSquareAlt />
          </a>
        )}
      </div>
    </li>
  );
};

export default CertificationComponent;
