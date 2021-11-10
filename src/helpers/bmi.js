export const getBMI = (weight, heightInM) => {
	return parseFloat((weight / heightInM**2).toFixed(2));
}

export const getBMICategory = (bmi) => {
    switch(true) {
        case (bmi <= 16.5):
            return 'dénutrition 😭';
        case (bmi <= 18.5):
            return 'maigreur 😥';
        case (bmi <= 25):
            return 'normal 🙂';
        case (bmi <= 30):
            return 'surpoids 🙁';
        case (bmi <= 35):
            return 'obésitée modérée 🤢';
        case (bmi <= 40):
            return 'obésité sévère 🤒';
        default:
            return 'obésité morbide 💀';
    }
}