import Investments from "./investments"
import Transactions from "./transactions"

export default function RightSide() {
  return (
    <>
      <section>
        {/* investments  */}
        <Investments />

        {/* transactions  */}
        <Transactions />
      </section>
    </>
  )
}
