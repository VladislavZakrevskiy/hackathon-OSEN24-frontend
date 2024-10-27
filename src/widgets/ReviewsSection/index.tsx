import React from "react";
import { Card } from "antd";

const reviews = [
	{ name: "Иван Иванов", comment: "Записался к врачу и попал к нему уже через час!" },
	{ name: "Анна Петрова", comment: "Очень довольна консультацией! По истории посещений выбрала себе любимого доктора!" },
	{ name: "Сергей Сергеев", comment: "Все было быстро и удобно. Рекомендую." },
];

export const ReviewsSection = () => (
	<Card>
		<h2 className="text-2xl font-semibold mb-4">Отзывы наших клиентов</h2>
		{reviews.map((review, index) => (
			<div key={index} className="mb-4">
				<strong className="text-lg">{review.name}</strong>
				<p className="text-base">{review.comment}</p>
				{index < reviews.length - 1 && <hr className="border-white my-2" />}
			</div>
		))}
	</Card>
);
