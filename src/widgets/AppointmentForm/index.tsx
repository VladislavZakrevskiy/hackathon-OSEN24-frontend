import React, { useEffect, useMemo, useRef, useState } from "react";
import { Form, Button, Card, Select, message, Tour } from "antd";
import {
	useSearchClinicDoctorLazyQuery,
	useSearchClinicLazyQuery,
	useSearchClinicDoctorAvailabilityLazyQuery,
	useCreateClinicTableMutation,
	Scalars,
	Exact,
} from "@/shared/__generate/graphql-frontend";
import { useUserStore } from "@/entities/User";
import { TourProps } from "antd/lib";
import moment from "moment";
import { ApolloQueryResult } from "@apollo/client";

interface FormValues {
	beginDate?: Date;
	endDate?: Date;
	clinicId?: string;
	doctorId?: string;
	doctorType?: string;
	officeId?: string;
	avaibleId?: string;
}

interface AppointmentProps {
	refetch: (
		variables?: Partial<
			Exact<{
				customerId: Scalars["String"]["input"];
				dateFrom: Scalars["_DateTime"]["input"];
				dateTo: Scalars["_DateTime"]["input"];
			}>
		>,
	) => Promise<ApolloQueryResult<unknown>>;
}

const AppointmentForm: React.FC<AppointmentProps> = ({ refetch }) => {
	const [isTourOpen, setIsTourOpen] = useState<boolean>(!localStorage.getItem("isPersonWasOnClientPage"));
	const ref1 = useRef<HTMLDivElement | null>(null);
	const ref2 = useRef<HTMLDivElement | null>(null);
	const ref3 = useRef<HTMLDivElement | null>(null);
	const ref4 = useRef<HTMLDivElement | null>(null);
	const ref5 = useRef<HTMLButtonElement | null>(null);

	const steps: TourProps["steps"] = [
		{
			title: "Клиника",
			nextButtonProps: { children: "Дальше" },
			prevButtonProps: { children: "Назад" },
			description: "Выберите клинику, в которой хотите получить помощь",
			target: () => ref1.current!,
		},
		{
			title: "Кабинет",
			nextButtonProps: { children: "Дальше" },
			prevButtonProps: { children: "Назад" },
			description: "После выбора клиники можно выбрать тип врача...",
			target: () => ref2.current!,
		},
		{
			title: "Доктор",
			nextButtonProps: { children: "Дальше" },
			prevButtonProps: { children: "Назад" },
			description: "...а потом и самого врача",
			target: () => ref3.current!,
		},
		{
			title: "Дата и время визита",
			nextButtonProps: { children: "Дальше" },
			prevButtonProps: { children: "Назад" },
			description: "Последним этапом выбираете дату и время приема",
			target: () => ref4.current!,
		},
		{
			title: "Завершить",
			nextButtonProps: { children: "Дальше" },
			prevButtonProps: { children: "Назад" },
			description: "Ура! Ваше заявление принято и мы ждем вас в нашей клинике!",
			target: () => {
				localStorage.setItem("isPersonWasOnClientPage", "true");
				return ref5.current!;
			},
		},
	];

	const [{ clinicId, doctorId, beginDate, doctorType, endDate, officeId, avaibleId }, setForm] = useState<FormValues>(
		{},
	);
	const [messageApi, contextHolder] = message.useMessage();

	const { user } = useUserStore();
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
	const [avaiblity, setAvaiblity] = useState<
		Array<{
			__typename: "_E_ClinicDoctorAvailability";
			id: string;
			beginDate: unknown;
			endDate: unknown;
			clinicOffice: { __typename?: "_E_ClinicOffice"; id: string; officeNumber?: string | null };
		}>
	>([]);

	const [createAppointment, { loading: AppoinmentLoading }] = useCreateClinicTableMutation();
	const [searchClinic, { loading: clinicsLoading }] = useSearchClinicLazyQuery();
	const [searchDoctor, { loading: doctorsLoading }] = useSearchClinicDoctorLazyQuery();
	const [searchAvaiblity, { loading: avaiblityLoading }] = useSearchClinicDoctorAvailabilityLazyQuery();
	const doctorTypes = useMemo(() => {
		const types: string[] = [];
		for (const doctor of clinicDoctors) {
			if (!types.includes(doctor.doctor.entity?.doctorType.name || "")) {
				types.push(doctor.doctor.entity?.doctorType.name || "");
			}
		}
		return types;
	}, [clinicDoctors]);

	const typedDoctors = useMemo(() => {
		return clinicDoctors.filter(({ doctor }) => doctor.entity?.doctorType.name === doctorType);
	}, [doctorType, clinicDoctors]);

	const showSuccess = () => {
		messageApi.success("Запись прошла успешно!");
	};

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

	// Avaible
	useEffect(() => {
		const getData = async () => {
			const fromDate = new Date();
			const toDate = new Date();
			fromDate.setFullYear(new Date().getFullYear() - 1);
			toDate.setFullYear(new Date().getFullYear() + 1);

			const { data } = await searchAvaiblity({
				variables: {
					clinicDoctorId: doctorId || "",
					dateFrom: fromDate.toISOString().slice(0, -1),
					dateTo: toDate.toISOString().slice(0, -1),
				},
			});
			setAvaiblity(data?.searchClinicDoctorAvailability.elems || []);
		};
		getData();
	}, [clinicId, doctorId]);

	const onFinish = async () => {
		await createAppointment({
			variables: {
				beginDate: beginDate?.toISOString().slice(0, -1),
				endDate: endDate?.toISOString().slice(0, -1),
				clinicId: clinicId || "",
				clinicDoctorId: doctorId || "",
				clinicOfficeId: officeId || "",
				customerId: user?.id || "",
			},
		});
		await refetch({
			customerId: user?.id || "",
			dateFrom: moment(
				moment(new Date())
					.year(new Date().getFullYear() - 1)
					.toDate(),
			)
				.startOf("day")
				.format("YYYY-MM-DDTHH:mm:ss.SSS"),
			dateTo: moment(
				moment(new Date())
					.year(new Date().getFullYear() + 1)
					.toDate(),
			)
				.startOf("day")
				.format("YYYY-MM-DDTHH:mm:ss.SSS"),
		});
		showSuccess();
	};

	return (
		<Card title="Запись на прием">
			<Form onFinish={onFinish}>

			
			{contextHolder}
			<Tour open={isTourOpen} onClose={() => setIsTourOpen(false)} steps={steps} />
			<div ref={ref1}>
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
			</div>
			<div ref={ref2}>
				<Form.Item label="Врач" rules={[{ required: true, message: "Выберите тип врача" }]}>
					<Select
						size="large"
						disabled={!clinicId}
						placeholder="Какой врач вам нужен"
						value={doctorType}
						options={doctorTypes.map((type) => ({
							label: `${type}`,
							value: type,
						}))}
						onChange={(type) => setForm((prev) => ({ ...prev, doctorType: type }))}
					/>
				</Form.Item>
			</div>
			<div ref={ref3}>
				<Form.Item label="Доктор" name="doctorId" rules={[{ required: true, message: "Выберите доктора" }]}>
					<Select
						size="large"
						disabled={!doctorType}
						loading={doctorsLoading}
						value={doctorId}
						placeholder="Выберите доктора"
						options={typedDoctors.map((doctor) => ({
							label: `${doctor.doctor.entity?.person.entity?.firstName} ${doctor.doctor.entity?.person.entity?.lastName}`,
							value: doctor.id,
						}))}
						onChange={(doctorId) => setForm((prev) => ({ ...prev, doctorId }))}
					/>
				</Form.Item>
			</div>
			<div ref={ref4}>
				<Form.Item label="Дата и время визита" rules={[{ required: true, message: "Выберите дату и время" }]}>
					<Select
						size="large"
						disabled={!doctorId}
						loading={avaiblityLoading}
						value={avaibleId}
						placeholder="Выберите время записи"
						options={avaiblity.map((avaible) => ({
							label: `${moment(avaible.beginDate as string).format("DD.MM")} ${moment(avaible.beginDate as string).format("hh:mm")}-${moment(avaible.endDate as string).format("HH:mm")}`,
							value: avaible.id,
						}))}
						onChange={(id) =>
							setForm((prev) => {
								const find_avaible = avaiblity.find(({ id: _id }) => _id === id);
								return {
									...prev,
									beginDate: new Date(find_avaible?.beginDate as string),
									endDate: new Date(find_avaible?.endDate as string),
									officeId: find_avaible?.clinicOffice.id,
									avaibleId: id,
								};
							})
						}
					/>
				</Form.Item>
			</div>
			<Form.Item>
				<Button
					ref={ref5}
					size="large"
					className="w-full"
					loading={AppoinmentLoading}
					onClick={onFinish}
					type="primary"
					htmlType="submit"
				>
					Записаться
				</Button>
			</Form.Item>
			</Form>
		</Card>
	);
};

export default AppointmentForm;
