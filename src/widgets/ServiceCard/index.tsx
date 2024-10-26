import React from 'react';
import { Card } from 'antd';

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <Card
      className="bg-gradient-to-r from-green-500 to-green-400 text-white flex flex-col justify-between p-4 w-full h-[200px]"
      title={<span className="text-lg font-semibold text-white">{title}</span>}
    >
      <p className="text-base">{description}</p>
    </Card>
  );
};

export default ServiceCard;
