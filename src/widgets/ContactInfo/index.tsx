import { Button, Card } from "antd";

export const ContactInfo = () => (
	<Card>
		<div className="flex gap-4 justify-center items-center">
			<Button type="primary" size="large">
				Позвонить
			</Button>
			<Button type="primary" size="large">
				Написать на почту
			</Button>
			<Button type="primary" size="large">
				Записаться на прием
			</Button>
		</div>
	</Card>
);
