//to use the current patients array
const patients = require("./patient");

const outsidePatients = [
    {
        firstName: 'Abul',
        lastName: 'Hosain',
        requiredKidney: true,
        kidneyDonor: false,
        covidPositive: true,
        numberOfDiseases: 3,
    },
    {
        firstName: 'Kabul',
        lastName: 'Hosain',
        requiredKidney: false,
        kidneyDonor: true,
        covidPositive: false,
        numberOfDiseases: 1,
    },
    {
        firstName: 'Babul',
        lastName: 'Hosain',
        requiredKidney: true,
        kidneyDonor: false,
        covidPositive: true,
        numberOfDiseases: 2,
    },
];

const addOutsidePatients = () => {
    let startID = patients[patients.length - 1].ID;
    outsidePatients.map(patient => {
        patient.ID = ++startID;
    })
    allPatients = [...patients, ...outsidePatients];
    return allPatients;
}

console.log('Added all patients:', addOutsidePatients());