"use client"

import { BottomNav } from "@/components/bottom-nav"

export default function StatsPage() {
  const weeklyData = [
    { day: "月", sips: 8, temp: 7, ideal: 85, volume: 1.2 },
    { day: "火", sips: 12, temp: 9, ideal: 92, volume: 1.8 },
    { day: "水", sips: 10, temp: 8, ideal: 88, volume: 1.5 },
    { day: "木", sips: 15, temp: 6, ideal: 95, volume: 2.2 },
    { day: "金", sips: 11, temp: 8, ideal: 90, volume: 1.6 },
    { day: "土", sips: 9, temp: 10, ideal: 80, volume: 1.3 },
    { day: "日", sips: 13, temp: 7, ideal: 94, volume: 1.9 },
  ]

  const totalSips = weeklyData.reduce((acc, day) => acc + day.sips, 0)
  const totalVolume = weeklyData.reduce((acc, day) => acc + day.volume, 0).toFixed(1)
  const avgTemp = (weeklyData.reduce((acc, day) => acc + day.temp, 0) / weeklyData.length).toFixed(1)
  const idealRate = (weeklyData.reduce((acc, day) => acc + day.ideal, 0) / weeklyData.length).toFixed(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 pb-20">
      <div className="mx-auto max-w-md">
        {/* Header */}
        <div className="border-b border-white/10 bg-gradient-to-b from-blue-950/50 to-transparent p-6">
          <h1 className="text-balance text-2xl font-bold text-white">統計</h1>
          <p className="mt-1 text-sm text-blue-200/70">あなたの水分補給データ</p>
        </div>

        <div className="space-y-4 p-4">
          {/* Summary Cards */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-xl text-center">
            <div className="text-4xl font-bold text-blue-300 mb-1">{totalVolume}L</div>
            <div className="text-sm text-blue-200/70">今週の摂取量</div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4 backdrop-blur-xl text-center">
              <div className="text-2xl font-bold text-white mb-1">{totalSips}</div>
              <div className="text-xs text-blue-200/70">今週の飲水</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4 backdrop-blur-xl text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">{avgTemp}°</div>
              <div className="text-xs text-blue-200/70">平均温度</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4 backdrop-blur-xl text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-1">{idealRate}%</div>
              <div className="text-xs text-blue-200/70">最適率</div>
            </div>
          </div>

          {/* Weekly Chart */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-xl">
            <h2 className="text-lg font-bold text-white mb-4">週間レポート</h2>
            <div className="space-y-4">
              {weeklyData.map((day, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="font-medium w-8 text-blue-200">{day.day}</span>
                    <div className="flex items-center gap-3 text-xs text-blue-200/70">
                      <span className="font-semibold text-blue-300">{day.volume}L</span>
                      <span>{day.sips}回</span>
                      <span>{day.temp}°C</span>
                      <span className="text-emerald-400">{day.ideal}%</span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500"
                        style={{ width: `${(day.volume / 2.5) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Intake */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-xl">
            <h2 className="text-lg font-bold text-white mb-4">今日の摂取量</h2>
            <div className="text-center mb-4">
              <div className="text-5xl font-bold text-blue-300 mb-2">1.9L</div>
              <div className="text-sm text-blue-200/70">目標 2.0L まで残り 0.1L</div>
            </div>
            <div className="relative h-3 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 transition-all duration-500"
                style={{ width: "95%" }}
              />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-2">
              <div className="text-center">
                <div className="text-xs text-blue-200/60 mb-1">朝</div>
                <div className="text-sm font-semibold text-white">0.5L</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-blue-200/60 mb-1">昼</div>
                <div className="text-sm font-semibold text-white">0.6L</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-blue-200/60 mb-1">夕</div>
                <div className="text-sm font-semibold text-white">0.5L</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-blue-200/60 mb-1">夜</div>
                <div className="text-sm font-semibold text-white">0.3L</div>
              </div>
            </div>
          </div>

          {/* Temperature History */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-xl">
            <h2 className="text-lg font-bold text-white mb-4">温度履歴</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-cyan-500/10 p-3 border border-cyan-500/20">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-white">最適温度</div>
                    <div className="text-xs text-blue-200/60">今日 14:32</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-cyan-400">8°C</div>
                  <div className="text-xs text-blue-200/60">氷45%</div>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-blue-500/10 p-3 border border-blue-500/20">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-white">冷たすぎ</div>
                    <div className="text-xs text-blue-200/60">今日 12:15</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-blue-400">4°C</div>
                  <div className="text-xs text-blue-200/60">氷78%</div>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-orange-500/10 p-3 border border-orange-500/20">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <svg className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-white">ぬるい</div>
                    <div className="text-xs text-blue-200/60">昨日 18:45</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-orange-400">18°C</div>
                  <div className="text-xs text-blue-200/60">氷12%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Health Score */}
          <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-white">健康スコア</h2>
              <div className="h-12 w-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-400">{idealRate}</span>
              </div>
            </div>
            <p className="text-sm text-blue-200/70 mb-3">素晴らしい習慣です。最適温度での水分補給を継続しています。</p>
            <div className="flex items-center gap-2">
              <div className="h-2 flex-1 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-500"
                  style={{ width: `${idealRate}%` }}
                />
              </div>
              <span className="text-xs font-medium text-emerald-400">{idealRate}%</span>
            </div>
          </div>
        </div>
      </div>

      <BottomNav currentPage="stats" />
    </div>
  )
}
