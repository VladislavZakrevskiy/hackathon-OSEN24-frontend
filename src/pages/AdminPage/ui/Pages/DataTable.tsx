import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { Doctor, DoctorAvailability, Office, PageType, usePageStore } from "../../model/browserStore";
import { useGetDoctorAvailabilityData } from "../../model/hooks/useGetDoctorAvailabilityData";
import { useGetDoctorData } from "../../model/hooks/useGetDoctorData";
import { useGetOfficeData } from "../../model/hooks/useGetOfficeData";
import { AddModal } from "./AddModal";
import { useCreateDoctorMutation, useCreatePersonMutation, useSearchDoctorTypeQuery, useSearchDoctorQuery } from "@/shared/__generate/graphql-frontend";

type OptionInput = {
  type: "text" | "date" | "select";
  name: string;
  key: string;
  options?: { label: string; value: string }[];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type EntityData = Doctor | Office | DoctorAvailability;

interface DataTableProps {
  type: PageType;
  pageId: string;
}

const getColumnsByType = (type: PageType) => {
  switch (type) {
    case "Врачи":
      return [
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "Имя", dataIndex: ["person", "entity", "firstName"], key: "firstName" },
        { title: "Фамилия", dataIndex: ["person", "entity", "lastName"], key: "lastName" },
        { title: "Тип врача", dataIndex: ["doctorType", "name"], key: "doctorType" },
      ];
    case "Кабинеты":
      return [
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "Клиника", dataIndex: ["clinic", "name"], key: "clinic" },
        { title: "Номер кабинета", dataIndex: "officeNumber", key: "officeNumber" },
      ];
    case "Часы работы врачей":
      return [
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "Дата начала", dataIndex: "beginDate", key: "beginDate" },
        { title: "Дата окончания", dataIndex: "endDate", key: "endDate" },
        { title: "Номер кабинета", dataIndex: ["clinicOffice", "officeNumber"], key: "officeNumber" },
      ];
    default:
      return [];
  }
};

const DataTable: React.FC<DataTableProps> = ({ type, pageId }) => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [doctorTypeOptions, setDoctorTypeOptions] = useState<{ label: string; value: string }[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { pages, setData } = usePageStore();
  const page = pages.find((p) => p.id === pageId);
  const { fetchDoctorAvailabilityData, isLoading: isAvailabilityLoading } = useGetDoctorAvailabilityData();
  const { fetchDoctorData, isLoading: isDoctorLoading } = useGetDoctorData();
  const { fetchOfficeData, isLoading: isOfficeLoading } = useGetOfficeData();
  const [createPersonMutation] = useCreatePersonMutation();
  const [createDoctorMutation] = useCreateDoctorMutation();
  const { data: doctorTypeData } = useSearchDoctorTypeQuery({ variables: { searchStr: "" } });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: doctorData, refetch: refetchDoctor } = useSearchDoctorQuery({ variables: { searchStr: "" } });

  useEffect(() => {
    if (!page?.data) {
      switch (type) {
        case "Врачи":
          fetchDoctorData().then((data) => setData(pageId, data));
          break;
        case "Кабинеты":
          fetchOfficeData().then((data) => setData(pageId, data));
          break;
        case "Часы работы врачей":
          fetchDoctorAvailabilityData().then((data) => setData(pageId, data || []));
          break;
      }
    }
  }, [type, pageId, page?.data, setData]);

  useEffect(() => {
    if (doctorTypeData?.searchDoctorType?.elems) {
      const options = doctorTypeData.searchDoctorType.elems.map((type) => ({
        label: type.name,
        value: type.id,
      }));
      setDoctorTypeOptions(options);
    }
  }, [doctorTypeData]);

  const columns = getColumnsByType(type);
  const options: OptionInput[] = [
    { type: "text", name: "Имя", key: "firstName" },
    { type: "text", name: "Фамилия", key: "lastName" },
    { type: "select", name: "Тип врача", key: "doctorType", options: [
        { label: "Хирург", value: "Хирург" },
        { label: "Патологоанатом", value: "Патологоанатом" },
        { label: "Педиатр", value: "Педиатр" },
        { label: "Окулист", value: "Окулист" },
        { label: "ЛОР", value: "ЛОР" },
        { label: "Психолог", value: "Психолог" },
        { label: "Венеролог", value: "Венеролог" },
      ], },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAddSubmit = async (values: Record<string, any>) => {
    try {
      const personResult = await createPersonMutation({
        variables: {
          input: {
            firstName: values.firstName,
            lastName: values.lastName,
          },
        },
      });

      const personId = personResult.data?.packet?.createPerson?.id;
      if (!personId) {
        throw new Error("Не удалось создать запись о человеке");
      }

      await createDoctorMutation({
        variables: {
          doctorTypeId: values.doctorType,
          personId: personId,
        },
      });

      console.log("Новый врач успешно добавлен");

      await refetchDoctor().then((updatedData) => {
        setData(pageId, updatedData.data?.searchDoctor?.elems || []);
      });

      setIsAddOpen(false);
    } catch (error) {
      console.error("Ошибка при добавлении врача:", error);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleTableChange = (pagination: any) => {
    setCurrentPage(pagination.current);
  };

  if (isAvailabilityLoading || isDoctorLoading || isOfficeLoading) return <p>Загрузка...</p>;

  return (
    <div>
      <div className="pb-2">
        <Button onClick={() => setIsAddOpen(true)}>Добавить</Button>
      </div>
      <AddModal
        open={isAddOpen}
        setIsOpen={setIsAddOpen}
        options={options}
        title={`Добавление в вкладку ${type}`}
        onSubmit={handleAddSubmit}
      />
      <Table
        dataSource={page?.data || []}
        columns={columns}
        rowKey="id"
        pagination={{
          current: currentPage,
          pageSize: 6,
          onChange: handleTableChange,
        }}
      />
    </div>
  );
};

export default DataTable;
