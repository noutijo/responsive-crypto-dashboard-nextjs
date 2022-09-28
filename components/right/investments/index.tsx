import { investmentData } from "@data/data";
import InvestmentItem from "./InvestmentItem";

export default function Investments() {
  return (
    <>
      <div className="bg-colorWhite dark:bg-colorWhite_DM rounded-3xl">
        <div className="flex justify-between items-center p-6 pb-2">
          <h3 className="font-bold">Investments</h3>
          <a className="flex text-colorPrimary items-center" href="#">
            More <i className="bi bi-chevron-right"></i>
          </a>
        </div>
        {/**Investments list */}
        {investmentData.map((invest, __) => {
          return <InvestmentItem key={__} data={invest} />;
        })}
      </div>
    </>
  );
}
