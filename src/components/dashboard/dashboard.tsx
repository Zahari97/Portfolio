import React, { useState } from 'react';
import Modal from 'react-modal';
import { useFormik } from 'formik';
import * as yup from 'yup';

import styles from './dashboard.module.scss';
import { transformDataForDonutChart } from '../../services/utils';

import ButtonComponent from '../button/buttonComponent';
import DonutChartComponent from '../donutChart/donutChart';
import InputComponent from '../inputComponent/inputComponent';
import TitleComponent from '../titleComponent/titleComponent';
import InvestmentCard from '../investmentCard/investmentCard';
import SelectComponent from '../selectComponent/selectComponent';
import ModalComponent from '../modal/modal';


interface InvestmentProp {
  id: number;
  type: string;
  status: string;
  date: string;
  name: string;
  value: number;
}

interface InputValuesProp {
  name: string;
  type: string;
  status: string;
  date: string;
  value: string;
}

const Investment = [
  { "id": 1, "type": "Stocks", "status": "active", "date": "2024-01-27", "name": "Stock Investment 1", "value": 5000 },
  { "id": 2, "type": "Crypto", "status": "active", "date": "2024-01-28", "name": "Crypto Investment 1", "value": 3000 },
  { "id": 3, "type": "Real Estate", "status": "closed", "date": "2024-01-29", "name": "Property Investment 1", "value": 10000 }
];


const schema = yup.object().shape({
  name: yup.string().required(),
  type: yup.string().required(),
  status: yup.string(),
  value: yup.number().required(),
});

function Dashboard(): JSX.Element {
  const [openModal,setOpenModal] = useState(false);
  const [investments, setInvestments] = useState<InvestmentProp[]>(Investment);

  const handleSubmit = (values: InputValuesProp) => {
    const newInvestment = {
      id: investments.length + 1,
      type: values.type,
      status: values.status,
      date: new Date().toISOString().split('T')[0],
      name: values.name,
      label: values.name,
      value: Number(values.value),
    };
    setInvestments((prevInvestments) => [
      ...prevInvestments,
      newInvestment,
    ]);
    setOpenModal(!openModal)
  }  

  const formik = useFormik({
    initialValues: {
      name: '',
      type: '',
      status: '',
      date: '',
      value: '',
    },
    validationSchema: schema,
    onSubmit: (values, { setSubmitting }) => {
      handleSubmit(values)
    },
  });

  

  const handleChangeStatus = (investmentId: number) => {
    setInvestments((prevInvestments) =>
      prevInvestments.map((investment) =>
        investment.id === investmentId
          ? { ...investment, status: investment.status === 'Active' ? 'Closed' : 'Active' }
          : investment
      )
    );
  };

  return (
    <div >
      <TitleComponent title="Dashboard with Data Visualization for Inestments" />
      <div  className={styles.dashboard}>
        <div className={styles.tablePanel}>
          <h2>Invetments</h2>
          {investments.map((investment) => (
            <InvestmentCard key={investment.id} investment={investment} onChangeStatus={() => handleChangeStatus(investment.id)}/>
          ))}
          <ButtonComponent title="Create" onClick={():void=> setOpenModal(!openModal) } />
      
          <ModalComponent
            isOpen={openModal}
            onClose={():void=> {setOpenModal(!openModal)}}
            title="Create Investment Card"
          >
            <form onSubmit={(formik.handleSubmit)} className={styles.form}>
              <InputComponent 
                name="name"
                value={formik.values.name} 
                onChange={formik.handleChange}
                errors={formik.errors.name}
              />
              <InputComponent 
                name="type" 
                value={formik.values.type} 
                onChange={formik.handleChange}
                errors={formik.errors.type}
              />
              <SelectComponent 
                name="status"
                value={formik.values.status}
                onChange={formik.handleChange}
                options={[
                  { value: 'Active', label: 'Active' },
                  { value: 'Closed', label: 'Closed' },
                ]}              
              />
              <InputComponent 
                name="value" 
                value={formik.values.value} 
                onChange={formik.handleChange} 
                errors={formik.errors.value}
              />
              <ButtonComponent title="Submit" type="submit" />
            </form>
          </ModalComponent>
        </div>
        <div className={`${styles.tablePanel} ${styles.DonutWrapper}`}>
          <h2>Donut Visualization</h2>
          <DonutChartComponent data={transformDataForDonutChart(investments)}/>
        </div>
      </div>
    </div>
    
  );
}

export default Dashboard;
