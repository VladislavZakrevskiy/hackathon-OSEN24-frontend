import React from "react";
import { Layout, Typography } from "antd";

const { Footer } = Layout;

const FooterComponent: React.FC = () => {
	return (
		<Footer className="flex flex-col gap-1">
			<hr className="mb-3" />
			<Typography.Text>©2024 Платформа для записи к врачу pepper_coding. Все права защищены.</Typography.Text>
			<Typography.Text>Телефон справочной: +7 (904) 447-77-77</Typography.Text>
			<Typography.Text>Телефон директора: +7 (904) 447-85-56</Typography.Text>
		</Footer>
	);
};

export default FooterComponent;
