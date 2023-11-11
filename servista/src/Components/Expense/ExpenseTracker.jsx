import { PieChart } from 'react-minimal-pie-chart';
import Chart from 'react-apexcharts';
import { useState } from 'react';
import NavbarSimple from './NavbarSimple';
const ExpenseTracker = () => {
    const [state, setState] = useState({
        options: {
            chart: {
                id: 'apexchart-example'
            },
            xaxis: {
                categories: ['Jan', 'Feb', "Mar", 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
            },
            stroke: {
                curve: 'smooth', // Set the curve property to 'smooth' for a curved line
            },
        },
        series: [{
            name: 'series-1',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }]
    });
    return (
        <div className='w-screen'>
        <NavbarSimple/>
            <PieChart
                lineWidth={40}
                animate

                className='w-56 h-56'
                data={[
                    { title: 'One', value: 25, color: '#E38627' },
                    { title: 'Two', value: 25, color: '#C13C37' },
                    { title: 'Three', value: 25, color: '#6A2135' },
                    { title: 'Four', value: 25, color: '#009688' },
                ]}
            />
            <Chart className="w-screen" options={state.options} series={state.series} type="line" width={500} height={320} />
        </div>
    )
}

export default ExpenseTracker