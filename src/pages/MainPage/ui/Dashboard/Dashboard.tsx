import { Layout, Spin } from "antd";
import { TableChart } from "./charts/TableChart";
import { useGetStatFromTable } from "./algorithms/useGetStatFromTable";

export const Dashboard = () => {
	const { statistics } = useGetStatFromTable();
	return (
		<div className="bg-white">
			<Layout>
				{!statistics ? (
					<Spin />
				) : (
					<div className="grid grid-cols-2 grid-rows-2 max-w-screen">
						<TableChart statistics={statistics} />
					</div>
				)}
			</Layout>
		</div>
	);
};
