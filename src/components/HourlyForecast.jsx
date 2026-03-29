import { getWeatherIcon } from "./WeatherIcons";
import { formatTime } from "../utils/weather";

const Skeleton = () =>
  Array.from({ length: 6 }).map((_, i) => (
    <div key={i} className="hour-item skeleton">
      <span className="skel-line short" />
      <span className="skel-circle" />
      <span className="skel-line short" />
    </div>
  ));

const HourlyForecast = ({ data, visible }) => {
  const hours = data
    ? data.days[0].hours.filter(h => [6,9,12,15,18,21].includes(parseInt(h.datetime))).slice(0, 6)
    : [];

  return (
    <div className={`card forecast-card ${visible ? "slide-up" : ""}`} style={{ "--delay": "0.08s" }}>
      <p className="card-label">TODAY'S FORECAST</p>
      <div className="hourly-row">
        {data
          ? hours.map((h, i) => (
              <div key={i} className="hour-item" style={{ "--i": i }}>
                <span className="hour-time">{formatTime(h.datetime)}</span>
                <span className="hour-icon-wrap">{getWeatherIcon(h.conditions, h.precip)}</span>
                <span className="hour-temp">{Math.round(h.temp)}°</span>
              </div>
            ))
          : <Skeleton />
        }
      </div>
    </div>
  );
};

export default HourlyForecast;