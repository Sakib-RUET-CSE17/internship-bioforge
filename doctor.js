const doctors = [
    {
        doctorID: "6215",
        firstName: "Jalaluddin",
        lastName: "Mahbub",
        teamID: "008",
        doctorType: "Consultant",
        email: "jabub@hospital.com",
        active: true,
        doctorRequests: []
    },
    {
        doctorID: "6216",
        firstName: "Amin",
        lastName: "Morshed",
        teamID: "008",
        doctorType: "Assistant Consultant",
        email: "amhed@hospital.com",
        active: true
    },
    {
        doctorID: "6214",
        firstName: "Mahady",
        lastName: "Selim",
        teamID: "005",
        doctorType: "Consultant",
        email: "malim@hospital.com",
        active: true,
        doctorRequests: ["6213",]
    },
    {
        doctorID: "6213",
        firstName: "Jamela",
        lastName: "Begum",
        teamID: "005",
        doctorType: "RMO",
        email: "jagum@hospital.com",
        active: false
    },
];

const team = [
    {
        teamName: "nephrology",
        teamID: "008",
        consultantInCharge: "6215",
        teamMates: ["6216",]
    },
    {
        teamName: "cardiology",
        teamID: "005",
        consultantInCharge: "6214",
        teamMates: []
    },
]

// 1
const addNewDoctor = (newDoctor) => {
    let maxID = doctors.reduce((previous, current) => previous.doctorID > current.doctorID ? previous : current).doctorID;
    newDoctor.doctorID = String(++maxID).padStart(3, '0');
    let { firstName, lastName } = newDoctor;
    firstName = firstName.toLowerCase();
    lastName = lastName.toLowerCase();
    newDoctor.email = firstName.slice(0, 2) + lastName.slice(lastName.length - 3) + '@gmail.com';
    // allDoctors = [...doctors, newDoctor];
    doctors.push(newDoctor);
    console.log("New doctor added:", doctors);
    return doctors;
}

addNewDoctor({
    firstName: 'Test',
    lastName: 'Hasan',
    doctorType: 'RMO',
    teamID: '',
    active: false,
});

// 2(b)
const approveNewDoctor = (newDoctorID, teamID) => {
    const targetTeam = team.find(t => t.teamID === teamID);
    targetTeam.teamMates.push(newDoctorID);
    console.log('added to the team', targetTeam)
    const newDoctor = doctors.find(doctor => doctor.doctorID === newDoctorID);
    newDoctor.teamID = teamID;
    newDoctor.active = true;
    console.log('New Doctor Status & Team updated', newDoctor);
}

// 2(a)
const addNewDoctorTeam = (newDoctorID, teamID) => {
    const consultantInChargeID = team.find(t => t.teamID === teamID).consultantInCharge;
    const consultantInCharge = doctors.find(doctor => doctor.doctorID === consultantInChargeID);
    consultantInCharge.doctorRequests.push(newDoctorID);
    console.log('doctorRequests updated:', consultantInCharge);
    approveNewDoctor(newDoctorID, teamID);
    // console.log('Approved new doctor to the team 008', doctors);
}

addNewDoctorTeam('6217', '008');

// 3
const promoteDoctor = (ID, doctorType) => {
    const index = doctors.findIndex(doctor => doctor.doctorID === ID);
    index !== -1 && (doctors[index].doctorType = doctorType);
    console.log('After promote doctor:', doctors);
}

promoteDoctor('6217', 'Assistant Consultant');

// 4
const removeDoctorFromTeam = (ID) => {
    const doctor = doctors.find(doctor => doctor.doctorID === ID)
    const teamID = doctor.teamID;
    const teamMates = team.find(t => t.teamID === teamID).teamMates;
    const index = teamMates.findIndex(teamMate => teamMate === ID);
    teamMates.splice(index, 1);
    // console.log("Removed from team:", teamMates)
    doctor.active = false;
    // doctors.splice(doctors.findIndex(doctor => doctor.doctorID === ID), 1);
    console.log('After disabled:', doctor);
}

removeDoctorFromTeam('6216');


