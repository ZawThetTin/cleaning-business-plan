import { inputs } from '@/data/inputs';
import { CalculatedValues } from '@/types/calculatedValues';

const {
	numberOfWorkingDaysInMonth,
	cleaningSitesPerEmployeePerWorkingDay,
	estimatedTimePerCleaningSiteInHours,
	maxCleaningSitesPerEmployeePerWorkingDay,
	typicalWorkDayHours,
	hourlyChargeToClients,
	vatTaxRate,
	appropriateHourlyRateForEmployment,
	vehiclePrice,
	vehicleLifespanInYears,
} = inputs;

const dailyWorkingHoursPerEmployee =
	cleaningSitesPerEmployeePerWorkingDay * estimatedTimePerCleaningSiteInHours;
const monthlyBillableHoursPerEmployee =
	dailyWorkingHoursPerEmployee * numberOfWorkingDaysInMonth;
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

export const calculatedValues: CalculatedValues = {
	dailyWorkingHoursPerEmployee,
	monthlyBillableHoursPerEmployee,
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
