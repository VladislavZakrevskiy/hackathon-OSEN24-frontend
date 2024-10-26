import { _E_Customer, _E_Doctor, useSearchClinicTableByCustomerQuery } from "@/shared/__generate/graphql-frontend";
import moment from "moment";
import { FC, useState } from "react";
import { ReadProfileCard } from "./ReadProfileCard";
import { EditProfileCard } from "./EditProfileCard";

interface ProfileCardProps {
	user: _E_Customer | _E_Doctor | null;
	customer: _E_Customer;
}

export const ProfileCard: FC<ProfileCardProps> = ({ customer, user }) => {
	const [mode, setMode] = useState<"edit" | "read">("read");
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

	if (mode === "read") {
		return <ReadProfileCard customer={customer} setMode={setMode} tables={tables!} user={user} />;
	}

	return <EditProfileCard customer={customer} setMode={setMode} tables={tables!} user={user} />;
};
