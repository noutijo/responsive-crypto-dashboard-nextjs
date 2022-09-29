import { useEffect, useRef, useState } from "react"
import { chartData } from "@data/data"
import {
  Chart,
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from "chart.js"

Chart.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip
)

export default function GrapChart() {
const [chart, setChart] = useState();

useEffect(() => {
  const canvas = document.getElementById("chart") as HTMLCanvasElement;
  const graph = canvas.getContext("2d") as CanvasRenderingContext2D;
  // new Chart instance
    new Chart(graph, chartData as any);
  })
  return (
    <>
      <canvas
        className="!bg-colorWhite dark:!bg-colorWhite_DM !w-full mt-8 !rounded-3xl !p-6 !mb-6" id="chart"
      />
    </>
  )
}
