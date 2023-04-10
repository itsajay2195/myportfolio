import React from "react";
import Lottie from "react-lottie";

const DeveloperLottie = ({ animationPath, height, width }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		path: animationPath,
		
	};

	return (
		<div onClick={() => null}>
			<Lottie   options={defaultOptions} height={height}
              width={width}
 />
		</div>
	);
};

export default DeveloperLottie;