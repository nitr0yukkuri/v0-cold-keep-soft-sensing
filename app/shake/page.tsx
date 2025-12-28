"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ShakePage() {
  const [isShaking, setIsShaking] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleShake = () => {
    setIsShaking(true)
    setTimeout(() => {
      setIsShaking(false)
      setIsComplete(true)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <div className="container mx-auto max-w-lg p-6 pb-24">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Button>
          </Link>
          <h1 className="text-xl font-bold">シェイク測定</h1>
          <div className="w-10" />
        </div>

        {/* Shake Animation Area */}
        <div className="mb-8 flex flex-col items-center justify-center space-y-6">
          <div
            className={`relative flex h-64 w-64 items-center justify-center rounded-full border-4 ${
              isShaking
                ? "animate-pulse border-cyan-400 bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
                : isComplete
                  ? "border-green-400 bg-gradient-to-br from-green-500/20 to-emerald-500/20"
                  : "border-white/20 bg-gradient-to-br from-white/5 to-white/[0.02]"
            } backdrop-blur-xl transition-all duration-300`}
          >
            <div
              className={`transition-transform duration-300 ${isShaking ? "scale-110 animate-bounce" : "scale-100"}`}
            >
              {isComplete ? (
                <svg className="h-24 w-24 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="h-24 w-24 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )}
            </div>
          </div>

          {/* Status Text */}
          <div className="text-center">
            <p className="mb-2 text-2xl font-bold">
              {isShaking ? "測定中..." : isComplete ? "測定完了！" : "ボトルをシェイク"}
            </p>
            <p className="text-sm text-blue-200/70">
              {isShaking
                ? "音響データを解析しています"
                : isComplete
                  ? "温度と氷の状態を更新しました"
                  : "下のボタンを押してからボトルを振ってください"}
            </p>
          </div>
        </div>

        {/* Instructions */}
        {!isComplete && (
          <div className="mb-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 backdrop-blur-xl">
            <h3 className="mb-3 text-sm font-semibold">測定方法</h3>
            <ol className="space-y-2 text-sm text-blue-200/80">
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-xs text-cyan-400">
                  1
                </span>
                <span>ボトルのキャップがしっかり閉まっているか確認</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-xs text-cyan-400">
                  2
                </span>
                <span>「測定開始」ボタンをタップ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-xs text-cyan-400">
                  3
                </span>
                <span>ボトルを3〜5回しっかり振る</span>
              </li>
            </ol>
          </div>
        )}

        {/* Action Button */}
        <div className="space-y-3">
          {!isComplete ? (
            <Button
              className="h-14 w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-lg font-semibold text-white hover:from-blue-700 hover:to-cyan-700"
              onClick={handleShake}
              disabled={isShaking}
            >
              {isShaking ? "測定中..." : "測定開始"}
            </Button>
          ) : (
            <>
              <Link href="/" className="block">
                <Button className="h-14 w-full bg-gradient-to-r from-green-600 to-emerald-600 text-lg font-semibold text-white hover:from-green-700 hover:to-emerald-700">
                  ホームに戻る
                </Button>
              </Link>
              <Button
                variant="outline"
                className="h-14 w-full border-white/20 bg-white/5 text-white hover:bg-white/10"
                onClick={() => {
                  setIsComplete(false)
                  setIsShaking(false)
                }}
              >
                もう一度測定
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
