interface InvestmentProp {
  id: number;
  type: string;
  status: string;
  date: string;
  name: string;
  value: number;
}

export const transformDataForDonutChart = (investments: InvestmentProp[]): { label: string; value: number }[] => {
  return investments.map(item => ({
    label: item.name,
    value: item.value
  }));
};
