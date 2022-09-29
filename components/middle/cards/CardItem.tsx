import Image from "next/image"
import { cardType } from "@/types/types"


export default function CardItem({data}: {data:cardType}) {
  const {title_icon, title, payment_img, money, holder, expiry, cvv}=data
  return (
    <>
      <div className="card p-6 rounded-3xl text-colorWhite flex flex-col justify-between transition-all duration-300 ease-out h-[13rem]">

        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <span className="border-[1px] border-ColorWhite rounded-lg p-1 h-[2rem] w-[2rem] flex items-center justify-center">
            <Image width={20} height={20} src={`/images/${title_icon}`}alt="btc" />
            </span>
            <h2 className="font-medium text-md">{title}</h2>
          </div>
          <Image width={30} height={17} src={`/images/${payment_img}`} alt={`${payment_img}`} />
        </div>

        <div className="flex justify-between">
          <h2 className="font-bold">${money}</h2>
          <Image width={35} height={10} src="/images/card-chip.png" alt="chip" />
        </div>

        <div className="flex justify-between items-end">
          <div>
            <small>Card Holder</small>
            <h5>{holder}</h5>
          </div>
          <div className="flex gap-2">
            <div className="expiry">
              <small>Expiry</small>
              <h5>{expiry}</h5>
            </div>
            <div>
              <small>CVV</small>
              <h5>{cvv}</h5>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}
