import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { Button, Card, DatePicker, Image, Input } from "antd";
import { Edit } from "lucide-react";
import { _E_Customer, _E_Doctor, SearchClinicTableByCustomerQuery } from "@/shared/__generate/graphql-frontend";
import { ProfileTable } from "./ProfileTable";
import InputMask from "react-input-mask";
import moment from "moment";

interface EditProfileCardProps {
	tables: SearchClinicTableByCustomerQuery;
	setMode: Dispatch<SetStateAction<"edit" | "read">>;
	user: _E_Customer | _E_Doctor | null;
	customer: _E_Customer;
}

interface FormValues {
	firstName: string;
	lastname: string;
	birthDay: moment.Moment;
	inn: string;
	insurancePolicyNumber: string;
	phoneNumber: string;
}

export const EditProfileCard: FC<EditProfileCardProps> = ({ setMode, tables, customer }) => {
	const [form, setForm] = useState<FormValues>({
		firstName: customer.person.entity?.firstName || "",
		lastname: customer.person.entity?.lastName || "",
		birthDay: moment(customer.person.entity?.birthDate),
		inn: customer.person.entity?.inn || "",
		phoneNumber: customer.phoneNumber || "",
		insurancePolicyNumber: customer.insurancePolicyNumber || "",
	});

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
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<div className="flex gap-2 items-center">
						<Image src="/images/customer.webp" width={100} height={100} className="rounded-md" />
						<div className="flex flex-col justify-center">
							<div className="flex gap-2">
								<Input
									required
									placeholder="Имя"
									value={form.firstName}
									onChange={(e) => setForm((prev) => ({ ...prev, firstName: e.target.value }))}
								/>
								<Input
									required
									placeholder="Фамилия"
									value={form.lastname}
									onChange={(e) => setForm((prev) => ({ ...prev, lastname: e.target.value }))}
								/>
							</div>
							<div className="grid grid-cols-2 grid-rows-2">
								<DatePicker
									placeholder="Дата рождения"
									value={form.birthDay}
									size="large"
									onChange={(e) => setForm((prev) => ({ ...prev, birthDay: e }))}
								/>
								<InputMask
									mask="+7 (999) 999-99-99"
									maskChar="_"
									value={form.phoneNumber}
									onChange={(e) => setForm((prev) => ({ ...prev, phoneNumber: e.target.value }))}
									// @ts-ignore
									children={(inputProps) => <Input {...inputProps} placeholder="+7 (___) ___-__-__" />}
								/>
								<Input
									required
									placeholder="Полис"
									value={form.insurancePolicyNumber}
									onChange={(e) => setForm((prev) => ({ ...prev, insurancePolicyNumber: e.target.value }))}
								/>
								<Input
									required
									placeholder="ИНН"
									value={form.inn}
									onChange={(e) => setForm((prev) => ({ ...prev, inn: e.target.value }))}
								/>
							</div>
						</div>
					</div>
				</div>

				<ProfileTable tables={tables} />
			</div>
		</Card>
	);
};
