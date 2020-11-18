import styled from "styled-components";

export const PageMap = styled.div`
  width: 100vw;
  height: 100vh;

  .leaflet-container {
    z-index: 0;
  }

  /* Pop Up - Marker */
  .map-popup .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: none;
  }

  .map-popup .leaflet-popup-content h3 {
    color: #0089a5;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;
  }

  .map-popup .leaflet-popup-content p {
    color: #042f38;
    font-size: 12px;
    font-weight: bold;
    margin: 8px 12px;
    line-height: 15px;
  }

  .map-popup .leaflet-popup-tip-container {
    display: none;
  }
`;
