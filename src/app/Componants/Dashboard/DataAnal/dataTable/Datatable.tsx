'use client';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// تسجيل الوحدات في ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  // إعداد البيانات التي ستظهر في الرسم البياني
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'عدد المبيعات',
        data: [65, 59, 80, 81, 56, 55, 40], // البيانات التي سيتم عرضها
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  // إعداد الخيارات (التخصيصات) الخاصة بالرسم البياني
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const, // تأكد من استخدام قيمة صحيحة
      },
      tooltip: {
        mode: 'index' as const, // تأكد من أن القيمة صالحة في Chart.js
        intersect: false,
      },
    },
  };

  return (
    <div className="bg-white w-full sm:w-[790px] h-full sm:h-[408px]">
    <div className="w-full h-full">
      <Line data={data} options={options} />
    </div>
  </div>
  
  );
};

export default LineChart;
