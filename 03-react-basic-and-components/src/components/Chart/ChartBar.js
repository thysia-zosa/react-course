import "./ChartBar.css";

const ChartBar = ({ label, fill }) => {
  const heightStyle = { height: `${fill}%` };

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={heightStyle}></div>
      </div>
      <p className="chart-bar__label">{label}</p>
    </div>
  );
};

export default ChartBar;
