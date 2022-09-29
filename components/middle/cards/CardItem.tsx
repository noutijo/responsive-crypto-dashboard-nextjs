import Image from "next/image";


export default function CardItem() {
  return (
    <>
      <div className="card p-6 rounded-3xl text-colorWhite flex flex-col justify-between transition-all duration-300 ease-out h-[13rem]">
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <Image width={30} height={10} className="border-[1px] border-ColorWhite" src="/images/BTC.png" alt="btc" />
            <h2 className="font-medium text-md">BTC</h2>
          </div>
          <Image width={30} height={10} src="/images/visa.png" alt="visa" />
        </div>
        <div className="flex justify-between">
          <h2>$223,233</h2>
          <Image width={35} height={10} src="/images/card chip.png" alt="chip" />
        </div>
        <div className="flex  justify-between items-end">
          <div className="left">
            <small>Card Holder</small>
            <h5>JOHN DOE</h5>
          </div>
          <div className="flex gap-2">
            <div className="expiry">
              <small>Expiry</small>
              <h5>07/28</h5>
            </div>
            <div className="cvv">
              <small>CVV</small>
              <h5>111</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
