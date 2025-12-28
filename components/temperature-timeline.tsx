"use client"

import { Card } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, ReferenceLine, CartesianGrid } from "recharts"

export function TemperatureTimeline() {
  const timeline = [
    { time: "14:00", temp: 4, status: "cold" },
    { time: "15:00", temp: 8, status: "ideal" },
    { time: "16:00", temp: 12, status: "ideal" },
    { time: "17:00", temp: 16, status: "warm" },
    { time: "18:00", temp: 19, status: "warm" },
  ]

  const TOO_COLD_THRESHOLD = 7
  const LUKEWARM_THRESHOLD = 15

  return (
    <Card className="mb-4 p-4 bg-card border-border/50 shadow-xl">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold">温度予測タイムライン</h3>
        <span className="text-xs text-muted-foreground">今後4時間</span>
      </div>

      <div className="relative">
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={timeline} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />

            <XAxis
              dataKey="time"
              tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
              tickLine={false}
              axisLine={{ stroke: "hsl(var(--border))" }}
            />

            <YAxis
              domain={[0, 20]}
              tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
              tickLine={false}
              axisLine={{ stroke: "hsl(var(--border))" }}
              ticks={[0, 5, 10, 15, 20]}
              label={{
                value: "°C",
                angle: -90,
                position: "insideLeft",
                style: { fontSize: 11, fill: "hsl(var(--muted-foreground))" },
              }}
            />

            <ReferenceLine
              y={TOO_COLD_THRESHOLD}
              stroke="rgb(96, 165, 250)"
              strokeDasharray="5 5"
              strokeWidth={2}
              label={{
                value: "冷たすぎ",
                position: "insideTopRight",
                style: { fontSize: 10, fontWeight: 600, fill: "rgb(96, 165, 250)" },
              }}
            />

            <ReferenceLine
              y={LUKEWARM_THRESHOLD}
              stroke="rgb(251, 146, 60)"
              strokeDasharray="5 5"
              strokeWidth={2}
              label={{
                value: "ぬるすぎ",
                position: "insideTopRight",
                style: { fontSize: 10, fontWeight: 600, fill: "rgb(251, 146, 60)" },
              }}
            />

            <Line
              type="monotone"
              dataKey="temp"
              stroke="rgb(34, 211, 238)"
              strokeWidth={3}
              dot={{
                fill: "hsl(var(--card))",
                stroke: "rgb(34, 211, 238)",
                strokeWidth: 2,
                r: 5,
              }}
              activeDot={{ r: 7, strokeWidth: 3, fill: "rgb(34, 211, 238)" }}
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Legend */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-blue-400 shadow-sm shadow-blue-400/50" />
            <span className="text-muted-foreground">Too Cold (&lt;7°)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50" />
            <span className="text-muted-foreground">Best Sip (7-15°)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-orange-400 shadow-sm shadow-orange-400/50" />
            <span className="text-muted-foreground">Lukewarm (&gt;15°)</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
