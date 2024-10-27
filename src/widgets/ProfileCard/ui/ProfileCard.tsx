import { _E_Customer, _E_Doctor, SearchClinicTableByCustomerQuery } from "@/shared/__generate/graphql-frontend";
import { FC, useState } from "react";
import { ReadProfileCard } from "./ReadProfileCard";
import { EditProfileCard } from "./EditProfileCard";

interface ProfileCardProps {
	user: _E_Customer | _E_Doctor | null;
	customer: _E_Customer;
	tables: SearchClinicTableByCustomerQuery;
	TableLoading: boolean;
}

export const ProfileCard: FC<ProfileCardProps> = ({ customer, user, tables, TableLoading }) => {
	const [mode, setMode] = useState<"edit" | "read">("read");

	if (mode === "read") {
		return (
			<ReadProfileCard TableLoading={TableLoading} customer={customer} setMode={setMode} tables={tables!} user={user} />
		);
	}

	return (
		<EditProfileCard TableLoading={TableLoading} customer={customer} setMode={setMode} tables={tables!} user={user} />
	);
};
