import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { PageType, usePageStore } from "../../model/browserStore";
import { useGetDoctorAvailabilityData } from "../../model/hooks/useGetDoctorAvailabilityData";
import { useGetDoctorData } from "../../model/hooks/useGetDoctorData";
import { useGetOfficeData } from "../../model/hooks/useGetOfficeData";
import { AddModal } from "./AddModal";

interface DataTableProps {
	type: PageType;
	pageId: string;
}

const roleMap = {
	Doctor: "Врачи",
	Office: "Кабинеты",
	DoctorAvaible: "Часы работы врачей",
	New: "Новая вкладка",
};

const DataTable: React.FC<DataTableProps> = ({ type, pageId }) => {
	const [isAddOpen, setIsAddOpen] = useState(false);
	const { pages, setData } = usePageStore();
	const page = pages.find((p) => p.id === pageId);
	const { fetchDoctorAvailabilityData, isLoading: isAvailabilityLoading } = useGetDoctorAvailabilityData();
	const { fetchDoctorData, isLoading: isDoctorLoading } = useGetDoctorData();
	const { fetchOfficeData, isLoading: isOfficeLoading } = useGetOfficeData();

	useEffect(() => {
		if (!page?.data) {
			switch (type) {
				case "Doctor":
					fetchDoctorData().then((data) => setData(pageId, data));
					break;
				case "Office":
					fetchOfficeData().then((data) => setData(pageId, data));
					break;
				case "DoctorAvaible":
					fetchDoctorAvailabilityData().then((data) => setData(pageId, data || []));
					break;
			}
		}
	}, [type, pageId, page?.data, setData]);

	if (isAvailabilityLoading || isDoctorLoading || isOfficeLoading) return <p>Загрузка...</p>;

	const columns = getColumnsByType(type);

	return (
		<div>
			<div className="pb-2">
				<Button onClick={() => setIsAddOpen(false)}>Добавить</Button>
			</div>
			<AddModal
				open={isAddOpen}
				setIsOpen={setIsAddOpen}
				// TODO вставить опшины из пейджи
				options={[]}
				title={`Добавление в вкладку ${roleMap[page?.type || "Doctor"]}`}
			/>
			{/* @ts-ignore */}
			<Table dataSource={page.data} columns={columns} rowKey="id" />
		</div>
	);
};

export default DataTable;

const getColumnsByType = (type: PageType) => {
	switch (type) {
		case "Doctor":
			return [
				{ title: "ID", dataIndex: "id", key: "id" },
				{ title: "First Name", dataIndex: ["person", "entity", "firstName"], key: "firstName" },
				{ title: "Last Name", dataIndex: ["person", "entity", "lastName"], key: "lastName" },
				{ title: "Doctor Type", dataIndex: ["doctorType", "name"], key: "doctorType" },
			];
		case "Office":
			return [
				{ title: "ID", dataIndex: "id", key: "id" },
				{ title: "Clinic", dataIndex: ["clinic", "name"], key: "clinic" },
				{ title: "Office Number", dataIndex: "officeNumber", key: "officeNumber" },
			];
		case "DoctorAvaible":
			return [
				{ title: "ID", dataIndex: "id", key: "id" },
				{ title: "Begin Date", dataIndex: "beginDate", key: "beginDate" },
				{ title: "End Date", dataIndex: "endDate", key: "endDate" },
				{ title: "Office Number", dataIndex: ["clinicOffice", "officeNumber"], key: "officeNumber" },
			];
		default:
			return [];
	}
};
