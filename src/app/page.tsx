import Image from "next/image";
import styles from "@/app/Home.module.css"
import Link from "next/link";


export default function Home() {

  return (
    
      <main className={styles.main} >
        <div >
          <p>So, you want to travel to</p>
          <h1> Space</h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!</p>
        </div>

        <Link href="/destinations"><button> <h2>Explore</h2> </button></Link>
      </main>

    
  );
}
