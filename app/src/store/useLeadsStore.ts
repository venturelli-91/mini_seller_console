import { create } from "zustand";
import { persist } from "zustand/middleware";
import { zustandLocalStorage } from "../hooks/useLocalStorage";
import type { LeadsState } from "../types";

export const useLeadsStore = create<LeadsState>((set) => ({
	leads: [],
	addLead: (lead: import("../types").Lead) =>
		set((state: LeadsState) => {
			if (state.leads.some((l) => l.id === lead.id)) {
				return {};
			}
			return { leads: [...state.leads, lead] };
		}),
	updateLead: (id: string, updatedLead: Partial<import("../types").Lead>) =>
		set((state: LeadsState) => ({
			leads: state.leads.map((lead: import("../types").Lead) =>
				lead.id === id ? { ...lead, ...updatedLead } : lead
			),
		})),
	deleteLead: (id: string) =>
		set((state: LeadsState) => ({
			leads: state.leads.filter(
				(lead: import("../types").Lead) => lead.id !== id
			),
		})),
}));

export const usePersistedLeadsStore = create<LeadsState>()(
	persist(
		(set) => ({
			leads: [],
			addLead: (lead: import("../types").Lead) =>
				set((state: LeadsState) => {
					if (state.leads.some((l) => l.id === lead.id)) {
						return {};
					}
					return { leads: [...state.leads, lead] };
				}),
			updateLead: (id: string, updatedLead: Partial<import("../types").Lead>) =>
				set((state: LeadsState) => ({
					leads: state.leads.map((lead: import("../types").Lead) =>
						lead.id === id ? { ...lead, ...updatedLead } : lead
					),
				})),
			deleteLead: (id: string) =>
				set((state: LeadsState) => ({
					leads: state.leads.filter(
						(lead: import("../types").Lead) => lead.id !== id
					),
				})),
		}),
		{
			name: "persisted-leads-store",
			storage: zustandLocalStorage,
		}
	)
);
