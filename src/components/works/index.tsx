import { Works } from "@/interfaces/works";

type Props = Works;

const WorkComponent = ({ date, title, description, tags }: Props) => {
  return (
    <li className="flex group flex-row relative md:p-4 py-4 hover:bg-secondary rounded-lg hover:shadow-xl">
      <div className="md:w-1/3 w-2/5 md:mt-0 mt-1 group-hover:text-white">{date}</div>
      <div className="grid gap-5 w-2/3">
        <h4 className="text-lg font-bold group-hover:text-accent">
          {title}
        </h4>
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
