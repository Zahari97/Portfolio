import React from 'react';
import SettingsTable from '../components/settingsTable/settingsTable';


const jsonData = [
  {
    "fname": "zahari",
    "lname": "marchev",
    "age": "25"
  },
  {
    "fname": "Tomas",
    "lname": "Dimitrov",
    "age": "26"
  },
  {
    "fname": "Niolay",
    "lname": "Tigura",
    "age": "27"
  }
];

function Settings():JSX.Element {
  return (
    <div className="Shell App">
      <SettingsTable jsonData={jsonData} />
    </div>
    
  );
}

export default Settings;
