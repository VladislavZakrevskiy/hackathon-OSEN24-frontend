import { useSearchClinicQuery, useSearchClinicTableLazyQuery } from "@/shared/__generate/graphql-frontend";
import moment from "moment";
import { useEffect, useState } from "react";

export const useGetStatFromTable = () => {
	const { data } = useSearchClinicQuery({ variables: { searchStr: "" } });
	const [searchClinicTable] = useSearchClinicTableLazyQuery();
	const clinics = data?.searchClinic.elems || [];
	const [tables, setTables] = useState([]);

	const [statistics, setStatistics] = useState({
		frequentPatients: 0,
		monthlyRecords: {},
		recordsPerClinic: {},
		recordsPerDoctor: {},
	});

	useEffect(() => {
		const getTables = async () => {
			const allRecords = [];
			for (const clinic of clinics) {
				const { data } = await searchClinicTable({
					variables: {
						clinicId: clinic.id,
						dateFrom: moment().subtract(1, "y").toISOString(),
						dateTo: moment().add(1, "y").toISOString(),
					},
				});
				const records = data?.searchClinicTable.elems || [];
				allRecords.push(...records);
				setTables((prev) => [...prev, ...records]);
			}

			// Calculate statistics
			calculateStatistics(allRecords);
		};

		getTables();
	}, [clinics]);

	const calculateStatistics = (records) => {
		const monthlyRecords = {};
		const recordsPerClinic = {};
		const recordsPerDoctor = {};
		const patientVisitCount = {};

		records.forEach((record) => {
			const month = moment(record.beginDate).format("YYYY-MM");
			const clinicId = record.clinicOffice.id;
			const doctorId = record.clinicDoctor.id;
			const patientId = record.customer.entityId;

			// Count records per month
			monthlyRecords[month] = (monthlyRecords[month] || 0) + 1;

			// Count records per clinic
			recordsPerClinic[clinicId] = (recordsPerClinic[clinicId] || 0) + 1;

			// Count records per doctor
			recordsPerDoctor[doctorId] = (recordsPerDoctor[doctorId] || 0) + 1;

			// Count patient visits
			patientVisitCount[patientId] = (patientVisitCount[patientId] || 0) + 1;
		});

		const frequentPatients = Object.values(patientVisitCount).filter((count) => count >= 2).length;

		setStatistics({
			frequentPatients,
			monthlyRecords,
			recordsPerClinic,
			recordsPerDoctor,
		});
	};

	return { statistics, tables };
};
