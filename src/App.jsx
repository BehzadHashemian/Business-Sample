import React from 'react'
import styles from './style'
const App = () => {
  return (
    <>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        navbar
      </div>
    </div>
    
    <div className={`bg-primary ${styles.flexStart}`} >
        <div className={`${styles.boxWidth}`} >
          main
        </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`} >
        <div className={`${styles.boxWidth}`} >
          Other
        </div>
    </div>


      </>
)
}

export default App