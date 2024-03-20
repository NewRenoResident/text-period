import { FiMessageSquare } from "react-icons/fi";
import TweetBottomItem from "./TweetBottomItem";

const icons = [
  {
    icon: FiMessageSquare,
    label: "Message",
  },
];

const TweetBottom = () => {
  return (
    <div className="mt-4">
      {icons.map((item) => (
        <TweetBottomItem key={item.label} icon={item.icon} />
      ))}
    </div>
  );
};

export default TweetBottom;
