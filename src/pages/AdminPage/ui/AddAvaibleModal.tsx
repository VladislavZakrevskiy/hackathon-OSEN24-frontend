import {
	useCreateClinicDoctorAvailabilityMutation,
	useSearchClinicDoctorLazyQuery,
	useSearchClinicLazyQuery,
	useSearchClinicOfficeLazyQuery,
} from "@/shared/__generate/graphql-frontend";
import { Button, Form, Modal, Select } from "antd";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { DatePicker } from "antd";
import moment from "moment";
const { RangePicker } = DatePicker;

interface FormValues {
	clinicId?: string;
	doctorId?: string;
	beginDate?: Date;
	endDate?: Date;
	officeId?: string;
}

interface AddAvaibleModalProps {
	onOk: () => void;
	open: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const AddAvaibleModal: FC<AddAvaibleModalProps> = ({ onOk, open, setIsOpen }) => {
	const [{ clinicId, doctorId, beginDate, endDate, officeId }, setForm] = useState<FormValues>({});

	const [clinics, setClinics] = useState<Array<{ __typename: "_E_Clinic"; id: string; name?: string | null }>>([]);
	const [clinicDoctors, setClinicDoctors] = useState<
		Array<{
			__typename: "_E_ClinicDoctor";
			id: string;
			clinic: { __typename?: "_E_Clinic"; id: string; name?: string | null };
			doctor: {
				__typename?: "_G_DoctorReference";
				entityId?: string | null;
				entity?: {
					__typename?: "_E_Doctor";
					doctorType: { __typename?: "_E_DoctorType"; id: string; name: string };
					person: {
						__typename?: "_G_PersonReference";
						entityId?: string | null;
						entity?: {
							__typename?: "_E_Person";
							firstName: string;
							lastName: string;
							inn?: string | null;
							birthDate?: unknown | null;
						} | null;
					};
				} | null;
			};
		}>
	>([]);
	const [offices, setOffices] = useState<
		Array<{
			__typename: "_E_ClinicOffice";
			id: string;
			officeNumber?: string | null;
			clinic: { __typename?: "_E_Clinic"; id: string; name?: string | null };
		}>
	>([]);

	const [searchClinic, { loading: clinicsLoading }] = useSearchClinicLazyQuery();
	const [searchDoctor, { loading: doctorsLoading }] = useSearchClinicDoctorLazyQuery();
	const [searchOffice, { loading: officeLoading }] = useSearchClinicOfficeLazyQuery();
	const [createAvailablity, { loading: availablityLoading }] = useCreateClinicDoctorAvailabilityMutation();

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

	// Doctor
	useEffect(() => {
		const getData = async () => {
			const { data } = await searchDoctor({
				variables: { clinicId: clinicId || "", searchStr: "" },
			});
			setClinicDoctors(data?.searchClinicDoctor.elems || []);
			setForm((prev) => ({ ...prev, appointment: undefined }));
		};
		getData();
	}, [clinicId]);

	// Office
	useEffect(() => {
		const getData = async () => {
			const { data } = await searchOffice({ variables: { clinicId: clinicId || "", officeNumber: "" } });
			setOffices(data?.searchClinicOffice.elems || []);
		};
		getData();
	}, [clinicId, doctorId]);

	const onFinish = async () => {
		await createAvailablity({
			variables: {
				beginDate: moment(beginDate || new Date())
					.add(3, "hour")
					?.toISOString()
					.slice(0, -1),
				endDate: moment(endDate || new Date())
					.add(3, "hour")
					?.toISOString()
					.slice(0, -1),
				clinicDoctorId: doctorId || "",
				clinicOfficeId: officeId || "",
			},
		});
		onOk();
		setIsOpen(false);
	};

	return (
		<Modal title="Добавить график работы врача" onClose={() => setIsOpen(false)} open={open}>
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
			<Form.Item label="Врач" rules={[{ required: true, message: "Выберите тип врача" }]}>
				<Select
					size="large"
					disabled={!clinicId}
					placeholder="Какой врач вам нужен"
					loading={doctorsLoading}
					value={doctorId}
					options={clinicDoctors.map((doctor) => ({
						label: `${doctor.doctor.entity?.person.entity?.firstName} ${doctor.doctor.entity?.person.entity?.lastName}`,
						value: doctor.id,
					}))}
					onChange={(doctorId) => setForm((prev) => ({ ...prev, doctorId }))}
				/>
			</Form.Item>
			<Form.Item label="Кабинет" rules={[{ required: true, message: "Выберите кабинет" }]}>
				<Select
					size="large"
					disabled={!clinicId}
					loading={officeLoading}
					value={officeId}
					placeholder="Выберите доктора"
					options={offices.map((office) => ({
						label: `Кабинет ${office.officeNumber}`,
						value: office.id,
					}))}
					onChange={(officeId) => setForm((prev) => ({ ...prev, officeId }))}
				/>
			</Form.Item>
			<Form.Item label="Дата и время визита" rules={[{ required: true, message: "Выберите дату и время" }]}>
				<RangePicker
					showTime={{ format: "HH:mm" }}
					format="YYYY-MM-DD HH:mm"
					onChange={(value, dateString) => {
						console.log("Selected Time: ", value);
						console.log("Formatted Selected Time: ", dateString);
					}}
					onOk={([start, end]) => setForm((prev) => ({ ...prev, beginDate: start?.toDate(), endDate: end?.toDate() }))}
				/>
			</Form.Item>
			<Form.Item>
				<Button
					size="large"
					className="w-full"
					loading={availablityLoading}
					onClick={onFinish}
					type="primary"
					htmlType="submit"
				>
					Отправить
				</Button>
			</Form.Item>
		</Modal>
	);
};
