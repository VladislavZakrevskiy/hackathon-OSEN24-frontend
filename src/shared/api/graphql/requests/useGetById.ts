import { _E_Customer, useSearchCustomerLazyQuery } from "@/shared/__generate/graphql-frontend";
import { useState } from "react";

export const useGetCustomerById = (searchStr: string) => {
	const [searchCurtomer, { loading: CustomerLoading }] = useSearchCustomerLazyQuery({ fetchPolicy: "no-cache" });
	const [customer, setCustomer] = useState<_E_Customer | null>(null);

	const fetchCustomer = async () => {
		const { data: customers } = await searchCurtomer({
			variables: { searchStr },
		});
		// @ts-ignore
		setCustomer(customers?.searchCustomer?.elems?.[0]);
	};

	return { fetchCustomer, customer, isLoading: CustomerLoading };
};
