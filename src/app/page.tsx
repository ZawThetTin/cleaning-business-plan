import CleaningFrequency from '@/components/cleaning-frequency';
import EmployeePay from '@/components/employee-pay';
import Revenue from '@/components/revenue';
import Tax from '@/components/tax';
import VehicleOperationalCost from '@/components/vehicle-operational-cost';
import WorkingHours from '@/components/working-hours';
import { CalculatedValues } from '@/types/calculatedValues';
import { Inputs } from '@/types/input';

export default function Home() {
	// Inputs
	const inputs: Inputs = {
		numberOfWorkingDaysInMonth: 22,
		cleaningSitesPerEmployeePerWorkingDay: 1,
		maxCleaningSitesPerEmployeePerWorkingDay: 2,
		typicalWorkDayHours: 4,
		hourlyChargeToClients: 60,
		vatTaxRate: 0.255,
		minimalHourlyRateForEmployment: 10,
		appropriateHourlyRateForEmployment: 18,
		vehiclePrice: 30000,
		vehicleLifespanInYears: 7,
	};

	const {
		numberOfWorkingDaysInMonth,
		cleaningSitesPerEmployeePerWorkingDay,
		maxCleaningSitesPerEmployeePerWorkingDay,
		typicalWorkDayHours,
		hourlyChargeToClients,
		vatTaxRate,
		appropriateHourlyRateForEmployment,
		vehiclePrice,
		vehicleLifespanInYears,
	} = inputs;

	// Calculations
	const requiredMonthlyRecurringCustomersPerEmployee = Math.ceil(
		numberOfWorkingDaysInMonth / cleaningSitesPerEmployeePerWorkingDay,
	);
	const maxMonthlyRecurringCustomersPerEmployee = Math.ceil(
		numberOfWorkingDaysInMonth / maxCleaningSitesPerEmployeePerWorkingDay,
	);
	const targetedTwiceAMonthRecurringCustomersPerEmployee = Math.ceil(
		requiredMonthlyRecurringCustomersPerEmployee / 2,
	);
	const totalChargeToClientsPerVisit =
		hourlyChargeToClients * typicalWorkDayHours;
	const taxAmount = totalChargeToClientsPerVisit * vatTaxRate;
	const remainingAmountAfterTax = totalChargeToClientsPerVisit - taxAmount;
	const employeePayPerVisit =
		appropriateHourlyRateForEmployment * typicalWorkDayHours;
	const remainingAmountAfterPayingEmployee =
		remainingAmountAfterTax - employeePayPerVisit;
	const yearlyVehicleOperationalCost = vehiclePrice / vehicleLifespanInYears;
	const monthlyVehicleOperationalCost = yearlyVehicleOperationalCost / 12;
	const vehicleOperationalCostPerVisit =
		monthlyVehicleOperationalCost / numberOfWorkingDaysInMonth;
	const remainingAmountAfterPayingEmployeeAndVehicleCost =
		remainingAmountAfterPayingEmployee - vehicleOperationalCostPerVisit;

	const calculatedValues: CalculatedValues = {
		requiredMonthlyRecurringCustomersPerEmployee,
		maxMonthlyRecurringCustomersPerEmployee,
		targetedTwiceAMonthRecurringCustomersPerEmployee,
		totalChargeToClientsPerVisit,
		taxAmount,
		remainingAmountAfterTax,
		employeePayPerVisit,
		remainingAmountAfterPayingEmployee,
		yearlyVehicleOperationalCost,
		monthlyVehicleOperationalCost,
		vehicleOperationalCostPerVisit,
		remainingAmountAfterPayingEmployeeAndVehicleCost,
	};

	return (
		<div className='flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
			<main className='max-w-prose py-8 sm:py-32 px-6 sm:px-16 bg-white dark:bg-black'>
				<h1 className='text-black dark:text-zinc-50'>Cleaning business plan</h1>
				<p className='note'>
					In the euro currency system, a decimal is represented by “,” and a
					thousand separator is represented by “.”
				</p>
				<div className='flex flex-col gap-10'>
					<WorkingHours inputs={inputs} calculatedValues={calculatedValues} />

					<CleaningFrequency calculatedValues={calculatedValues} />

					<Revenue inputs={inputs} calculatedValues={calculatedValues} />

					<Tax inputs={inputs} calculatedValues={calculatedValues} />

					<EmployeePay inputs={inputs} calculatedValues={calculatedValues} />

					<VehicleOperationalCost
						inputs={inputs}
						calculatedValues={calculatedValues}
					/>
				</div>
			</main>
		</div>
	);
}
