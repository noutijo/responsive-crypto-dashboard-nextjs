export default function NavBar() {
  return (
    <nav className="w-screen bg-colorWhite dark:bg-colorWhite_DM py-[0.5rem]">
      <div className="flex justify-between items-center relative w-[96%] m-auto">
        <img className="w-[3rem]" src="./images/logo.png" alt="" />
        <div className="bg-colorLight dark:bg-colorLight_DM py-2 px-[1.6rem] rounded-md w-[32vw] items-center gap-3 text-colorGrayLight sm:hidden lg:flex">
          <i className={`bi bi-search text-sm flex items-center`}></i>
          <input
            className="text-colorDark dark:text-colorDark_DM bg-transparent w-[100%] placeholder:text-colorGrayDark dark:placeholder:text-colorGrayDark_DM"
            type="search"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center justify-between gap-8">
          <div className="flex bg-colorLight dark:bg-colorLight_DM w-[5rem] h-[2rem] rounded-md cursor-pointer">
            <i
              className={`bi bi-brightness-high-fill text-sm w-1/2 h-full flex items-center justify-center ${"active-theme"}`}></i>
            <i
              className={`bi bi-moon-fill text-sm w-1/2 h-full flex items-center justify-center`}></i>
          </div>
          <div className="flex items-center gap-2">
            <div className="block w-[2rem] h-[2rem] overflow-hidden rounded-[50%]">
              <img src="images/me.jpeg" alt="" />
            </div>
            <h5>Oreol Noumodong</h5>
            <div className="expand-menu">
              <i
                className={`bi bi-chevron-down text-sm w-1/2 h-full flex items-center justify-center`}></i>
            </div>
          </div>
          <button className="sm:block lg:hidden">
            <i
              className={`bi bi-list w-1/2 h-full flex items-center justify-center text-lg`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
