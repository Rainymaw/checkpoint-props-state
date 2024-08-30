import "./header.css";
function Header({ playerscore, cpuscore }) {
  return (
    <div className="header">
      <div>
        <p className="header-text">ROCK</p>
        <p className="header-text">PAPER</p>
        <p className="header-text">SCISSORS</p>
      </div>
      <div className="flex-container">
        <div className="score">
          <p className="computer">CPU</p>
          <p className="computer-score">{cpuscore}</p>
        </div>
        <div className="score">
          <p className="player">Player</p>
          <p className="player-score">{playerscore}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
