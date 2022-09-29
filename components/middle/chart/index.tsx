import { useEffect, useState } from "react";
import { chartData } from "@data/data";

export default function GrapChart() {

  return (
    <>
      <canvas
        className="!bg-colorWhite dark:!bg-colorWhite_DM !w-full mt-8 !rounded-3xl !p-6 !mb-6"
        id="chart"
      />
    </>
  );
}
