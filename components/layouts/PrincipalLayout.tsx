import Aside from "@components/aside"
import RightSide from "@components/right"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="grid grid-cols-[1fr] lg:grid-cols-[16rem_auto_27rem] gap-3 w-[96%] m-[1rem_auto_4rem]">
        <Aside />
        {children}
        <RightSide />
      </div>
    </>
  )
}
