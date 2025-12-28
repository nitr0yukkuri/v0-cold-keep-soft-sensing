"use client"

import { BottomNav } from "@/components/bottom-nav"

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 pb-20">
      <div className="mx-auto max-w-md">
        {/* Header */}
        <div className="border-b border-white/10 bg-gradient-to-b from-blue-950/50 to-transparent p-6">
          <h1 className="text-balance text-2xl font-bold text-white">AI分析</h1>
          <p className="mt-1 text-sm text-blue-200/70">パーソナライズされた健康インサイト</p>
        </div>

        {/* AI Score Card */}
        <div className="p-4">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 backdrop-blur-xl">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-purple-400/20 blur-3xl" />

            <div className="relative space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-blue-200/80">今週の健康スコア</div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">89</span>
                    <span className="text-2xl text-blue-300">/100</span>
                  </div>
                </div>
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-emerald-400/50 bg-emerald-400/10">
                  <svg className="h-10 w-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-emerald-300">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                <span>先週より+7ポイント改善</span>
              </div>
            </div>
          </div>
        </div>

        {/* Insights List */}
        <div className="space-y-3 p-4">
          {/* Positive Insight */}
          <div className="group overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 p-4 backdrop-blur-xl">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1 space-y-1">
                <div className="font-semibold text-white">最適温度での飲水が増加</div>
                <div className="text-sm leading-relaxed text-blue-200/70">
                  今週は92%の水分補給が最適温度帯（7-15°C）で行われています。腸への負担が少なく理想的です。
                </div>
                <div className="text-xs text-emerald-400">+12% vs 先週</div>
              </div>
            </div>
          </div>

          {/* Warning Insight */}
          <div className="group overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-amber-500/5 p-4 backdrop-blur-xl">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500/20">
                <svg className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div className="flex-1 space-y-1">
                <div className="font-semibold text-white">午後の水分補給が不足気味</div>
                <div className="text-sm leading-relaxed text-blue-200/70">
                  15時〜18時の時間帯の水分摂取量が目標の70%に留まっています。夕方の水分補給を意識しましょう。
                </div>
                <div className="text-xs text-amber-400">推奨: +200ml/日</div>
              </div>
            </div>
          </div>

          {/* Info Insight */}
          <div className="group overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-4 backdrop-blur-xl">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20">
                <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1 space-y-1">
                <div className="font-semibold text-white">氷の管理が上手です</div>
                <div className="text-sm leading-relaxed text-blue-200/70">
                  平均して4時間以上、理想的な温度を維持できています。朝の氷の量が最適です。
                </div>
                <div className="text-xs text-blue-400">継続推奨</div>
              </div>
            </div>
          </div>

          {/* Recommendation */}
          <div className="group overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-purple-500/5 p-4 backdrop-blur-xl">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-500/20">
                <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div className="flex-1 space-y-1">
                <div className="font-semibold text-white">IBSモードのパーソナライズ提案</div>
                <div className="text-sm leading-relaxed text-blue-200/70">
                  あなたの飲水パターンから、朝は9°C、午後は11°Cが最適と分析されました。設定を更新しますか？
                </div>
                <button className="mt-2 text-xs font-medium text-purple-400 hover:text-purple-300">
                  設定を適用する →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Patterns */}
        <div className="p-4">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-xl">
            <h2 className="mb-4 text-lg font-bold text-white">週間パターン分析</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-200/80">平均測定回数</span>
                  <span className="font-bold text-white">11回/日</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-200/80">最適温度維持率</span>
                  <span className="font-bold text-white">87%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-emerald-500 to-green-500" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-200/80">水分補給達成率</span>
                  <span className="font-bold text-white">94%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav currentPage="insights" />
    </div>
  )
}
