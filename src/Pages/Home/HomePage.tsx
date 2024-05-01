import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navigation/Navbar";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.mainContent}>
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
