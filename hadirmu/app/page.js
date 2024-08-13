'use client'
import { useRef, useEffect } from 'react';
import styles from './page.module.css'

export default function Home() {

  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = .8;
  const targetMaskSize = 30;
  const easing = 0.15;
  let easedScrollProgress = 0;

  useEffect( () => {
    requestAnimationFrame(animate)
  }, [])

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    stickyMask.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";
    requestAnimationFrame(animate)
  }

  const getScrollProgress = () => {
    const scrollProgress = stickyMask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight)
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress
  }

  return (
    <main className={styles.main}>
      <div style={{padding: '3rem', paddingBottom: '0', textAlign: 'center'}}>
        <h1 style={{fontSize: '2rem'}}>Mengabadikan dan Menghubungkan Momen Berharga</h1>
        <p>Platform kami hadir untuk mengabadikan momen berharga Anda dan menghubungkannya dengan orang-orang terdekat. Dengan sentuhan hangat dan personal, setiap undangan menjadi jembatan yang mempererat ikatan dan menyampaikan kebahagiaan kepada mereka yang berarti.</p>
      </div>
      <div ref={container} className={styles.container}>
        <div ref={stickyMask} className={styles.stickyMask}>
          <video autoPlay muted loop>
            <source src="/medias/nature.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    </main>
  )
}
