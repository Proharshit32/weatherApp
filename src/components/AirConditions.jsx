const AIR_ITEMS = [
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>,
    label: "Real Feel",
    key: (cc) => `${Math.round(cc.feelslike)}°C`,
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>,
    label: "Wind",
    key: (cc) => `${cc.windspeed} km/h`,
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>,
    label: "Chance of Rain",
    key: (cc) => `${cc.precipprob}%`,
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>,
    label: "UV Index",
    key: (cc) => cc.uvindex,
  },
];

const AirConditions = ({ data, visible }) => {
  const cc = data?.currentConditions;

  return (
    <div className={`card air-card ${visible ? "slide-up" : ""}`} style={{ "--delay": "0.14s" }}>
      <div className="air-header">
        <p className="card-label">AIR CONDITIONS</p>
        {/* <button className="see-more-btn">See more</button> */}
      </div>
      <div className="air-grid">
        {AIR_ITEMS.map(({ svg, label, key }, i) => (
          <div key={i} className="air-item" style={{ "--i": i }}>
            <span className="air-svg">{svg}</span>
            <div>
              <p className="air-label">{label}</p>
              <p className="air-value">{cc ? key(cc) : "—"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirConditions;