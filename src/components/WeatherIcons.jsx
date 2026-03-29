const W = ({ children }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="wi">
    {children}
  </svg>
);

export const SunIcon = () => (
  <W>
    <circle cx="32" cy="32" r="14" fill="#FDB813" />
    <g stroke="#FDB813" strokeWidth="3.5" strokeLinecap="round">
      {[[32,6,32,12],[32,52,32,58],[6,32,12,32],[52,32,58,32],
        [14.1,14.1,18.3,18.3],[45.7,45.7,49.9,49.9],[49.9,14.1,45.7,18.3],[18.3,45.7,14.1,49.9]]
        .map(([x1,y1,x2,y2], i) => <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />)}
    </g>
  </W>
);

export const CloudIcon = () => (
  <W><path d="M50 38a10 10 0 0 0-10-10h-1.5a14 14 0 1 0-14 16H50a6 6 0 0 0 0-12z" fill="#90a4ae" /></W>
);

export const PartlyCloudyIcon = () => (
  <W>
    <circle cx="22" cy="22" r="10" fill="#FDB813" />
    <g stroke="#FDB813" strokeWidth="2.5" strokeLinecap="round">
      {[[22,6,22,10],[22,34,22,38],[6,22,10,22],[34,22,38,22],
        [10.9,10.9,13.8,13.8],[30.2,30.2,33.1,33.1],[33.1,10.9,30.2,13.8],[13.8,30.2,10.9,33.1]]
        .map(([x1,y1,x2,y2], i) => <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />)}
    </g>
    <path d="M54 44a9 9 0 0 0-9-9h-1.3a12.5 12.5 0 1 0-12.5 14.3H54a5.7 5.7 0 0 0 0-11.4z" fill="#90a4ae" />
  </W>
);

export const RainIcon = () => (
  <W>
    <path d="M50 34a10 10 0 0 0-10-10h-1.5a14 14 0 1 0-14 16H50a6 6 0 0 0 0-12z" fill="#78909c" />
    <g stroke="#4f9cf9" strokeWidth="3" strokeLinecap="round">
      <line x1="22" y1="48" x2="18" y2="56" /><line x1="32" y1="48" x2="28" y2="56" /><line x1="42" y1="48" x2="38" y2="56" />
    </g>
  </W>
);

export const ThunderIcon = () => (
  <W>
    <path d="M50 34a10 10 0 0 0-10-10h-1.5a14 14 0 1 0-14 16H50a6 6 0 0 0 0-12z" fill="#546e7a" />
    <polyline points="36,40 28,52 34,52 26,64" stroke="#FDB813" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </W>
);

export const SnowIcon = () => (
  <W>
    <path d="M50 34a10 10 0 0 0-10-10h-1.5a14 14 0 1 0-14 16H50a6 6 0 0 0 0-12z" fill="#90a4ae" />
    <g stroke="#b3e5fc" strokeWidth="2.5" strokeLinecap="round">
      {[[22,48,22,58],[32,48,32,58],[42,48,42,58],[19,51,25,55],[19,55,25,51],[29,51,35,55],[29,55,35,51],[39,51,45,55],[39,55,45,51]]
        .map(([x1,y1,x2,y2], i) => <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />)}
    </g>
  </W>
);

export const FogIcon = () => (
  <W>
    <g stroke="#90a4ae" strokeWidth="3.5" strokeLinecap="round">
      <line x1="10" y1="24" x2="54" y2="24" /><line x1="10" y1="32" x2="54" y2="32" />
      <line x1="16" y1="40" x2="48" y2="40" /><line x1="20" y1="48" x2="44" y2="48" />
    </g>
  </W>
);

export const getWeatherIcon = (conditions = "", precip = 0) => {
  const c = conditions.toLowerCase();
  if (c.includes("thunder") || c.includes("storm")) return <ThunderIcon />;
  if (precip > 0 || c.includes("rain") || c.includes("shower") || c.includes("drizzle")) return <RainIcon />;
  if (c.includes("snow") || c.includes("sleet") || c.includes("ice")) return <SnowIcon />;
  if (c.includes("fog") || c.includes("mist") || c.includes("haze")) return <FogIcon />;
  if (c.includes("overcast")) return <CloudIcon />;
  if (c.includes("cloud") || c.includes("partly")) return <PartlyCloudyIcon />;
  return <SunIcon />;
};