import { useUserStore } from "@/entities/User";
import { getRouteClientPage } from "@/shared/consts/router";
import { Button, Card } from "antd";
import { useNavigate } from "react-router-dom";

export const ContactInfo = () => {
	const { user } = useUserStore();
	const nav = useNavigate();

	return (
		<Card>
			<div className="flex gap-4 justify-center items-center">
				<Button type="primary" size="large" href="tel:+1234567890">
					Позвонить
				</Button>
				<Button type="primary" size="large" href="mailto:example@example.com">
					Написать на почту
				</Button>
				<Button
					type="primary"
					size="large"
					onClick={() =>
						nav(getRouteClientPage(user?.person.entity?.firstName + (user?.person.entity?.lastName || "")))
					}
				>
					Записаться на прием
				</Button>
			</div>
		</Card>
	);
};
