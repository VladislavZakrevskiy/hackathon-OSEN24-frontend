import React, { useEffect } from "react";
import { Layout, Spin } from "antd";
import AppointmentForm from "@/widgets/AppointmentForm";
import { useGetCustomerById } from "@/shared/api/graphql/requests/useGetById";
import { useUserStore } from "@/entities/User";
import { ProfileCard } from "@/widgets/ProfileCard";
import { useSearchClinicTableByCustomerQuery } from "@/shared/__generate/graphql-frontend";
import moment from "moment";

const { Content } = Layout;

const ClientPage: React.FC = () => {
	const { user } = useUserStore();
	const { customer, fetchCustomer, isLoading } = useGetCustomerById(
		(user?.person.entity?.firstName || "") + (user?.person.entity?.lastName || ""),
	);
	const {
		data: tables,
		refetch,
		loading: TableLoading,
	} = useSearchClinicTableByCustomerQuery({
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
		return (
			<Layout>
				<Spin size="large" />
			</Layout>
		);
	}

	if (!customer) {
		return <div>Данные клиента не найдены.</div>;
	}

	return (
		<Content className="p-12 grid lg:grid-cols-2 lg:gap-2 grid-cols-1 gap-5">
			<ProfileCard tables={tables!} user={user} customer={customer} TableLoading={TableLoading} />
			<AppointmentForm refetch={refetch} />
		</Content>
	);
};

export default ClientPage;
