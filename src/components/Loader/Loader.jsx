import React, { useEffect, useState } from 'react'
import * as motion from 'motion/react-client'

const overlayStyle = {
  position: 'fixed',
  inset: 0,
  backgroundColor: '#030631',
  display: 'grid',
  placeItems: 'center',
  zIndex: 9999
}

const circleStyle = {
  width: 120,
  height: 120,
  background: 'linear-gradient(135deg, #7929bb, #5078b8)',
  borderRadius: '50%'
}

const Loader = ({ onDone }) => {
  const [phase, setPhase] = useState('intro') // intro -> reveal

  // trigger overlay fade after circle reveal begins
  const [overlayFade, setOverlayFade] = useState(false)

  // when overlay fade completes, unmount via onDone
  const handleOverlayComplete = () => {
    if (onDone) onDone()
  }

  useEffect(() => {
    if (phase === 'reveal') {
      // start cross-fade of overlay shortly after reveal begins for smoother feel
      const id = setTimeout(() => setOverlayFade(true), 100)
      return () => clearTimeout(id)
    }
  }, [phase])

  return (
    <motion.div
      style={overlayStyle}
      initial={{ opacity: 1 }}
      animate={overlayFade ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: overlayFade ? 0.8 : 0 }}
      onAnimationComplete={() => {
        if (overlayFade) handleOverlayComplete()
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <motion.div
          key={phase}
          initial={phase === 'intro' ? { scale: 1, opacity: 1, borderRadius: '5%' } : { scale: 1, opacity: 1, borderRadius: '50%' }}
          animate={
            phase === 'intro'
              ? {
                  scale: [1, 1.25, 1.6, 1.25, 1],
                  rotate: [0, 15, 180, 180, 0],
                  borderRadius: ['10%', '10%', '50%', '50%', '10%'],
                  opacity: 1
                }
              : {
                  scale: 30,
                  opacity: 0 // circle becomes transparent while site reveals
                }
          }
          transition={
            phase === 'intro'
              ? {
                  duration: 2.4,
                  ease: [0.65, 0, 0.35, 1],
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: 0
                }
              : {
                  duration: 1.4,
                  ease: [0.65, 0, 0.35, 1]
                }
          }
          onAnimationComplete={() => {
            if (phase === 'intro') {
              setPhase('reveal')
            }
          }}
          style={circleStyle}
        />
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={phase === 'intro' ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: phase === 'intro' ? 0.6 : 0.6, ease: [0.65, 0, 0.35, 1] }}
          style={{ color: '#b9c8d3', fontSize: 20, fontWeight: 600, letterSpacing: 0.5 }}
        >
          loading{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #7929bb, #5078b8)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Portfolio
          </span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Loader


