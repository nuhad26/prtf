import React, { useState, useEffect, useRef } from 'react';
import * as motion from 'motion/react-client';
import './features.css';

// State Animations Component
const StateAnimations = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [escapeMessage, setEscapeMessage] = useState('');
  const [wasOutside, setWasOutside] = useState(false);
  const [outsideMsgIndex, setOutsideMsgIndex] = useState(0);
  const [returnMsgIndex, setReturnMsgIndex] = useState(0);
  const [suppressOutside, setSuppressOutside] = useState(false);
  const containerRef = useRef(null);
  const boxRef = useRef(null);

  const outsideMessages = [
    'Hey bring the box back !',
    "I'm freeee! ...wait, no?",
    'Box on a break. BRB.',
    'Who let the box out? 🎵',
  ];

  const returnMessages = [
    'Ah nevermind',
    'Back home safe.',
    'That was close!',
    'Order restored.',
  ];

  const handleMotionUpdate = () => {
    const container = containerRef.current;
    const box = boxRef.current;
    if (!container || !box) return;

    const containerRect = container.getBoundingClientRect();
    const boxRect = box.getBoundingClientRect();

    const isOutside =
      boxRect.right < containerRect.left ||
      boxRect.left > containerRect.right ||
      boxRect.bottom < containerRect.top ||
      boxRect.top > containerRect.bottom ||
      boxRect.left < containerRect.left ||
      boxRect.top < containerRect.top ||
      boxRect.right > containerRect.right ||
      boxRect.bottom > containerRect.bottom;

    if (isOutside) {
      // After a return, allow next outside cycle immediately
      if (suppressOutside) {
        setSuppressOutside(false);
      }
      if (!wasOutside) {
        setEscapeMessage(outsideMessages[outsideMsgIndex % outsideMessages.length]);
        setOutsideMsgIndex((i) => (i + 1) % outsideMessages.length);
        setWasOutside(true);
      }
    } else if (wasOutside) {
      setEscapeMessage(returnMessages[returnMsgIndex % returnMessages.length]);
      setReturnMsgIndex((i) => (i + 1) % returnMessages.length);
      setWasOutside(false);
      setSuppressOutside(true);
    }
  };

  // Auto-hide any shown message after 10 seconds
  useEffect(() => {
    if (!escapeMessage) return;
    const timeout = setTimeout(() => setEscapeMessage(''), 10000);
    return () => clearTimeout(timeout);
  }, [escapeMessage]);

  return (
    <div className="animation-demo">
      <div className="animation-box-container" ref={containerRef}>
        <motion.div
          ref={boxRef}
          className="animation-box state-animation-box"
          animate={{ x, y, rotate }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onUpdate={handleMotionUpdate}
        />
      </div>
      {escapeMessage && (
        <div className="animation-warning" aria-live="polite">
          {escapeMessage}
        </div>
      )}
      <div className="animation-instruction">
        <p>💡 <strong>Try it:</strong> Use the sliders or number inputs below to control the animation</p>
      </div>
      <div className="animation-inputs">
        <Input value={x} set={setX} min={-200} max={200}>
          x
        </Input>
        <Input value={y} set={setY} min={-200} max={200}>
          y
        </Input>
        <Input value={rotate} set={setRotate} min={-180} max={180}>
          rotate
        </Input>
      </div>
    </div>
  );
};

// Keyframes Animation Component
const KeyframesAnimation = () => {
  return (
    <div className="animation-demo">
      <div className="animation-box-container">
        <motion.div
          className="animation-box keyframes-box"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      </div>
      <div className="animation-description">
        <p>Continuous keyframe animation with scale, rotation, and border radius transitions</p>
      </div>
    </div>
  );
};

// Reordering Animation Component
const ReorderingAnimation = () => {
  const initialOrder = [
    "#667eea",
    "#764ba2",
    "#5078b8",
    "#3c0867",
  ];

  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle([...order])), 1000);
    return () => clearTimeout(timeout);
  }, [order]);

  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300,
  };

  return (
    <div className="animation-demo">
      <ul className="reordering-container">
        {order.map((backgroundColor) => (
          <motion.li
            key={backgroundColor}
            layout
            transition={spring}
            className="reordering-item"
            style={{ backgroundColor }}
          />
        ))}
      </ul>
      <div className="animation-description">
        <p>Automatic layout animations with smooth reordering transitions</p>
      </div>
    </div>
  );
};

// Utility function for shuffling
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Input Component
const Input = ({ value, children, set, min = -200, max = 200 }) => {
  return (
    <label className="animation-input-label">
      <code>{children}</code>
      <input
        value={value}
        type="range"
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value))}
        className="animation-range-input"
      />
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value) || 0)}
        className="animation-number-input"
      />
    </label>
  );
};

const Features = () => {
  return (
    <div id="features" className="features">
      <div className="features-title">
        <h2>Website Features & Animations</h2>
        <p>Showcasing modern web features, animations, and transitions I can implement for your website</p>
      </div>
      
      <div className="features-container">
        {/* Interactive State Animations Card */}
        <div className="feature-card">
          <div className="feature-icon">🎮</div>
          <div
            className="feature-category"
            style={{ background: 'transparent', boxShadow: 'none', border: 'none', padding: 0, borderRadius: 0 }}
          >
            Interactive Animations
          </div>
          <h3>State-Based Animations</h3>
          <p>Control animations dynamically with interactive controls. Perfect for user-driven animations and interactive elements.</p>
          <StateAnimations />
        </div>

        {/* Keyframes Animation Card */}
        <div className="feature-card">
          <div className="feature-icon">✨</div>
          <div
            className="feature-category"
            style={{ background: 'transparent', boxShadow: 'none', border: 'none', padding: 0, borderRadius: 0 }}
          >
            Keyframe Animations
          </div>
          <h3>Complex Keyframe Sequences</h3>
          <p>Create smooth, complex animations with multiple property changes. Ideal for loading states, transitions, and attention-grabbing effects.</p>
          <KeyframesAnimation />
        </div>

        {/* Reordering Animation Card */}
        <div className="feature-card">
          <div className="feature-icon">🏄</div>
          <div
            className="feature-category"
            style={{ background: 'transparent', boxShadow: 'none', border: 'none', padding: 0, borderRadius: 0 }}
          >
            Layout Animations
          </div>
          <h3>Automatic Reordering</h3>
          <p>Smooth layout transitions when elements reorder. Perfect for dynamic lists, drag-and-drop interfaces, and sorting animations.</p>
          <ReorderingAnimation />
        </div>
      </div>
    </div>
  );
};

export default Features;

