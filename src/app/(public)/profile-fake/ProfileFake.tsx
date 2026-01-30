import dynamic from "next/dynamic";

const DunamicShopMunu = dynamic(() =>
  import("./ProfileButton").then((mod) => mod.ProfileButton)
);

export const ProfileFake = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">ProfileFakePage</h1>

      <DunamicShopMunu />
    </div>
  );
};
