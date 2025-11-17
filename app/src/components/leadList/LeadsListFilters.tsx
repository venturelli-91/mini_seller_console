import React from "react";
import type { LeadsListFiltersProps } from "../../types";

const LeadsListFilters: React.FC<LeadsListFiltersProps> = ({
	search,
	onSearch,
	status,
	onStatus,
	statusOptions,
}) => {
	return (
		<div className="flex flex-col md:flex-row gap-2 md:items-end mb-2">
			<div className="flex-1">
				<label className="block text-sm font-medium mb-1">
					Search (name or company)
				</label>
				<input
					type="text"
					className="w-full border rounded px-2 py-1 text-base"
					placeholder="Type to search..."
					value={search}
					onChange={(e) => onSearch(e.target.value)}
				/>
			</div>
			<div>
				<label
					htmlFor="lead-status-select"
					className="block text-sm font-medium mb-1">
					Status
				</label>
				<select
					id="lead-status-select"
					className="border rounded px-2 py-1 text-base"
					value={status || "all"}
					onChange={(e) =>
						onStatus(e.target.value === "all" ? null : e.target.value)
					}>
					{statusOptions.map((opt) => (
						<option
							key={opt.value}
							value={opt.value}>
							{opt.label}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default LeadsListFilters;
