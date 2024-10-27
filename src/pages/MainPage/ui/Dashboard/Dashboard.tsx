import { Card, Carousel, Layout, Spin, Statistic } from "antd";
import { useGetStatFromTable } from "./algorithms/useGetStatFromTable";
import { ClinicPatientChart } from "./charts/ClinicPatientChart";
import { MonthlyAppointmentsChart } from "./charts/MontlyAppoinmentChart";
import { OfficeAppointmentsChart } from "./charts/OfficeAppoinment";
import { DoctorWorkloadChart } from "./charts/DoctorWorkloadChart";
import { StatisticProps } from "antd/lib";
import CountUp from "react-countup";

const formatter: StatisticProps["formatter"] = (value) => <CountUp end={value as number} separator="," />;

export const Dashboard = () => {
	const { tables, loading, clinics, customers, doctors } = useGetStatFromTable();

	if (loading) {
		<Layout>
			<div className="flex justify-center items-center">
				<Spin />
			</div>
		</Layout>;
	}

	return (
		<Layout>
			<div className="grid grid-cols-2 p-12 gap-5 h-[60vh]">
				<Carousel autoplay arrows adaptiveHeight infinite>
					<ClinicPatientChart tables={tables} />
					{/* @ts-ignore */}
					<DoctorWorkloadChart tables={tables} />
					<MonthlyAppointmentsChart tables={tables} />
					<OfficeAppointmentsChart tables={tables} />
				</Carousel>
				<div className="flex flex-col gap-2">
					<Card>
						<Statistic title="Число Записей" value={tables.length} formatter={formatter} />
					</Card>
					<Card>
						<Statistic title="Число Клиник" value={clinics.length} formatter={formatter} />
					</Card>
					<Card>
						<Statistic title="Число Пациентов" value={customers.length} formatter={formatter} />
					</Card>
					<Card>
						<Statistic title="Число Врачей" value={doctors.length} formatter={formatter} />
					</Card>
				</div>
			</div>
		</Layout>
	);
};
