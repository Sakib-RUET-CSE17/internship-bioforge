const kidneysInStock = 5;

const patients = [
    {
        firstName: "Shakira",
        lastName: "Hossain",
        patientID: "007",
        diseases: ["COVID", "1-kidney", "3/4-dissolved-brain"],
        isAdmitted: true,
    },
    {
        firstName: "Uzumaki",
        lastName: "Naruto",
        patientID: "008",
        diseases: ["Obesity"],
        isAdmitted: true,
    },
    {
        firstName: "Sheikh",
        lastName: "Selim Ahmed",
        patientID: "006",
        diseases: ["Broken heart", "Depression"],
        isAdmitted: true,
    },
    {
        firstName: "Rafsan",
        lastName: "Wayne",
        patientID: "009",
        diseases: ["COVID", "1-kidney", "Impaired vision"],
        isAdmitted: false,
    },
];

// 1
const listPatientsByID = () => {
    patients.sort((patient1, patient2) => patient1.patientID - patient2.patientID);
    console.log('All patients ordered by patient ID:', patients);
}

listPatientsByID();

// 2
const listUnadmittedPatientsAndAdmit = () => {
    const unadmittedPatients = patients.filter(patient => !patient.isAdmitted);
    console.log('Unadmitted patients:', unadmittedPatients);
    patients.map(patient => {
        patient.isAdmitted || (patient.isAdmitted = true);
        return patient;
    })
    console.log('After get admitted:', patients);
}

listUnadmittedPatientsAndAdmit();

// 3
const findPatientsRequiredKidney = () => {
    // console.log(patients)
    const patientsRequiredKidney = patients.filter(patient => patient.diseases.find(disease => disease.toLowerCase().includes('kidney')));
    // console.log('Patients who require kidney:', patientsRequiredKidney);
    return patientsRequiredKidney;
}

console.log(findPatientsRequiredKidney());

// 3(a)
const patientsNeededToFinishStock = () => {
    const patientsRequiredKidney = findPatientsRequiredKidney(); // from 3
    const numberOfPatientsNeededToFinishStock = kidneysInStock - patientsRequiredKidney.length;
    console.log('Number of patients needed to finish kidney stock:', numberOfPatientsNeededToFinishStock);
}

patientsNeededToFinishStock();

// 4
const findCovidPatientsAndDisplayDetails = () => {
    const covidPatients = patients.filter(patient => patient.diseases.find(disease => disease.toLocaleLowerCase().includes('covid')));
    covidPatients.map(patient => {
        const { lastName, firstName, diseases } = patient;
        const diseasesSuffix = diseases.length > 1 ? 'diseases' : 'disease';
        const details = `${firstName}, ${lastName}, ${diseases.length} ${diseasesSuffix}`;
        console.log(details);
    })
}

findCovidPatientsAndDisplayDetails();

// to import the array in the patientsFromOtherHospitals file
module.exports = patients;