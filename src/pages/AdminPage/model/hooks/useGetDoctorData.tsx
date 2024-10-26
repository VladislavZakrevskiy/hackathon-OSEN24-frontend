import { useSearchDoctorLazyQuery } from "@/shared/__generate/graphql-frontend";

export const useGetDoctorData = () => {
	const [searchDoctors, { loading: DoctorLoading }] = useSearchDoctorLazyQuery();

	const fetchDoctorData = async () => {
		const { data: doctors } = await searchDoctors({ variables: { searchStr: "" } });

		return doctors?.searchDoctor.elems || [];
	};

	return { isLoading: DoctorLoading, fetchDoctorData };
};
