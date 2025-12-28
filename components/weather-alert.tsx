"use client"

export function WeatherAlert() {
  // ダミーの天気データ
  const temperature = 32
  const isHot = temperature >= 28
  const isCold = temperature <= 10

  const getAlertMessage = () => {
    if (isHot) {
      return {
        title: "熱中症に注意",
        message: `外気温 ${temperature}°C - こまめな水分補給を心がけましょう`,
        color: "from-red-500/20 to-orange-500/20 border-red-500/30",
        icon: "🌡️",
      }
    } else if (isCold) {
      return {
        title: "寒冷注意",
        message: `外気温 ${temperature}°C - 温かい飲み物で体を温めましょう`,
        color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
        icon: "❄️",
      }
    } else {
      return {
        title: "快適な気温",
        message: `外気温 ${temperature}°C - 適切な水分補給を継続しましょう`,
        color: "from-green-500/20 to-emerald-500/20 border-green-500/30",
        icon: "✓",
      }
    }
  }

  const alert = getAlertMessage()

  return (
    <div className={`rounded-2xl border bg-gradient-to-br backdrop-blur-sm p-4 ${alert.color}`}>
      <div className="flex items-start gap-3">
        <div className="text-2xl">{alert.icon}</div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-white mb-1">{alert.title}</h3>
          <p className="text-xs text-white/70 leading-relaxed">{alert.message}</p>
        </div>
      </div>
    </div>
  )
}
