import React, { useState, useEffect } from "react"
import { Magnifier } from "react-image-magnifiers"
import styled from "styled-components"

const Figure = styled.figure`
  ${({ isTallImage }) => isTallImage && `
    width: 75%;
    margin-left: auto;
    margin-right: auto;
  `}
`

function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

const ImageZoom = ({preview, zoom, caption, isTallImage}) => {
  const [dragToMove, setDragToMove] = useState();
  
  useEffect(() => {
    setDragToMove(isMobileDevice())
  }, [])

  return (
    <Figure 
      className="gatsby-resp-image-figure"
      isTallImage={isTallImage}
    >
      <Magnifier
        imageSrc={preview}
        imageAlt="Example"
        largeImageSrc={zoom}
        dragToMove={dragToMove}
      />
      <figcaption className="gatsby-resp-image-figcaption">
        <h4 dangerouslySetInnerHTML={{__html: caption}} />
      </figcaption>
    </Figure>
  )
}

export default ImageZoom