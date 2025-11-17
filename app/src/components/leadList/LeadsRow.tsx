import React from "react";
import type { LeadsRowProps } from "../../types";
import { useOpportunitiesStore } from "../../store/useOpportunitiesStore";
import CustomButton from "../ui/CustomButton";

const LeadsRow: React.FC<LeadsRowProps> = ({
	lead,
	onClick,
	onDelete,
	onConvert,
}) => {
	const addOpportunity = useOpportunitiesStore((s) => s.addOpportunity);

	const handleConvert = (e: React.MouseEvent) => {
		e.stopPropagation();
		addOpportunity({
			id: Date.now().toString(),
			name: lead.name,
			stage: "Prospecting",
			amount: undefined,
			accountName: lead.company,
		});
		onConvert?.();
	};

	return (
		<tr
			className="hover:bg-gray-50 cursor-pointer border-b"
			onClick={onClick}>
			<td className="px-3 py-2 whitespace-nowrap">{lead.id}</td>
			<td className="px-3 py-2 whitespace-nowrap">{lead.name}</td>
			<td className="px-3 py-2 whitespace-nowrap">{lead.company}</td>
			<td className="px-3 py-2 whitespace-nowrap">{lead.email}</td>
			<td className="px-3 py-2 whitespace-nowrap">{lead.source}</td>
			<td className="px-3 py-2 whitespace-nowrap font-bold text-right">
				{lead.score}
			</td>
			<td className="px-3 py-2 whitespace-nowrap font-bold text-right">
				{lead.value ? `$${lead.value.toLocaleString()}` : "-"}
			</td>
			<td className="px-3 py-2 whitespace-nowrap">
				<span className="inline-block px-2 py-1 rounded bg-gray-100 text-sm">
					{lead.status}
				</span>
			</td>
			<td className="px-3 py-2 whitespace-nowrap">
				<div className="flex items-center gap-1">
					<CustomButton
						type="button"
						onClick={handleConvert}
						className="text-white bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-2 py-1 !mb-0 !me-0">
						Convert
					</CustomButton>
					<CustomButton
						type="button"
						onClick={(e) => {
							e.stopPropagation();
							if (window.confirm("Remove this lead?")) {
								onDelete?.();
							}
						}}
						className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-1 !mb-0 !me-0">
						Remove
					</CustomButton>
				</div>
			</td>
		</tr>
	);
};

export default LeadsRow;
