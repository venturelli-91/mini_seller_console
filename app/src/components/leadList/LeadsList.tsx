import React, { useMemo, useState, useEffect } from "react";
import { useToast } from "../ui/ToastProvider";
import { usePersistedLeadsStore } from "../../store/useLeadsStore";
import LeadsListFilters from "./LeadsListFilters";
import LeadsRow from "./LeadsRow";
import CustomLoader from "../ui/CustomLoader";
import CustomButton from "../ui/CustomButton";
import AddLeadModal from "./AddLeadModal";
import { getNextLeadId } from "../../types";

import type { Lead, LeadsListProps } from "../../types";

const LeadsList: React.FC<LeadsListProps> = ({ onLeadClick }) => {
	const leads = usePersistedLeadsStore((state) => state.leads);
	const addLead = usePersistedLeadsStore((state) => state.addLead);
	const deleteLead = usePersistedLeadsStore((state) => state.deleteLead);
	const updateLead = usePersistedLeadsStore((state) => state.updateLead);
	const { showToast } = useToast();
	const [search, setSearch] = useState("");
	const [status, setStatus] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [modalOpen, setModalOpen] = useState(false);
	const [page, setPage] = useState(1);
	const pageSize = 10;
	const statusOptions = [
		{ value: "all", label: "All" },
		{ value: "new", label: "New" },
		{ value: "contacted", label: "Contacted" },
		{ value: "qualified", label: "Qualified" },
		{ value: "converted", label: "Converted" },
		{ value: "lost", label: "Lost" },
	];

	useEffect(() => {
		const timeout = setTimeout(() => setLoading(false), 600);
		return () => clearTimeout(timeout);
	}, []);

	const filteredLeads = useMemo(() => {
		const seen = new Set();
		let result = leads.filter((l) => {
			if (seen.has(l.id)) return false;
			seen.add(l.id);
			return true;
		});

		if (search) {
			const s = search.toLowerCase();
			result = result.filter((l) =>
				Object.values(l)
					.filter((v) => typeof v === "string" || typeof v === "number")
					.some((v) => String(v).toLowerCase().includes(s))
			);
		}

		if (status && status !== "all") {
			result = result.filter(
				(l) => String(l.status).toLowerCase() === status.toLowerCase()
			);
		}

		return result.sort((a, b) => b.score - a.score);
	}, [leads, search, status]);

	const totalPages = Math.max(1, Math.ceil(filteredLeads.length / pageSize));
	const paginatedLeads = useMemo(
		() =>
			filteredLeads.slice(
				(page - 1) * pageSize,
				(page - 1) * pageSize + pageSize
			),
		[filteredLeads, page, pageSize]
	);

	return (
		<div>
			<LeadsListFilters
				search={search}
				onSearch={setSearch}
				status={status}
				onStatus={setStatus}
				statusOptions={Array.isArray(statusOptions) ? statusOptions : []}
			/>
			<AddLeadModal
				open={modalOpen}
				onClose={() => setModalOpen(false)}
				onAdd={(leadData) => {
					addLead({ ...leadData, id: getNextLeadId(leads) });
				}}
			/>
			<div className="mt-4">
				<div className="flex items-center justify-between mb-4">
					<h2 className="text-3xl font-bold">Leads</h2>
					<CustomButton
						color="purple"
						onClick={() => setModalOpen(true)}>
						+ Add Lead
					</CustomButton>
				</div>
				<div className="overflow-x-auto rounded shadow bg-white">
					{loading ? (
						<div className="min-h-[180px] flex items-center justify-center">
							<CustomLoader />
						</div>
					) : (
						<>
							<table className="min-w-[600px] sm:min-w-full text-sm sm:text-base">
								<thead>
									<tr className="bg-gray-100">
										<th className="px-3 py-2 text-left">ID</th>
										<th className="px-3 py-2 text-left">Name</th>
										<th className="px-3 py-2 text-left">Company</th>
										<th className="px-3 py-2 text-left">Email</th>
										<th className="px-3 py-2 text-left">Source</th>
										<th className="px-3 py-2 text-left">Score</th>
										<th className="px-3 py-2 text-left">Value ($)</th>
										<th className="px-3 py-2 text-left">Status</th>
										<th className="px-3 py-2 text-left">Actions</th>
									</tr>
								</thead>
								<tbody>
									{filteredLeads.length === 0 ? (
										<tr>
											<td
												colSpan={8}
												className="text-center py-6 text-gray-400">
												No leads found.
											</td>
										</tr>
									) : (
										paginatedLeads.map((lead: Lead) => (
											<LeadsRow
												key={lead.id}
												lead={lead}
												onClick={
													onLeadClick ? () => onLeadClick(lead) : undefined
												}
												onDelete={() => {
													try {
														deleteLead(lead.id);
														showToast("Lead removed successfully!", "success");
													} catch {
														showToast("Error removing lead.", "error");
													}
												}}
												onConvert={() => {
													try {
														updateLead(lead.id, { status: "converted" });
														showToast(
															"Lead converted to opportunity!",
															"success"
														);
													} catch {
														showToast("Error converting lead.", "error");
													}
												}}
											/>
										))
									)}
								</tbody>
							</table>
							<div className="flex justify-center items-center gap-2 mt-3 mb-4">
								<button
									className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
									onClick={() => setPage((p) => Math.max(1, p - 1))}
									disabled={page === 1}>
									Previous
								</button>
								<span className="text-base mx-4">
									Page {page} of {totalPages}
								</span>
								<button
									className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
									onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
									disabled={page === totalPages}>
									Next
								</button>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default LeadsList;
