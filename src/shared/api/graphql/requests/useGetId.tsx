import { UserRoles } from "@/entities/User";
import {
	_E_Customer,
	_E_Doctor,
	useSearchCustomerLazyQuery,
	useSearchDoctorLazyQuery,
	useSearchPersonQuery,
} from "@/shared/__generate/graphql-frontend";
import { useEffect, useState } from "react";

export const useGetId = (given_name: string, role: UserRoles) => {
	const { data, loading: PersonLoading } = useSearchPersonQuery({ variables: { searchStr: given_name } });
	const person = data?.searchPerson.elems[0];
	const [id, setId] = useState<string>("");
	const [searchDoctor, { loading: DoctorLoading }] = useSearchDoctorLazyQuery();
	const [searchCurtomer, { loading: CustomerLoading }] = useSearchCustomerLazyQuery();
	const [doctor, setDoctor] = useState<_E_Doctor | null>(null);
	const [customer, setCustomer] = useState<_E_Customer | null>(null);

	useEffect(() => {
		const fetchEntity = async () => {
			if (person) {
				if (role === UserRoles.DOCTOR) {
					const { data: doctors } = await searchDoctor({
						variables: { searchStr: person.firstName + person.lastName },
					});
					setId(doctors?.searchDoctor?.elems?.[0]?.id || "");
					// @ts-ignore
					setDoctor(doctors?.searchDoctor?.elems?.[0]);
				}
				if (role === UserRoles.CLIENT) {
					const { data: customers } = await searchCurtomer({
						variables: { searchStr: person.firstName + person.lastName },
					});
					setId(customers?.searchCustomer?.elems?.[0]?.id || "");
					// @ts-ignore
					setCustomer(customers?.searchCustomer?.elems?.[0]);
				}
			}
		};
		fetchEntity();
	}, [person, role]);

	return {
		id,
		person,
		entity: role === UserRoles.CLIENT ? customer : doctor,
		isLoading: DoctorLoading || CustomerLoading || PersonLoading,
	};
};
