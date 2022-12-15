import { useEffect, useRef, useState } from "react";


function getCurrentFrame(index) {
    return `https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/medium/${index
      .toString()
      .padStart(4, "0")}.png`;
  }

const ImageCanvas = ({ scrollHeight, numFrames, width, height }) => {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [frameIndex, setFrameIndex] = useState(0);
  
    function preloadImages() {
      for (let i = 1; i <= numFrames; i++) {
        const img = new Image();
        const imgSrc = getCurrentFrame(i);
        img.src = imgSrc;
        img.style.objectFit='contain'
        img.style.height=`${height}px`
        setImages((prevImages) => [...prevImages, img]);
      }
    }
  
    const handleScroll = () => {
      const scrollFraction = window.scrollY / (scrollHeight - window.innerHeight);
      const index = Math.min(
        numFrames - 1,
        Math.ceil(scrollFraction * numFrames)
      );
  
      if (index <= 0 || index > numFrames) {
        return;
      }
  
      setFrameIndex(index);
    };
  
    const renderCanvas = () => {
      const context = canvasRef.current.getContext("2d");
      context.canvas.width = window.screen.width;
      context.canvas.height = height;
    };
  
    useEffect(() => {
      preloadImages();
      renderCanvas();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    useEffect(() => {
      if (!canvasRef.current || images.length < 1) {
        return;
      }
  
      const context = canvasRef.current.getContext("2d");
      let requestId;

      console.log(context)
  
      const render = () => {
        // context.globalCompositeOperation ="xor"
        context.clearRect(0,0,context.canvas.width,height);
        // context.drawImage(images[frameIndex-1], 0, 0);
        context.drawImage(images[frameIndex], 0, 0, context.canvas.width,height);
        requestId = requestAnimationFrame(render);
      };
  
      render();
  
      return () => cancelAnimationFrame(requestId);
    }, [frameIndex, images]);
  
    return (
      <div className="relative" style={{ height: scrollHeight }}>
        <canvas className="sticky top-0 m-auto" ref={canvasRef} style={{objectFit: 'cover'}}/>
      </div>
    );
  };

  export default ImageCanvas
