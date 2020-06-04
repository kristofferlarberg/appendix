import React, { useState, useEffect } from "react"
import { Magnifier } from "react-image-magnifiers"
import styled from "styled-components"

const Figure = styled.figure`
  position: relative;

  ${({ isTallImage }) =>
    isTallImage &&
    `
    width: 75%;
    margin-left: auto;
    margin-right: auto;
  `}

  .zoomImage > div {
    ${props => {
      if (props.state) {
        return `
          cursor: url("/appendix/icon-move.png") 0 0, zoom-out!important; /* Legacy */
          cursor: url("/appendix/icon-move.svg") 0 0, zoom-out!important; /* FF */
          cursor: -webkit-image-set(url("/appendix/icon-move.png") 1x, url("/appendix/icon-move@2x.png") 2x) 0 0, zoom-out!important; /* Webkit */
      `
      } else {
        return `
          cursor: url("/appendix/icon-zoom.png") 0 0, zoom-in!important; /* Legacy */
          cursor: url("/appendix/icon-zoom.svg") 0 0, zoom-in!important; /* FF */
          cursor: -webkit-image-set(url("/appendix/icon-zoom.png") 1x, url("/appendix/icon-zoom@2x.png") 2x) 0 0, zoom-in!important; /* Webkit */
      `
      }
    }}
  }
`

const TouchOverlay = styled.div`
  position: absolute;
  top: 3px;
  right: 4px;
  z-index: 2;
  width: 25px;
  height: 25px;

  .zoom {
    display: ${props => (props.state ? "none" : "block")};
  }

  .move {
    display: ${props => (props.state ? "block" : "none")};
  }
`

function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  )
}

const ImageZoom = ({ preview, alt, zoom, caption, isTallImage }) => {
  const [dragToMove, setDragToMove] = useState()
  const [currentState, setCurrentState] = useState(false)

  useEffect(() => {
    setDragToMove(isMobileDevice())
  }, [])

  return (
    <Figure
      className="gatsby-resp-image-figure"
      isTallImage={isTallImage}
      state={currentState}
    >
      {dragToMove && (
        <TouchOverlay state={currentState}>
          <img alt="Zoom In" className="zoom" src="/icon-zoom.png" />
          <img alt="Move" className="move" src="/icon-move.png" />
        </TouchOverlay>
      )}

      <Magnifier
        imageSrc={preview}
        imageAlt={alt}
        largeImageSrc={zoom}
        dragToMove={dragToMove}
        className="zoomImage"
        cursorStyle="none"
        onZoomStart={() => setCurrentState(true)}
        onZoomEnd={() => setCurrentState(false)}
      />
      <figcaption className="gatsby-resp-image-figcaption">
        <h4 dangerouslySetInnerHTML={{ __html: caption }} />
      </figcaption>
    </Figure>
  )
}

export default ImageZoom
