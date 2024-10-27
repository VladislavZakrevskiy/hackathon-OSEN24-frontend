import { useSearchClinicLazyQuery, useSearchClinicOfficeLazyQuery } from "@/shared/__generate/graphql-frontend";
import { Office } from "../browserStore";

export const useGetOfficeData = () => {
	const [searchClinic, { loading: ClinicLoading }] = useSearchClinicLazyQuery();
	const [searchOffice, { loading: OfficeLoading, refetch }] = useSearchClinicOfficeLazyQuery({
		fetchPolicy: "no-cache",
	});

	const fetchOfficeData = async () => {
		const { data: clinics } = await searchClinic({ variables: { searchStr: "" } });
		const offices: Office[] = [];

		for (const clinic of clinics?.searchClinic.elems || []) {
			const { data } = await searchOffice({ variables: { clinicId: clinic.id, officeNumber: "" } });
			offices.push(...((data?.searchClinicOffice.elems as Office[]) || []));
		}
		return offices;
	};

	return { isLoading: ClinicLoading || OfficeLoading, fetchOfficeData, refetchOfficeData: refetch };
};
