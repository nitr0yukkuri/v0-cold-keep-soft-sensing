"use client"

import { BottomNav } from "@/components/bottom-nav"
import { Button } from "@/components/ui/button"

export default function HistoryPage() {
  const historyData = [
    {
      date: "2024年1月15日",
      entries: [
        { time: "14:30", temp: 8, status: "best", volume: 250, ice: "良好" },
        { time: "12:15", temp: 6, status: "cold", volume: 300, ice: "多め" },
        { time: "09:00", temp: 12, status: "best", volume: 200, ice: "適量" },
      ],
    },
    {
      date: "2024年1月14日",
      entries: [
        { time: "16:45", temp: 15, status: "warm", volume: 180, ice: "少なめ" },
        { time: "13:20", temp: 9, status: "best", volume: 250, ice: "良好" },
        { time: "10:30", temp: 7, status: "cold", volume: 220, ice: "多め" },
        { time: "08:00", temp: 10, status: "best", volume: 300, ice: "適量" },
      ],
    },
    {
      date: "2024年1月13日",
      entries: [
        { time: "15:00", temp: 11, status: "best", volume: 270, ice: "良好" },
        { time: "11:45", temp: 8, status: "best", volume: 230, ice: "適量" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 pb-20">
      <div className="mx-auto max-w-md">
        {/* Header */}
        <div className="border-b border-white/10 bg-gradient-to-b from-blue-950/50 to-transparent p-6">
          <h1 className="text-balance text-2xl font-bold text-white">測定履歴</h1>
          <p className="mt-1 text-sm text-blue-200/70">過去の測定記録と飲水ログ</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 p-4">
          <Button variant="default" size="sm" className="flex-1">
            すべて
          </Button>
          <Button variant="outline" size="sm" className="flex-1 border-white/20 bg-white/5">
            今週
          </Button>
          <Button variant="outline" size="sm" className="flex-1 border-white/20 bg-white/5">
            今月
          </Button>
        </div>

        {/* History List */}
        <div className="space-y-6 p-4">
          {historyData.map((day, dayIndex) => (
            <div key={dayIndex} className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                <span className="text-xs font-medium text-blue-300/80">{day.date}</span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
              </div>

              <div className="space-y-2">
                {day.entries.map((entry, entryIndex) => (
                  <div
                    key={entryIndex}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4 backdrop-blur-xl transition-all hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    {/* Status Indicator */}
                    <div
                      className={`absolute left-0 top-0 h-full w-1 ${
                        entry.status === "best"
                          ? "bg-gradient-to-b from-emerald-400 to-emerald-600"
                          : entry.status === "cold"
                            ? "bg-gradient-to-b from-blue-400 to-blue-600"
                            : "bg-gradient-to-b from-amber-400 to-amber-600"
                      }`}
                    />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{entry.time}</div>
                          <div className="text-xs text-blue-200/60">時刻</div>
                        </div>

                        <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                        <div className="space-y-1">
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl font-bold text-blue-300">{entry.temp}</span>
                            <span className="text-xs text-blue-200/60">°C</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div
                              className={`h-1.5 w-1.5 rounded-full ${
                                entry.status === "best"
                                  ? "bg-emerald-400"
                                  : entry.status === "cold"
                                    ? "bg-blue-400"
                                    : "bg-amber-400"
                              }`}
                            />
                            <span className="text-xs text-blue-200/70">
                              {entry.status === "best" ? "最適" : entry.status === "cold" ? "冷たい" : "ぬるい"}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-lg font-bold text-white">{entry.volume}ml</div>
                        <div className="text-xs text-blue-200/60">氷: {entry.ice}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="p-4">
          <Button variant="outline" className="w-full border-white/20 bg-white/5 hover:bg-white/10">
            さらに読み込む
          </Button>
        </div>
      </div>

      <BottomNav currentPage="history" />
    </div>
  )
}
