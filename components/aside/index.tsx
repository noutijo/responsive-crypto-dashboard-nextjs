import { menuItemsData } from "@data/data"
import { useDrawer } from "@hooks/AsideBarHook"
import AsideBarItem from "./AsideItem"

export default function Aside() {
  // get drawer context
  const drawer = useDrawer()

  // display aside bar menu
  const hideAsideBarMenu = () => {
    drawer.setMenuStatus((state) => {
      return !state
    })
  }
  return (
    <>
      <aside
        className={`lg:flex bg-colorLight dark:bg-colorLight_DM flex-col lg:left-[0%] left-[-100%] lg:z-[1] lg:relative lg:h-[98vh] lg:w-[inherit] pb-6 z-[5] w-[22rem] h-screen fixed top-0 ${
          drawer.isopen ? "left-[0%]" : ""
        } overflow-y-auto lg:sticky lg:top-0 transition-all duration-300 ease-out`}>

        <button className="lg:hidden w-[3rem] h-[3rem] absolute top-2 right-2 z-[6]" onClick={hideAsideBarMenu}>
          <i className="bi bi-x text-3xl"> </i>
        </button>

        <div>
          {/** get all menu items and display*/}
          {menuItemsData.map((item, __) => (
            <AsideBarItem
              key={__}
              title={item.title}
              iconName={item.iconName}
              url={item.url}
            />
          ))}
        </div>

        <div className="bg-colorWhite dark:bg-colorWhite_DM rounded-md text-center p-4 mt-4 mx-4 lg:mx-0">
          <i className="bi bi-arrow-clockwise text-3xl"> </i>
          <h4 className="my-2 font-bold">Updates Available</h4>
          <p>Security Updates</p>
          <p>Genaral Updates</p>
          <a
            className="block w-full bg-colorPrimary text-colorWhite rounded-md p-[0.8rem_0] mt-4 transition-all duration-300 ease-out hover:shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
            href="#">
            Update Now
          </a>
        </div>

      </aside>
    </>
  )
}