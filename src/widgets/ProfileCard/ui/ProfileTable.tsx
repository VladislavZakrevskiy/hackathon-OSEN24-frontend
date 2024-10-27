import { SearchClinicTableByCustomerQuery } from "@/shared/__generate/graphql-frontend";
import { getRouteViewDoctorPage } from "@/shared/consts/router";
import { Empty, Skeleton, Table, Typography } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";

export const ProfileTable = ({
	tables,
	TableLoading,
}: {
	tables: SearchClinicTableByCustomerQuery;
	TableLoading: boolean;
}) => {
	if (TableLoading) {
		return (
			<Table
				dataSource={[
					{ loading1: <Skeleton />, loading2: <Skeleton />, loading3: <Skeleton />, loading4: <Skeleton /> },
					{ loading1: <Skeleton />, loading2: <Skeleton />, loading3: <Skeleton />, loading4: <Skeleton /> },
				]}
				columns={[
					{
						key: "loading1",
						dataIndex: "loading1",
						title: "Loading",
					},
					{
						key: "loading2",
						dataIndex: "loading2",
						title: "Loading",
					},
					{
						key: "loading3",
						dataIndex: "loading3",
						title: "Loading",
					},
					{
						key: "loading4",
						dataIndex: "loading4",
						title: "Loading",
					},
				]}
			/>
		);
	}

	return (
		<Table
			pagination={{ pageSize: 3 }}
			locale={{
				emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span>Нет данных для отображения</span>} />,
			}}
			dataSource={tables?.searchClinicTable.elems.map((table, i) => ({
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
