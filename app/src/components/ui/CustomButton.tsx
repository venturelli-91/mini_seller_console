import React from "react";
import type { CustomButtonProps } from "../../types";

type ButtonColor = "purple" | "cyan";

interface CustomButtonPropsWithColor extends CustomButtonProps {
	color?: ButtonColor;
}

const gradientClasses: Record<ButtonColor, string> = {
	purple:
		"bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800",
	cyan: "bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800",
};

const CustomButton: React.FC<CustomButtonPropsWithColor> = ({
	children,
	className = "",
	color = "cyan",
	...props
}) => (
	<button
		type="button"
		className={`text-white ${gradientClasses[color]} font-medium rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2 ${className}`}
		{...props}>
		{children}
	</button>
);

export default CustomButton;
