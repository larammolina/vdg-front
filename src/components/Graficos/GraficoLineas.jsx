import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Dia 1',
    error: 4000,
    exito: 2400,
    amt: 2400,
  },
  {
    name: 'Dia 2',
    error: 3000,
    exito: 1398,
    amt: 2210,
  },
  {
    name: 'Dia 3',
    error: 2000,
    exito: 9800,
    amt: 2290,
  },
  {
    name: 'Dia 4',
    error: 2780,
    exito: 3908,
    amt: 2000,
  },
  {
    name: 'Dia 5',
    error: 1890,
    exito: 4800,
    amt: 2181,
  },
  {
    name: 'Dia 6',
    error: 2390,
    exito: 3800,
    amt: 2500,
  },
  {
    name: 'Dia 7',
    error: 3490,
    exito: 4300,
    amt: 2100,
  },
];


const GraficoLineas = () => {
	return (
		<ResponsiveContainer width="100%" height={400}>
		<LineChart
			width={500}
			height={300}
			data={data}
			margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 5,
			}}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Line type="monotone" dataKey="exito" stroke="#00C49F" activeDot={{ r: 8 }} />
			<Line type="monotone" dataKey="error" stroke="#8884d8" />
		</LineChart>
	</ResponsiveContainer>
	)
}

export default GraficoLineas