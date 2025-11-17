import React from "react";
import { CustomPanelWrapperProps } from "../../types";

const CustomPanelWrapper: React.FC<CustomPanelWrapperProps> = ({
	children,
	className = "",
}) => {
	return (
		<div
			className={`w-full mx-auto p-6 bg-white rounded-xl shadow-lg ${className}`}>
			{children}
		</div>
	);
};

export default CustomPanelWrapper;
