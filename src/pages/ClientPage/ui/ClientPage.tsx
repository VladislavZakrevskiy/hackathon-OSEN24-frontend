import React, { useEffect } from "react";
import { Card, Image, Layout, Spin, Typography } from "antd";
import AppointmentForm from "@/widgets/AppointmentForm";
import { useGetCustomerById } from "@/shared/api/graphql/requests/useGetById";
import { useUserStore } from "@/entities/User";

const { Content } = Layout;

const ClientPage: React.FC = () => {
	const { Title, Text } = Typography;
	const { user } = useUserStore();
	const { customer, fetchCustomer, isLoading } = useGetCustomerById(
		(user?.person.entity?.firstName || "") + (user?.person.entity?.lastName || ""),
	);

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
		<Content className="p-12 grid grid-cols-2 h-full gap-2">
			<Card title={<h1>Личный кабинет</h1>}>
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
			</Card>
			<div>
				<AppointmentForm />
			</div>
		</Content>
	);
};

export default ClientPage;
