import React from 'react'
import style from '@/app/Crew.module.css'

const LayoutCrew = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={style.main}>
      <section>
        <p> <span>02</span>Meet your crew</p>

        {children}
       
      </section>
    </main>
  )
}

export default LayoutCrew