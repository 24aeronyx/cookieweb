import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      const response = await axios.get('http://localhost:3000/logs'); 
      setLogs(response.data);
    } catch (error) {
      console.error('Failed to fetch logs:', error);
    }
  };

  return (
    <div className='flex flex-col items-center mt-11'>
      <h1 className='text-xl font-bold mb-4'>Logs</h1>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            <strong>{log.pesan}</strong> - {log.waktu}
          </li>
        ))}
      </ul>
    </div>
  );
}
