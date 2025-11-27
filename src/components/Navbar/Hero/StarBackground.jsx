import React, { useEffect, useRef, useState } from 'react';

const StarBackground = () => {
    const canvasRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let stars = [];
        let mouse = { x: null, y: null, radius: 150 };

        class Star {
            constructor(x, y, size, density) {
                this.x = x;
                this.y = y;
                this.baseX = x;
                this.baseY = y;
                this.size = size;
                this.density = density;
                this.alpha = Math.random();
                this.twinkleSpeed = Math.random() * 0.05 + 0.01;
                this.vx = 0;
                this.vy = 0;
            }

            draw() {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                // Twinkle effect
                this.alpha += Math.sin(Date.now() * this.twinkleSpeed) * 0.02;
                // Clamp alpha
                if (this.alpha < 0.2) this.alpha = 0.2;
                if (this.alpha > 1) this.alpha = 1;

                // Repulsion effect
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius && mouse.x !== null) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouse.radius - distance) / mouse.radius;
                    // Much smoother repulsion
                    const directionX = forceDirectionX * force * this.density * 0.6;
                    const directionY = forceDirectionY * force * this.density * 0.6;

                    this.vx -= directionX;
                    this.vy -= directionY;
                }

                // Spring back to base
                const homeDx = this.baseX - this.x;
                const homeDy = this.baseY - this.y;

                // Slower spring return
                this.vx += homeDx * 0.01;
                this.vy += homeDy * 0.01;

                // Higher friction for slower, smoother movement
                this.vx *= 0.9;
                this.vy *= 0.9;

                this.x += this.vx;
                this.y += this.vy;

                this.draw();
            }
        }

        const initStars = () => {
            stars = [];
            const numberOfStars = (canvas.width * canvas.height) / 5000; // Increased density
            for (let i = 0; i < numberOfStars; i++) {
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                let size = Math.random() * 2 + 0.5;
                // Reduced density range for more uniform movement
                let density = Math.random() * 0.5 + 0.1;
                stars.push(new Star(x, y, size, density));
            }
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
            initStars();
        };

        const handleMouseMove = (event) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < stars.length; i++) {
                stars[i].update();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);

        handleResize();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );
};

export default StarBackground;
