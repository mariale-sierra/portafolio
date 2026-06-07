import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts"
import type { FocusArea } from "@/types"

/* Radar chart visualizing the breadth of focus areas. */
export function FocusRadarChart({ data }: { data: FocusArea[] }) {
  const chartData = data.map((d) => ({ subject: d.area.split(" ")[0], value: d.value }))
  return (
    <ResponsiveContainer width="100%" height={260}>
      <RadarChart data={chartData} outerRadius="72%">
        <PolarGrid stroke="var(--color-border)" />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }}
        />
        <Radar
          dataKey="value"
          stroke="var(--color-chart-1)"
          fill="var(--color-chart-3)"
          fillOpacity={0.35}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}
