import React, { useEffect } from "react";
import { Card, Empty, Image, Layout, Spin, Table, Typography } from "antd";
import AppointmentForm from "@/widgets/AppointmentForm";
import { useGetCustomerById } from "@/shared/api/graphql/requests/useGetById";
import { useUserStore } from "@/entities/User";
import { useSearchClinicTableByCustomerQuery } from "@/shared/__generate/graphql-frontend";
import moment from "moment";
import { Link } from "react-router-dom";
import { getRouteDoctorPage } from "@/shared/consts/router";

const { Content } = Layout;

const ClientPage: React.FC = () => {
	const { Title, Text } = Typography;
	const { user } = useUserStore();
	const { customer, fetchCustomer, isLoading } = useGetCustomerById(
		(user?.person.entity?.firstName || "") + (user?.person.entity?.lastName || ""),
	);

	const { data: tables } = useSearchClinicTableByCustomerQuery({
		variables: {
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
		},
	});

	useEffect(() => {
		document.title = `Пациент ${customer?.person.entity?.firstName || ""} ${customer?.person.entity?.lastName || ""}`;
	}, []);

	useEffect(() => {
		fetchCustomer();
	}, [user]);

	if (isLoading) {
		return <Spin tip="Загрузка..." />;
	}

	if (!customer) {
		return <div>Данные клиента не найдены.</div>;
	}

	return (
		<Content className="p-12 grid grid-cols-2 gap-2">
			<Card title={<h1>Личный кабинет</h1>}>
				<div className="flex flex-col gap-4">
					<div className="flex flex-col gap-2">
						<div className="flex gap-2 items-center">
							<Image src="/images/customer.webp" width={100} height={100} className="rounded-md" />
							<div className="flex flex-col justify-center">
								<Title>{`${customer.person.entity?.firstName || "Нет"} ${customer.person.entity?.lastName || "Нет"}`}</Title>
								<div className="grid grid-cols-2 grid-rows-2">
									<Text>Дата рождения: {customer.person.entity?.birthDate || "Нет"}</Text>
									<Text>Телефон: {customer.phoneNumber || "Нет"}</Text>
									<Text>Полис: {customer.insurancePolicyNumber || "Нет"}</Text>
									<Text>ИНН: {customer.person.entity?.inn || "Нет"}</Text>
								</div>
							</div>
						</div>
					</div>
					<Table
						pagination={{ pageSize: 3 }}
						locale={{
							emptyText: (
								<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span>Нет данных для отображения</span>} />
							),
						}}
						dataSource={tables?.searchClinicTable.elems.map((table, i) => ({
							number: i + 1,
							date: `${moment(table.beginDate).format("YYYY-MM-DD")} ${moment(table.beginDate).format("hh:mm")}-${moment(table.endDate).format("hh:mm")}`,
							doctor: (
								<Link
									to={getRouteDoctorPage(
										(table.clinicDoctor.doctor.entity?.person.entity?.firstName || "") +
											table.clinicDoctor.doctor.entity?.person.entity?.lastName,
									)}
								>
									{table.clinicDoctor.doctor.entity?.person.entity?.firstName}{" "}
									{table.clinicDoctor.doctor.entity?.person.entity?.lastName}
								</Link>
							),
							officeNumber: table.clinicOffice.officeNumber,
						}))}
						columns={[
							{
								title: "Номер",
								dataIndex: "number",
								key: "number",
							},
							{
								title: "Дата",
								dataIndex: "date",
								key: "date",
							},
							{
								title: "Врач",
								dataIndex: "doctor",
								key: "doctor",
							},
							{
								title: "Номер кабинета",
								dataIndex: "officeNumber",
								key: "officeNumber",
							},
						]}
					/>
				</div>
			</Card>
			<div>
				<AppointmentForm />
			</div>
		</Content>
	);
};

export default ClientPage;
