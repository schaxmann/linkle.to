import { useNavigate } from "react-router-dom";
import "../styling/Splash.css";

function Splash() {
  const navigate = useNavigate();
  return (
    <main>
      <h3>what is linkle.to?</h3>
      <p className="column">
        linkle.to is designed to help you create internet playlists. want to
        share a collection of resources, a learning pathway, or any other
        ordered sequence of websites with someone? you're in the right place.
      </p>
      <button
        onClick={() => {
          navigate("/list");
        }}
      >
        View LinkList
      </button>
    </main>
  );
}

export default Splash;
