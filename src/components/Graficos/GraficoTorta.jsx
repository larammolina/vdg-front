import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ["#00C49F", "#8884d8"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


const GraficoTorta = ({porcentajes}) => {
	return (
		<ResponsiveContainer width="100%" height={400}>
		<PieChart width={400} height={400}>
			<Pie
				data={porcentajes}
				cx="50%"
				cy="50%"
				labelLine={false}
				label={renderCustomizedLabel}
				outerRadius={80}
				fill="#8884d8"
				dataKey="value"
			>
				{porcentajes.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
				))}
			</Pie>
		</PieChart>
	</ResponsiveContainer>
	)
}

export default GraficoTorta