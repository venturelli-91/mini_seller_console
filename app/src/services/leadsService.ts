import type { Lead } from "../types";
import leadsData from "../data/leads.json";

export function getAllLeads(): Lead[] {
	return Array.isArray(leadsData.leads) ? leadsData.leads : [];
}

export function findLeadById(id: string): Lead | undefined {
	return getAllLeads().find((lead) => lead.id === id);
}
