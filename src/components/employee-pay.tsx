import Accent from '@/components/shared/accent';
import { CalculatedValues } from '@/types/calculatedValues';
import { Inputs } from '@/types/input';
import { toCurrency } from '@/utils/toCurrency';

interface Props {
	inputs: Inputs;
	calculatedValues: CalculatedValues;
}

export default function EmployeePay({ inputs, calculatedValues }: Props) {
	const {
		appropriateHourlyRateForEmployment,
		typicalWorkDayHours,
		minimalHourlyRateForEmployment,
	} = inputs;
	const {
		employeePayPerVisit,
		remainingAmountAfterPayingEmployee,
		remainingAmountAfterTax,
	} = calculatedValues;

	return (
		<div>
			<h2>Employee pay</h2>
			<div className='paragraph-wrapper'>
				<p>
					The minimal hourly rate for employment is{' '}
					{toCurrency(minimalHourlyRateForEmployment)}. If we want to attract
					our employee to work longer, we should consider raising our pay rate.
					For our business,{' '}
					<Accent>{toCurrency(appropriateHourlyRateForEmployment)}</Accent> an
					hour should be appropriate. So for the{' '}
					<Accent>{typicalWorkDayHours}-hour cleaning scenario</Accent>, we
					should expect to pay (
					<Accent>
						{toCurrency(appropriateHourlyRateForEmployment)} *{' '}
						{typicalWorkDayHours} hours
					</Accent>
					) which is <Accent>{toCurrency(employeePayPerVisit)}</Accent> to the
					employee. So the remaining amount will be (
					<Accent>
						{toCurrency(remainingAmountAfterTax)} -
						{toCurrency(employeePayPerVisit)}
					</Accent>
					) which is{' '}
					<Accent>{toCurrency(remainingAmountAfterPayingEmployee)}</Accent>.
				</p>
			</div>
		</div>
	);
}
