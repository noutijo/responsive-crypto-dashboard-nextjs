import { transactionType } from "@/types/types"
import Image from "next/image"

export default function TransactionItem({ data }: { data: transactionType }) {
  const {
    icon,
    icon_color,
    icon_bg,
    title,
    date,
    card_icon,
    card_bg,
    last_card_digit,
    card_type,
    money,
  } = data

  return (
    <>
      <div className="flex items-center justify-between p-[1.5rem_1.5rem] rounded-3xl transition-all duration-300 ease-out hover:bg-colorWhite dark:hover:bg-colorWhite_DM cursor-pointer">

        <div className="flex items-center gap-4">
          <div className={`flex rounded-lg items-center ${icon_bg} p-2`}>
            <i className={`bi text-xl ${icon} ${icon_color}`}></i>
          </div>
          <div className="">
            <h3 className="font-bold">{title}</h3>
            <p className="text-colorGrayLight">{date}</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div
            className={`flex items-center justify-center h-[2.5rem] w-[4rem] rounded-md p-2 ${card_bg}`}>
            <Image width={30} height={15} src={`/images/${card_icon}`} alt="" />
          </div>
          <div className="details">
            <p>*{last_card_digit}</p>
            <small className="text-colorGrayLight">{card_type}</small>
          </div>
        </div>
        
        <h4 className="font-bold">${money}</h4>
      </div>
    </>
  )
}
