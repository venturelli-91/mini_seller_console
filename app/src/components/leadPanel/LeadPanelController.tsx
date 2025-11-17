import React from "react";
import type { Lead, StatusOption } from "../../types";
import LeadDetailPanel from "../leadDetailPanel/LeadDetailPanel";

interface LeadPanelControllerProps {
	selectedLead: Lead | null;
	statusOptions: StatusOption[];
	panelOpen: boolean;
	onClose: () => void;
	onSave: (updated: Partial<Lead>) => void;
}

const LeadPanelController: React.FC<LeadPanelControllerProps> = ({
	selectedLead,
	statusOptions,
	panelOpen,
	onClose,
	onSave,
}) => {
	return (
		<LeadDetailPanel
			lead={selectedLead}
			statusOptions={statusOptions.map((s) => s.value)}
			open={panelOpen}
			onClose={onClose}
			onSave={onSave}
		/>
	);
};

export default LeadPanelController;
