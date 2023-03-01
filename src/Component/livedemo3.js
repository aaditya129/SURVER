import React from 'react';
// import video from './video.mp4';

export default function Livedemo3() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div  style={{position: "relative",
  padding: "10px",
  borderRadius:" 20px",
  backgroundColor: " #f2f2f2",
  boxShadow:" 0px 0px 10px #333", textAlign: "center"}}>
      <h2>LIVE DEMO 3</h2>
            <video style={{
              position: "fixed",
              top: "95px",
              left: "0",
              width: "100%",
              height: "90%",
            }}controls loop autoPlay>
              {/* <source src={video} type="video/mp4" /> */}
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
