export function QuickStats() {
  const stats = [
    {
      label: "本日の摂取量",
      value: "1.2L",
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/20",
    },
    {
      label: "目標まで",
      value: "0.8L",
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
    },
    {
      label: "次の補給",
      value: "45分後",
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/20",
    },
  ]

  return (
    <div className="grid grid-cols-3 gap-2">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-2.5 backdrop-blur-xl"
        >
          <div className={`mb-1.5 inline-flex rounded-lg p-1.5 border ${stat.bgColor} border-white/10`}>
            <div className={stat.color}>{stat.icon}</div>
          </div>
          <p className="text-xs text-blue-200/70 mb-0.5">{stat.label}</p>
          <p className="text-base font-bold leading-none text-white">{stat.value}</p>
        </div>
      ))}
    </div>
  )
}
