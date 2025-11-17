export interface AddLeadModalProps {
	open: boolean;
	onClose: () => void;
	onAdd: (lead: Omit<Lead, "id">) => void;
}

export interface AddLeadFormFieldsProps {
	form: {
		name: string;
		email: string;
		company: string;
		source: string;
		status: string;
		score: number;
		value?: number;
	};
	onChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
}

export interface DashboardPanelProps {
	onLeadClick: (lead: Lead) => void;
}

export interface CustomPanelWrapperProps {
	children: React.ReactNode;
	className?: string;
}

export interface Toast {
	id: number;
	message: string;
	type: "success" | "error";
}

export interface ToastContextType {
	showToast: (message: string, type: "success" | "error") => void;
}
export function getNextLeadId(leads: Lead[]): string {
	const maxId = leads.reduce((max, l) => {
		const n = parseInt(l.id, 10);
		return isNaN(n) ? max : Math.max(max, n);
	}, 0);
	return String(maxId + 1);
}
export interface OpportunitiesState {
	opportunities: Opportunity[];
	addOpportunity: (opportunity: Opportunity) => void;
	updateOpportunity: (
		id: string,
		updatedOpportunity: Partial<Opportunity>
	) => void;
	deleteOpportunity: (id: string) => void;
}

export interface LeadsState {
	leads: Lead[];
	addLead: (lead: Lead) => void;
	updateLead: (id: string, updatedLead: Partial<Lead>) => void;
	deleteLead: (id: string) => void;
}

export interface CustomButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

export interface CustomFormProps {
	lead: Lead;
	statusOptions: string[];
	onSave: (updated: Partial<Lead>) => void;
	onCancel: () => void;
}

export interface LeadsRowProps {
	lead: Lead;
	onClick?: () => void;
	onDelete?: () => void;
	onConvert?: () => void;
}

export interface LeadsListProps {
	onLeadClick?: (lead: Lead) => void;
}

export interface LeadDetailFieldsProps {
	lead: Lead;
	statusOptions: string[];
	onSave: (updated: Partial<Lead>) => void;
	onCancel: () => void;
}
export interface SlideOverPanelProps {
	open: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
}

export interface LeadDetailPanelProps {
	lead: Lead | null;
	statusOptions: string[];
	open: boolean;
	onClose: () => void;
	onSave: (updated: Partial<Lead>) => void;
}

export interface StatusOption {
	value: string;
	label: string;
}

export interface LeadsListFiltersProps {
	search: string;
	onSearch: (value: string) => void;
	status: string | null;
	onStatus: (value: string | null) => void;
	statusOptions: { value: string; label: string }[];
}

export interface Lead {
	id: string;
	name: string;
	email: string;
	company: string;
	source: string;
	status: string;
	score: number;
	value?: number;
}

export interface Opportunity {
	id: string;
	name: string;
	stage: string;
	amount?: number;
	accountName: string;
}
