import { menuItemsData } from "@data/data";
import AsideBarItem from "./AsideItem";

export default function Aside() {
  return (
    <>
      <aside className="flex flex-col justify-between h-[88vh] pb-6">
        <button className="hidden">
          <i className="bi bi-x text-3xl"> </i>
        </button>
        <div className="">
          {menuItemsData.map((item, index) => (
            <AsideBarItem
              key={index}
              title={item.title}
              iconName={item.iconName}
              url={item.url}
            />
          ))}
        </div>
        <div className="bg-colorWhite dark:bg-colorWhite_DM rounded-md text-center p-6">
          <i className="bi bi-arrow-clockwise text-3xl"> </i>
          <h4 className="m-[1rem_0]">Updates Available</h4>
          <p>Security Updates</p>
          <p>Genaral Updates</p>
          <a
            className="block w-full bg-colorPrimary text-colorWhite rounded-md p-[0.8rem_0] mt-8 transition-all duration-300 ease-out hover:shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
            href="#">
            Update Now
          </a>
        </div>
      </aside>
    </>
  );
}
