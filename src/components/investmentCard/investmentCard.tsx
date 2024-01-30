import React, { useState } from 'react';
import ButtonComponent from '../button/buttonComponent';
import styles from './investmentCard.module.scss';

interface Investment {
  id: number;
  type: string;
  status: string;
  date: string;
  name: string;
  value: number;
}

interface InvestmentProp {
  investment: Investment;
  onChangeStatus: () => void;
}

function InvestmentCard({ investment, onChangeStatus }:InvestmentProp):JSX.Element {
  const { type, status, date, name, value } = investment;

  return (
    <div className={`${styles.investment} ${status==='active' ? 'active' : 'closed'}`}>
      <h3>{type}</h3>
      <div className={styles.investmentContent}>
        <div className={styles.description}>
          <p><span>Status:</span> {status}</p>
          <p><span>Date:</span> {date}</p>
          <p><span>Name:</span> {name}</p>
          <p><span>Value:</span> {value}</p>
        </div>
        <ButtonComponent title={status === 'Active' ? 'Close' : 'Active'} onClick={onChangeStatus} />
      </div>
    </div>
  );
}

export default InvestmentCard;
