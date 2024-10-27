import { useSearchDoctorQuery } from "@/shared/__generate/graphql-frontend";
import { DoctorAppoinmentTable } from "@/widgets/DoctorAppoinment";
import { Card, Image, Layout, Typography } from "antd";
import { useParams } from "react-router-dom";
const { Content } = Layout;
const { Title, Text } = Typography;

const DoctorForViewPage = () => {
	const { id } = useParams<{ id: string }>();
	const { data } = useSearchDoctorQuery({ variables: { searchStr: id || "МЕНЯНЕСУЩЕСТВУЕТ ПРОБЕЛ" } });
	const doctor = data?.searchDoctor?.elems?.[0];

	if (!doctor) {
		return (
			<Content className="p-12 grid lg:grid-cols-2 lg:gap-2 grid-cols-1 gap-5">
				<Title>Простите, но такого врача нет</Title>
			</Content>
		);
	}

	return (
		<Content className="p-12 grid grid-cols-1 gap-5">
			<Card title={`${doctor?.person.entity?.firstName} ${doctor?.person.entity?.lastName}`} className="h-fit">
				<div className="flex flex-col gap-4">
					<div className="flex flex-col gap-2">
						<div className="flex gap-2 items-center">
							<Image src="/images/doctor.png" width={100} height={100} className="rounded-md" />
							<div className="flex flex-col justify-center">
								<Title>{`${doctor.person.entity?.firstName || "Нет"} ${doctor.person.entity?.lastName || "Нет"}`}</Title>
								<div className="grid grid-cols-2 grid-rows-2">
									<Text>Специальность: {doctor.doctorType.name || "Нет"}</Text>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Card>
			<DoctorAppoinmentTable daysTo={3} />
		</Content>
	);
};

export default DoctorForViewPage;
