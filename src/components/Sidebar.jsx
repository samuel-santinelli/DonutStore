import { useState } from "react";
import headerLogo from "../assets/images/logo.png";

const menuItems = [
  { item: "characters" },
  { item: "store" },
  { item: "videos" },
  { item: "documentation" },
];

const Sidebar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="">
        <img
          src={headerLogo}
          alt="logo"
          className={`lg:hidden h-20 w-32 ml-5`}
          onClick={() => setMenu(!menu)}
        />
      <div className={`${menu ? "flex" : "hidden lg:flex"} w-full h-full gap-20 glass md:h-14 flex-col md:flex-row p-10 md:gap-10 justify-center items-center capitalize`}>
        {menuItems?.map((item) => (
          <p className="text-24 md:text-20 text-white cursor-pointer hover:text-blue-200 duration-200" key={item.item}>
            {item.item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-green-100 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
