import ProfileIcon from "./ProfileIcon";

const HomeHeader = () => {
  return (
    <div className="h-16 flex justify-between md:justify-end items-center gap-4 px-5">
      <div className="flex gap-4">
        <span className="text-black/[0.87] x-[13px] line-height hover:underline">
          Gmail
        </span>
        <span className="text-black/[0.87] x-[13px] line-height hover:underline">
          Images
        </span>
      </div>
      <ProfileIcon />
    </div>
  );
};

export default HomeHeader;
