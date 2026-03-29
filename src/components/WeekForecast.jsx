import { getWeatherIcon } from "./WeatherIcons";
import { dayLabel } from "../utils/weather";

const WeekForecast = ({ data, visible }) => (
  <aside className={`right-panel ${visible ? "slide-up" : ""}`} style={{ "--delay": "0.18s" }}>
    <p className="card-label">7-DAY FORECAST</p>
    <div className="day-list">
      {data
        ? data.days.slice(0, 7).map((day, i) => (
            <div key={i} className="day-row" style={{ "--i": i }}>
              <span className="day-name">{dayLabel(day.datetime, i)}</span>
              <span className="day-icon-wrap">{getWeatherIcon(day.conditions, day.precip)}</span>
              <span className="day-cond">{day.conditions}</span>
              <span className="day-temps">
                <strong>{Math.round(day.tempmax)}°</strong>
                <span className="min-temp"> / {Math.round(day.tempmin)}°</span>
              </span>
            </div>
          ))
        : Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="day-row skeleton">
              <span className="skel-line short" />
              <span className="skel-circle sm" />
              <span className="skel-line" />
              <span className="skel-line short" />
            </div>
          ))
      }
    </div>
  </aside>
);

export default WeekForecast;