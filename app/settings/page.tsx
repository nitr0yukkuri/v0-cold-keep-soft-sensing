"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { BottomNav } from "@/components/bottom-nav"

export default function SettingsPage() {
  const [ibsMode, setIbsMode] = useState(true)
  const [notifications, setNotifications] = useState(true)
  const [autoCalibrate, setAutoCalibrate] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [coldThreshold, setColdThreshold] = useState(7)
  const [warmThreshold, setWarmThreshold] = useState(15)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 pb-20">
      <div className="mx-auto max-w-md">
        {/* Header */}
        <div className="border-b border-white/10 bg-gradient-to-b from-blue-950/50 to-transparent p-6">
          <h1 className="text-balance text-2xl font-bold text-white">設定</h1>
          <p className="mt-1 text-sm text-blue-200/70">パーソナライズとカスタマイズ</p>
        </div>

        <div className="space-y-6 p-4">
          {/* Profile Card */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-blue-500/20">
                U
              </div>
              <div>
                <div className="font-semibold text-lg text-white">ユーザー</div>
                <div className="text-sm text-blue-200/70">ColdKeep利用者</div>
              </div>
            </div>
            <button className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-sm font-medium text-white border border-white/10">
              プロフィールを編集
            </button>
          </div>

          {/* Health Settings */}
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              健康設定
            </h2>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl divide-y divide-white/10">
              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="font-medium mb-1 text-white">IBSモード</div>
                  <div className="text-xs text-blue-200/70">敏感な胃腸に配慮した温度管理</div>
                </div>
                <Switch checked={ibsMode} onCheckedChange={setIbsMode} />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-medium text-white">冷たすぎ警告温度</div>
                  <div className="text-base font-bold text-blue-400 bg-blue-500/20 px-3 py-1 rounded-lg border border-blue-500/30">
                    {coldThreshold}°C
                  </div>
                </div>
                <input
                  type="range"
                  min="4"
                  max="10"
                  value={coldThreshold}
                  onChange={(e) => setColdThreshold(Number(e.target.value))}
                  className="w-full h-2 rounded-full bg-white/10 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-blue-500/30 [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:scale-110"
                />
                <div className="flex justify-between text-xs text-blue-200/60 mt-2">
                  <span>4°C</span>
                  <span>10°C</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-medium text-white">ぬるい警告温度</div>
                  <div className="text-base font-bold text-orange-400 bg-orange-500/20 px-3 py-1 rounded-lg border border-orange-500/30">
                    {warmThreshold}°C
                  </div>
                </div>
                <input
                  type="range"
                  min="12"
                  max="20"
                  value={warmThreshold}
                  onChange={(e) => setWarmThreshold(Number(e.target.value))}
                  className="w-full h-2 rounded-full bg-white/10 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-orange-500 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-orange-500/30 [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:scale-110"
                />
                <div className="flex justify-between text-xs text-blue-200/60 mt-2">
                  <span>12°C</span>
                  <span>20°C</span>
                </div>
              </div>
            </div>
          </div>

          {/* App Settings */}
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              アプリ設定
            </h2>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl divide-y divide-white/10">
              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="font-medium mb-1 text-white">通知</div>
                  <div className="text-xs text-blue-200/70">温度変化を通知する</div>
                </div>
                <Switch checked={notifications} onCheckedChange={setNotifications} />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="font-medium mb-1 text-white">自動キャリブレーション</div>
                  <div className="text-xs text-blue-200/70">シェイク不要で自動測定</div>
                </div>
                <Switch checked={autoCalibrate} onCheckedChange={setAutoCalibrate} />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="font-medium mb-1 text-white">ダークモード</div>
                  <div className="text-xs text-blue-200/70">暗い配色を使用</div>
                </div>
                <Switch checked={darkMode} onCheckedChange={setDarkMode} />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-sm font-medium text-white border border-white/10">
              キャリブレーション履歴
            </button>
            <button className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-sm font-medium text-white border border-white/10">
              データをエクスポート
            </button>
            <button className="w-full py-3.5 rounded-xl bg-red-500/20 hover:bg-red-500/30 transition-all text-sm font-medium text-red-400 border border-red-500/30">
              アプリをリセット
            </button>
          </div>

          <div className="mt-8 text-center text-xs text-blue-200/40">ColdKeep v1.0.0</div>
        </div>
      </div>

      <BottomNav currentPage="settings" />
    </div>
  )
}
