import React, { useState, useEffect } from "react";
import type { CustomFormProps } from "../../types";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CustomForm: React.FC<CustomFormProps> = ({
	lead,
	statusOptions,
	onSave,
	onCancel,
}) => {
	const [email, setEmail] = useState(lead.email);
	const [status, setStatus] = useState(lead.status);
	const [value, setValue] = useState(lead.value || 0);
	const [error, setError] = useState<string | null>(null);
	const [saving, setSaving] = useState(false);

	useEffect(() => {
		setEmail(lead.email);
		setStatus(lead.status);
		setValue(lead.value || 0);
		setError(null);
	}, [lead]);

	const handleSave = () => {
		if (!emailRegex.test(email)) {
			setError("Invalid email.");
			return;
		}
		setSaving(true);
		try {
			onSave({ email, status, value });
			setError(null);
		} catch {
			setError("Error saving. Please try again.");
		} finally {
			setSaving(false);
		}
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleSave();
			}}
			className="flex flex-col h-full">
			<div className="mb-4">
				<label className="block text-sm font-medium mb-1">Name</label>
				<div className="text-lg font-semibold">{lead.name}</div>
			</div>
			<div className="mb-4">
				<label className="block text-sm font-medium mb-1">Email</label>
				<div className="text-lg">{lead.company}</div>
			</div>
			<div className="mb-4">
				<label
					className="block text-sm font-medium mb-1"
					htmlFor="lead-email">
					E-mail
				</label>
				<input
					id="lead-email"
					type="email"
					className="w-full border rounded px-2 py-1 text-base"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					disabled={saving}
					placeholder="Type to enter email"
				/>
			</div>
			<div className="mb-4">
				<label
					className="block text-sm font-medium mb-1"
					htmlFor="lead-status">
					Status
				</label>
				<select
					id="lead-status"
					className="w-full border rounded px-2 py-1 text-base"
					value={status}
					onChange={(e) => setStatus(e.target.value)}
					disabled={saving}>
					{statusOptions.map((opt) => (
						<option
							key={opt}
							value={opt}>
							{opt}
						</option>
					))}
				</select>
			</div>
			<div className="mb-4">
				<label
					className="block text-sm font-medium mb-1"
					htmlFor="lead-value">
					Value ($)
				</label>
				<input
					id="lead-value"
					type="number"
					className="w-full border rounded px-2 py-1 text-base"
					value={value}
					onChange={(e) => setValue(Number(e.target.value))}
					disabled={saving}
					min={0}
					step="0.01"
					placeholder="Enter value in dollars"
				/>
			</div>
			{error && <div className="text-red-500 text-base mb-2">{error}</div>}
			<div className="mt-auto flex gap-2 justify-end">
				<button
					type="button"
					className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
					onClick={onCancel}
					disabled={saving}>
					Cancel
				</button>
				<button
					type="submit"
					className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 font-semibold"
					disabled={saving}>
					Save
				</button>
			</div>
		</form>
	);
};

export default CustomForm;
