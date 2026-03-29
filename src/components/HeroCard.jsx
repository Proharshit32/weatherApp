import { CloudIcon, SnowIcon } from "./WeatherIcons";

const SunOrb = () => (
  <div className="orb-wrap">
    <div className="sun-glow" />
    <div className="sun-orb"><div className="sun-inner" /></div>
  </div>
);

const RainOrb = () => (
  <div className="orb-wrap rain-wrap">
    <div className="cloud-hero"><CloudIcon /></div>
    <div className="rain-drops">
      {[0,1,2,3,4].map(i => <span key={i} className="drop" style={{ "--i": i }} />)}
    </div>
  </div>
);

const ThunderOrb = () => (
  <div className="orb-wrap">
    <div className="cloud-hero"><CloudIcon /></div>
    <svg className="bolt" viewBox="0 0 24 24">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="#FDB813" />
    </svg>
  </div>
);

const HeroOrb = ({ type }) => {
  if (type === "sunny")  return <SunOrb />;
  if (type === "rain")   return <RainOrb />;
  if (type === "thunder") return <ThunderOrb />;
  if (type === "snow")   return <div className="orb-wrap"><div className="cloud-hero"><SnowIcon /></div></div>;
  return <div className="orb-wrap"><div className="cloud-hero"><CloudIcon /></div></div>;
};

export const EmptyState = () => (
  <div className="empty-state">
    <div className="empty-illustration">
      <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="55" cy="38" r="22" fill="#FDB813" opacity="0.9" />
        <g stroke="#FDB813" strokeWidth="2.5" strokeLinecap="round" opacity="0.5">
          <line x1="55" y1="8" x2="55" y2="13" /><line x1="55" y1="63" x2="55" y2="68" />
          <line x1="25" y1="38" x2="30" y2="38" /><line x1="80" y1="38" x2="85" y2="38" />
          <line x1="34.4" y1="17.4" x2="37.9" y2="20.9" /><line x1="72.1" y1="55.1" x2="75.6" y2="58.6" />
          <line x1="75.6" y1="17.4" x2="72.1" y2="20.9" /><line x1="37.9" y1="55.1" x2="34.4" y2="58.6" />
        </g>
        <path d="M138 62a13 13 0 0 0-13-13h-1.7A17 17 0 1 0 106 68H138a7 7 0 0 0 0-14z" fill="#1a2640" />
        <path d="M112 56a10 10 0 0 0-10-10h-1.2A13 13 0 1 0 88 59.5H112a6 6 0 0 0 0-12z" fill="#243450" />
        <g stroke="#4f9cf9" strokeWidth="2" strokeLinecap="round" opacity="0.6">
          <line x1="94" y1="72" x2="91" y2="80" /><line x1="104" y1="72" x2="101" y2="80" /><line x1="114" y1="72" x2="111" y2="80" />
        </g>
      </svg>
    </div>
    <h3 className="empty-title">No city selected</h3>
    <p className="empty-sub">Search a city above to see current weather, hourly forecast, and air conditions.</p>
  </div>
);

const HeroCard = ({ data, orbType, visible }) => {
  if (!data) return <EmptyState />;
  const { address, currentConditions: cc } = data;

  return (
    <div className={`hero-card orb-${orbType} ${visible ? "fade-in" : ""}`}>
      <div className="hero-bg-blur" />
      <div className="hero-left">
        <div className="city-row">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
          </svg>
          <h1 className="city-name">{address}</h1>
        </div>
        <p className="condition-label">{cc.conditions}</p>
        <p className="rain-chance">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          </svg>
          Chance of rain: <strong>{cc.precipprob}%</strong>
        </p>
        <div className="big-temp">{Math.round(cc.temp)}<span className="deg">°C</span></div>
      </div>
      <div className="hero-right">
        <HeroOrb type={orbType} />
      </div>
    </div>
  );
};

export default HeroCard;