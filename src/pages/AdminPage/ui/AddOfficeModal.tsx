import {
	useCreateClinicOfficeMutation,
	useSearchClinicLazyQuery,
	useSearchClinicOfficeLazyQuery,
} from "@/shared/__generate/graphql-frontend";
import { Button, Form, Input, Modal, Select, Typography } from "antd";
import { Dispatch, FC, SetStateAction, useEffect, useMemo, useState } from "react";

interface FormValues {
	clinicId?: string;
	officeNumber?: string;
}

interface AddAvaibleModalProps {
	onOk: () => void;
	open: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const AddOfficeModal: FC<AddAvaibleModalProps> = ({ onOk, open, setIsOpen }) => {
	const [{ clinicId, officeNumber }, setForm] = useState<FormValues>({});

	const [clinics, setClinics] = useState<Array<{ __typename: "_E_Clinic"; id: string; name?: string | null }>>([]);
	const [offices, setOffices] = useState<
		Array<{
			__typename: "_E_ClinicOffice";
			id: string;
			officeNumber?: string | null;
			clinic: { __typename?: "_E_Clinic"; id: string; name?: string | null };
		}>
	>([]);

	const banOfficeList = useMemo(() => {
		const officeNumbers = new Set<string>();
		for (const office of offices) {
			if (office?.officeNumber) officeNumbers.add(office?.officeNumber);
		}
		return Array.from(officeNumbers);
	}, [clinicId, offices]);

	const [searchClinic, { loading: clinicsLoading }] = useSearchClinicLazyQuery();
	const [searchOffice, { loading: officeLoading }] = useSearchClinicOfficeLazyQuery();
	const [createOffice] = useCreateClinicOfficeMutation();

	// Clinic
	useEffect(() => {
		const getData = async () => {
			const { data } = await searchClinic({
				variables: { searchStr: "" },
			});
			setClinics(data?.searchClinic.elems || []);
			setForm((prev) => ({ ...prev, doctorId: undefined, officeId: undefined, appointment: undefined }));
		};
		getData();
	}, []);

	// Office
	useEffect(() => {
		const getData = async () => {
			const { data } = await searchOffice({ variables: { clinicId: clinicId || "", officeNumber: "" } });
			setOffices(data?.searchClinicOffice.elems || []);
		};
		getData();
	}, [clinicId]);

	const onFinish = async () => {
		createOffice({
			variables: {
				clinicId: clinicId || "",
				officeNumber: officeNumber || "",
			},
		});
		onOk();
		setIsOpen(false);
	};

	return (
		<Modal title="Добавить кабинет" onCancel={() => setIsOpen(false)} open={open}>
			<Form.Item label="Клиника" name="clinicId" rules={[{ required: true, message: "Выберите клинику" }]}>
				<Select
					size="large"
					loading={clinicsLoading}
					placeholder="Выберите клинику"
					value={clinicId}
					options={clinics.map((clinic) => ({
						label: clinic.name,
						value: clinic.id,
					}))}
					onChange={(clinicId) => setForm((prev) => ({ ...prev, clinicId }))}
				/>
			</Form.Item>

			<Form.Item label="Кабинет" rules={[{ required: true, message: "Выберите кабинет" }]}>
				<Input
					status={officeNumber && banOfficeList.includes(officeNumber) ? "error" : undefined}
					disabled={!clinicId || officeLoading}
					value={officeNumber}
					onChange={(e) => setForm((prev) => ({ ...prev, officeNumber: e.target.value }))}
				/>
				{officeNumber && banOfficeList.includes(officeNumber) && (
					<Typography.Text type="danger">Такой кабинет уже есть!</Typography.Text>
				)}
			</Form.Item>

			<Form.Item>
				<Button size="large" className="w-full" onClick={onFinish} type="primary" htmlType="submit">
					Отправить
				</Button>
			</Form.Item>
		</Modal>
	);
};
