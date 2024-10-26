import { Button, Card } from "antd";

export const ContactInfo = () => (
	<Card>
		<div className="flex flex-col-reverse sm:flex-row gap-4 justify-center items-center">
			<Button type="primary" size="large" className="w-full sm:w-fit">
				Позвонить
			</Button>
			<Button type="primary" size="large" className="w-full sm:w-fit">
				Написать на почту
			</Button>
			<Button type="primary" size="large" className="w-full sm:w-fit">
				Записаться на прием
			</Button>
		</div>
	</Card>
);
