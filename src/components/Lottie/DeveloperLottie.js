import React from "react";
import Lottie from "react-lottie";

const DeveloperLottie = ({ animationPath }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		path: animationPath,
		
	};

	return (
		<div onClick={() => null}>
			<Lottie   options={defaultOptions} height={150}
              width={150}
 />
		</div>
	);
};

export default DeveloperLottie;