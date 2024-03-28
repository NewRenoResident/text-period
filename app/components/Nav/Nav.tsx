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
{
  /* <div className="mt-auto py-4 flex ">
  <div className="w-full max-w-10 h-10  bg-gray-500 rounded-full"></div>
  <div>
    <h3>Алистер Кроули</h3>
    <p>mail</p>
  </div>
  <div>...</div>
</div>; */
}
