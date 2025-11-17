import { useEffect } from "react";
import leadsData from "../data/leads.json";
import opportunitiesData from "../data/opportunities.json";
import { useOpportunitiesStore } from "../store/useOpportunitiesStore";
import { usePersistedLeadsStore } from "../store/useLeadsStore";

export function useInitializeStores() {
	const addLead = usePersistedLeadsStore((state) => state.addLead);
	const addOpportunity = useOpportunitiesStore((state) => state.addOpportunity);

	useEffect(() => {
		const persistedLeads = localStorage.getItem("persisted-leads-store");
		const persistedOpportunities = localStorage.getItem(
			"opportunities-storage"
		);
		if (!persistedLeads && Array.isArray(leadsData.leads)) {
			leadsData.leads.forEach((lead) => addLead(lead));
		}
		if (
			!persistedOpportunities &&
			Array.isArray(opportunitiesData.opportunities)
		) {
			opportunitiesData.opportunities.forEach((opp) => addOpportunity(opp));
		}
		// eslint-disable-next-line
	}, []);
}
