import Aside from "@components/aside";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="grid grid-cols-[16rem_auto_30rem] gap-3 w-[96%] m-[1rem_auto_4rem]">
        <Aside />
        {children}
        <div>right</div>
      </div>
    </>
  );
}