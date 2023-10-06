import styles from "./modulestyles.module.css";

const ModuleStyles = () => {
  return (
    <>
    <button className={styles.btn}>Berubah</button>
    <button className={styles["btn-success"]}>Tetap</button>
    <button className={styles["btn-sm"]}>Tetap</button>
    </>
  );
}

export default ModuleStyles;