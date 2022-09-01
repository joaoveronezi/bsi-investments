/* eslint-disable no-plusplus */
/* eslint-disable indent */
export const compound = (initialP, amountP, yearsP, interestP, periodP = 1) => {
    const initial = Number(initialP);
    const amount = Number(amountP);
    const years = Number(yearsP);
    const interest = Number(interestP);
    const period = Number(periodP);

    const rate = interest / period;
    let result;
    let totalFromPrincipal;
    let totalFromAnnuity;
    const principal = [initial];
    const int = [0];
    const total = [initial];
    for (let i = 1; i < years + 1; i++) {
        // What is current value of initial investment
        totalFromPrincipal = initial * (1 + rate) ** (i * period);
        // what is current value factor of the annuity
        totalFromAnnuity = ((1 + rate) ** (i * period) - 1) / rate;
        // multiply value factor by amount
        totalFromAnnuity *= amount;

        const totalForYear = totalFromAnnuity + totalFromPrincipal;
        total.push(Number(totalForYear.toFixed(2)));

        // total amount of contributed capital
        const contribution = amount * i * period + initial;
        principal.push(Number(contribution.toFixed(2)));

        const intAmt = totalForYear - contribution;
        int.push(Number(intAmt.toFixed(2)));
        if (i === years) {
            result = Number(totalForYear.toFixed(2));
        }
    }
    return {
        result,
        principal,
        interest: int,
        total,
    };
};
