import React from "react";
import { Card } from "antd";

export const AdvantagesSection = () => (
	<Card>
		<h2 className="text-2xl font-semibold mb-4">Почему выбирают нас?</h2>
		<hr className="border-white mb-4" />
		<ul className="list-disc list-inside">
			<li className="text-lg">Высококвалифицированные специалисты</li>
			<li className="text-lg">Большой выбор клиник</li>
			<li className="text-lg">Индивидуальный подход к каждому пациенту</li>
			<li className="text-lg">Удобный интерфейс</li>
		</ul>
	</Card>
);
