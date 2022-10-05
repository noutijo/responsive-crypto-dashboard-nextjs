import "../styles/globals.css"
import "bootstrap-icons/font/bootstrap-icons.css"

import type { AppProps } from "next/app"
import type { NextPage } from "next"

import NavBarLayout from "@components/layouts/NavBarLayout"
import PrincipalLayout from "@components/layouts/PrincipalLayout"
import DefaultLayout from "@components/layouts/DefaultLayout"
import { AsideBarProvider } from "@hooks/AsideBarHook"

//define new Layout type
export type NextPageWithLayout = NextPage & {
  Layout?: typeof PrincipalLayout | typeof DefaultLayout
}

//define new props type
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  //get nested Layout
  const NestedLayout = Component.Layout || DefaultLayout

  return (
    <AsideBarProvider>
      <NavBarLayout>
        <NestedLayout>
          <Component {...pageProps} />
        </NestedLayout>
      </NavBarLayout>
    </AsideBarProvider>
  )
}

export default MyApp
