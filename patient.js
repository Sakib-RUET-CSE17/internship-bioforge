let patients = [
    {
        ID: 1,
        firstName: 'Sakib',
        lastName: 'Hasan',
        assignedDoctorID: 1,
        inPatient: true,
        outPatient: false,
        requiredKidney: false,
        kidneyDonor: false,
        covidPositive: false,
        numberOfDiseases: 2,
    },
    {
        ID: 2,
        firstName: 'Rakib',
        lastName: 'Hasan',
        assignedDoctorID: 3,
        inPatient: false,
        outPatient: true,
        requiredKidney: true,
        kidneyDonor: false,
        covidPositive: true,
        numberOfDiseases: 3,
    },
    {
        ID: 3,
        firstName: 'John',
        lastName: 'Doe',
        assignedDoctorID: 1,
        inPatient: true,
        outPatient: false,
        requiredKidney: false,
        kidneyDonor: true,
        covidPositive: true,
        numberOfDiseases: 1,
    },
]

const listPatientsByID = () => {
    patients.sort((patient1, patient2) => patient1.ID - patient2.ID);
    console.log('All patients ordered by patient ID:', patients);
}

listPatientsByID();

const listUnadmittedPatientsAndAdmit = () => {
    const unadmittedPatients = patients.filter(patient => patient.outPatient);
    console.log('Unadmitted patients:', unadmittedPatients);
    patients.map(patient => {
        patient.outPatient && ([patient.outPatient, patient.inPatient] = [patient.inPatient, patient.outPatient]);
        return patient;
    })
    console.log('After get admitted:', patients);
}

listUnadmittedPatientsAndAdmit();

const findPatientsRequiredKidneyAndPatientsNeededToFinishStock = () => {
    // console.log(patients)
    const patientsRequiredKidney = patients.filter(patient => patient.requiredKidney);
    console.log('Patients who require kidney:', patientsRequiredKidney);
    const kidneyDonors = patients.filter(patient => patient.kidneyDonor);
    // console.log(kidneyDonors)
    const numberOfPatientsNeededToFinishStock = kidneyDonors.length - patientsRequiredKidney.length;
    console.log('Number of patients needed to finish kidney stock:', numberOfPatientsNeededToFinishStock);
}

findPatientsRequiredKidneyAndPatientsNeededToFinishStock();

const findCovidPatientsAndDisplayDetails = () => {
    const covidPatients = patients.filter(patient => patient.covidPositive);
    covidPatients.map(patient => {
        const { lastName, firstName, numberOfDiseases } = patient;
        const str = numberOfDiseases > 1 ? 'diseases' : 'disease';
        const details = `${firstName}, ${lastName}, ${numberOfDiseases} ${str}`;
        console.log(details);
    })
}

findCovidPatientsAndDisplayDetails();

// to import the array in the patientsFromOtherHospitals file
module.exports = patients;