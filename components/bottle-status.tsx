"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type BottleState = "cold" | "ideal" | "warm"

export function BottleStatus() {
  const [state] = useState<BottleState>("ideal")
  const [temperature] = useState(8)
  const [icePercentage] = useState(45)

  const stateConfig = {
    cold: {
      label: "Too Cold",
      bgColor: "from-blue-950/50 to-blue-900/30",
      textColor: "text-blue-400",
      message: "冷たすぎます（4℃以下）",
      advice: "お腹が弱い方は少しお待ちください",
      ringColor: "ring-blue-500/20",
      gradientFrom: "from-blue-500",
      gradientTo: "to-cyan-500",
    },
    ideal: {
      label: "Best Sip",
      bgColor: "from-cyan-950/50 to-teal-900/30",
      textColor: "text-cyan-400",
      message: "今です！最適な温度",
      advice: "最も美味しく、体に吸収されやすい状態です",
      ringColor: "ring-cyan-500/20",
      gradientFrom: "from-cyan-500",
      gradientTo: "to-teal-500",
    },
    warm: {
      label: "Lukewarm",
      bgColor: "from-orange-950/50 to-amber-900/30",
      textColor: "text-orange-400",
      message: "ぬるくなっています",
      advice: "氷を補充してリフレッシュしましょう",
      ringColor: "ring-orange-500/20",
      gradientFrom: "from-orange-500",
      gradientTo: "to-amber-500",
    },
  }

  const config = stateConfig[state]

  return (
    <Card
      className={cn(
        "relative overflow-hidden p-5 mb-4 border shadow-2xl shadow-black/50",
        "bg-gradient-to-br",
        config.bgColor,
        "ring-1",
        config.ringColor,
      )}
    >
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className={cn("text-base font-bold mb-1", config.textColor)}>{config.label}</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">ステータス</p>
          </div>
          <button className="rounded-xl bg-secondary/50 p-2 backdrop-blur-sm hover:bg-secondary/70 transition-all shadow-sm border border-border/50">
            <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>

        <div className="mb-4 text-center">
          <div className="mb-2 flex items-baseline justify-center gap-1">
            <span className="text-6xl font-bold tracking-tighter">{temperature}</span>
            <span className="text-2xl font-medium text-muted-foreground">°C</span>
          </div>
          <p className={cn("text-base font-semibold mb-1", config.textColor)}>{config.message}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{config.advice}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground font-medium">氷の残量</span>
            <span className="font-bold tabular-nums">{icePercentage}%</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-secondary/50 backdrop-blur-sm border border-border/30">
            <div
              className={cn(
                "h-full rounded-full transition-all duration-700 ease-out",
                "bg-gradient-to-r shadow-sm",
                config.gradientFrom,
                config.gradientTo,
              )}
              style={{ width: `${icePercentage}%` }}
            />
          </div>
        </div>
      </div>
    </Card>
  )
}
