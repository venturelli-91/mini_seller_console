import React, { useState } from "react";
import { useToast } from "../ui/ToastProvider";
import type { AddLeadModalProps } from "../../types";
import CustomButton from "../ui/CustomButton";
import AddLeadFormFields from "./AddLeadFormFields";

const initialForm = {
	name: "",
	email: "",
	company: "",
	source: "",
	status: "new",
	score: 0,
};

const AddLeadModal: React.FC<AddLeadModalProps> = ({
	open,
	onClose,
	onAdd,
}) => {
	const [form, setForm] = useState(initialForm);
	const [error, setError] = useState<string | null>(null);
	const { showToast } = useToast();

	if (!open) return null;

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: name === "score" ? Number(value) : value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!form.name || !form.email || !form.company) {
			setError("Please fill in all required fields.");
			return;
		}
		setError(null);
		try {
			onAdd(form);
			setForm(initialForm);
			onClose();
			showToast("Successfully added lead.", "success");
		} catch {
			showToast("Error adding lead.", "error");
		}
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-2">
			<form
				onSubmit={handleSubmit}
				className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-xs sm:max-w-md shadow-lg relative">
				<h3 className="text-xl sm:text-2xl font-bold mb-4 text-center">
					Add Lead
				</h3>
				<button
					type="button"
					className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
					onClick={onClose}
					aria-label="Close">
					×
				</button>
				<AddLeadFormFields
					form={form}
					onChange={handleChange}
				/>
				{error && <div className="text-red-500 text-sm mb-2">{error}</div>}
				<CustomButton
					type="submit"
					color="purple"
					className="w-full mt-2">
					Add Lead
				</CustomButton>
			</form>
		</div>
	);
};

export default AddLeadModal;
