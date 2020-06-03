import React, { useState, useEffect } from "react"
import { Magnifier } from "react-image-magnifiers"

function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

const ImageZoom = ({preview, zoom, caption}) => {
  const [dragToMove, setDragToMove] = useState();
  
  useEffect(() => {
    setDragToMove(isMobileDevice())
  }, [])

  return (
    <figure className="gatsby-resp-image-figure">
      <Magnifier
        imageSrc={preview}
        imageAlt="Example"
        largeImageSrc={zoom}
        dragToMove={dragToMove}
      />
      <figcaption className="gatsby-resp-image-figcaption">
        <h4 dangerouslySetInnerHTML={{__html: caption}} />
      </figcaption>
    </figure>
  )
}

export default ImageZoom