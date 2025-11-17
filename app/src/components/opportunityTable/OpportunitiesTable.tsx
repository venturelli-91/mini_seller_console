import React from "react";
import { useOpportunitiesStore } from "../../store/useOpportunitiesStore";
import CustomButton from "../ui/CustomButton";
import { useToast } from "../ui/ToastProvider";

const OpportunitiesTable: React.FC = () => {
	const opportunities = useOpportunitiesStore((s) => s.opportunities);
	const deleteOpportunity = useOpportunitiesStore((s) => s.deleteOpportunity);
	const { showToast } = useToast();

	const uniqueOpportunities = React.useMemo(() => {
		const seen = new Set();
		return opportunities.filter((opp) => {
			if (seen.has(opp.id)) return false;
			seen.add(opp.id);
			return true;
		});
	}, [opportunities]);

	return (
		<div className="w-full mx-auto p-2 sm:p-4 mt-4 sm:mt-8">
			<h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
				Opportunities
			</h2>
			<div className="overflow-x-auto rounded shadow bg-white">
				<table className="min-w-full text-sm sm:text-base">
					<thead>
						<tr className="bg-gray-100">
							<th className="px-3 py-2 text-left">ID</th>
							<th className="px-3 py-2 text-left">Name</th>
							<th className="px-3 py-2 text-left">Stage</th>
							<th className="px-3 py-2 text-center">Value</th>
							<th className="px-3 py-2 text-left">Account</th>
							<th className="px-3 py-2 text-left">Actions</th>
						</tr>
					</thead>
					<tbody>
						{opportunities.length === 0 ? (
							<tr>
								<td
									colSpan={6}
									className="text-center py-6 text-gray-400">
									No opportunities found.
								</td>
							</tr>
						) : (
							uniqueOpportunities.map((opp) => (
								<tr
									key={opp.id}
									className="border-b hover:bg-gray-50">
									<td className="px-3 py-2 whitespace-nowrap">{opp.id}</td>
									<td className="px-3 py-2 whitespace-nowrap">{opp.name}</td>
									<td className="px-3 py-2 whitespace-nowrap">{opp.stage}</td>
									<td className="px-3 py-2 whitespace-nowrap text-center font-bold">
										{opp.amount
											? opp.amount.toLocaleString("en-US", {
													style: "currency",
													currency: "USD",
											  })
											: "-"}
									</td>
									<td className="px-3 py-2 whitespace-nowrap">
										{opp.accountName}
									</td>
									<td className="px-3 py-2 whitespace-nowrap">
										<CustomButton
											type="button"
											className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2"
											onClick={() => {
												if (window.confirm("Remove this conversion?")) {
													try {
														deleteOpportunity(opp.id);
														showToast(
															"Opportunity removed successfully!",
															"success"
														);
													} catch {
														showToast("Error removing opportunity.", "error");
													}
												}
											}}>
											Remove
										</CustomButton>
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default OpportunitiesTable;
