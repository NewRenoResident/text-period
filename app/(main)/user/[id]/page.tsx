import Tweets from "@/app/components/Tweets/Tweets";
import UserHeader from "@/app/components/UserHeader/UserHeader";
import UserProfileCard from "@/app/components/UserProfileCard/UserProfileCard";

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col">
      <UserProfileCard userId={params.id} />
      <Tweets userId={params.id} />
    </div>
  );
}
