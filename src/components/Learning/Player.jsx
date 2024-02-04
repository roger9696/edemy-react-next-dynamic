import React from "react";

const Player = () => {
	return (
    <>
      <div className="video-content-box">
        <video width="100%" height="100%" controls>
          <source
            src="https://res.cloudinary.com/dev-empty/video/upload/v1661320753/umpgo4hxrxpst5fddnik.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </>
	);
};

export default Player;
