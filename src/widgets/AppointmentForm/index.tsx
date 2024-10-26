import React from 'react';
import { Form, Input, DatePicker, Button } from 'antd';

const AppointmentForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Запись на прием:', values);
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item label="Имя" name="firstName" rules={[{ required: true, message: 'Введите ваше имя' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Фамилия" name="lastName" rules={[{ required: true, message: 'Введите вашу фамилию' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Телефон" name="phone" rules={[{ required: true, message: 'Введите ваш телефон' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Дата и время визита" name="appointment" rules={[{ required: true, message: 'Выберите дату и время' }]}>
        <DatePicker showTime />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Записаться</Button>
      </Form.Item>
    </Form>
  );
};

export default AppointmentForm;
