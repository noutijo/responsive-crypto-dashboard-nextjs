import Head from "next/head"
import PrincipalLayout from "@components/layouts/PrincipalLayout"
import MiddleSide from "@components/middle"

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <MiddleSide />
    </>
  )
}

Home.Layout = PrincipalLayout
