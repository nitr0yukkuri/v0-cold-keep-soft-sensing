"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ActionButtons() {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 backdrop-blur-xl">
      <h3 className="mb-4 text-sm font-semibold text-white">アクション</h3>

      <div className="space-y-3">
        {/* Shake to Calibrate */}
        <Link href="/shake" className="block">
          <Button
            className="w-full h-auto py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0"
            size="lg"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white/20 p-2">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-semibold">シェイクして再測定</p>
                  <p className="text-xs opacity-90">水や氷を補充した場合</p>
                </div>
              </div>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Button>
        </Link>
      </div>
    </div>
  )
}
