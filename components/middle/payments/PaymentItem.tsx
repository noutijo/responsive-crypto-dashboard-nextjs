import { paymentType } from "@/types/types"

export default function PaymentItem({ data }: { data: paymentType }) {
  const {dot_color, title, money} = data

  return (
    <>
      <div className="p-[0.5rem_1rem] bg-colorWhite dark:bg-colorWhite_DM rounded-lg flex items-center gap-4 transition-all suration-300 ease-out cursor-pointer hover:shadow-badge">

        <span className={`w-3 h-3 rounded-full ${dot_color}`}></span>
        
        <div className="flex gap-1 items-center">
          <h4 className="text-colorGrayLight text-regular">{title}</h4>
          <h4 className="font-bold">${money}</h4>
        </div>
      </div>
    </>
  )
}
