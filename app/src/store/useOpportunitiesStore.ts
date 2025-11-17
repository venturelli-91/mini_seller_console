import { create } from "zustand";
import { persist } from "zustand/middleware";
import { zustandLocalStorage } from "../hooks/useLocalStorage";

import type { Opportunity, OpportunitiesState } from "../types";

export const useOpportunitiesStore = create<OpportunitiesState>()(
	persist(
		(set) => ({
			opportunities: [],
			addOpportunity: (opportunity: Opportunity) =>
				set((state) => {
					// Always assign the next sequential numeric id
					const maxId = state.opportunities.reduce((max, opp) => {
						const n = parseInt(opp.id, 10);
						return isNaN(n) ? max : Math.max(max, n);
					}, 0);
					const newId = String(maxId + 1);
					return {
						opportunities: [
							...state.opportunities,
							{ ...opportunity, id: newId },
						],
					};
				}),
			updateOpportunity: (
				id: string,
				updatedOpportunity: Partial<Opportunity>
			) =>
				set((state) => ({
					opportunities: state.opportunities.map((opportunity) =>
						opportunity.id === id
							? { ...opportunity, ...updatedOpportunity }
							: opportunity
					),
				})),
			deleteOpportunity: (id: string) =>
				set((state) => ({
					opportunities: state.opportunities.filter(
						(opportunity) => opportunity.id !== id
					),
				})),
		}),
		{
			name: "opportunities-storage",
			storage: zustandLocalStorage,
		}
	)
);
