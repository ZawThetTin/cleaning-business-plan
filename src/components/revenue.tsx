import Accent from '@/components/shared/accent';
import { CalculatedValues } from '@/types/calculatedValues';
import { Inputs } from '@/types/input';
import { toCurrency } from '@/utils/toCurrency';

interface Props {
	inputs: Inputs;
	calculatedValues: CalculatedValues;
}

export default function Revenue({ inputs, calculatedValues }: Props) {
	const { hourlyChargeToClients, typicalWorkDayHours } = inputs;
	const { totalChargeToClientsPerVisit } = calculatedValues;

	return (
		<div>
			<h2>Revenue</h2>
			<div className='paragraph-wrapper'>
				<p>
					We will charge{' '}
					<Accent>{toCurrency(hourlyChargeToClients)} an hour</Accent> to the
					clients and it is the VAT included price. So, it is (
					<Accent>
						{toCurrency(hourlyChargeToClients)} x {typicalWorkDayHours} hours
					</Accent>
					) which is <Accent>{toCurrency(totalChargeToClientsPerVisit)}</Accent>
					. We can either have 1 site {typicalWorkDayHours} hours clean or 2
					sites {typicalWorkDayHours / 2} hours clean for each. Remember to
					account for commute time if we have multiple sites a day. The commute
					time will be 30 minutes to 1 hour depending on the distance and also
					account for cleaning setup time.
				</p>
			</div>
		</div>
	);
}
