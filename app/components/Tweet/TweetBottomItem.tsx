import { IconType } from "react-icons";

interface TweetBottomItemI {
  icon: IconType;
  label?: string;
  color?: string;
  visible?: boolean;
  action: () => void;
}

const TweetBottomItem = ({
  icon: Icon,
  color,
  visible,
  action,
}: TweetBottomItemI) => {
  const handleBottomClick = (event) => {
    event.stopPropagation();
    action();
  };
  return (
    <div
      onClick={handleBottomClick}
      className={`${visible ? "block" : "hidden"} p-2 rounded-full hover:cursor-pointer ${color ? color : "hover:bg-white"} hover:bg-opacity-20`}
    >
      <Icon />
    </div>
  );
};

export default TweetBottomItem;
