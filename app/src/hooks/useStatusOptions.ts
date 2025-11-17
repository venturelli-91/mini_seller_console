import { useMemo } from "react";
import type { Lead, StatusOption } from "../types";

export function useStatusOptions(leads: Lead[]): StatusOption[] {
	return useMemo(
		() => [
			{ value: "all", label: "All" },
			...Array.from(new Set(leads.map((l) => l.status))).map((status) => ({
				value: status,
				label: status.charAt(0).toUpperCase() + status.slice(1),
			})),
		],
		[leads]
	);
}
