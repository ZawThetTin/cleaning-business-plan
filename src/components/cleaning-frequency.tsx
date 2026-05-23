import Accent from '@/components/shared/accent';
import { CalculatedValues } from '@/types/calculatedValues';

interface Props {
	calculatedValues: CalculatedValues;
}

export default function CleaningFrequency({ calculatedValues }: Props) {
	const { targetedTwiceAMonthRecurringCustomersPerEmployee } = calculatedValues;

	return (
		<div>
			<h2>Cleaning frequency</h2>
			<div className='paragraph-wrapper'>
				<p>
					Cleaning frequency can also be once every two weeks (in other words,
					<Accent> twice a month</Accent>). In such a case, we need to have{' '}
					<Accent>
						<b>{targetedTwiceAMonthRecurringCustomersPerEmployee}</b> recurring
						customers
					</Accent>
					.
				</p>
			</div>
		</div>
	);
}
