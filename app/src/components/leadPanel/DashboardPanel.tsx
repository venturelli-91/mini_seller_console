import React from "react";
import LeadsList from "../leadList/LeadsList";

import OpportunitiesTable from "../opportunityTable/OpportunitiesTable";
import type { DashboardPanelProps } from "../../types";

const DashboardPanel: React.FC<DashboardPanelProps> = ({ onLeadClick }) => {
	return (
		<>
			<LeadsList onLeadClick={onLeadClick} />
			<OpportunitiesTable />
		</>
	);
};

export default DashboardPanel;
