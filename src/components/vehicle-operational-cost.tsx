import Accent from '@/components/shared/accent';
import { data } from '@/data';
import { toCurrency } from '@/utils/toCurrency';

export default function VehicleOperationalCost() {
	const {
		vehiclePrice,
		vehicleLifespanInYears,
		numberOfWorkingDaysInMonth,
		yearlyVehicleOperationalCost,
		monthlyVehicleOperationalCost,
		vehicleOperationalCostPerVisit,
		remainingAmountAfterPayingEmployee,
		remainingAmountAfterPayingEmployeeAndVehicleCost,
	} = data;

	return (
		<div>
			<h2>Vehicle operational cost</h2>
			<div className='paragraph-wrapper'>
				<p>
					<Accent>The price of a commercial van </Accent> suitable to use for
					our cleaning business is <Accent>{toCurrency(vehiclePrice)}</Accent>.
					We expect the
					<Accent>vehicle to last {vehicleLifespanInYears} years</Accent> and
					more with proper maintenance. We will need to set aside (
					<Accent>
						{toCurrency(vehiclePrice)} / {vehicleLifespanInYears} years
					</Accent>
					) which is{' '}
					<Accent>{toCurrency(yearlyVehicleOperationalCost)} yearly </Accent>
					to be able to buy a new van and replace the old one. If we calculate
					the <Accent>monthly cost</Accent>, it will be (
					<Accent>
						{toCurrency(yearlyVehicleOperationalCost)} / 12 months
					</Accent>
					) which is{' '}
					<Accent>{toCurrency(monthlyVehicleOperationalCost)}</Accent>. We can
					divide that by {numberOfWorkingDaysInMonth} working days a month to
					get the <Accent>daily operational cost</Accent> (
					<Accent>
						{toCurrency(monthlyVehicleOperationalCost)} /{' '}
						{numberOfWorkingDaysInMonth} working days
					</Accent>
					) which is{' '}
					<Accent>{toCurrency(vehicleOperationalCostPerVisit)}</Accent>. If we
					subtract it from our remaining income, the remaining amount will be (
					<Accent>
						{toCurrency(remainingAmountAfterPayingEmployee)} -{' '}
						{toCurrency(vehicleOperationalCostPerVisit)}
					</Accent>
					) which is{' '}
					<Accent>
						{toCurrency(remainingAmountAfterPayingEmployeeAndVehicleCost)}
					</Accent>
					.
				</p>
			</div>
		</div>
	);
}
