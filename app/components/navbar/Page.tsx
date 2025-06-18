import { SlideTabs } from "../animate/nav";
const words = ["home", "experience", "skills", "projects", "contact"];

const Page = () => {
  return (
    <div className="max-sm:hidden sticky z-40 top-5 flex items-center justify-center w-full text-white">
      <SlideTabs className="uppercase " labels={words} />
    </div>
  );
};

export default Page;
