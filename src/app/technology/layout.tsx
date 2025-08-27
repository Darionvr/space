import React from 'react'
import style from '@/app/Technology.module.css'

const TechLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <main className={style.main}>
      <section>
        <p> <span>03 </span>   Space launch 101 </p>

        {children}
       
      </section>
    </main>
  )
}

export default TechLayout