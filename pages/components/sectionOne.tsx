import React from 'react'

type Props = {}

export default function SectionOne({}: Props) {
  return (
    <div className="section-1">
    <div className="hero-section">
      <h1>
        Deploy And Host
        <span className="fancy-text">Your DAPPS</span>
      </h1>
      <p>Simplify onchain payment on multiple chains</p>
      <div className="btn-group">
        <a
          className="btn"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stake <span>(50% APY)</span>{" "}
        </a>
        <a
          className="sec-btn btn"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deploy Now{" "}
        </a>
      </div>
    </div>
    <div className="svg-container">
      <svg
        className="hero-svg"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        // xmlnslink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style={{ enableBackground: "new 0 0 512 512" }}
        xmlSpace="preserve"
      >
        <g className="circles">
          <ellipse
            className="circle"
            style={{
              fill: "none",
              stroke: "#004BE9",
              strokeMiterlimit: "10",
            }}
            cx="255.5"
            cy="256.5"
            rx="235"
            ry="117"
          />
          <ellipse
            className="circle"
            style={{
              fill: "none",
              stroke: "#004BE9",
              strokeMiterlimit: "10",
              strokeDasharray: "3,10",
              filter: "blur(1px)",
            }}
            cx="255.5"
            cy="266.5"
            rx="235"
            ry="117"
          />
        </g>
        <path
          className="transfer"
          style={{
            fill: "none",
            stroke: "#0062FF",
            strokeMiterlimit: "10",
          }}
          d="M99.5,283.31l-13.51,7.91
    c-3.56,2.09-3.56,7.23,0,9.32l27.51,16.12c2.63,1.54,5.9,1.55,8.54,0.01l56.65-32.93c2.66-1.55,5.96-1.53,8.6,0.05l29.03,17.34
    c2.65,1.58,5.96,1.6,8.62,0.04l15.85-9.29"
        />
        <path
          className="transfer"
          style={{
            fill: "none",
            stroke: "#0062FF",
            strokeMiterlimit: "10",
          }}
          d="M64.39,263.87l-14.89,8.72
    c-3.46,2.03-7.75,2.03-11.21,0l-18.87-11.05c-4.72-2.76-4.7-9.59,0.03-12.34l81.36-47.14c6.99-4.05,15.63-4.01,22.59,0.11
    l104.9,62.11"
        />
        <path
          className="transfer"
          style={{
            fill: "none",
            stroke: "#0062FF",
            strokeMiterlimit: "10",
          }}
          d="M261.2,303.31l-13.73,8.04
    c-3.09,1.81-3.09,6.27,0,8.07l45.85,26.86c3.09,1.81,3.09,6.27,0,8.07l-50.83,29.78c-3.09,1.81-3.09,6.27,0,8.07l28.07,16.45
    c1.4,0.82,3.11,0.86,4.54,0.1l21.4-11.26"
        />
        <path
          className="transfer"
          style={{
            fill: "none",
            stroke: "#0062FF",
            strokeMiterlimit: "10",
          }}
          d="M331.5,417.5l-14.91,8.58
    c-3.67,2.11-3.69,7.39-0.04,9.53l19.41,11.37c4.91,2.88,11,2.88,15.91,0l86.05-50.39c3.63-2.13,3.63-7.38,0-9.51L290.12,300.5"
        />
        <path
          className="transfer"
          style={{
            fill: "none",
            stroke: "#0062FF",
            strokeMiterlimit: "10",
          }}
          d="M348.65,165.88l-3.14-1.84
    c-4.73-2.77-10.59-2.77-15.33,0l-71.19,41.7c-2.75,1.61-2.74,5.59,0.03,7.18l0,0"
        />
        <path
          className="transfer"
          style={{
            fill: "none",
            stroke: "#0062FF",
            strokeMiterlimit: "10",
          }}
          d="M423.82,209.91l7.91,4.64
    c3.88,2.28,3.88,7.89-0.01,10.16l-70.81,41.33c-3.51,2.05-7.85,2.04-11.36-0.01l-6.67-3.91c-3.51-2.06-7.86-2.06-11.37,0l-9.51,5.57
    "
        />
        <g className="laptops">
          <g className="laptop-1">
            <path
              style={{ fill: "#5E8FFF" }}
              d="M116.01,296.02l-65.21-37.7c-0.74-0.43-1.11-1.18-1.11-1.93c0-0.75,0.06-3.49,0.06-4.65
        l45.57-22.43c3.36-1.9,7.47-1.89,10.82,0.03l65.28,33.99c0,0,0.14,3.91,0.14,4.66c0.01,0.74-0.35,1.49-1.08,1.93l-43.36,26.02
        C123.72,297.98,119.46,298.01,116.01,296.02z"
            />
            <g>
              <path
                style={{ fill: "#EAF1FF" }}
                d="M121.5,292.6c-1.88,0-3.73-0.5-5.36-1.44l-65.21-37.7c-0.62-0.36-0.99-1-0.98-1.72
          c0-0.72,0.38-1.35,1-1.71l44.5-25.15c1.6-0.91,3.42-1.39,5.27-1.39c1.86,0,3.7,0.49,5.31,1.41l64.3,36.74
          c0.61,0.35,0.99,0.98,0.99,1.69c0.01,0.71-0.35,1.35-0.96,1.71L127,291.08C125.34,292.08,123.44,292.6,121.5,292.6z"
              />
              <path
                style={{ fill: "#5E8FFF" }}
                d="M100.71,223.76L100.71,223.76c1.82,0,3.61,0.48,5.19,1.38l64.3,36.74
          c0.54,0.31,0.86,0.86,0.87,1.48c0.01,0.62-0.31,1.18-0.84,1.49l-43.36,26.02c-1.62,0.97-3.48,1.49-5.38,1.49
          c-1.83,0-3.64-0.49-5.23-1.4l-65.21-37.7c-0.54-0.31-0.86-0.87-0.86-1.5c0-0.63,0.33-1.18,0.87-1.49l44.5-25.15
          C97.13,224.22,98.91,223.76,100.71,223.76 M100.71,223.26c-1.86,0-3.72,0.47-5.39,1.42l-44.5,25.15c-1.5,0.85-1.51,3-0.02,3.86
          l65.21,37.7c1.7,0.98,3.59,1.47,5.48,1.47c1.95,0,3.9-0.52,5.64-1.56l43.36-26.02c1.46-0.87,1.43-2.99-0.04-3.83l-64.3-36.74
          C104.46,223.74,102.59,223.26,100.71,223.26L100.71,223.26z"
              />
            </g>
            <g>
              <path
                style={{ fill: "#A9C6FF" }}
                d="M93.73,274.01l-13.67-7.91c-0.31-0.18-0.31-0.63,0-0.81l9.33-5.27c0.7-0.4,1.57-0.4,2.27,0.01
          l13.48,7.7c0.31,0.18,0.31,0.62,0.01,0.8l-9.09,5.45C95.34,274.42,94.45,274.42,93.73,274.01z"
              />
            </g>
            <g>
              <path
                style={{ fill: "#A9C6FF" }}
                d="M130.46,279.46l-60.13-34.4c-1.27-0.73-1.26-2.56,0.02-3.28l26.28-14.45
          c2.86-1.62,6.36-1.61,9.21,0.02l59.36,33.59c1.25,0.72,1.27,2.52,0.03,3.26l-25.31,15.19
          C137.02,281.12,133.4,281.15,130.46,279.46z"
              />
            </g>
            <path
              style={{ fill: "#3974EA" }}
              d="M106.37,216.56l7.12-49.41c0.48-2.45,5.73-3.31,7.89-2.04l64.1,37.65
        c2.67,1.57,4.02,4.69,3.35,7.71l-10.54,46.94c-0.53,2.37-5.9,4.8-8.02,3.61l-60.41-36.87
        C107.18,222.63,105.78,219.58,106.37,216.56z"
            />
            <path
              style={{ fill: "#5E8FFF" }}
              d="M102.89,217.72l9.61-49.03c0.48-2.45,3.24-3.7,5.4-2.43l64.1,37.65c2.67,1.57,4.02,4.69,3.35,7.71
        l-10.54,46.94c-0.53,2.37-3.2,3.56-5.32,2.36l-63.11-35.63C103.71,223.79,102.3,220.74,102.89,217.72z"
            />
            <g>
              <path
                style={{ fill: "#EAF1FF" }}
                d="M169.62,258.25c-0.54,0-1.07-0.14-1.55-0.41l-59.28-33.46c-2.42-1.37-3.69-4.12-3.16-6.85
          l9.03-46.05c0.29-1.48,1.6-2.55,3.1-2.55c0.56,0,1.11,0.15,1.59,0.44l60.22,35.36c2.43,1.42,3.64,4.23,3.02,6.97l-9.9,44.09
          C172.38,257.23,171.11,258.25,169.62,258.25z"
              />
              <path
                style={{ fill: "#5E8FFF" }}
                d="M117.77,169.16L117.77,169.16c0.51,0,1.02,0.14,1.47,0.4l60.22,35.36c2.33,1.37,3.5,4.06,2.91,6.7
          l-9.9,44.09c-0.3,1.34-1.47,2.27-2.84,2.27c-0.5,0-0.98-0.13-1.42-0.38l-59.28-33.46c-2.33-1.32-3.55-3.96-3.03-6.59l9.03-46.05
          C115.18,170.15,116.38,169.16,117.77,169.16 M117.77,168.66c-1.55,0-3.02,1.08-3.35,2.75l-9.03,46.05
          c-0.56,2.83,0.77,5.7,3.28,7.12l59.28,33.46c0.54,0.3,1.11,0.44,1.67,0.44c1.52,0,2.96-1.03,3.33-2.66l9.9-44.09
          c0.64-2.84-0.63-5.77-3.14-7.24l-60.22-35.36C118.94,168.81,118.35,168.66,117.77,168.66L117.77,168.66z"
              />
            </g>
          </g>
          <g className="laptop-2">
            <path
              style={{ fill: "#5E8FFF" }}
              d="M344.56,426.53l-65.21-37.7c-0.74-0.43-1.11-1.18-1.11-1.93c0-0.75,0.06-3.49,0.06-4.65
        l45.57-22.43c3.36-1.9,7.47-1.89,10.82,0.03l65.28,33.99c0,0,0.14,3.91,0.14,4.66c0.01,0.74-0.35,1.49-1.08,1.93l-43.36,26.02
        C352.26,428.49,348,428.52,344.56,426.53z"
            />
            <g>
              <path
                style={{ fill: "#EAF1FF" }}
                d="M350.04,423.12c-1.88,0-3.73-0.5-5.36-1.44l-65.21-37.7c-0.62-0.36-0.99-1-0.99-1.72
          c0-0.72,0.38-1.35,1-1.71l44.5-25.15c1.6-0.91,3.42-1.39,5.27-1.39c1.86,0,3.7,0.49,5.31,1.41l64.3,36.74
          c0.61,0.35,0.99,0.98,0.99,1.69c0.01,0.71-0.35,1.35-0.96,1.71l-43.36,26.01C353.88,422.59,351.98,423.12,350.04,423.12z"
              />
              <path
                style={{ fill: "#5E8FFF" }}
                d="M329.26,354.27L329.26,354.27c1.82,0,3.61,0.48,5.19,1.38l64.3,36.74
          c0.54,0.31,0.86,0.86,0.87,1.48s-0.31,1.18-0.84,1.49l-43.36,26.02c-1.62,0.97-3.48,1.49-5.38,1.49c-1.83,0-3.64-0.49-5.23-1.4
          l-65.21-37.7c-0.54-0.31-0.86-0.87-0.86-1.5c0-0.63,0.33-1.18,0.87-1.49l44.5-25.15C325.68,354.74,327.46,354.27,329.26,354.27
           M329.26,353.77c-1.86,0-3.72,0.47-5.39,1.42l-44.5,25.15c-1.5,0.85-1.51,3-0.02,3.86l65.21,37.7c1.7,0.98,3.59,1.47,5.48,1.47
          c1.95,0,3.9-0.52,5.64-1.56l43.36-26.02c1.46-0.87,1.43-2.99-0.04-3.83l-64.3-36.74C333.01,354.25,331.13,353.77,329.26,353.77
          L329.26,353.77z"
              />
            </g>
            <g>
              <path
                style={{ fill: "#A9C6FF" }}
                d="M322.27,404.52l-13.67-7.91c-0.31-0.18-0.31-0.63,0-0.81l9.33-5.27c0.7-0.4,1.57-0.4,2.27,0.01
          l13.48,7.7c0.31,0.18,0.31,0.62,0.01,0.8l-9.09,5.46C323.89,404.93,322.99,404.93,322.27,404.52z"
              />
            </g>
            <g>
              <path
                style={{ fill: "#A9C6FF" }}
                d="M359.01,409.97l-60.13-34.4c-1.27-0.73-1.26-2.56,0.02-3.28l26.28-14.45
          c2.86-1.62,6.36-1.61,9.21,0.02l59.36,33.59c1.25,0.72,1.27,2.52,0.03,3.26l-25.31,15.19
          C365.56,411.63,361.94,411.66,359.01,409.97z"
              />
            </g>
            <path
              style={{ fill: "#3974EA" }}
              d="M334.91,347.07l7.12-49.41c0.48-2.45,5.73-3.31,7.89-2.04l64.1,37.65
        c2.67,1.57,4.02,4.69,3.35,7.71l-10.54,46.94c-0.53,2.37-5.9,4.8-8.02,3.61l-60.41-36.87
        C335.73,353.14,334.32,350.09,334.91,347.07z"
            />
            <path
              style={{ fill: "#5E8FFF" }}
              d="M331.43,348.23l9.61-49.03c0.48-2.45,3.24-3.7,5.4-2.43l64.1,37.65c2.67,1.57,4.02,4.69,3.35,7.71
        l-10.54,46.94c-0.53,2.37-3.2,3.56-5.32,2.36l-63.11-35.63C332.25,354.3,330.84,351.25,331.43,348.23z"
            />
            <g>
              <path
                style={{ fill: "#EAF1FF" }}
                d="M398.17,388.76c-0.54,0-1.07-0.14-1.55-0.41l-59.28-33.46c-2.42-1.37-3.69-4.12-3.16-6.85
          l9.03-46.05c0.29-1.48,1.6-2.55,3.1-2.55c0.55,0,1.11,0.15,1.59,0.44l60.22,35.37c2.43,1.42,3.64,4.23,3.03,6.97l-9.9,44.09
          C400.93,387.74,399.66,388.76,398.17,388.76z"
              />
              <path
                style={{ fill: "#5E8FFF" }}
                d="M346.32,299.67L346.32,299.67c0.51,0,1.02,0.14,1.47,0.4L408,335.44c2.33,1.37,3.5,4.06,2.91,6.7
          l-9.9,44.09c-0.3,1.34-1.47,2.27-2.84,2.27c-0.5,0-0.98-0.13-1.42-0.38l-59.28-33.46c-2.33-1.32-3.55-3.96-3.03-6.59l9.03-46.05
          C343.72,300.66,344.93,299.67,346.32,299.67 M346.32,299.17c-1.55,0-3.02,1.08-3.35,2.75l-9.03,46.05
          c-0.56,2.83,0.77,5.7,3.28,7.12l59.28,33.46c0.54,0.3,1.11,0.44,1.67,0.44c1.52,0,2.96-1.03,3.33-2.66l9.9-44.09
          c0.64-2.84-0.63-5.77-3.14-7.24l-60.22-35.36C347.49,299.32,346.9,299.17,346.32,299.17L346.32,299.17z"
              />
            </g>
          </g>
          <g className="laptop-3">
            <path
              style={{ fill: "#5E8FFF" }}
              d="M388.32,226.49l-65.21-37.7c-0.74-0.43-1.11-1.18-1.11-1.93c0-0.75,0.06-3.49,0.06-4.65
        l45.57-22.43c3.36-1.9,7.47-1.89,10.82,0.03l65.28,33.99c0,0,0.14,3.91,0.14,4.66c0.01,0.74-0.35,1.49-1.08,1.93l-43.36,26.02
        C396.02,228.45,391.77,228.49,388.32,226.49z"
            />
            <g>
              <path
                style={{ fill: "#EAF1FF" }}
                d="M393.8,223.08c-1.88,0-3.73-0.5-5.36-1.44l-65.21-37.7c-0.62-0.36-0.99-1-0.99-1.72
          c0-0.72,0.38-1.35,1-1.71l44.5-25.15c1.6-0.91,3.42-1.39,5.27-1.39c1.86,0,3.7,0.49,5.31,1.41l64.3,36.74
          c0.61,0.35,0.99,0.98,0.99,1.69c0.01,0.71-0.35,1.35-0.96,1.71l-43.36,26.02C397.65,222.55,395.74,223.08,393.8,223.08z"
              />
              <path
                style={{ fill: "#5E8FFF" }}
                d="M373.02,153.73v0.5c1.82,0,3.61,0.48,5.19,1.38l64.3,36.74c0.54,0.31,0.86,0.86,0.87,1.48
          c0.01,0.62-0.31,1.18-0.84,1.49l-43.36,26.02c-1.62,0.97-3.48,1.49-5.38,1.49c-1.83,0-3.64-0.49-5.23-1.4l-65.21-37.7
          c-0.54-0.31-0.86-0.87-0.86-1.5c0-0.63,0.33-1.18,0.87-1.49l44.5-25.15c1.57-0.89,3.34-1.35,5.14-1.35V153.73 M373.02,153.73
          c-1.86,0-3.72,0.47-5.39,1.42l-44.5,25.15c-1.5,0.85-1.51,3-0.02,3.86l65.21,37.7c1.7,0.98,3.59,1.47,5.48,1.47
          c1.95,0,3.9-0.52,5.64-1.56l43.36-26.02c1.46-0.87,1.43-2.99-0.04-3.83l-64.3-36.74C376.77,154.21,374.89,153.73,373.02,153.73
          L373.02,153.73z"
              />
            </g>
            <g>
              <path
                style={{ fill: "#A9C6FF" }}
                d="M366.03,204.48l-13.67-7.91c-0.31-0.18-0.31-0.63,0-0.81l9.33-5.27c0.7-0.4,1.57-0.4,2.27,0.01
          l13.48,7.7c0.31,0.18,0.31,0.62,0.01,0.8l-9.09,5.46C367.65,204.89,366.76,204.9,366.03,204.48z"
              />
            </g>
            <g>
              <path
                style={{ fill: "#A9C6FF" }}
                d="M402.77,209.93l-60.13-34.4c-1.27-0.73-1.26-2.56,0.02-3.28l26.28-14.45
          c2.86-1.62,6.36-1.61,9.21,0.02l59.36,33.59c1.25,0.72,1.27,2.52,0.03,3.26l-25.31,15.19
          C409.33,211.6,405.7,211.63,402.77,209.93z"
              />
            </g>
            <path
              style={{ fill: "#3974EA" }}
              d="M378.67,147.04l7.12-49.41c0.48-2.45,5.73-3.31,7.89-2.04l64.1,37.65
        c2.67,1.57,4.02,4.69,3.35,7.71l-10.54,46.94c-0.53,2.37-5.9,4.8-8.02,3.61l-60.41-36.87
        C379.49,153.11,378.08,150.05,378.67,147.04z"
            />
            <path
              style={{ fill: "#5E8FFF" }}
              d="M375.2,148.2l9.61-49.03c0.48-2.45,3.24-3.7,5.4-2.43l64.1,37.65c2.67,1.57,4.02,4.69,3.35,7.71
        l-10.54,46.94c-0.53,2.37-3.2,3.56-5.32,2.36l-63.11-35.63C376.01,154.26,374.61,151.21,375.2,148.2z"
            />
            <g>
              <path
                style={{ fill: "#EAF1FF" }}
                d="M441.93,188.72c-0.54,0-1.07-0.14-1.55-0.41l-59.28-33.46c-2.42-1.37-3.69-4.12-3.16-6.85
          l9.03-46.05c0.29-1.48,1.6-2.55,3.1-2.55c0.55,0,1.11,0.15,1.59,0.44l60.22,35.37c2.43,1.42,3.64,4.23,3.03,6.97l-9.9,44.09
          C444.69,187.71,443.42,188.72,441.93,188.72z"
              />
              <path
                style={{ fill: "#5E8FFF" }}
                d="M390.08,99.64L390.08,99.64c0.51,0,1.02,0.14,1.47,0.4l60.22,35.36c2.33,1.37,3.5,4.06,2.91,6.7
          l-9.9,44.09c-0.3,1.34-1.47,2.27-2.84,2.27c-0.5,0-0.98-0.13-1.42-0.38l-59.28-33.46c-2.33-1.32-3.55-3.96-3.03-6.59l9.03-46.05
          C387.49,100.63,388.69,99.64,390.08,99.64 M390.08,99.14c-1.55,0-3.02,1.08-3.35,2.75l-9.03,46.05c-0.56,2.83,0.77,5.7,3.28,7.12
          l59.28,33.46c0.54,0.3,1.11,0.44,1.67,0.44c1.52,0,2.96-1.03,3.33-2.66l9.9-44.09c0.64-2.84-0.63-5.77-3.14-7.24L391.8,99.61
          C391.25,99.29,390.66,99.14,390.08,99.14L390.08,99.14z"
              />
            </g>
          </g>
        </g>
        <g className="shadow">
          <path
            style={{ fill: "#4a6ee061" }}
            d="M227.55,288.22l41.55,24.44c3.2,1.88,7.18,1.9,10.39,0.03l42.2-24.47c1.84-1.07,1.84-3.73,0-4.8
      l-42.2-24.47c-3.22-1.86-7.19-1.85-10.39,0.03l-41.55,24.44C225.73,284.51,225.73,287.15,227.55,288.22z"
          />
        </g>
        <g className="server-base">
          <path
            style={{ fill: "#5E8FFF" }}
            d="M227.55,275.07l41.55,24.44c3.2,1.88,7.18,1.9,10.39,0.03l42.2-24.47c0.92-0.53,1.38-1.47,1.38-2.4
      s0-15.1,0-15.1l-43.59-25.21c-3.22-1.86-7.19-1.85-10.39,0.03l-42.92,25.19c0,0,0,14.17,0,15.09S226.64,274.53,227.55,275.07z"
          />
          <g>
            <path
              style={{ fill: "#EAF1FF" }}
              d="M274.33,285.74c-1.79,0-3.55-0.48-5.1-1.39l-41.55-24.44c-0.78-0.46-1.25-1.27-1.25-2.18
        s0.47-1.72,1.25-2.18l41.55-24.44c1.54-0.91,3.31-1.39,5.1-1.39c1.77,0,3.51,0.47,5.04,1.36l42.2,24.47
        c0.79,0.46,1.26,1.27,1.26,2.18s-0.47,1.73-1.26,2.18l-42.2,24.47C277.84,285.27,276.09,285.74,274.33,285.74
        C274.33,285.74,274.33,285.74,274.33,285.74z"
            />
            <path
              style={{ fill: "#5E8FFF" }}
              d="M274.33,229.98c1.72,0,3.42,0.46,4.92,1.32l42.2,24.47c0.71,0.41,1.13,1.15,1.13,1.97
        s-0.42,1.56-1.13,1.97l-42.2,24.47c-1.49,0.86-3.19,1.32-4.92,1.32c-1.75,0-3.47-0.47-4.97-1.35L227.8,259.7
        c-0.7-0.41-1.12-1.15-1.12-1.96s0.42-1.55,1.12-1.96l41.55-24.44C270.86,230.45,272.58,229.98,274.33,229.98 M274.33,229.48
        c-1.81,0-3.61,0.47-5.22,1.42l-41.55,24.44c-1.82,1.07-1.82,3.71,0,4.78l41.55,24.44c1.61,0.95,3.42,1.42,5.22,1.42
        c1.78,0,3.57-0.46,5.17-1.39l42.2-24.47c1.84-1.07,1.84-3.73,0-4.8l-42.2-24.47C277.89,229.94,276.11,229.48,274.33,229.48
        L274.33,229.48z"
            />
          </g>
          <g>
            <path
              style={{ fill: "#A9C6FF" }}
              d="M230.67,258.92l40.05,23.56c2.23,1.31,4.99,1.32,7.22,0.02l40.46-23.46c1.01-0.58,1.01-2.04,0-2.62
        l-40.17-23.29c-2.41-1.4-5.4-1.39-7.8,0.02l-39.76,23.39C229.76,257.08,229.76,258.39,230.67,258.92z"
            />
          </g>
          <path
            style={{ fill: "#5E8FFF" }}
            d="M250.98,258.94l20.87,12.28c1.61,0.95,3.6,0.95,5.22,0.02l21.2-12.29c0.93-0.54,0.93-1.88,0-2.41
      l-21.2-12.29c-1.62-0.94-3.61-0.93-5.22,0.02l-20.87,12.28C250.06,257.07,250.06,258.4,250.98,258.94z"
          />
          <g>
            <path
              style={{ fill: "#EAF1FF" }}
              d="M274.49,271.88c-0.55,0-1.08-0.15-1.55-0.42l-20.34-11.96l20.34-11.96
        c0.47-0.28,1.01-0.42,1.55-0.42c0.54,0,1.07,0.14,1.54,0.41l20.65,11.97l-20.65,11.97C275.56,271.73,275.03,271.88,274.49,271.88
        L274.49,271.88z"
            />
            <g>
              <path
                style={{ fill: "#5E8FFF" }}
                d="M274.49,247.35c0.5,0,0.98,0.13,1.41,0.38l20.28,11.76l-20.28,11.76
          c-0.43,0.25-0.92,0.38-1.41,0.38c-0.5,0-1-0.13-1.43-0.39l-19.97-11.75l19.97-11.75C273.5,247.49,273.99,247.35,274.49,247.35
           M274.49,246.85c-0.58,0-1.16,0.15-1.68,0.46l-20.7,12.18l20.7,12.18c0.52,0.31,1.1,0.46,1.68,0.46c0.57,0,1.15-0.15,1.66-0.45
          l21.03-12.19l-21.03-12.19C275.64,247,275.07,246.85,274.49,246.85L274.49,246.85z"
              />
            </g>
          </g>

          <ellipse
            transform="matrix(0.5799 -0.8147 0.8147 0.5799 -112.5238 355.5237)"
            style={{
              fill: "#A9C6FF",
              stroke: "#1E65D6",
              strokeMiterlimit: "10",
            }}
            cx="288.48"
            cy="286.87"
            rx="2.61"
            ry="1.87"
          />

          <ellipse
            transform="matrix(0.5799 -0.8147 0.8147 0.5799 -97.3932 365.4426)"
            style={{
              fill: "#A9C6FF",
              stroke: "#1E65D6",
              strokeMiterlimit: "10",
            }}
            cx="305.67"
            cy="277.16"
            rx="2.61"
            ry="1.87"
          />

          <ellipse
            transform="matrix(0.5799 -0.8147 0.8147 0.5799 -92.7618 368.4478)"
            style={{
              fill: "#A9C6FF",
              stroke: "#1E65D6",
              strokeMiterlimit: "10",
            }}
            cx="310.9"
            cy="274.17"
            rx="2.61"
            ry="1.87"
          />

          <ellipse
            transform="matrix(0.5799 -0.8147 0.8147 0.5799 -88.1303 371.4529)"
            style={{
              fill: "#A9C6FF",
              stroke: "#1E65D6",
              strokeMiterlimit: "10",
            }}
            cx="316.13"
            cy="271.18"
            rx="2.61"
            ry="1.87"
          />
        </g>
        <g className="server-top">
          <path
            style={{ fill: "#5E8FFF" }}
            d="M227.55,251.16l41.55,24.44c3.2,1.88,7.18,1.9,10.39,0.03l42.2-24.47c0.92-0.53,1.38-1.47,1.38-2.4
      s0-15.1,0-15.1l-43.59-25.21c-3.22-1.86-7.19-1.85-10.39,0.03l-42.92,25.19c0,0,0,14.17,0,15.09
      C226.18,249.7,226.64,250.63,227.55,251.16z"
          />
          <g>
            <path
              style={{ fill: "#EAF1FF" }}
              d="M274.33,261.84c-1.79,0-3.55-0.48-5.1-1.39l-41.55-24.44c-0.78-0.46-1.25-1.27-1.25-2.18
        s0.47-1.72,1.25-2.18l41.55-24.44c1.54-0.91,3.31-1.39,5.1-1.39c1.77,0,3.51,0.47,5.04,1.36l42.2,24.47
        c0.79,0.46,1.26,1.27,1.26,2.18c0,0.91-0.47,1.73-1.26,2.18l-42.2,24.47C277.84,261.37,276.09,261.84,274.33,261.84
        C274.33,261.84,274.33,261.84,274.33,261.84z"
            />
            <path
              style={{ fill: "#5E8FFF" }}
              d="M274.33,206.07c1.72,0,3.42,0.46,4.92,1.32l42.2,24.47c0.71,0.41,1.13,1.15,1.13,1.97
        s-0.42,1.56-1.13,1.97l-42.2,24.47c-1.49,0.86-3.19,1.32-4.92,1.32c-1.75,0-3.47-0.47-4.97-1.35l-41.55-24.44
        c-0.7-0.41-1.12-1.15-1.12-1.96s0.42-1.55,1.12-1.96l41.55-24.44C270.86,206.54,272.58,206.07,274.33,206.07 M274.33,205.57
        c-1.81,0-3.61,0.47-5.22,1.42l-41.55,24.44c-1.82,1.07-1.82,3.71,0,4.78l41.55,24.44c1.61,0.95,3.42,1.42,5.22,1.42
        c1.78,0,3.57-0.46,5.17-1.39l42.2-24.47c1.84-1.07,1.84-3.73,0-4.8l-42.2-24.47C277.89,206.04,276.11,205.57,274.33,205.57
        L274.33,205.57z"
            />
          </g>
          <g>
            <path
              style={{ fill: "#A9C6FF" }}
              d="M230.67,235.01l40.05,23.56c2.23,1.31,4.99,1.32,7.22,0.02l40.46-23.46c1.01-0.58,1.01-2.04,0-2.62
        l-40.17-23.29c-2.41-1.4-5.4-1.39-7.8,0.02l-39.76,23.39C229.76,233.18,229.76,234.48,230.67,235.01z"
            />
          </g>
          <path
            style={{ fill: "#5E8FFF" }}
            d="M250.98,235.03l20.87,12.28c1.61,0.95,3.6,0.95,5.22,0.02l21.2-12.29c0.93-0.54,0.93-1.88,0-2.41
      l-21.2-12.29c-1.62-0.94-3.61-0.93-5.22,0.02l-20.87,12.28C250.06,233.17,250.06,234.49,250.98,235.03z"
          />
          <g>
            <path
              style={{ fill: "#EAF1FF" }}
              d="M274.49,247.97c-0.55,0-1.08-0.15-1.55-0.42l-20.34-11.96l20.34-11.96
        c0.47-0.28,1.01-0.42,1.55-0.42c0.54,0,1.07,0.14,1.54,0.41l20.65,11.97l-20.65,11.97C275.56,247.82,275.03,247.97,274.49,247.97
        L274.49,247.97z"
            />
            <g>
              <path
                style={{ fill: "#5E8FFF" }}
                d="M274.49,223.44c0.5,0,0.98,0.13,1.41,0.38l20.28,11.76l-20.28,11.76
          c-0.43,0.25-0.92,0.38-1.41,0.38c-0.5,0-1-0.13-1.43-0.39l-19.97-11.75l19.97-11.75C273.5,223.58,273.99,223.44,274.49,223.44
           M274.49,222.94c-0.58,0-1.16,0.15-1.68,0.46l-20.7,12.18l20.7,12.18c0.52,0.31,1.1,0.46,1.68,0.46c0.57,0,1.15-0.15,1.66-0.45
          l21.03-12.19l-21.03-12.19C275.64,223.09,275.07,222.94,274.49,222.94L274.49,222.94z"
              />
            </g>
          </g>

          <ellipse
            transform="matrix(0.5799 -0.8147 0.8147 0.5799 -93.0472 345.4809)"
            style={{
              fill: "#A9C6FF",
              stroke: "#1E65D6",
              strokeMiterlimit: "10",
            }}
            cx="288.48"
            cy="262.97"
            rx="2.61"
            ry="1.87"
          />

          <ellipse
            transform="matrix(0.5799 -0.8147 0.8147 0.5799 -77.9166 355.3998)"
            style={{
              fill: "#A9C6FF",
              stroke: "#1E65D6",
              strokeMiterlimit: "10",
            }}
            cx="305.67"
            cy="253.25"
            rx="2.61"
            ry="1.87"
          />

          <ellipse
            transform="matrix(0.5799 -0.8147 0.8147 0.5799 -73.2851 358.405)"
            style={{
              fill: "#A9C6FF",
              stroke: "#1E65D6",
              strokeMiterlimit: "10",
            }}
            cx="310.9"
            cy="250.27"
            rx="2.61"
            ry="1.87"
          />

          <ellipse
            transform="matrix(0.5799 -0.8147 0.8147 0.5799 -68.6537 361.4101)"
            style={{
              fill: "#A9C6FF",
              stroke: "#1E65D6",
              strokeMiterlimit: "10",
            }}
            cx="316.13"
            cy="247.28"
            rx="2.61"
            ry="1.87"
          />
        </g>
        <line
          className="cable"
          style={{
            fill: "none",
            stroke: "#5E8FFF",
            strokeWidth: "0.5",
            strokeMiterlimit: "10",
          }}
          x1="259.35"
          y1="233.83"
          x2="259.35"
          y2="109.81"
        >
          <animate
            attributeName="y2"
            values="233.83;109.81;109.81;109.81;"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y1"
            values=" 233.83; 109.81; "
            dur="2s"
            delay="1s"
            repeatCount="indefinite"
          />
        </line>
        <line
          className="cable"
          style={{
            fill: "none",
            stroke: "#5E8FFF",
            strokeWidth: "0.5",
            strokeMiterlimit: "10",
          }}
          x1="269.06"
          y1="230.84"
          x2="269.06"
          y2="115.04"
        >
          <animate
            attributeName="y2"
            values="233.83;109.81;109.81;109.81;"
            dur="5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y1"
            values=" 233.83; 109.81; "
            dur="5s"
            delay="2.5s"
            repeatCount="indefinite"
          />
        </line>
        <line
          className="cable"
          style={{
            fill: "none",
            stroke: "#5E8FFF",
            strokeWidth: "0.5",
            strokeMiterlimit: "10",
          }}
          x1="278.77"
          y1="231.59"
          x2="278.77"
          y2="121.02"
        >
          <animate
            attributeName="y2"
            values="233.83;109.81;109.81;109.81;"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y1"
            values=" 233.83; 109.81; "
            dur="3s"
            delay="1.5s"
            repeatCount="indefinite"
          />
        </line>
        <line
          className="cable"
          style={{
            fill: "none",
            stroke: "#5E8FFF",
            strokeWidth: "0.5",
            strokeMiterlimit: "10",
          }}
          x1="288.48"
          y1="233.08"
          x2="288.48"
          y2="126.99"
        >
          <animate
            attributeName="y2"
            values="233.83;109.81;109.81;109.81;"
            dur="4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y1"
            values=" 233.83; 109.81; "
            dur="4s"
            delay="2s"
            repeatCount="indefinite"
          />
        </line>
        <g className="main-cloud">
          <g className="connector-1">
            <g>
              <path
                style={{ fill: "#A9C6FF" }}
                d="M259.35,108.69L259.35,108.69c-1.86,0-3.36,1.51-3.36,3.36v9.71c0,1.86,1.51,3.36,3.36,3.36l0,0
          c1.86,0,3.36-1.51,3.36-3.36v-9.71C262.71,110.19,261.2,108.69,259.35,108.69z"
              />
            </g>
            <g>
              <path
                style={{ fill: "#EAF1FF" }}
                d="M259.35,114.42c-3.36,0-6.1-2.74-6.1-6.1v-3.74c0-3.36,2.74-6.1,6.1-6.1c3.36,0,6.1,2.74,6.1,6.1
          v3.74C265.45,111.68,262.71,114.42,259.35,114.42z"
              />
              <path
                style={{ fill: "#5E8FFF" }}
                d="M259.35,98.73c3.23,0,5.85,2.62,5.85,5.85v3.74c0,3.23-2.62,5.85-5.85,5.85s-5.85-2.62-5.85-5.85
          v-3.74C253.49,101.35,256.12,98.73,259.35,98.73 M259.35,98.23L259.35,98.23c-3.51,0-6.35,2.84-6.35,6.35v3.74
          c0,3.51,2.84,6.35,6.35,6.35h0c3.51,0,6.35-2.84,6.35-6.35v-3.74C265.7,101.07,262.85,98.23,259.35,98.23L259.35,98.23z"
              />
            </g>
            <path
              style={{ fill: "#5E8FFF" }}
              d="M262.71,114.29v1.65c-0.97,0.61-2.13,0.96-3.36,0.96s-2.39-0.35-3.36-0.96v-1.65
        c0-0.19,0.01-0.38,0.05-0.56c0.96,0.6,2.1,0.93,3.31,0.93s2.35-0.34,3.31-0.93C262.69,113.91,262.71,114.1,262.71,114.29z"
            />
          </g>
          <g className="connector-2">
            <g>
              <path
                style={{ fill: "#A9C6FF" }}
                d="M269.06,114.67L269.06,114.67c-1.86,0-3.36,1.51-3.36,3.36v9.71c0,1.86,1.51,3.36,3.36,3.36l0,0
          c1.86,0,3.36-1.51,3.36-3.36v-9.71C272.42,116.17,270.91,114.67,269.06,114.67z"
              />
            </g>
            <g>
              <path
                style={{ fill: "#EAF1FF" }}
                d="M269.06,120.39c-3.36,0-6.1-2.74-6.1-6.1v-3.74c0-3.36,2.74-6.1,6.1-6.1c3.36,0,6.1,2.74,6.1,6.1
          v3.74C275.16,117.66,272.42,120.39,269.06,120.39z"
              />
              <path
                style={{ fill: "#5E8FFF" }}
                d="M269.06,104.71c3.23,0,5.85,2.62,5.85,5.85v3.74c0,3.23-2.62,5.85-5.85,5.85s-5.85-2.62-5.85-5.85
          v-3.74C263.21,107.33,265.83,104.71,269.06,104.71 M269.06,104.21c-3.51,0-6.35,2.84-6.35,6.35v3.74c0,3.51,2.84,6.35,6.35,6.35
          s6.35-2.84,6.35-6.35v-3.74C275.41,107.05,272.57,104.21,269.06,104.21L269.06,104.21z"
              />
            </g>
            <path
              style={{ fill: "#5E8FFF" }}
              d="M272.42,120.27v1.65c-0.97,0.61-2.13,0.96-3.36,0.96s-2.39-0.35-3.36-0.96v-1.65
        c0-0.19,0.01-0.38,0.05-0.56c0.96,0.6,2.1,0.93,3.31,0.93s2.35-0.34,3.31-0.93C272.4,119.89,272.42,120.08,272.42,120.27z"
            />
          </g>
          <g className="connector-3">
            <g>
              <path
                style={{ fill: "#A9C6FF" }}
                d="M278.77,120.64L278.77,120.64c-1.86,0-3.36,1.51-3.36,3.36v9.71c0,1.86,1.51,3.36,3.36,3.36l0,0
          c1.86,0,3.36-1.51,3.36-3.36V124C282.13,122.15,280.63,120.64,278.77,120.64z"
              />
            </g>
            <g>
              <path
                style={{ fill: "#EAF1FF" }}
                d="M278.77,126.37c-3.36,0-6.1-2.74-6.1-6.1v-3.74c0-3.36,2.74-6.1,6.1-6.1s6.1,2.74,6.1,6.1v3.74
          C284.87,123.63,282.13,126.37,278.77,126.37z"
              />
              <path
                style={{ fill: "#5E8FFF" }}
                d="M278.77,110.68c3.23,0,5.85,2.62,5.85,5.85v3.74c0,3.23-2.62,5.85-5.85,5.85s-5.85-2.62-5.85-5.85
          v-3.74C272.92,113.31,275.54,110.68,278.77,110.68 M278.77,110.18c-3.51,0-6.35,2.84-6.35,6.35v3.74c0,3.51,2.84,6.35,6.35,6.35
          s6.35-2.84,6.35-6.35v-3.74C285.12,113.03,282.28,110.18,278.77,110.18L278.77,110.18z"
              />
            </g>
            <path
              style={{ fill: "#5E8FFF" }}
              d="M282.13,126.25v1.65c-0.97,0.61-2.13,0.96-3.36,0.96s-2.39-0.35-3.36-0.96v-1.65
        c0-0.19,0.01-0.38,0.05-0.56c0.96,0.6,2.1,0.93,3.31,0.93c1.21,0,2.35-0.34,3.31-0.93C282.12,125.86,282.13,126.06,282.13,126.25z"
            />
          </g>
          <g className="connector-4">
            <g>
              <path
                style={{ fill: "#A9C6FF" }}
                d="M288.48,126.62L288.48,126.62c-1.86,0-3.36,1.51-3.36,3.36v9.71c0,1.86,1.51,3.36,3.36,3.36l0,0
          c1.86,0,3.36-1.51,3.36-3.36v-9.71C291.84,128.12,290.34,126.62,288.48,126.62z"
              />
            </g>
            <g>
              <path
                style={{ fill: "#EAF1FF" }}
                d="M288.48,132.35c-3.36,0-6.1-2.74-6.1-6.1v-3.74c0-3.36,2.74-6.1,6.1-6.1s6.1,2.74,6.1,6.1v3.74
          C294.58,129.61,291.85,132.35,288.48,132.35z"
              />
              <path
                style={{ fill: "#5E8FFF" }}
                d="M288.48,116.66c3.23,0,5.85,2.62,5.85,5.85v3.74c0,3.23-2.62,5.85-5.85,5.85s-5.85-2.62-5.85-5.85
          v-3.74C282.63,119.28,285.26,116.66,288.48,116.66 M288.48,116.16c-3.51,0-6.35,2.84-6.35,6.35v3.74c0,3.51,2.84,6.35,6.35,6.35
          c3.51,0,6.35-2.84,6.35-6.35v-3.74C294.83,119,291.99,116.16,288.48,116.16L288.48,116.16z"
              />
            </g>
            <path
              style={{ fill: "#5E8FFF" }}
              d="M291.84,132.22v1.65c-0.97,0.61-2.13,0.96-3.36,0.96s-2.39-0.35-3.36-0.96v-1.65
        c0-0.19,0.01-0.38,0.05-0.56c0.96,0.6,2.1,0.93,3.31,0.93c1.21,0,2.35-0.34,3.31-0.93C291.83,131.84,291.84,132.04,291.84,132.22z"
            />
          </g>
          <g className="cloud">
            <path
              style={{ fill: "#5E8FFF" }}
              d="M221.84,46.42l12.94-7.63l8.04-11.18c0,0,10.17-5.59,13.91-7.83c3.74-2.24,10.46-2.99,17.93,1.49
        s23.16,18.68,26.15,41.84c17.18,2.99,29.14,20.17,31.38,36.61c17.18,3.74,20.92,23.91,20.92,29.88c0,5.23-2.24,7.47-6.72,10.46
        c-4.48,2.99-13.5,7.89-13.5,7.89L221.84,46.42z"
            />
            <g>
              <path
                style={{ fill: "#EAF1FF" }}
                d="M329.71,148.33c-2.31,0-4.95-0.84-7.86-2.5c-2.49-1.42-7.75-4.42-14.49-8.27
          c-21.83-12.45-58.37-33.29-69.18-39.55c-13.78-7.98-23.04-22.9-23.04-37.14c0-9.73,4.39-15.3,12.04-15.3
          c2.18,0,4.55,0.45,7.05,1.34l0.37,0.13l-0.04-0.39c-0.45-4.92,0.46-11.68,4.34-15.93c2.4-2.63,5.64-3.97,9.61-3.97
          c12.27,0,36.37,18.83,37.11,44.58l0.01,0.23l0.23,0.01c15.55,0.74,31.15,21.54,31.89,37.12l0.01,0.24h0.24
          c13.59,0,19.92,16.79,19.92,28.14C337.92,144.12,334.85,148.33,329.71,148.33z"
              />
              <path
                style={{ fill: "#5E8FFF" }}
                d="M248.51,27.01c6.2,0,15.25,5.01,22.52,12.46c5.16,5.29,13.89,16.46,14.33,31.88l0.01,0.46
          l0.46,0.02c15.43,0.73,30.91,21.4,31.65,36.88l0.02,0.48h0.48c13.42,0,19.67,16.64,19.67,27.89c0,6.89-2.97,11-7.95,11
          c-2.27,0-4.87-0.83-7.74-2.47c-2.49-1.42-7.74-4.42-14.49-8.27c-21.83-12.45-58.37-33.29-69.18-39.55
          c-13.7-7.93-22.91-22.77-22.91-36.92c0-9.57,4.3-15.05,11.79-15.05c2.15,0,4.49,0.45,6.96,1.33l0.74,0.26l-0.07-0.78
          c-0.44-4.86,0.45-11.55,4.27-15.74C241.44,28.31,244.61,27.01,248.51,27.01 M248.51,26.51c-11.95,0-14.94,11.95-14.2,20.17
          c-2.5-0.89-4.91-1.36-7.13-1.36c-7.1,0-12.29,4.74-12.29,15.55c0,14.2,8.97,29.14,23.16,37.36c14.2,8.22,73.22,41.84,83.68,47.82
          c3.06,1.75,5.73,2.54,7.99,2.54c5.46,0,8.45-4.63,8.45-11.5c0-11.95-6.72-28.39-20.17-28.39c-0.75-15.69-16.44-36.61-32.13-37.36
          C285.12,45.18,260.47,26.51,248.51,26.51L248.51,26.51z"
              />
            </g>
            <g>
              <path
                style={{ fill: "#A9C6FF" }}
                d="M323.97,142.31c5.23,2.99,9.71,2.24,9.71-4.48c0-6.72-4.48-24.65-20.92-25.4
          c0-19.42-19.42-38.1-31.38-35.86c0-22.41-18.68-44.83-32.87-44.83c-14.2,0-10.46,22.41-10.46,22.41s-5.98-4.48-11.95-4.48
          c-5.98,0-6.72,5.98-6.72,11.21c0,13.45,11.21,28.39,23.91,35.11S323.97,142.31,323.97,142.31z"
              />
            </g>
          </g>
          <g className="arrow">
            <g>
              <polygon
                style={{ fill: "#5E8FFF" }}
                points="268.68,74.32 282.13,98.98 275.41,94.49 275.41,105.7 277.65,103.46 277.65,95.99 
        282.13,98.98 284.37,96.73 271.67,72.83 	"
              />
              <polygon
                className="pulse"
                style={{ fill: "#EAF1FF" }}
                points="262.96,98.09 262.96,87.63 255.7,83.28 268.6,74.68 281.43,98.21 275.16,94.03 
          275.16,105.26"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  </div>
  )
}