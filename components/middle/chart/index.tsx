import { useEffect } from "react";
import { chartData } from "@data/data";


export default function GrapChart() {
  useEffect(() => {
    const doc = (document as Document) || null;
    const chart = doc?.querySelector("#chart")?.getContext("2d");
    
    // new Chart instance
    new Chart(chart, chartData);
  });
  return (
    <>
      <canvas className="!bg-colorWhite dark:!bg-colorWhite_DM !w-full mt-8 !rounded-3xl !p-6 !mb-6" id="chart" />
    </>
  );
}
