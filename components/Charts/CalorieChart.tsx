
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, Cell } from 'recharts';

const data = [
  { day: 'Mon', value: 2100 },
  { day: 'Tue', value: 1950 },
  { day: 'Wed', value: 2200 },
  { day: 'Thu', value: 1800 },
  { day: 'Fri', value: 2400 },
  { day: 'Sat', value: 2100 },
  { day: 'Sun', value: 2000 },
];

const CalorieChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis 
          dataKey="day" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#94a3b8', fontSize: 10 }}
          dy={10}
        />
        <Tooltip 
          cursor={{ fill: 'rgba(255,255,255,0.05)' }}
          contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', fontSize: '12px', color: '#fff' }}
        />
        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={index === 4 ? '#10b981' : '#334155'} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CalorieChart;
