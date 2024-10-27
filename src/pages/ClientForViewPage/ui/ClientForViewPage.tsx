import { useGetCustomerById } from "@/shared/api/graphql/requests/useGetById";
import { Card, Image, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { useParams } from "react-router-dom";
const { Text, Title } = Typography;

const ClientForViewPage = () => {
	const { id } = useParams<{ id: string }>();
	const { customer } = useGetCustomerById(id || "");

	if (!customer) {
		return (
			<Content className="p-12 grid lg:grid-cols-2 lg:gap-2 grid-cols-1 gap-5">
				<Title>Простите, но такого пользователя нет</Title>
			</Content>
		);
	}

	return (
		<Content className="p-12 grid grid-cols-1 gap-5">
			<Card title={`${customer?.person.entity?.firstName} ${customer?.person.entity?.lastName}`} className="h-fit">
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
				</div>
			</Card>
		</Content>
	);
};

export default ClientForViewPage;
