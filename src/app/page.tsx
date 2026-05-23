import { PropsWithChildren } from 'react';

export default function Home() {
	const currencyFormat = new Intl.NumberFormat('nl-NL', {
		style: 'currency',
		currency: 'EUR',
		currencyDisplay: 'narrowSymbol',
	});
	const toCurrency = (value: number) =>
		currencyFormat.format(value).replace(/\u00A0|\u202F/g, '');

	// Inputs
	const numberOfWorkingDaysInMonth = 22;
	const targetedNumberOfCleaningSitesPerEmployeePerDay = 1;
	const maxNumberOfCleaningSitesPerEmployeePerDay = 2;
	const typicalWorkDayHours = 4;
	const hourlyChargeToClients = 60;
	const vatTaxRate = 0.255;
	const minimalHourlyRateForEmployment = 10;
	const appropriateHourlyRateForEmployment = 18;
	const vehiclePrice = 30000;
	const vehicleLifespanInYears = 7;

	// Calculations
	const targetedMonthlyRecurringCustomersPerEmployee = Math.ceil(
		numberOfWorkingDaysInMonth / targetedNumberOfCleaningSitesPerEmployeePerDay,
	);
	const maxMonthlyRecurringCustomersPerEmployee = Math.ceil(
		numberOfWorkingDaysInMonth / maxNumberOfCleaningSitesPerEmployeePerDay,
	);
	const targetedTwiceAMonthRecurringCustomersPerEmployee = Math.ceil(
		targetedMonthlyRecurringCustomersPerEmployee / 2,
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

	return (
		<div className='flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
			<main className='max-w-prose py-8 sm:py-32 px-6 sm:px-16 bg-white dark:bg-black'>
				<h1 className='text-black dark:text-zinc-50'>Cleaning business plan</h1>
				<p className='note'>
					In the euro currency system, a decimal is represented by “,” and a
					thousand separator is represented by “.”
				</p>
				<div className='flex flex-col gap-10'>
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
									{targetedNumberOfCleaningSitesPerEmployeePerDay}{' '}
									{targetedNumberOfCleaningSitesPerEmployeePerDay > 1
										? 'sites'
										: 'site'}{' '}
									per day
								</Accent>
								. So, for every one employee we hire, we need to acquire{' '}
								<Accent>
									<b>{targetedMonthlyRecurringCustomersPerEmployee}</b> monthly
									recurring customers
								</Accent>
								.{' '}
								{targetedNumberOfCleaningSitesPerEmployeePerDay <
									maxNumberOfCleaningSitesPerEmployeePerDay && (
									<>
										If we expect the employee to clean{' '}
										{maxNumberOfCleaningSitesPerEmployeePerDay} sites per day ,
										you will need to acquire{' '}
										<b>{maxMonthlyRecurringCustomersPerEmployee}</b> monthly
										recurring customers.{' '}
									</>
								)}
								Cleaning is a physically demanding job so we need to account for
								not too many sites a day. (Need to research how the competitors
								assign their employees)
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
					<div>
						<h2>Cleaning frequency</h2>
						<div className='paragraph-wrapper'>
							<p>
								Cleaning frequency can also be once every two weeks (in other
								words,
								<Accent> twice a month</Accent>). In such a case, we need to
								have{' '}
								<Accent>
									<b>{targetedTwiceAMonthRecurringCustomersPerEmployee}</b>{' '}
									recurring customers
								</Accent>
								.
							</p>
						</div>
					</div>

					<div>
						<h2>Revenue</h2>
						<div className='paragraph-wrapper'>
							<p>
								We will charge{' '}
								<Accent>{toCurrency(hourlyChargeToClients)} an hour</Accent> to
								the clients. So, it is (
								<Accent>
									{toCurrency(hourlyChargeToClients)} x {typicalWorkDayHours}{' '}
									hours
								</Accent>
								) which is{' '}
								<Accent>{toCurrency(totalChargeToClientsPerVisit)}</Accent>. We
								can either have 1 site {typicalWorkDayHours} hours clean or 2
								sites {typicalWorkDayHours / 2} hours clean for each. Remember
								to account for commute time if we have multiple sites a day. The
								commute time will be 30 minutes to 1 hour depending on the
								distance and also account for cleaning setup time.
							</p>
						</div>
					</div>

					<div>
						<h2>Tax</h2>
						<div className='paragraph-wrapper'>
							<p>
								For the income of{' '}
								<Accent>
									{toCurrency(totalChargeToClientsPerVisit)} per day
								</Accent>
								, the{' '}
								<Accent>
									VAT tax rate is <b>{vatTaxRate * 100}%</b>
								</Accent>{' '}
								so the tax amount will be{' '}
								<Accent>{toCurrency(taxAmount)}</Accent>. The remaining amount
								will be (
								<Accent>
									{toCurrency(totalChargeToClientsPerVisit)} -{' '}
									{toCurrency(taxAmount)}
								</Accent>
								) which is{' '}
								<Accent>{toCurrency(remainingAmountAfterTax)}</Accent>.
							</p>
						</div>
					</div>

					<div>
						<h2>Employee pay</h2>
						<div className='paragraph-wrapper'>
							<p>
								The minimal hourly rate for employment is{' '}
								{toCurrency(minimalHourlyRateForEmployment)}. If we want to
								attract our employee to work longer, we should consider raising
								our pay rate. For our business,{' '}
								<Accent>
									{toCurrency(appropriateHourlyRateForEmployment)}
								</Accent>{' '}
								an hour should be appropriate. So for the{' '}
								<Accent>{typicalWorkDayHours}-hour cleaning scenario</Accent>,
								we should expect to pay (
								<Accent>
									{toCurrency(appropriateHourlyRateForEmployment)} *{' '}
									{typicalWorkDayHours} hours
								</Accent>
								) which is <Accent>{toCurrency(employeePayPerVisit)}</Accent> to
								the employee. So the remaining amount will be (
								<Accent>
									{toCurrency(remainingAmountAfterTax)} -
									{toCurrency(employeePayPerVisit)}
								</Accent>
								) which is{' '}
								<Accent>
									{toCurrency(remainingAmountAfterPayingEmployee)}
								</Accent>
								.
							</p>
						</div>
					</div>

					<div>
						<h2>Vehicle operational cost</h2>
						<div className='paragraph-wrapper'>
							<p>
								<Accent>The price of a commercial van </Accent> suitable to use
								for our cleaning business is{' '}
								<Accent>{toCurrency(vehiclePrice)}</Accent>. We expect the
								<Accent>
									vehicle to last {vehicleLifespanInYears} years
								</Accent>{' '}
								and more with proper maintenance. We will need to set aside (
								<Accent>
									{toCurrency(vehiclePrice)} / {vehicleLifespanInYears} years
								</Accent>
								) which is{' '}
								<Accent>
									{toCurrency(yearlyVehicleOperationalCost)} yearly{' '}
								</Accent>
								to be able to buy a new van and replace the old one. If we
								calculate the <Accent>monthly cost</Accent>, it will be (
								<Accent>
									{toCurrency(yearlyVehicleOperationalCost)} / 12 months
								</Accent>
								) which is{' '}
								<Accent>{toCurrency(monthlyVehicleOperationalCost)}</Accent>. We
								can divide that by {numberOfWorkingDaysInMonth} working days a
								month to get the <Accent>daily operational cost</Accent> (
								<Accent>
									{toCurrency(monthlyVehicleOperationalCost)} /{' '}
									{numberOfWorkingDaysInMonth} working days
								</Accent>
								) which is{' '}
								<Accent>{toCurrency(vehicleOperationalCostPerVisit)}</Accent>.
								If we subtract it from our remaining income, the remaining
								amount will be (
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
				</div>
			</main>
		</div>
	);
}

function Accent({ children }: PropsWithChildren) {
	return <span className='text-blue-300 font-bold'>{children}</span>;
}
