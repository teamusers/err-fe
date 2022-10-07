/* eslint-disable react/prop-types */
import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Flickity from "flickity";
import "flickity/dist/flickity.min.css";

const Carousel = ({ children, options }) => {
  const flickityCont = useRef(null);
  const [flickity, setFlickity] = useState(null);

  const [flickityReady, setFlickityReady] = useState(false);

  useEffect(() => {
    const flickityinstance = new Flickity(flickityCont?.current, options);
    setFlickity(flickityinstance);
    setFlickityReady(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(
    () => () => {
      flickity?.destroy();
    },
    [flickity]
  );

  const refreshFlickity = () => {
    flickity?.reloadCells();
    flickity?.resize();
    flickity?.updateDraggable();
  };

  useEffect(() => {
    if ((flickityReady || children) && flickity) {
      refreshFlickity();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flickityReady, children, flickity, options]);

  const renderPortal = () => {
    let returnData;
    if (!flickityCont?.current) {
      returnData = null;
    }

    const mountNode = flickityCont?.current?.querySelector(".flickity-slider");

    if (mountNode) {
      returnData = ReactDOM.createPortal(children, mountNode);
    }

    return returnData;
  };
  return (
    <>
      <div ref={flickityCont} />
      {renderPortal()}
    </>
  );
};

export default Carousel;
