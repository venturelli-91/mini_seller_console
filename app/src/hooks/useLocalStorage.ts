export const zustandLocalStorage = {
	getItem: <T = unknown>(name: string): T | null => {
		if (typeof window === "undefined") return null;
		const value = window.localStorage.getItem(name);
		return value ? (JSON.parse(value) as T) : null;
	},
	setItem: <T = unknown>(name: string, value: T): void => {
		if (typeof window === "undefined") return;
		window.localStorage.setItem(name, JSON.stringify(value));
	},
	removeItem: (name: string): void => {
		if (typeof window === "undefined") return;
		window.localStorage.removeItem(name);
	},
};
