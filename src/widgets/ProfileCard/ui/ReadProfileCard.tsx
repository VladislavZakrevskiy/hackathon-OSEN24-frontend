import { Dispatch, FC, SetStateAction } from "react";
import { Button, Card, Image, Typography } from "antd";
import { Edit } from "lucide-react";
import { _E_Customer, _E_Doctor, SearchClinicTableByCustomerQuery } from "@/shared/__generate/graphql-frontend";
import { ProfileTable } from "./ProfileTable";
const { Title, Text } = Typography;

interface ReadProfileCardProps {
	tables: SearchClinicTableByCustomerQuery;
	setMode: Dispatch<SetStateAction<"edit" | "read">>;
	user: _E_Customer | _E_Doctor | null;
	customer: _E_Customer;
}

export const ReadProfileCard: FC<ReadProfileCardProps> = ({ setMode, tables, customer }) => {
	return (
		<Card
			title={
				<div className="flex justify-between">
					<h1>Личный кабинет</h1>
					<Button onClick={() => setMode((prev) => (prev === "edit" ? "read" : "edit"))}>
						<Edit size={20} />
					</Button>
				</div>
			}
			className="h-fit"
		>
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
				<ProfileTable tables={tables} />
			</div>
		</Card>
	);
};
