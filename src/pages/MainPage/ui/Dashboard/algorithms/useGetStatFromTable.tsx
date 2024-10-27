import {
	useSearchClinicQuery,
	useSearchClinicWithoutOfficeTableLazyQuery,
	useSearchCustomerQuery,
	useSearchDoctorQuery,
} from "@/shared/__generate/graphql-frontend";
import moment from "moment";
import { useEffect, useState } from "react";

export const useGetStatFromTable = () => {
	const { data, loading: ClinicLoading } = useSearchClinicQuery({ variables: { searchStr: "" } });
	const { data: doctors, loading: DoctorLoading } = useSearchDoctorQuery({ variables: { searchStr: "" } });
	const { data: customers, loading: CustomerLoading } = useSearchCustomerQuery({ variables: { searchStr: "" } });
	const [searchClinicTable, { loading: TableLoading }] = useSearchClinicWithoutOfficeTableLazyQuery();
	const clinics = data?.searchClinic.elems || [];

	const [tables, setTables] = useState<
		Array<{
			__typename: "_E_ClinicTable";
			id: string;
			beginDate: string;
			endDate: string;
			clinicOffice: { __typename?: "_E_ClinicOffice"; id: string; officeNumber?: string | null };
			customer: {
				__typename?: "_G_CustomerReference";
				entityId?: string | null;
				entity?: {
					__typename?: "_E_Customer";
					person: {
						__typename?: "_G_PersonReference";
						entityId?: string | null;
						entity?: { __typename?: "_E_Person"; firstName: string; lastName: string } | null;
					};
				} | null;
			};
			clinicDoctor: {
				__typename?: "_E_ClinicDoctor";
				id: string;
				doctor: {
					__typename?: "_G_DoctorReference";
					entityId?: string | null;
					entity?: {
						__typename?: "_E_Doctor";
						person: {
							__typename?: "_G_PersonReference";
							entityId?: string | null;
							entity?: { __typename?: "_E_Person"; firstName: string; lastName: string } | null;
						};
					} | null;
				};
			};
		}>
	>([]);

	useEffect(() => {
		const getTables = async () => {
			for (const clinic of clinics) {
				const { data } = await searchClinicTable({
					variables: {
						clinicId: clinic.id,
						notoffice: "7429620459189698562",
						dateFrom: moment().add(-1, "y").toISOString().slice(0, -1),
						dateTo: moment().add(1, "y").toISOString().slice(0, -1),
					},
				});
				const records = data?.searchClinicTable.elems || [];
				setTables((prev) => [...prev, ...records]);
			}
		};

		getTables();
	}, [clinics]);

	return {
		tables,
		clinics,
		doctors: doctors?.searchDoctor.elems || [],
		customers: customers?.searchCustomer.elems || [],
		loading: TableLoading || CustomerLoading || DoctorLoading || ClinicLoading,
	};
};
