import { Works } from "@/interfaces/works";

type Props = Works;

const WorkComponent = ({ date, title, description, tags }: Props) => {
  return (
    <li className="flex group flex-row relative p-4 hover:bg-secondary rounded-lg hover:shadow-lg">
      <div className="w-1/3 group-hover:text-white">{date}</div>
      <div className="grid gap-5 w-2/3">
        <h4 className="text-lg font-bold group-hover:text-teal-600">
          {title}
        </h4>
        <p className="text-sm group-hover:text-white">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary px-2 py-1 rounded-full text-white"
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