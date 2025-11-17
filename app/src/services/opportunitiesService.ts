import type { Opportunity } from "../types";
import opportunitiesData from "../data/opportunities.json";

export function getAllOpportunities(): Opportunity[] {
	return Array.isArray(opportunitiesData.opportunities)
		? opportunitiesData.opportunities
		: [];
}

export function findOpportunityById(id: string): Opportunity | undefined {
	return getAllOpportunities().find((opp) => opp.id === id);
}
