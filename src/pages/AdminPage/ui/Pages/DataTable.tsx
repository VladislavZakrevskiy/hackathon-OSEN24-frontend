import React, { Key, useEffect, useState } from "react";
import { Button, Flex, Skeleton, Table } from "antd";
import { Doctor, DoctorAvailability, Office, PageType, usePageStore } from "../../model/browserStore";
import { useGetDoctorAvailabilityData } from "../../model/hooks/useGetDoctorAvailabilityData";
import { useGetDoctorData } from "../../model/hooks/useGetDoctorData";
import { useGetOfficeData } from "../../model/hooks/useGetOfficeData";
import { AddModal } from "./AddModal";
import {
	useCreateDoctorMutation,
	useCreatePersonMutation,
	useSearchDoctorTypeQuery,
	useSearchDoctorQuery,
	useDeleteDoctorMutation,
	useDeleteClinicDoctorAvailabilityMutation,
	useDeleteClinicOfficeMutation,
	useUpdateOrCreateDoctorTypeMutation,
	useSearchClinicQuery,
	useCreateClinicDoctorMutation,
} from "@/shared/__generate/graphql-frontend";
import { AddOfficeModal } from "../AddOfficeModal";
import { AddAvaibleModal } from "../AddAvaibleModal";
import { TableRowSelection } from "antd/es/table/interface";
import { v4 } from "uuid";

type OptionInput = {
	type: "text" | "date" | "select";
	name: string;
	key: string;
	options?: { label: string; value: string }[];
	isRequired?: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type EntityData = Doctor | Office | DoctorAvailability;

interface DataTableProps {
	type: PageType;
	pageId: string;
}

const getColumnsByType = (type: PageType) => {
	switch (type) {
		case "Врачи":
			return [
				{ title: "ID", dataIndex: "id", key: "id" },
				{ title: "Имя", dataIndex: ["person", "entity", "firstName"], key: "firstName" },
				{ title: "Фамилия", dataIndex: ["person", "entity", "lastName"], key: "lastName" },
				{ title: "Тип врача", dataIndex: ["doctorType", "name"], key: "doctorType" },
			];
		case "Кабинеты":
			return [
				{ title: "ID", dataIndex: "id", key: "id" },
				{ title: "Клиника", dataIndex: ["clinic", "name"], key: "clinic" },
				{ title: "Номер кабинета", dataIndex: "officeNumber", key: "officeNumber" },
			];
		case "Часы работы врачей":
			return [
				{ title: "ID", dataIndex: "id", key: "id" },
				{ title: "Дата начала", dataIndex: "beginDate", key: "beginDate" },
				{
					title: "Имя",
					dataIndex: ["clinicDoctor", "doctor", "entity", "person", "entity", "firstName"],
					key: "first_name",
				},
				{
					title: "Фамилия",
					dataIndex: ["clinicDoctor", "doctor", "entity", "person", "entity", "lastName"],
					key: "last_name",
				},
				{ title: "Дата окончания", dataIndex: "endDate", key: "endDate" },
				{ title: "Номер кабинета", dataIndex: ["clinicOffice", "officeNumber"], key: "officeNumber" },
			];
		case "Клиники":
			return [];
		default:
			return [];
	}
};

const DataTable: React.FC<DataTableProps> = ({ type, pageId }) => {
	const [isAddOpen, setIsAddOpen] = useState(false);
	const [rowSelectedKeys, setSelectedRowKeys] = useState<Key[]>([]);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [doctorTypeOptions, setDoctorTypeOptions] = useState<{ label: string; value: string }[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const { pages, setData } = usePageStore();
	const page = pages.find((p) => p.id === pageId);
	const { fetchDoctorAvailabilityData, isLoading: isAvailabilityLoading } = useGetDoctorAvailabilityData();
	const { fetchDoctorData, isLoading: isDoctorLoading } = useGetDoctorData();
	const { fetchOfficeData, isLoading: isOfficeLoading } = useGetOfficeData();
	const [createPersonMutation] = useCreatePersonMutation();
	const [createDoctorMutation] = useCreateDoctorMutation();
	const [deleteDoctor, { loading: DeleteDoctorLoading }] = useDeleteDoctorMutation();
	const [deleteAvailability, { loading: DeleteAvailabilityLoading }] = useDeleteClinicDoctorAvailabilityMutation();
	const [deleteOffice, { loading: DeleteOfficeLoading }] = useDeleteClinicOfficeMutation();
	const [createClinicDoctor] = useCreateClinicDoctorMutation();
	const [createDoctorType] = useUpdateOrCreateDoctorTypeMutation();
	const { data } = useSearchClinicQuery({ variables: { searchStr: "" } });

	const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
		setSelectedRowKeys(newSelectedRowKeys);
	};

	const rowSelection: TableRowSelection = {
		selectedRowKeys: rowSelectedKeys,
		onChange: onSelectChange,
	};

	const hasSelected = rowSelectedKeys.length > 0;

	const { data: doctorTypeData } = useSearchDoctorTypeQuery({ variables: { searchStr: "" } });
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { data: doctorData, refetch: refetchDoctor } = useSearchDoctorQuery({
		variables: { searchStr: "" },
		fetchPolicy: "no-cache",
	});

	useEffect(() => {
		if (!page?.data) {
			switch (type) {
				case "Врачи":
					fetchDoctorData().then((data) => setData(pageId, data));
					break;
				case "Кабинеты":
					fetchOfficeData().then((data) => setData(pageId, data));
					break;
				case "Часы работы врачей":
					fetchDoctorAvailabilityData().then((data) => {
						setData(pageId, data || []);
					});
					break;
				case "Клиники":
					break;
			}
		}
	}, [type, pageId, page?.data, setData]);

	useEffect(() => {
		if (doctorTypeData?.searchDoctorType?.elems) {
			const options = doctorTypeData.searchDoctorType.elems.map((type) => ({
				label: type.name,
				value: type.id,
			}));
			setDoctorTypeOptions(options);
		}
	}, [doctorTypeData]);

	const columns = getColumnsByType(type);
	const options: OptionInput[] = [
		{
			type: "select",
			name: "Клиника",
			key: "clinic",
			// @ts-ignore
			options: data?.searchClinic.elems.map((clinic) => ({ label: clinic.name, value: clinic.id })),
		},
		{ type: "text", name: "Имя", key: "firstName", isRequired: true },
		{ type: "text", name: "Фамилия", key: "lastName", isRequired: true },
		{ type: "text", name: "Врач", key: "doctorTypeName", isRequired: true },
		{ type: "text", name: "Описание (необзательно)", key: "doctorTypeDescription" },
	];

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleAddSubmit = async (values: Record<string, any>) => {
		if (type === "Врачи") {
			try {
				const personResult = await createPersonMutation({
					variables: {
						input: {
							firstName: values.firstName,
							lastName: values.lastName,
						},
					},
				});
				const { data } = await createDoctorType({
					variables: { id: v4(), name: values.doctorTypeName, description: values.doctorTypeDescription },
				});

				const personId = personResult.data?.packet?.createPerson?.id;
				const doctorType = data?.dictionaryPacket?.updateOrCreateDoctorType?.returning?.id;
				if (!personId || !doctorType) {
					throw new Error("Не удалось создать запись о человеке");
				}

				const { data: doctor } = await createDoctorMutation({
					variables: {
						doctorTypeId: doctorType,
						personId: personId,
					},
				});

				await createClinicDoctor({
					variables: { clinicId: values.clinic, doctorId: doctor?.packet?.createDoctor?.id || "" },
				});

				await refetchDoctor().then((updatedData) => {
					setData(pageId, updatedData.data?.searchDoctor?.elems || []);
				});

				setIsAddOpen(false);
			} catch (error) {
				console.error("Ошибка при добавлении врача:", error);
			}
		}
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleTableChange = (pagination: any) => {
		setCurrentPage(pagination.current);
	};

	const refetchByType = async () => {
		switch (type) {
			case "Врачи":
				await refetchDoctor().then((updatedData) => {
					setData(pageId, updatedData.data?.searchDoctor?.elems || []);
				});
				break;
			case "Кабинеты":
				fetchOfficeData().then((updatedData) => {
					setData(pageId, updatedData || []);
				});
				break;
			case "Часы работы врачей":
				fetchDoctorAvailabilityData().then((updatedData) => {
					setData(pageId, updatedData || []);
				});
				break;
		}
	};

	const deleteByType = async () => {
		switch (type) {
			case "Врачи":
				for (const id of rowSelectedKeys) {
					await deleteDoctor({ variables: { id: id.toString() } });
				}
				break;
			case "Кабинеты":
				for (const id of rowSelectedKeys) {
					await deleteOffice({ variables: { id: id.toString() } });
				}
				break;
			case "Часы работы врачей":
				for (const id of rowSelectedKeys) {
					await deleteAvailability({ variables: { id: id.toString() } });
				}
				break;
		}
		refetchByType();
		setSelectedRowKeys([]);
	};

	if (
		(() => {
			switch (type) {
				case "Врачи":
					return isDoctorLoading;
				case "Кабинеты":
					return isOfficeLoading;
				case "Часы работы врачей":
					return isAvailabilityLoading;
			}
		})()
	)
		return (
			<div>
				<div className="pb-2 flex gap-3">
					<Button onClick={() => setIsAddOpen(true)}>Добавить</Button>
					<Button onClick={refetchByType}>Обновить вручную</Button>
				</div>
				{type === "Врачи" ? (
					<AddModal
						open={isAddOpen}
						setIsOpen={setIsAddOpen}
						options={options}
						title={`Добавление в вкладку ${type}`}
						onSubmit={handleAddSubmit}
					/>
				) : type === "Кабинеты" ? (
					<AddOfficeModal
						open={isAddOpen}
						setIsOpen={setIsAddOpen}
						onOk={() =>
							fetchOfficeData().then((updatedData) => {
								setData(pageId, updatedData || []);
							})
						}
					/>
				) : (
					<AddAvaibleModal
						open={isAddOpen}
						setIsOpen={setIsAddOpen}
						onOk={() =>
							fetchDoctorAvailabilityData().then((updatedData) => {
								setData(pageId, updatedData || []);
							})
						}
					/>
				)}
				<Table
					dataSource={[
						{
							loading1: <Skeleton />,
							loading2: <Skeleton />,
							loading3: <Skeleton />,
							loading4: <Skeleton />,
							loading5: <Skeleton />,
						},
						{
							loading1: <Skeleton />,
							loading2: <Skeleton />,
							loading3: <Skeleton />,
							loading4: <Skeleton />,
							loading5: <Skeleton />,
						},
						{
							loading1: <Skeleton />,
							loading2: <Skeleton />,
							loading3: <Skeleton />,
							loading4: <Skeleton />,
							loading5: <Skeleton />,
						},
					]}
					columns={[
						{
							key: "loading1",
							title: "Loading",
							dataIndex: "loading1",
						},
						{
							key: "loading2",
							title: "Loading",
							dataIndex: "loading2",
						},
						{
							key: "loading3",
							title: "Loading",
							dataIndex: "loading3",
						},
						{
							key: "loading4",
							title: "Loading",
							dataIndex: "loading4",
						},
						{
							key: "loading5",
							title: "Loading",
							dataIndex: "loading5",
						},
					]}
					rowKey="id"
					pagination={{
						current: currentPage,
						pageSize: 6,
						onChange: handleTableChange,
					}}
				/>
			</div>
		);

	return (
		<div>
			<div className="pb-2 flex gap-3">
				<Button onClick={() => setIsAddOpen(true)}>Добавить</Button>
				<Button onClick={refetchByType}>Обновить вручную</Button>
				<Flex align="center" gap="middle">
					<Button
						danger
						onClick={deleteByType}
						disabled={!hasSelected}
						loading={DeleteDoctorLoading || DeleteAvailabilityLoading || DeleteOfficeLoading}
					>
						Удалить
					</Button>
					{hasSelected ? `Выбрано ${rowSelectedKeys.length} элементов` : null}
				</Flex>
			</div>
			{type === "Врачи" ? (
				<AddModal
					open={isAddOpen}
					setIsOpen={setIsAddOpen}
					options={options}
					title={`Добавление в вкладку ${type}`}
					onSubmit={handleAddSubmit}
				/>
			) : type === "Кабинеты" ? (
				<AddOfficeModal
					open={isAddOpen}
					setIsOpen={setIsAddOpen}
					onOk={() =>
						fetchOfficeData().then((updatedData) => {
							setData(pageId, updatedData || []);
						})
					}
				/>
			) : (
				<AddAvaibleModal
					open={isAddOpen}
					setIsOpen={setIsAddOpen}
					onOk={() =>
						fetchDoctorAvailabilityData().then((updatedData) => {
							setData(pageId, updatedData || []);
						})
					}
				/>
			)}
			<Table
				// @ts-ignore
				rowSelection={rowSelection}
				// @ts-ignore
				dataSource={page?.data || []}
				columns={columns}
				rowKey="id"
				pagination={{
					current: currentPage,
					pageSize: 6,
					onChange: handleTableChange,
				}}
			/>
		</div>
	);
};

export default DataTable;
