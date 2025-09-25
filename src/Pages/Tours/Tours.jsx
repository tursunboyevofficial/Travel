import React from 'react'
import s from "./Tours.module.scss"
import DetailedTourPackages from './DetailedTourPackages/DetailedTourPackages'

function Tours() {
  return (
    <>
      <div className={s.heroSection}> 
        {/* Rasmdagi fon va overlay bu div ichida bo'ladi */}
        <div className={s.contentBox}>
          <h1 className={s.title}>Our Tour Packages</h1>
          <p className={s.tagline}>Carefully crafted itineraries showcasing the best of Uzbekistan's historical treasures and cultural experiences</p>
        </div>
      </div>
      {/* Pastki qismda mavjud komponentingiz */}
      <DetailedTourPackages/>
    </>
  )
}

export default Tours