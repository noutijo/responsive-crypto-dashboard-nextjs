import { paymentsData } from "@data/data"
import PaymentItem from "./PaymentItem"

export default function Payments() {
  return (
    <>
      <div className="flex-col flex lg:flex-row self-center mt-6 gap-3 lg:gap-4 mb-8">

        <h2 className="font-bold mb-4 lg:mb-0">Fast Payment</h2>

        <div className="flex gap-4 self-center flex-wrap w-max-[100%]">
          <div className="p-[0.5rem_0.7rem] bg-colorWhite dark:bg-colorWhite_DM rounded-lg flex items-center gap-4 transition-all suration-300 ease-out cursor-pointer hover:shadow-badge">
            <i className="bi bi-plus"></i>
          </div>
          {/** get and list all payments */}
          {paymentsData.map((payment, __) => {
          return <PaymentItem key={__} data={payment} />
        })}
        </div>
      </div>
    </>
  )
}
