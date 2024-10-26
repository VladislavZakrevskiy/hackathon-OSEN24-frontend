import React from "react";
import { Card } from "antd";

const reviews = [
  { name: "Иван Иванов", comment: "Отличная клиника, вежливый персонал!" },
  { name: "Анна Петрова", comment: "Очень довольна консультацией!" },
  { name: "Сергей Сергеев", comment: "Все было быстро и удобно." },
];

export const ReviewsSection = () => (
  <Card className="bg-gradient-to-r from-green-300 to-green-200 text-gray-700 text-center p-4 mt-5">
    <h2 className="text-2xl font-semibold mb-4">Отзывы наших пациентов</h2>
    {reviews.map((review, index) => (
      <div key={index} className="mb-4">
        <strong className="text-lg">{review.name}</strong>
        <p className="text-base">{review.comment}</p>
        {index < reviews.length - 1 && (
          <hr className="border-white my-2" />
        )}
      </div>
    ))}
  </Card>
);
