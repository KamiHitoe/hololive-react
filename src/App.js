import Character from "./components/Character";
import Comments from "./components/Comments";

import coco from './assets/image/react-sample01.png';
import gura from './assets/image/react-sample02.png';

const characterList = [
  {name: "Coco Kiryu", path: coco},
  {name: "Gura Gawr", path: gura},
]

function App() {
  return (
    <div className="App">
      <h1 style={{color: "purple"}}>Which girl do you think hot?!</h1>
      <section style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: "0 50px",
        }}>
        {
          characterList.map((e,i) => 
          <Character key={i} name={e.name} path={e.path} />
        )}
      </section>
      <section>
        <Comments />
      </section>
    </div>
  );
}

export default App;
