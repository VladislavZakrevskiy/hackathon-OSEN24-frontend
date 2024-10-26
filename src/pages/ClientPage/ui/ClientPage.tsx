import React, { useEffect, useState } from "react";
import { Layout, Spin, Typography } from "antd";
import FooterComponent from "@/widgets/Footer";
import ServiceCard from "@/widgets/ServiceCard";
import AppointmentForm from "@/widgets/AppointmentForm";
import { fetchClientData } from "@/shared/api/graphql/client";
import { Header } from "@/widgets";
import { useParams } from "react-router-dom";

const { Content } = Layout;

const ClientPage: React.FC = () => {
	//   const { Title, Text } = Typography;

	//   const { id } = useParams<{ id: string }>();
	//   const [clientData, setClientData] = useState<any>(null);
	//   const [loading, setLoading] = useState<boolean>(true);
	//   const [error, setError] = useState<string | null>(null);

	//   useEffect(() => {
	//     const loadClientData = async () => {
	//       if (!id) {
	//         setError('ID клиента не указан');
	//         setLoading(false);
	//         return;
	//       }

	//       try {
	//         const data = await fetchClientData(id);
	//         setClientData(data);
	//       } catch (err) {
	//         setError('Не удалось загрузить данные клиента');
	//       } finally {
	//         setLoading(false);
	//       }
	//     };

	//     loadClientData();
	//   }, [id]);

	//   if (loading) {
	//     return <Spin tip="Загрузка..." />;
	//   }

	//   if (error) {
	//     return <div>{error}</div>;
	//   }

	//   if (!clientData) {
	//     return <div>Данные клиента не найдены.</div>;
	//   }

	return (
		<Layout>
			<Content
				style={{
					padding: "20px",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					maxWidth: "800px",
					minWidth: "600px",
					margin: "0 auto",
				}}
			>
				<h1>Личный кабинет</h1>

				{/* <Title>{`${clientData.firstName} ${clientData.lastName}`}</Title>
        <Text>Телефон: {clientData.phone}</Text>
        <Text>Дата рождения: {clientData.dateOfBirth}</Text> */}
				<h2>Запись на прием</h2>
				<AppointmentForm />
			</Content>
			<FooterComponent />
		</Layout>
	);
};

export default ClientPage;
