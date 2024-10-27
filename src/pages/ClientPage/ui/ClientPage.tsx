import React, { useEffect } from "react";
import { Layout, Spin } from "antd";
import AppointmentForm from "@/widgets/AppointmentForm";
import { useGetCustomerById } from "@/shared/api/graphql/requests/useGetById";
import { useUserStore } from "@/entities/User";
import { ProfileCard } from "@/widgets/ProfileCard";

const { Content } = Layout;

const ClientPage: React.FC = () => {
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
		return <Spin />;
	}

	if (!customer) {
		return <div>Данные клиента не найдены.</div>;
	}

	return (
		<Content className="p-12 grid lg:grid-cols-2 lg:gap-2 grid-cols-1 gap-5">
			<ProfileCard user={user} customer={customer} />
			<AppointmentForm />
		</Content>
	);
};

export default ClientPage;
