import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterComponent: React.FC = () => {
  return (
    <Footer className="bg-gradient-to-r from-green-500 to-green-400 text-white text-center">
      <hr className="border-white my-2 w-full" />
      <div className="container mx-auto">
        ©2024 Клиника pepper_coding. Все права защищены.
        <br />
        Телефон: +7 (904) 447-58-65
      </div>
    </Footer>
  );
};

export default FooterComponent;
