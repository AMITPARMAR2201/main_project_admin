import React, { useEffect, useState } from "react";

export default function LoadingPages() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Set a timeout to start the fade-out after 1 second (1000 ms)
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
    }, 900);

    // Set another timeout to remove the element from the DOM after the fade-out completes
    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 1900); // This should be the fade-out duration plus some buffer

    // Clean up both timeouts if the component unmounts before they complete
    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      id="loading-wrapper"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 1s ease-out",
      }}
    >
      <div className="spin-wrapper">
        <div className="spin">
          <div className="inner" />
        </div>
        <div className="spin">
          <div className="inner" />
        </div>
        <div className="spin">
          <div className="inner" />
        </div>
        <div className="spin">
          <div className="inner" />
        </div>
        <div className="spin">
          <div className="inner" />
        </div>
        <div className="spin">
          <div className="inner" />
        </div>
      </div>
    </div>
  );
}

