import "../styling/Header.css";

function Header() {
  return (
    <header>
      <h1>linkle.to</h1>
      <h2>
        bringing <span className="bold">order</span> to the{" "}
        <span className="bold">chaos</span>
      </h2>
      {/* <h2>internet playlists</h2> */}
    </header>
  );
}

export default Header;
