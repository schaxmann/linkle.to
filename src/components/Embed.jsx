import "../styling/Splash.css";

function Embed() {
  return (
    <div className="embed">
      <embed
        src="https://standforukraine.com/"
        width={1000}
        height={500}
      ></embed>
      {/* <embed src="https://riseofukraine.com/" width={1000} height={500}></embed>
      <embed
        src="https://supportukrainenow.org/"
        width={1000}
        height={500}
      ></embed> */}
    </div>
  );
}

export default Embed;
