import Cards from "./cards"
import GrapChart from "./chart"
import Payments from "./payments"
import Reports from "./reports"

export default function MiddleSide() {
  return (
    <>
      <section>

        <div className="flex items-center gap-3">
          <h1 className="font-bold text-2xl">Overview</h1>
          <input className="p-[0.5rem_2rem] rounded-lg bg-colorWhite dark:bg-colorWhite_DM text-colorGrayDark outline-none" type="date" />
        </div>

        {/* cards  */}
        <Cards />
        {/* reports  */}
        <Reports />
        {/* payments  */}
        <Payments />
        {/* chart  */}
        <GrapChart />
      </section>
    </>
  )
}
