import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useFormik } from 'formik';
import * as yup from 'yup';

import styles from './settingsTable.module.scss';
import ButtonComponent from '../button/buttonComponent';
import InputComponent from '../inputComponent/inputComponent';
import TitleComponent from '../titleComponent/titleComponent';
import ModalComponent from '../modal/modal';


interface userProp {
  fname: string,
  lname: string,
  age: string | number,
}

interface Props {
  jsonData : userProp[],
}

const schema = yup.object().shape({
  fname: yup.string().required(),
  lname: yup.string().required(),
  age: yup.number().required(),
});


function SettingsTable({jsonData}: Props): JSX.Element {
  const [openModal,setOpenModal] = useState(false);
  const [users,setUsers] = useState(jsonData);
  const [user,setUser] = useState<userProp | null>();


  const handleSubmit = (values: userProp) => {
    if (user) {
      setUsers((currentUsers: userProp[]) => {
        const userIndex = currentUsers.findIndex((u) => u === user);
  
        if (userIndex !== -1) {
          const updatedUsers = [...currentUsers];
          updatedUsers[userIndex] = values;
          return updatedUsers;
        }
        return currentUsers;
      });
    }
    else {
      setUsers((currentUsers: userProp[]) => {
        const updatedUsers: userProp[] = [...currentUsers, values];
        return updatedUsers;
      });
    }
    setUser(null)
    setOpenModal(!openModal)
  }


  const formik = useFormik({
    initialValues: {
      fname: user ? user.fname : '',
      lname: user ? user.lname :'',
      age: user ? user.age : '',
    },
    validationSchema: schema,
    onSubmit: (values, { setSubmitting }) => {
      handleSubmit(values)
    },
  });

  useEffect(() => {
    formik.setValues({
      fname: user ? user.fname : '',
      lname: user ? user.lname : '',
      age: user ? user.age : '',
    });
  }, [user]);

  return (
    <div>
        <TitleComponent title="Users" />
        <div>
          <ButtonComponent title="Add user" onClick={():void=> setOpenModal(!openModal)} />
        </div>
      <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.coll}>
              First Name
            </div>
            <div className={styles.coll}>
              Last Name
            </div>
            <div className={styles.coll}>
              Age
            </div>
            <div className={styles.coll}>
              Action
            </div>
          </div>
          {users?.map((person:userProp) => {
            return (
            <div className={styles.row}>
              <div className={styles.coll}>
                {person.fname}
              </div>
              <div className={styles.coll}>
                {person.lname}
              </div>
              <div className={styles.coll}>
                {person.age}
              </div>
              <div className={styles.coll}>
                <ButtonComponent title="Edit" onClick={() => { setOpenModal(!openModal); setUser(person); }}/>
              </div>
            </div>
            );
          })}
          </div>
        {openModal && (
          <ModalComponent
            isOpen={openModal}
            onClose={():void=> {setOpenModal(!openModal); setUser(null)}}
            title={user ? user.fname : 'Create user'}
          >
            <form onSubmit={(formik.handleSubmit)} className={styles.form}>
              <InputComponent 
                name='fname'
                label="fname"
                value={formik.values.fname}
                onChange={formik.handleChange}
                errors={formik.errors.fname}
              />
              <InputComponent 
                name="lname"
                label="lname" 
                value={formik.values.lname}
                onChange={formik.handleChange}
                errors={formik.errors.lname}
                />
              <InputComponent 
                name="age"
                label="age" 
                value={formik.values.age}
                onChange={formik.handleChange}
                errors={formik.errors.age}
                />
              <ButtonComponent title="Submit" type="submit" />
            </form>
          </ModalComponent>
        )

        }
    </div>
    
  );
}

export default SettingsTable;
