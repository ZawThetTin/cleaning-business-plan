import Accent from '@/components/shared/accent';
import { data } from '@/data';
import { toCurrency } from '@/utils/toCurrency';

export default function Tax() {
	const {
		vatTaxRate,
		totalChargeToClientsPerVisit,
		taxAmount,
		remainingAmountAfterTax,
	} = data;

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
