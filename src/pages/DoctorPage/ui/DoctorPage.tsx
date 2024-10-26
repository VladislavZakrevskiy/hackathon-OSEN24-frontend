import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { format } from 'date-fns';
import { DatePicker, Spin, Alert, Button, List, Card, Typography } from 'antd';
import moment from 'moment';
import { SearchClinicTableDocument, SearchClinicTableQueryVariables } from '@/shared/__generate/graphql-frontend';
import { Link } from 'react-router-dom';

const { Text } = Typography;

type Appointment = {
  id: string;
  beginDate: string;
  endDate: string;
  clinicOffice: {
    id: string;
    officeNumber: string;
  };
  customer: {
    entityId: string;
    entity: {
      person: {
		entity:{
			firstName: string;
			lastName: string;
		}

      };
    };
  };
  clinicDoctor: {
    id: string;
    doctor: {
      entityId: string;
      entity: {
        person: {
			entity:{
				firstName: string;
				lastName: string;
			}

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
  const [inputParameters, setInputParameters] = useState<{ startDate?: string; endDate?: string }>({});

  const { data, loading, error, refetch } = useQuery<SearchClinicTableResponse, SearchClinicTableQueryVariables>(SearchClinicTableDocument, {
    variables: {
      clinicId: '7429620454894731265',
      dateFrom: inputParameters.startDate
        ? moment(inputParameters.startDate).startOf('day').format('YYYY-MM-DDTHH:mm:ss.SSS')
        : '2024-01-01T00:00:00.000',
      dateTo: inputParameters.endDate
        ? moment(inputParameters.endDate).startOf('day').format('YYYY-MM-DDTHH:mm:ss.SSS')
        : '2024-12-31T23:59:59.999',
    },
    skip: !inputParameters.startDate || !inputParameters.endDate, 
    notifyOnNetworkStatusChange: true,
  });

  const changeInputParameters = (params: Partial<{ startDate: string; endDate: string }>) => {
    setInputParameters((prev) => ({ ...prev, ...params }));
  };

  const handleFetchAppointments = () => {
    if (inputParameters.startDate && inputParameters.endDate) {
      refetch();
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Spin />
        <div>Loading...</div>
      </div>
    );
  }

  if (error) return <Alert message="Error" description={error.message} type="error" />;
  console.log(data);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Doctor Appointments</h2>
      <div style={{ marginBottom: '20px' }}>
        <DatePicker
          value={inputParameters.startDate ? moment(inputParameters.startDate, "YYYY-MM-DD") : null}
          onChange={(date) => changeInputParameters({ startDate: date?.format("YYYY-MM-DD") })}
          format="YYYY-MM-DD"
          placeholder="Start Date"
        />
        <DatePicker
          style={{ marginLeft: '10px' }}
          value={inputParameters.endDate ? moment(inputParameters.endDate, "YYYY-MM-DD") : null}
          onChange={(date) => changeInputParameters({ endDate: date?.format("YYYY-MM-DD") })}
          format="YYYY-MM-DD"
          placeholder="End Date"
        />
        <Button onClick={handleFetchAppointments} style={{ marginLeft: '10px' }} disabled={!inputParameters.startDate || !inputParameters.endDate}>
          Fetch Appointments
        </Button>
      </div>

      <List
        itemLayout="vertical"
        size="large"
        dataSource={data?.searchClinicTable.elems}
        renderItem={(appointment: Appointment) => {
          const customerName = `${appointment.customer.entity.person.entity.firstName} ${appointment.customer.entity.person.entity.lastName}`;
          const doctorName = `${appointment.clinicDoctor.doctor.entity.person.entity.firstName} ${appointment.clinicDoctor.doctor.entity.person.entity.lastName}`;
		  const formattedCustomerName = customerName.replace(/\s+/g, '');
          return (
            <List.Item key={appointment.id}>
              <Card style={{ backgroundColor: '#282c34', color: 'white', marginBottom: '10px' }}>
                <Text style={{ color: 'white' }}>
                  {format(new Date(appointment.beginDate), 'yyyy-MM-dd HH:mm:ss')} - {format(new Date(appointment.endDate), 'yyyy-MM-dd HH:mm:ss')}
                </Text>
                <p>Office: {appointment.clinicOffice.officeNumber}</p>

				<Link to={`/client/${formattedCustomerName}`} style={{ color: 'cyan', marginLeft: '5px' }}>
					<p style={{ color: 'white' }}>
						Customer: {customerName}
					</p>
				</Link>
                <p style={{ color: 'white' }}>
                  Doctor: {doctorName}
                </p>
              </Card>
            </List.Item>
          );
        }}
      />
    </div>
  );
};

export default DoctorPage;
