import Accent from '@/components/shared/accent';
import { CalculatedValues } from '@/types/calculatedValues';
import { Inputs } from '@/types/input';
import { toCurrency } from '@/utils/toCurrency';

interface Props {
	inputs: Inputs;
	calculatedValues: CalculatedValues;
}

export default function Tax({ inputs, calculatedValues }: Props) {
	const { vatTaxRate } = inputs;
	const { totalChargeToClientsPerVisit, taxAmount, remainingAmountAfterTax } =
		calculatedValues;

	return (
		<div>
			<h2>Tax</h2>
			<div className='paragraph-wrapper'>
				<p>
					For the income of{' '}
					<Accent>{toCurrency(totalChargeToClientsPerVisit)} per day</Accent>,
					the{' '}
					<Accent>
						VAT tax rate is <b>{vatTaxRate * 100}%</b>
					</Accent>{' '}
					so the tax amount will be <Accent>{toCurrency(taxAmount)}</Accent>.
					The remaining amount will be (
					<Accent>
						{toCurrency(totalChargeToClientsPerVisit)} - {toCurrency(taxAmount)}
					</Accent>
					) which is <Accent>{toCurrency(remainingAmountAfterTax)}</Accent>.
				</p>
			</div>
		</div>
	);
}
