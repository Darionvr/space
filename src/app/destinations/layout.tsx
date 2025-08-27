import React from 'react'
import styles from '../Destinations.module.css'

const LayoutDestinations = ({ children }: { children: React.ReactNode }) => {
 
  return (
    <main className={styles.main}>
      <section>
        <p> <span>01  </span> Pick your destination </p>

        {children}
       
      </section>
    </main>
  )
}

export default LayoutDestinations