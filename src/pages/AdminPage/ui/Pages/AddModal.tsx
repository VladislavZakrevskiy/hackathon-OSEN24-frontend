import React, { Dispatch, FC, SetStateAction } from "react";
import { Modal, Form, Input, Button, Select } from "antd";

type OptionInput = {
  type: "text" | "date" | "select";
  name: string;
  key: string;
  options?: { label: string; value: string }[];
};

interface AddModalProps {
  title: string;
  options: OptionInput[];
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (values: Record<string, any>) => void;
}

export const AddModal: FC<AddModalProps> = ({ title, open, options, setIsOpen, onSubmit }) => {
  const [form] = Form.useForm();

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      onSubmit(values);
      form.resetFields();
      setIsOpen(false);
    } catch (errorInfo) {
      console.error("Failed to submit form:", errorInfo);
    }
  };

  const handleCancel = () => {
    setIsOpen(false);
    form.resetFields();
  };

  return (
    <Modal
      title={title}
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Form form={form} layout="vertical" style={{ gap: "8px" }}>
        {options.map((option) => {
          switch (option.type) {
            case "text":
              return (
                <Form.Item
                  key={option.key}
                  name={option.key}
                  label={option.name}
                  rules={[
                    { required: true, message: `Пожалуйста, введите ${option.name}` },
                    { max: 15, message: "Длина не может быть больше 15 символов" },
                    { pattern: /^[^\d]*$/, message: "Поле не должно содержать цифры" },
                  ]}
                  style={{ marginBottom: "12px" }}
                >
                  <Input style={{ borderRadius: "4px" }} />
                </Form.Item>
              );
            case "select":
              return (
                <Form.Item
                  key={option.key}
                  name={option.key}
                  label={option.name}
                  rules={[{ required: true, message: `Пожалуйста, выберите ${option.name}` }]}
                  style={{ marginBottom: "12px" }}
                >
                  <Select style={{ width: "100%" }}>
                    {option.options?.map((opt) => (
                      <Select.Option key={opt.value} value={opt.value}>
                        {opt.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              );
            default:
              return null;
          }
        })}
        <Form.Item>
          <Button type="primary" onClick={handleOk} style={{ width: "100%", borderRadius: "4px" }}>
            Отправить
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
