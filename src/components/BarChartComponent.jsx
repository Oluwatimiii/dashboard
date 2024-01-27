import { useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: 'Jan',
    amt: 6000,
    amts: "6,000",
  },
  {
    name: 'Feb',
    amt: 16000,
    amts: "16,000",
  },
  {
    name: 'Mar',
    amt: 3000,
    amts: "3,000",
  },
  {
    name: 'Apr',
    amt: 28000,
    amts: "28,000",
  },
  {
    name: 'Mei',
    amt: 8000,
    amts: "8,000",
  },
  {
    name: 'Jun',
    amt: 45000,
    amts: "45,000",
  },
  {
    name: 'Jul',
    amt: 8000,
    amts: "8,000",
  },
  {
    name: 'Aug',
    amt: 21000,
    amts: "21,000",
  },
  {
    name: 'Sep',
    amt: 32000,
    amts: "32,000",
  },
  {
    name: 'Oct',
    amt: 5000,
    amts: "5,000",
  },
  {
    name: 'Nov',
    amt: 30000,
    amts: "30,000",
  },
  {
    name: 'Dec',
    amt: 26000,
    amts: "26,000",
  },
];

const CustomBar = (props) => {
  const { x, y, width, height, fill } = props;

  const radius = 18; // Define the radius for the curved shape

  return (
    <g>
      <path d={`M${x},${y + radius} 
              A${radius},${radius} 0 0,1 ${x + radius},${y} 
              L${x + width - radius},${y} 
              A${radius},${radius} 0 0,1 ${x + width},${y + radius} 
              L${x + width},${y + height} 
              L${x},${y + height} 
              L${x},${y + radius}`}
        fill={fill} />
    </g>

  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload; // Get the data for the hovered bar
    const { amts } = data;

    return (
      <div
        className="relative bg-black dark:bg-white shadow-md p-2 px-3 rounded-md border"
        style={{ top: -40, left: -2, transform: 'translateX(-66%)' }} // Position the tooltip centered at the top of the bar
      >
        <p className="text-white dark:text-black text-[13px]">{`$${amts}`}</p> {/* Display the appropriate data */}
        <div className="absolute w-0 h-0" style={{ top: '100%', left: '50%', transform: 'translateX(-50%)' }}>
          <div className="border-solid border-4 border-black dark:border-white border-t-0 border-l-2 border-r-2" style={{ bottom: '-8px', left: '50%', transform: 'translateX(-50%)' }}></div> {/* Inverted triangle */}
        </div>
      </div>
    );
  }

  return null;
};

const BarChartComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleBarMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleBarMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
      <ResponsiveContainer width="100%" height={285}>
        <BarChart width={400} height={200} data={data}>
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />

          <Bar dataKey="amt"
            shape={<CustomBar />}
            barSize={30}
          >
            {
              data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index !== activeIndex ? '#15E0EE' + '30' : '#34CAA5' + "88"}
                  onMouseEnter={() => handleBarMouseEnter(index)}
                  onMouseLeave={handleBarMouseLeave}
                />
              ))
            }
          </Bar>
        </BarChart>
      </ResponsiveContainer>
  )
}

export default BarChartComponent