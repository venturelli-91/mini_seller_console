import React from "react";
import type { LeadDetailPanelProps } from "../../types";
import SlideOverPanel from "./SlideOverPanel";
import LeadDetailFields from "./LeadDetailFields";

const LeadDetailPanel: React.FC<LeadDetailPanelProps> = ({
	lead,
	statusOptions,
	open,
	onClose,
	onSave,
}) => {
	if (!open || !lead) return null;
	return (
		<SlideOverPanel
			open={open}
			onClose={onClose}
			title="Detalhes do Lead">
			<LeadDetailFields
				lead={lead}
				statusOptions={statusOptions}
				onSave={(updated) => {
					onSave(updated);
					onClose();
				}}
				onCancel={onClose}
			/>
		</SlideOverPanel>
	);
};

export default LeadDetailPanel;
