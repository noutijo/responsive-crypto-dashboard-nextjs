import { transactionstData } from "@data/data";
import TransactionItem from "./TransactionItem";

export default function Transactions() {
  return (
    <>
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4 p-6 pb-0">
          <h3 className="font-bold">Recent Transactions</h3>
          <a className="flex text-colorPrimary items-center" href="#">
            More <i className="bi bi-chevron-right"></i>
          </a>
        </div>
        {/*  transactions list */}
        {transactionstData.map((transaction, __) => {
          return <TransactionItem key={__} data={transaction} />;
        })}
      </div>
    </>
  );
}
