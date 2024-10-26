import React from "react";
import { Card } from "antd";

interface ServiceCardProps {
	title: string;
	description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
	return (
		<Card title={<span className="text-lg font-semibold text-white">{title}</span>}>
			<p className="text-base">{description}</p>
		</Card>
	);
};

export default ServiceCard;
