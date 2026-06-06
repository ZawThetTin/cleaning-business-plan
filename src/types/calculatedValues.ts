export type CalculatedValues = {
	dailyWorkingHoursPerEmployee: number;
	monthlyBillableHoursPerEmployee: number;
	requiredMonthlyRecurringCustomersPerEmployee: number;
	maxMonthlyRecurringCustomersPerEmployee: number;
	targetedTwiceAMonthRecurringCustomersPerEmployee: number;
	totalChargeToClientsPerVisit: number;
	taxAmount: number;
	remainingAmountAfterTax: number;
	employeePayPerVisit: number;
	remainingAmountAfterPayingEmployee: number;
	yearlyVehicleOperationalCost: number;
	monthlyVehicleOperationalCost: number;
	vehicleOperationalCostPerVisit: number;
	remainingAmountAfterPayingEmployeeAndVehicleCost: number;
};
