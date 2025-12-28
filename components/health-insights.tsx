export function HealthInsights() {
  const insights = [
    {
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "お腹に優しい温度を維持中",
      description: "過敏性腸症候群の方に推奨される8〜12℃を保っています",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/20",
      borderColor: "border-cyan-500/30",
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "今日は順調です",
      description: "推奨される水分摂取ペースを60%達成しています",
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/20",
      borderColor: "border-emerald-500/30",
    },
  ]

  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 backdrop-blur-xl">
      <h3 className="mb-4 text-sm font-semibold text-white">健康インサイト</h3>

      <div className="space-y-3">
        {insights.map((insight, index) => (
          <div key={index} className={`flex gap-3 rounded-lg bg-white/5 p-3 border ${insight.borderColor}`}>
            <div className={`flex-shrink-0 rounded-lg p-2 border ${insight.bgColor} border-white/10`}>
              <div className={insight.color}>{insight.icon}</div>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold mb-1 text-pretty text-white">{insight.title}</p>
              <p className="text-xs text-blue-200/70 text-pretty">{insight.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
