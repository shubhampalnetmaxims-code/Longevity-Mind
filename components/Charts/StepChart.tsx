
import React from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip } from 'recharts';

const data = [
  { day: 'M', value: 8000 },
  { day: 'T', value: 10200 },
  { day: 'W', value: 9500 },
  { day: 'T', value: 12400 },
  { day: 'F', value: 11000 },
  { day: 'S', value: 15000 },
  { day: 'S', value: 7000 },
];

const StepChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <XAxis 
          dataKey="day" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#94a3b8', fontSize: 10 }}
          dy={10}
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', fontSize: '12px', color: '#fff' }}
        />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="#3b82f6" 
          strokeWidth={3} 
          dot={{ fill: '#3b82f6', r: 4 }} 
          activeDot={{ r: 6, strokeWidth: 0 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StepChart;
