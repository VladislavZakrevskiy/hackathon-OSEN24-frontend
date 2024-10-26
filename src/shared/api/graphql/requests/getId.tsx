import { UserRoles } from "@/entities/User";
import {
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
	const [] = useSearchDoctorLazyQuery();

	useEffect(() => {
		const fetchEntity = async () => {
			if (person) {
				switch (role) {
					case UserRoles.CLIENT:
						const { data: doctors } = await searchDoctor({
							variables: { searchStr: person.firstName + person.lastName },
						});
						setId(doctors?.searchDoctor?.elems?.[0]?.id) || "";
				}
			}
		};
	}, [person, role]);

	return { id, isLoading: DoctorLoading || CustomerLoading || PersonLoading };
};
