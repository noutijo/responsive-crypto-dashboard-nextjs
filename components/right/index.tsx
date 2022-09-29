import Investments from "./investments"
import Transactions from "./transactions"

export default function RightSide() {
  return (
    <>
      <section>
        {/* invsstments  */}
        <Investments />

        {/* transactions  */}
        <Transactions />
      </section>
    </>
  )
}
