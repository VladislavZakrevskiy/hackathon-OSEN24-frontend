import React from "react";
import { Layout, Typography } from "antd";

const { Footer } = Layout;

const FooterComponent: React.FC = () => {
	return (
		<Footer className="flex flex-col gap-1">
			<hr className="mb-3" />
			<Typography.Text>©2024 Клиника pepper_coding. Все права защищены.</Typography.Text>
			<Typography.Text>Телефон: +7 (904) 447-58-65</Typography.Text>
			<Typography.Text>Телефон ГлавВрача: +7 (996) 336-20-57</Typography.Text>
		</Footer>
	);
};

export default FooterComponent;
