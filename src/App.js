import Character from "./components/Character";
import Comments from "./components/Comments";

function App() {
  return (
    <div className="App">
      <h1 style={{color: "#28c6fb"}}>Which girl do you think hot?!</h1>
      <section style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: "0 50px",
        }}>
      </section>

      <img src={require("./assets/image/TokinoSora.png").default} alt='hoge' />
      <h2>VS</h2>
      <section>
        <Comments />
      </section>
    </div>
  );
}

export default App;
