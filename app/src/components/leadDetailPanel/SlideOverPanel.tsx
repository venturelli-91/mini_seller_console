import React from "react";
import type { SlideOverPanelProps } from "../../types";

const SlideOverPanel: React.FC<SlideOverPanelProps> = ({
	open,
	onClose,
	title,
	children,
}) => {
	if (!open) return null;
	return (
		<div className="fixed inset-0 z-40 flex">
			<div
				className="fixed inset-0 bg-black bg-opacity-30 transition-opacity"
				onClick={onClose}
				aria-label="Fechar painel"
			/>
			<div className="absolute inset-0 bg-white shadow-xl h-full flex flex-col animate-slide-in">
				<div className="p-6 border-b flex items-center justify-between">
					<h3 className="text-xl font-bold">{title}</h3>
					<button
						onClick={onClose}
						className="text-gray-400 hover:text-gray-700 text-2xl"
						aria-label="Fechar">
						&times;
					</button>
				</div>
				<div className="p-6 flex-1 overflow-y-auto">{children}</div>
			</div>
			<style>{`
        .animate-slide-in {
          animation: slideInRight 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
		</div>
	);
};

export default SlideOverPanel;
