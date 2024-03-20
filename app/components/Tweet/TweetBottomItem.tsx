import { IconType } from "react-icons";

interface TweetBottomItemI {
  icon: IconType;
}

const TweetBottomItem = ({ icon: Icon }: TweetBottomItemI) => {
  return <Icon />;
};

export default TweetBottomItem;
