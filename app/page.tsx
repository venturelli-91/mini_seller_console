"use client";

import { useInitializeStores } from "./src/hooks/useInitializeStores";

import React, { useState } from "react";
import type { Lead } from "./src/types";
import DashboardPanel from "./src/components/leadPanel/DashboardPanel";
import LeadPanelController from "./src/components/leadPanel/LeadPanelController";
import CustomPanelWrapper from "./src/components/ui/CustomPanelWrapper";
import { usePersistedLeadsStore } from "./src/store/useLeadsStore";
import { useStatusOptions } from "./src/hooks/useStatusOptions";

const HomePage: React.FC = () => {
	const leads = usePersistedLeadsStore((state) => state.leads);
	const updateLead = usePersistedLeadsStore((state) => state.updateLead);
	useInitializeStores();
	const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
	const [panelOpen, setPanelOpen] = useState(false);

	const statusOptions = useStatusOptions(leads);

	const handleLeadClick = (lead: Lead) => {
		setSelectedLead(lead);
		setPanelOpen(true);
	};

	return (
		<main className="min-h-screen bg-gray-50 py-4 sm:py-8">
			<CustomPanelWrapper>
				<h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-8">
					Mini Seller Console
				</h1>
				<DashboardPanel onLeadClick={handleLeadClick} />
				<LeadPanelController
					selectedLead={selectedLead}
					statusOptions={statusOptions}
					panelOpen={panelOpen}
					onClose={() => setPanelOpen(false)}
					onSave={(updated) => {
						if (selectedLead && updated) {
							updateLead(selectedLead.id, updated);
						}
					}}
				/>
			</CustomPanelWrapper>
		</main>
	);
};

export default HomePage;
