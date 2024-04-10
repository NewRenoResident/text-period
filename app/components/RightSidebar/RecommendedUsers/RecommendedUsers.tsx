"use client";

const RecommendedUsers = ({ users }: { users: any }) => {
  return (
    <div>
      {users.users.map((user: any) => (
        <div key={user._id}>{user.username}</div>
      ))}
    </div>
  );
};
export default RecommendedUsers;
