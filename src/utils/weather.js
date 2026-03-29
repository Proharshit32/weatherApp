export const getOrbType = (conditions = "", precip = 0) => {
  const c = conditions.toLowerCase();
  if (c.includes("thunder") || c.includes("storm")) return "thunder";
  if (precip > 0 || c.includes("rain") || c.includes("shower")) return "rain";
  if (c.includes("snow")) return "snow";
  if (c.includes("overcast")) return "overcast";
  if (c.includes("cloud") || c.includes("partly")) return "cloudy";
  return "sunny";
};

export const dayLabel = (dateStr, i) => {
  if (i === 0) return "Today";
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", { weekday: "short" });
};

export const formatTime = (time) => {
  const [h, m] = time.split(":");
  const d = new Date();
  d.setHours(+h, +m);
  return d.toLocaleTimeString("en-US", { hour: "numeric", hour12: true });
};

export const formatDate = () =>
  new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });

export const formatClock = () =>
  new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });