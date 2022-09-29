import { reportType } from "@/types/types"

export default function ReportItem({ data }: { data: reportType }) {
  const { title, money, variant, variant_color, prev_money } = data

  return (
    <>
      <div>
        <h3 className="font-bold">{title}</h3>

        <div>
          <h2 className="font-medium mt-1">${money}</h2>
          <details>
            <h6 className={`${variant_color}`}>{variant}%</h6>
            <p className="text-colorGrayLight text-sm">
              Compared to ${prev_money} last month
            </p>
          </details>
        </div>
      </div>
    </>
  )
}
