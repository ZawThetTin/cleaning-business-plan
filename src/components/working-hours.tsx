import Accent from '@/components/shared/accent';
import { CalculatedValues } from '@/types/calculatedValues';
import { Inputs } from '@/types/input';

interface Props {
	inputs: Inputs;
	calculatedValues: CalculatedValues;
}

export default function WorkingHours({ inputs, calculatedValues }: Props) {
	const {
		numberOfWorkingDaysInMonth,
		cleaningSitesPerEmployeePerWorkingDay,
		maxCleaningSitesPerEmployeePerWorkingDay,
		typicalWorkDayHours,
	} = inputs;
	const {
		requiredMonthlyRecurringCustomersPerEmployee,
		maxMonthlyRecurringCustomersPerEmployee,
	} = calculatedValues;

	return (
		<div>
			<h2>Working Hours</h2>
			<div className='paragraph-wrapper'>
				<p>
					There are{' '}
					<Accent>
						<b>{numberOfWorkingDaysInMonth}</b> working days in a month
					</Accent>
					. Our expected target is to operate{' '}
					<Accent>
						{cleaningSitesPerEmployeePerWorkingDay}{' '}
						{cleaningSitesPerEmployeePerWorkingDay > 1 ? 'sites' : 'site'} per
						day
					</Accent>
					. So, for every one employee we hire, we need to acquire{' '}
					<Accent>
						<b>{requiredMonthlyRecurringCustomersPerEmployee}</b> monthly
						recurring customers
					</Accent>
					.{' '}
					{cleaningSitesPerEmployeePerWorkingDay <
						maxCleaningSitesPerEmployeePerWorkingDay && (
						<>
							If we expect the employee to clean{' '}
							{maxCleaningSitesPerEmployeePerWorkingDay} sites per day , you
							will need to acquire{' '}
							<b>{maxMonthlyRecurringCustomersPerEmployee}</b> monthly recurring
							customers.{' '}
						</>
					)}
					Cleaning is a physically demanding job so we need to account for not
					too many sites a day. (Need to research how the competitors assign
					their employees)
				</p>
				<p>
					A typical working hours will be{' '}
					<Accent>
						<b>{typicalWorkDayHours}</b> hours a day
					</Accent>
					.
				</p>
			</div>
		</div>
	);
}
