import CleaningFrequency from '@/components/cleaning-frequency';
import EmployeePay from '@/components/employee-pay';
import Revenue from '@/components/revenue';
import Tax from '@/components/tax';
import VehicleOperationalCost from '@/components/vehicle-operational-cost';
import WorkingHours from '@/components/working-hours';

export default function Home() {
	return (
		<div className='flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
			<main className='max-w-prose py-8 sm:py-32 px-6 sm:px-16 bg-white dark:bg-black'>
				<h1 className='text-black dark:text-zinc-50'>Cleaning business plan</h1>
				<p className='note'>
					In the euro currency system, a decimal is represented by “,” and a
					thousand separator is represented by “.”
				</p>
				<div className='flex flex-col gap-10'>
					<WorkingHours />

					<CleaningFrequency />

					<Revenue />

					<Tax />

					<EmployeePay />

					<VehicleOperationalCost />
				</div>
			</main>
		</div>
	);
}
