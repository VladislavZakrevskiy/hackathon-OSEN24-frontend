import {
    useSearchClinicDoctorAvailabilityLazyQuery,
    useSearchClinicDoctorLazyQuery,
    useSearchClinicLazyQuery,
} from "@/shared/__generate/graphql-frontend";
import { Doctor, DoctorAvailability } from "../browserStore";
import moment from "moment";

export const useGetDoctorAvailabilityData = () => {
    const [searchClinic, { loading: ClinicLoading }] = useSearchClinicLazyQuery();
    const [searchClinicDoctors, { loading: DoctorLoading }] = useSearchClinicDoctorLazyQuery();
    const [searchDoctorAvailability, { loading: AvaibleLoading }] = useSearchClinicDoctorAvailabilityLazyQuery();

    const fetchDoctorAvailabilityData = async () => {
        const { data: clinics } = await searchClinic({ variables: { searchStr: "" } });
        const doctors: Doctor[] = [];
        
        for (const clinic of clinics?.searchClinic.elems || []) {
            const { data } = await searchClinicDoctors({ 
                variables: { 
                    clinicId: clinic.id, 
                    searchStr: "" 
                } 
            });
            doctors.push(...((data?.searchClinicDoctor.elems as Doctor[]) || []));
        }
        
        const availability: DoctorAvailability[] = [];
        
        for (const doctor of doctors) {
            const { data } = await searchDoctorAvailability({
                variables: {
                    clinicDoctorId: doctor.id,
                    dateFrom: moment(
                        moment(new Date()).year(new Date().getFullYear() - 100).toDate(),
                    )
                        .startOf("day")
                        .format("YYYY-MM-DDTHH:mm:ss.SSS"),
                    dateTo: moment(
                        moment(new Date()).year(new Date().getFullYear() + 100).toDate(),
                    )
                        .startOf("day")
                        .format("YYYY-MM-DDTHH:mm:ss.SSS"),
                },
            });
        
            availability.push(...((data?.searchClinicDoctorAvailability.elems as DoctorAvailability[]) || []));
        }
        
        return availability;
    };

    return { 
        isLoading: ClinicLoading || DoctorLoading || AvaibleLoading, 
        fetchDoctorAvailabilityData 
    };
};
