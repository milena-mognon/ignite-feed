import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Milena Mognon" content="Teste de conteudo" />
          <Post author="Milena Mognon" content="Teste de conteudo" />
          <Post author="Milena Mognon" content="Teste de conteudo" />
        </main>
      </div>
    </>
  );
}

export default App;
