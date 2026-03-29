import { formatDate } from "../utils/weather";

const SearchBar = ({ city, setCity, onSearch, loading, time }) => {
  const handleKey = (e) => e.key === "Enter" && onSearch();

  return (
    <div className="top-row">
      <div className="search-bar">
        <svg className="search-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Search for cities..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKey}
        />
        {loading ? (
          <span className="spinner" />
        ) : city.trim() && (
          <button className="search-btn" onClick={onSearch} aria-label="Search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}
      </div>

      <div className="date-chip">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <span>{formatDate()}</span>
        <span className="date-dot">·</span>
        <span className="live-time">{time}</span>
      </div>
    </div>
  );
};

export default SearchBar;