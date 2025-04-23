import Spline from '@splinetool/react-spline'

export default function App() {
  return (
    <>
      <div
        className="spline-wrapper"
        style={{
          height: '100vh',
          width: '100vw',
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingRight: '20px',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        <div className="spline-container">
          <Spline scene="https://prod.spline.design/dBgM7heoEmjDSdB7/scene.splinecode" />
        </div>
      </div>

      <style>
        {`
          .spline-container {
            width: 100%;
            height: 100%;
            max-width: 700px;
            transition: transform 0.3s ease;
          }

          @media (max-width: 768px) {
            .spline-wrapper {
              justify-content: center !important;
              padding-right: 0 !important;
            }

            .spline-container {
              transform: scale(0.8);
              transform-origin: center;
              max-width: 90vw;
              height: 70vh;
            }
          }

          @media (max-width: 480px) {
            .spline-container {
              transform: scale(0.65);
              height: 60vh;
            }
          }
        `}
      </style>
    </>
  )
}
