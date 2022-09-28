import PrincipalLayout from "@components/layouts/PrincipalLayout";
import PageTemplate from "@components/PageTemplate";

export default function Home() {
  return (
    <>
      <PageTemplate title={"Home"} />
    </>
  );
}

Home.Layout = PrincipalLayout;
