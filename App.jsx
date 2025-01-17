import styles from "./App.module.css";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
