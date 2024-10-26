import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { format } from 'date-fns';
import { DatePicker, Spin, Alert, Button, List, Card, Typography, Modal, Input } from 'antd';
import moment from 'moment';
import { SearchClinicTableDocument, SearchClinicTableQueryVariables, UpdateClinicTableDocument } from '@/shared/__generate/graphql-frontend';
import { Link } from 'react-router-dom';
import { getRouteClientPage } from '@/shared/consts/router';

const { Text } = Typography;
const { TextArea } = Input;

type Appointment = {
  id: string;
  beginDate: string;
  endDate: string;
  comment: string | null;
  clinicOffice: {
    id: string;
    officeNumber: string;
  };
  customer: {
    entityId: string;
    entity: {
      person: {
        entity: {
          firstName: string;
          lastName: string;
        };
      };
    };
  };
  clinicDoctor: {
    id: string;
    doctor: {
      entityId: string;
      entity: {
        person: {
          entity: {
            firstName: string;
            lastName: string;
          };
        };
      };
    };
  };
};

type SearchClinicTableResponse = {
  searchClinicTable: {
    elems: Appointment[];
  };
};

const DoctorPage: React.FC = () => {
  const [inputParameters, setInputParameters] = useState<{ startDate?: string; endDate?: string; showArchive?: boolean }>({
    showArchive: false,
  });
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [comment, setComment] = useState('');

  const { data, loading, error, refetch } = useQuery<SearchClinicTableResponse, SearchClinicTableQueryVariables>(
    SearchClinicTableDocument,
    {
      variables: {
        clinicId: '7429620454894731265',
        dateFrom: inputParameters.startDate
          ? moment(inputParameters.startDate).startOf('day').format('YYYY-MM-DDTHH:mm:ss.SSS')
          : moment().startOf('day').format('YYYY-MM-DDTHH:mm:ss.SSS'),
        dateTo: inputParameters.endDate
          ? moment(inputParameters.endDate).startOf('day').format('YYYY-MM-DDTHH:mm:ss.SSS')
          : moment().endOf('day').format('YYYY-MM-DDTHH:mm:ss.SSS'),
      },
      skip: false,
      notifyOnNetworkStatusChange: true,
    }
  );

  const [updateClinicTableEntry, { loading: updating }] = useMutation(UpdateClinicTableDocument);

  useEffect(() => {
    handleFetchAppointments();
  }, []);

  const changeInputParameters = (params: Partial<{ startDate: string; endDate: string; showArchive: boolean }>) => {
    setInputParameters((prev) => ({ ...prev, ...params }));
  };

  const handleFetchAppointments = () => {
    refetch();
  };

  const openCommentModal = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setComment(appointment.comment || '');
  };

  const handleUpdateComment = async () => {
    if (selectedAppointment) {
      try {
        await updateClinicTableEntry({
          variables: {
            input: {
              id: selectedAppointment.id,
              comment,
            },
          },
        });
        setSelectedAppointment({ ...selectedAppointment, comment });
      } catch (err) {
        console.error('Ошибка при обновлении комментария:', err);
      } finally {
        closeCommentModal();
        handleFetchAppointments();
      }
    }
  };

  const closeCommentModal = () => {
    setSelectedAppointment(null);
    setComment('');
  };

  const filteredAppointments = data?.searchClinicTable.elems.filter((appointment) => {
    const commentExists = appointment.comment !== undefined && appointment.comment !== null;
    return inputParameters.showArchive ? commentExists : !commentExists;
  });

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Spin />
        <div>Loading...</div>
      </div>
    );
  }

  if (error) return <Alert message="Error" description={error.message} type="error" />;

  
  return (
    <div style={{ padding: '20px' }}>
      <h2>Личный кабинет доктора</h2>
      <div style={{ marginBottom: '20px' }}>
        <DatePicker
          value={inputParameters.startDate ? moment(inputParameters.startDate, 'YYYY-MM-DD') : null}
          onChange={(date) => changeInputParameters({ startDate: date?.format('YYYY-MM-DD') })}
          format="YYYY-MM-DD"
          placeholder="Начало"
        />
        <DatePicker
          style={{ marginLeft: '10px' }}
          value={inputParameters.endDate ? moment(inputParameters.endDate, 'YYYY-MM-DD') : null}
          onChange={(date) => changeInputParameters({ endDate: date?.format('YYYY-MM-DD') })}
          format="YYYY-MM-DD"
          placeholder="Конец"
        />
        <Button
          onClick={handleFetchAppointments}
          style={{ marginLeft: '10px' }}
          disabled={!inputParameters.startDate || !inputParameters.endDate}
        >
          Обновить вручную
        </Button>
        <Button
          onClick={() => changeInputParameters({ showArchive: !inputParameters.showArchive })}
          style={{ marginLeft: '10px' }}
        >
          {inputParameters.showArchive ? 'Показать актуальные' : 'Архив'}
        </Button>
      </div>

      <List
		itemLayout="vertical"
		size="large"
		dataSource={filteredAppointments}
		renderItem={(appointment: Appointment) => {
			const customerName = `${appointment.customer.entity.person.entity.firstName} ${appointment.customer.entity.person.entity.lastName}`;
			const doctorName = `${appointment.clinicDoctor.doctor.entity.person.entity.firstName} ${appointment.clinicDoctor.doctor.entity.person.entity.lastName}`;
			return (
			<List.Item key={appointment.id}>
				<Card style={{ backgroundColor: '#282c34', color: 'white', marginBottom: '10px' }}>
				<Text style={{ color: 'white' }}>
					{format(new Date(appointment.beginDate), 'yyyy-MM-dd HH:mm:ss')} - {format(new Date(appointment.endDate), 'yyyy-MM-dd HH:mm:ss')}
				</Text>
				<p>Office: {appointment.clinicOffice.officeNumber}</p>
				<p style={{ color: 'white' }}>
					Пациент: 
					<Link
					to={getRouteClientPage(
						(appointment.customer.entity.person.entity.firstName || '') +
						appointment.customer.entity.person.entity.lastName,
					)}
					style={{ color: 'cyan', marginLeft: '5px' }}
					>
					{customerName}
					</Link>
				</p>
				<p style={{ color: 'white' }}>
					Доктор: {doctorName}
				</p>
				{inputParameters.showArchive && appointment.comment && (
					<p style={{ color: 'white' }}>
					Сводка: {appointment.comment}
					</p>
				)}
				<Button onClick={() => openCommentModal(appointment)} style={{ marginTop: '10px' }}>
					{inputParameters.showArchive ? 'Изменить сводку' : 'Выполнено'}
				</Button>
				</Card>
			</List.Item>
			);
		}}
		/>
      <Modal
        title="Результат посещения"
        open={!!selectedAppointment}
        onOk={handleUpdateComment}
        onCancel={closeCommentModal}
        confirmLoading={updating}
      >
        <TextArea
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Сводка"
        />
      </Modal>
    </div>
  );
};

export default DoctorPage;
