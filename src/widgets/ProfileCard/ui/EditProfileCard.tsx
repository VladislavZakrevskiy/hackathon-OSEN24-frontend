import { Dispatch, FC, SetStateAction, useState } from "react";
import { Button, Card, DatePicker, Form, Input, message } from "antd";
import { Edit } from "lucide-react";
import {
	_E_Customer,
	_E_Doctor,
	SearchClinicTableByCustomerQuery,
	useCreatePersonMutation,
	useUpdateAllCustomerMutation,
} from "@/shared/__generate/graphql-frontend";
import { ProfileTable } from "./ProfileTable";
import InputMask from "react-input-mask";
import moment from "moment";
import { useUserStore } from "@/entities/User";

interface EditProfileCardProps {
	tables: SearchClinicTableByCustomerQuery;
	setMode: Dispatch<SetStateAction<"edit" | "read">>;
	user: _E_Customer | _E_Doctor | null;
	customer: _E_Customer;
}

interface FormValues {
	firstName: string;
	lastname: string;
	birthDay: string;
	inn: string;
	insurancePolicyNumber: string;
	phoneNumber: string;
}

export const EditProfileCard: FC<EditProfileCardProps> = ({ setMode, tables, customer }) => {
	const [messageApi, contextHolder] = message.useMessage();
	const { setUser } = useUserStore();
	const [form, setForm] = useState<FormValues>({
		firstName: customer.person.entity?.firstName || "",
		lastname: customer.person.entity?.lastName || "",
		birthDay: customer.person.entity?.birthDate,
		inn: customer.person.entity?.inn || "",
		phoneNumber: customer.phoneNumber || "",
		insurancePolicyNumber: customer.insurancePolicyNumber || "",
	});
	const [createPerson, { loading: PersonLoading }] = useCreatePersonMutation();
	const [updateCustomer, { loading: CustomerLoading }] = useUpdateAllCustomerMutation();

	const showSuccess = () => {
		messageApi.success("Запись прошла успешно!");
	};

	const onSubmit = async () => {
		const { data: person } = await createPerson({
			variables: {
				input: {
					firstName: form.firstName,
					lastName: form.lastname,
					birthDate: form.birthDay ? new Date(form.birthDay).toISOString().slice(0, -1) : undefined,
					inn: form.inn ? form.inn : undefined,
				},
			},
		});

		await updateCustomer({
			variables: {
				id: customer.id,
				new_person_id: person?.packet?.createPerson?.id || "",
				insurancePolicyNumber: form.insurancePolicyNumber ? form.insurancePolicyNumber : undefined,
				phoneNumber: form.phoneNumber ? form.phoneNumber : undefined,
			},
		});
		showSuccess();
		setUser({ ...customer, ...form });
		setMode("read");
	};

	return (
		<Card
			title={
				<div className="flex justify-between">
					<h1>Личный кабинет</h1>
					<Button onClick={() => setMode((prev) => (prev === "edit" ? "read" : "edit"))}>
						<Edit size={20} />
					</Button>
				</div>
			}
			className="h-fit"
		>
			{contextHolder}
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<div className="flex gap-5 items-start ">
						<div className="flex flex-col justify-center gap-2">
							<Form.Item required>
								<Input
									className="w-full"
									required
									placeholder="Имя"
									value={form.firstName}
									onChange={(e) => setForm((prev) => ({ ...prev, firstName: e.target.value }))}
								/>
							</Form.Item>
							<Form.Item required>
								<Input
									className="w-full"
									required
									placeholder="Фамилия"
									value={form.lastname}
									onChange={(e) => setForm((prev) => ({ ...prev, lastname: e.target.value }))}
								/>
							</Form.Item>
							<div className="grid grid-cols-4 gap-2 ">
								<Form.Item label="Дата рождения">
									<DatePicker
										picker="date"
										value={form.birthDay ? moment(form.birthDay, "YYYY-MM-DD") : null}
										onChange={(moment) => setForm((prev) => ({ ...prev, birthDay: moment?.format("YYYY-MM-DD") }))}
										format="YYYY-MM-DD"
										placeholder="Дата рождения"
									/>
								</Form.Item>
								<Form.Item label="Номер">
									<InputMask
										mask="+7 (999) 999-99-99"
										maskChar="_"
										value={form.phoneNumber}
										onChange={(e) => setForm((prev) => ({ ...prev, phoneNumber: e.target.value }))}
										//@ts-ignore
										children={(inputProps) => <Input {...inputProps} placeholder="+7 (___) ___-__-__" />}
									/>
								</Form.Item>
								<Form.Item label="Полис">
									<InputMask
										mask="9999-9999-9999-9999"
										maskChar="_"
										value={form.insurancePolicyNumber}
										onChange={(e) => setForm((prev) => ({ ...prev, insurancePolicyNumber: e.target.value }))}
										//@ts-ignore
										children={(inputProps) => <Input {...inputProps} placeholder="____-____-____-____" />}
									/>
								</Form.Item>
								<Form.Item label="ИНН">
									<InputMask
										mask="9999-9999-9999"
										maskChar="_"
										value={form.inn}
										onChange={(e) => setForm((prev) => ({ ...prev, inn: e.target.value }))}
										//@ts-ignore
										children={(inputProps) => <Input {...inputProps} placeholder="____-____-____" />}
									/>
								</Form.Item>
							</div>
						</div>
					</div>
					<Button loading={PersonLoading || CustomerLoading} onClick={onSubmit} type="primary" className="w-full">
						Сохранить
					</Button>
				</div>

				<ProfileTable tables={tables} />
			</div>
		</Card>
	);
};
