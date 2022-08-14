import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <Post author="Milena" content="Teste" />
      <Post author="Milena" content="Teste" />
      <Post author="Milena" content="Teste" />
    </>
  );
}

export default App;
