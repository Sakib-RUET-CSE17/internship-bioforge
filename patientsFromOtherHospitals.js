//to use the current patients array
const patients = require("./patient");

const patientsFromOtherHospital = [
    {
        firstName: "Agent",
        lastName: "Pena",
        diseases: ["COVID"],
    },
    {
        firstName: "Heisenberg",
        lastName: "Bear",
        diseases: ["Headache"]
    },
    {
        firstName: "Okarin",
        lastName: "May",
        diseases: ["Broken Wrist", "Mad-scientist"],
    },
    {
        firstName: "Hououin",
        lastName: "Kyoma",
        diseases: ["Delusional disorder", "Memory loss"],
    },
];

const addOutsidePatients = () => {
    let maxID = patients.reduce((previous, current) => previous.patientID > current.patientID ? previous : current).patientID;
    // console.log(String(++maxID).padStart(3, '0'))
    patientsFromOtherHospital.map(patient => {
        patient.patientID = String(++maxID).padStart(3, '0');
        // patient.isAdmitted = true;
    })
    allPatients = [...patients, ...patientsFromOtherHospital];
    return allPatients;
}

console.log('Added all patients:', addOutsidePatients());