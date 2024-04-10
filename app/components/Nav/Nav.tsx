import UserProfileNavItem from "../UserProfileNavItem";
import MappedUserItems from "../MappedUserItems";

const Nav = () => {
  return (
    <div className="flex">
      <div className="flex w-full h-screen flex-col px-[2vw]  justify-between py-4">
        <MappedUserItems />
        <UserProfileNavItem />
      </div>
    </div>
  );
};

export default Nav;
