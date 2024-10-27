import { SearchClinicTableDocument, SearchClinicTableQueryVariables } from "@/shared/__generate/graphql-frontend";
import { getRouteViewClientPage, getRouteViewDoctorPage } from "@/shared/consts/router";
import { useQuery } from "@apollo/client";
import { Empty, Spin, Table, Typography } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";

type Appointment = {
	id: string;
	beginDate: string;
	endDate: string;
	comment: string | null;
	clinicOffice: {
		id: string;
		officeNumber: string;
	};
	customer: {
		entityId: string;
		entity: {
			person: {
				entity: {
					firstName: string;
					lastName: string;
				};
			};
		};
	};
	clinicDoctor: {
		id: string;
		doctor: {
			entityId: string;
			entity: {
				person: {
					entity: {
						firstName: string;
						lastName: string;
					};
				};
			};
		};
	};
};

type SearchClinicTableResponse = {
	searchClinicTable: {
		elems: Appointment[];
	};
};

export const DoctorAppoinmentTable = ({ daysTo }: { daysTo: number }) => {
	const { data, loading } = useQuery<SearchClinicTableResponse, SearchClinicTableQueryVariables>(
		SearchClinicTableDocument,
		{
			variables: {
				clinicId: "7429620454894731265",
				dateFrom: moment(new Date()).startOf("day").format("YYYY-MM-DDTHH:mm:ss.SSS"),
				dateTo: moment(new Date()).add(daysTo, "d").startOf("day").format("YYYY-MM-DDTHH:mm:ss.SSS"),
			},
			skip: false,
			notifyOnNetworkStatusChange: true,
		},
	);

	const tables = data?.searchClinicTable.elems;

	if (loading) {
		return <Spin size="large" />;
	}

	return (
		<Table
			pagination={{ pageSize: 3 }}
			locale={{
				emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span>Нет данных для отображения</span>} />,
			}}
			dataSource={tables?.map((table, i) => ({
				number: i + 1,
				date: `${moment(table.beginDate).format("YYYY-MM-DD")} ${moment(table.beginDate).format("hh:mm")}-${moment(table.endDate).format("hh:mm")}`,
				doctor: (
					<Link
						to={getRouteViewDoctorPage(
							(table.clinicDoctor.doctor.entity?.person.entity?.firstName || "") +
								table.clinicDoctor.doctor.entity?.person.entity?.lastName,
						)}
					>
						<Typography.Link>
							{table.clinicDoctor.doctor.entity?.person.entity?.firstName}{" "}
							{table.clinicDoctor.doctor.entity?.person.entity?.lastName}
						</Typography.Link>
					</Link>
				),
				officeNumber: table.clinicOffice.officeNumber,
				client: (
					<Link
						to={getRouteViewClientPage(
							`${table.customer.entity.person.entity.firstName}${table.customer.entity.person.entity.lastName}`,
						)}
					>
						<Typography.Link>
							{table.customer.entity.person.entity.firstName} {table.customer.entity.person.entity.lastName}
						</Typography.Link>
					</Link>
				),
			}))}
			columns={[
				{
					title: "Номер",
					dataIndex: "number",
					key: "number",
				},
				{
					title: "Дата",
					dataIndex: "date",
					key: "date",
				},
				{
					title: "Пациент",
					dataIndex: "client",
					key: "client",
				},
				{
					title: "Врач",
					dataIndex: "doctor",
					key: "doctor",
				},
				{
					title: "Номер кабинета",
					dataIndex: "officeNumber",
					key: "officeNumber",
				},
			]}
		/>
	);
};
