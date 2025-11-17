"use client";
import React, { createContext, useContext, useState, useCallback } from "react";
import { Toast, ToastContextType } from "../../types";

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
	const ctx = useContext(ToastContext);
	if (!ctx) throw new Error("useToast must be used within ToastProvider");
	return ctx;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [toasts, setToasts] = useState<Toast[]>([]);
	const showToast = useCallback(
		(message: string, type: "success" | "error") => {
			const id = Date.now() + Math.random();
			setToasts((prev) => [...prev, { id, message, type }]);
			setTimeout(
				() => setToasts((prev) => prev.filter((t) => t.id !== id)),
				3000
			);
		},
		[]
	);

	return (
		<ToastContext.Provider value={{ showToast }}>
			{children}
			<div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
				{toasts.map((toast) => (
					<div
						key={toast.id}
						className={`px-4 py-2 rounded shadow text-white font-medium transition-all
              ${toast.type === "success" ? "bg-green-500" : "bg-red-500"}
            `}>
						{toast.message}
					</div>
				))}
			</div>
		</ToastContext.Provider>
	);
};
