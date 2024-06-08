import Image from "next/image";
import styles from "./page.module.css";
import LandingPage from "./landingPage";

export default function Home() {
  return (
    <main style={{background:'white'}}>
      <LandingPage />
    </main>
  );
}
