import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const GraficoLineas = ({data}) => {
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
			<Line type="monotone" dataKey="real" stroke="#00C49F" activeDot={{ r: 8 }} />
			<Line type="monotone" dataKey="prediccion" stroke="#8884d8" />
		</LineChart>
	</ResponsiveContainer>
	)
}

export default GraficoLineas