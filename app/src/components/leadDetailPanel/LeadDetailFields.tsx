import React from "react";
import type { LeadDetailFieldsProps } from "../../types";
import CustomForm from "../ui/CustomForm";

const LeadDetailFields: React.FC<LeadDetailFieldsProps> = ({
	lead,
	statusOptions,
	onSave,
	onCancel,
}) => {
	return (
		<CustomForm
			lead={lead}
			statusOptions={statusOptions}
			onSave={onSave}
			onCancel={onCancel}
		/>
	);
};

export default LeadDetailFields;
