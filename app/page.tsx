import { BottleStatus } from "@/components/bottle-status"
import { TemperatureTimeline } from "@/components/temperature-timeline"
import { ActionButtons } from "@/components/action-buttons"
import { HealthInsights } from "@/components/health-insights"
import { QuickStats } from "@/components/quick-stats"
import { BottomNav } from "@/components/bottom-nav"
import { WeatherAlert } from "@/components/weather-alert"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 pb-20">
      <div className="mx-auto w-full">
        {/* Header */}
        <header className="border-b border-white/10 bg-gradient-to-b from-blue-950/50 to-transparent p-4">
          <div className="mb-2 flex items-center justify-center gap-2">
            <div className="h-8 w-8 rounded-xl border border-blue-500/30 bg-blue-500/20 flex items-center justify-center shadow-lg shadow-blue-500/10">
              <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white">ColdKeep</h1>
          </div>
          <p className="text-center text-xs text-blue-200/70">AI水筒アシスタント</p>
        </header>

        <div className="p-3 space-y-4">
          {/* Main Status Card */}
          <BottleStatus />

          <WeatherAlert />

          {/* Quick Stats */}
          <QuickStats />

          {/* Temperature Timeline */}
          <TemperatureTimeline />

          {/* Action Buttons */}
          <ActionButtons />

          {/* Health Insights */}
          <HealthInsights />
        </div>
      </div>

      <BottomNav currentPage="home" />
    </main>
  )
}
