import Image from "next/image"
import { investmentType } from "@/types/types"

export default function InvestmentItem({data}: {data:investmentType}) {
  const { title, img, date, time, bonds, money, variant,variant_color } = data

  return (
    <>
      <div className="flex justify-between items-center p-6 border-b-[0.1px] border-colorLight dark:border-colorGrayDark transition-all duration-300 ease-out last:border-b-0 hover:bg-colorLight dark:hover:bg-colorLight_DM cursor-pointer">
        
        <Image width={25} height={25} src={`/images/${img}`} alt="" />

        <h3>{title}</h3>

        <div className="date-time">
          <p>{date}</p>
          <small className="text-colorGrayLight">{time}</small>
        </div>

        <div className="bonds">
          <p>{bonds}</p>
          <small className="text-colorGrayLight">Bonds</small>
        </div>

        <div className="amount">
          <h4>{money}</h4>
          <small className={`${variant_color}`}>{variant}%</small>
        </div>
      </div>
    </>
  )
}
