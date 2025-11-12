import React, { useRef, useState, useEffect } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './linkPreview.css'

const LinkPreview = ({ href, offset = 50, onClick, children, title, description, image }) => {
  const containerRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState({ left: 0, top: 0 })
  const [imageLoaded, setImageLoaded] = useState(false)

  // Preload image when component mounts or image prop changes
  useEffect(() => {
    if (!image) {
      setImageLoaded(false)
      return
    }

    const img = new Image()
    img.onload = () => setImageLoaded(true)
    img.onerror = () => setImageLoaded(false)
    img.src = image

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [image])

  useEffect(() => {
    if (!isOpen) return
    const onScroll = () => setIsOpen(false)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isOpen])

  const open = () => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth
    const centeredLeft = rect.left + rect.width / 2
    // popover total width = 280 (content) + 20 (padding)
    const popoverHalfWidth = 150
    const minLeft = popoverHalfWidth + 8
    const maxLeft = viewportWidth - popoverHalfWidth - 8
    const clampedLeft = Math.max(minLeft, Math.min(maxLeft, centeredLeft))
    setPosition({ left: clampedLeft, top: rect.bottom })
    setIsOpen(true)
  }

  const close = () => setIsOpen(false)

  return (
    <span 
      className="lp-container" 
      ref={containerRef}
      onMouseEnter={open}
      onMouseLeave={close}
      onFocus={open}
      onBlur={close}
    >
      <AnchorLink className='anchor-link' offset={offset} href={href} onClick={onClick}>
        {children}
      </AnchorLink>

      {isOpen && (
        <div
          className="lp-popover"
          style={{ left: position.left, top: position.top }}
          role="dialog"
          aria-label={title || 'Preview'}
        >
          {image && (
            <div className="lp-thumb">
              {!imageLoaded && <div className="lp-thumb-placeholder" />}
              <img 
                src={image} 
                alt="" 
                className={imageLoaded ? 'lp-img-loaded' : 'lp-img-loading'}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          )}
          <div className="lp-content">
            {title && <div className="lp-title">{title}</div>}
            {description && <div className="lp-desc">{description}</div>}
          </div>
          <div className="lp-arrow" />
        </div>
      )}
    </span>
  )
}

export default LinkPreview


