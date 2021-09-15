let doctors = [
    {
        ID: 1,
        firstName: 'Amin',
        lastName: 'Morshed',
        teamID: 1,
        doctorType: 'Consultant',
        doctorRequests: [2, 3],
        active: true,
        email: 'amhed@gmail.com',
    },
    {
        ID: 2,
        firstName: 'Sakib',
        lastName: 'Hasan',
        teamID: 2,
        doctorType: 'Consultant',
        doctorRequests: [1],
        active: true,
        email: 'sasan@gmail.com',
    },
]

const addNewDoctor = (newDoctor) => {
    newDoctor.ID = doctors[doctors.length - 1].ID + 1;
    newDoctor.teamID = doctors[doctors.length - 1].teamID + 1;
    let { firstName, lastName } = newDoctor;
    firstName = firstName.toLowerCase();
    lastName = lastName.toLowerCase();
    newDoctor.email = firstName.slice(0, 2) + lastName.slice(lastName.length - 3) + '@gmail.com';
    doctors = [...doctors, newDoctor];
    console.log("New doctor added:", doctors);
}

addNewDoctor({
    firstName: 'Test',
    lastName: 'Hasan',
    doctorType: 'RMO',
    doctorRequests: [],
    active: false,
});

const addNewDoctorTeam = (ID, teamID, consultantInCharge) => {
    const doctorIndex = doctors.findIndex(doctor => doctor.ID === ID);
    doctorIndex !== -1 && (doctors[doctorIndex].teamID = teamID);
    const consultantIndex = doctors.findIndex(doctor => doctor.ID === consultantInCharge);
    consultantIndex !== -1 && (doctors[consultantIndex].doctorRequests.push(ID));
    doctors[doctorIndex].active = true;
    console.log('Adde new doctor to the team 008', doctors);
}

addNewDoctorTeam(3, '008', 2);

const promoteDoctor = (ID, doctorType) => {
    const index = doctors.findIndex(doctor => doctor.ID === ID);
    index !== -1 && (doctors[index].doctorType = doctorType);
    console.log('After promote doctor:', doctors);
}

promoteDoctor(3, 'Assistant Consultant');

const removeDoctor = (ID) => {
    doctors.splice(doctors.findIndex(doctor => doctor.ID === ID), 1);
    console.log('After deletion:', doctors);
}

removeDoctor(1);


