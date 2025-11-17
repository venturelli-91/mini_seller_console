import React from "react";
import { AddLeadFormFieldsProps } from "../../types";

const AddLeadFormFields: React.FC<AddLeadFormFieldsProps> = ({
	form,
	onChange,
}) => (
	<>
		<div className="mb-3">
			<label className="block text-sm font-medium mb-1">Name*</label>
			<input
				name="name"
				value={form.name}
				onChange={onChange}
				className="w-full border rounded px-2 py-1 text-base"
				required
				placeholder="Enter name"
				title="Please enter the name."
				onInvalid={(e) =>
					e.currentTarget.setCustomValidity("Please enter the name.")
				}
				onInput={(e) => e.currentTarget.setCustomValidity("")}
			/>
		</div>
		<div className="mb-3">
			<label className="block text-sm font-medium mb-1">Email*</label>
			<input
				name="email"
				value={form.email}
				onChange={onChange}
				className="w-full border rounded px-2 py-1 text-base"
				required
				type="email"
				placeholder="Enter email"
				title="Please enter a valid email."
				onInvalid={(e) =>
					e.currentTarget.setCustomValidity("Please enter a valid email.")
				}
				onInput={(e) => e.currentTarget.setCustomValidity("")}
			/>
		</div>
		<div className="mb-3">
			<label className="block text-sm font-medium mb-1">Company*</label>
			<input
				name="company"
				value={form.company}
				onChange={onChange}
				className="w-full border rounded px-2 py-1 text-base"
				required
				placeholder="Enter company"
				title="Please enter the company."
				onInvalid={(e) =>
					e.currentTarget.setCustomValidity("Please enter the company.")
				}
				onInput={(e) => e.currentTarget.setCustomValidity("")}
			/>
		</div>
		<div className="mb-3">
			<label className="block text-sm font-medium mb-1">Source</label>
			<input
				name="source"
				value={form.source}
				onChange={onChange}
				className="w-full border rounded px-2 py-1 text-base"
				placeholder="Enter source"
			/>
		</div>
		<div className="mb-3">
			<label
				htmlFor="status"
				className="block text-sm font-medium mb-1">
				Status
			</label>
			<select
				id="status"
				name="status"
				value={form.status}
				onChange={onChange}
				className="w-full border rounded px-2 py-1 text-base">
				<option value="new">New</option>
				<option value="contacted">Contacted</option>
				<option value="qualified">Qualified</option>
				<option value="converted">Converted</option>
				<option value="lost">Lost</option>
			</select>
		</div>
		<div className="mb-3">
			<label className="block text-sm font-medium mb-1">Score</label>
			<input
				name="score"
				value={form.score}
				onChange={onChange}
				className="w-full border rounded px-2 py-1 text-base"
				type="number"
				min={0}
				max={100}
				placeholder="Enter score"
			/>
		</div>
	</>
);

export default AddLeadFormFields;
