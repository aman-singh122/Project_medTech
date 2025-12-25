// Dummy data for Government Healthcare System Prototype

export const states = [
  { id: 1, name: "Maharashtra" },
  { id: 2, name: "Delhi" },
  { id: 3, name: "Karnataka" },
  { id: 4, name: "Tamil Nadu" },
  { id: 5, name: "Gujarat" },
  { id: 6, name: "Uttar Pradesh" },
  { id: 7, name: "Jharkhand" },
];

export const districts: Record<number, { id: number; name: string }[]> = {
  1: [
    { id: 101, name: "Mumbai" },
    { id: 102, name: "Pune" },
    { id: 103, name: "Nagpur" },
  ],
  2: [
    { id: 201, name: "Central Delhi" },
    { id: 202, name: "South Delhi" },
    { id: 203, name: "North Delhi" },
  ],
  3: [
    { id: 301, name: "Bengaluru Urban" },
    { id: 302, name: "Mysuru" },
    { id: 303, name: "Mangaluru" },
  ],
  4: [
    { id: 401, name: "Chennai" },
    { id: 402, name: "Coimbatore" },
    { id: 403, name: "Madurai" },
  ],
  5: [
    { id: 501, name: "Ahmedabad" },
    { id: 502, name: "Surat" },
    { id: 503, name: "Vadodara" },
  ],
  6: [
    { id: 601, name: "Lucknow" },
    { id: 602, name: "Kanpur" },
    { id: 603, name: "Varanasi" },
  ],
  7: [
    { id: 701, name: "Ranchi" },
    { id: 702, name: "Jamshedpur" },
    { id: 703, name: "Dhanbad" },
  ],
};

export const hospitals: Record<number, { id: number; name: string; type: string; beds: number }[]> = {
  101: [
    { id: 1001, name: "KEM Hospital", type: "Government", beds: 1800 },
    { id: 1002, name: "JJ Hospital", type: "Government", beds: 1352 },
    { id: 1003, name: "Sion Hospital", type: "Government", beds: 1000 },
  ],
  102: [
    { id: 1004, name: "Sassoon General Hospital", type: "Government", beds: 1300 },
    { id: 1005, name: "BJ Medical College", type: "Government", beds: 900 },
  ],
  201: [
    { id: 2001, name: "AIIMS Delhi", type: "Central Government", beds: 2478 },
    { id: 2002, name: "Safdarjung Hospital", type: "Central Government", beds: 1531 },
    { id: 2003, name: "RML Hospital", type: "Central Government", beds: 1531 },
  ],
  301: [
    { id: 3001, name: "Victoria Hospital", type: "Government", beds: 950 },
    { id: 3002, name: "Bowring Hospital", type: "Government", beds: 700 },
  ],
  401: [
    { id: 4001, name: "Rajiv Gandhi Government Hospital", type: "Government", beds: 2102 },
    { id: 4002, name: "Stanley Medical College Hospital", type: "Government", beds: 1200 },
  ],
  501: [
    { id: 5001, name: "Civil Hospital Ahmedabad", type: "Government", beds: 2200 },
    { id: 5002, name: "VS Hospital", type: "Government", beds: 800 },
  ],
  601: [
    { id: 6001, name: "KGMU Lucknow", type: "Government", beds: 4500 },
    { id: 6002, name: "Balrampur Hospital", type: "Government", beds: 1000 },
  ],
  701: [
    { id: 7001, name: "RIMS Ranchi", type: "Government", beds: 1500 },
    { id: 7002, name: "Sadar Hospital Ranchi", type: "Government", beds: 600 },
    { id: 7003, name: "Rajendra Institute of Medical Sciences", type: "Government", beds: 1200 },
  ],
  702: [
    { id: 7004, name: "MGM Medical College Hospital", type: "Government", beds: 800 },
    { id: 7005, name: "Tata Main Hospital", type: "Government", beds: 950 },
  ],
  703: [
    { id: 7006, name: "PMCH Dhanbad", type: "Government", beds: 500 },
  ],
};

export const departments = [
  { id: 1, name: "General Medicine", icon: "Stethoscope" },
  { id: 2, name: "Cardiology", icon: "Heart" },
  { id: 3, name: "Orthopedics", icon: "Bone" },
  { id: 4, name: "Pediatrics", icon: "Baby" },
  { id: 5, name: "Dermatology", icon: "Scan" },
  { id: 6, name: "ENT", icon: "Ear" },
  { id: 7, name: "Ophthalmology", icon: "Eye" },
  { id: 8, name: "Gynecology", icon: "Users" },
  { id: 9, name: "Neurology", icon: "Brain" },
  { id: 10, name: "Psychiatry", icon: "HeartPulse" },
];

export const doctors = [
  { id: 1, name: "Dr. Rajesh Kumar", department: "General Medicine", hospital: 2001, experience: 15, qualification: "MBBS, MD", availableDays: ["Mon", "Wed", "Fri"], slots: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM"] },
  { id: 2, name: "Dr. Priya Sharma", department: "Cardiology", hospital: 2001, experience: 12, qualification: "MBBS, DM Cardiology", availableDays: ["Tue", "Thu", "Sat"], slots: ["10:00 AM", "11:00 AM", "12:00 PM", "03:00 PM"] },
  { id: 3, name: "Dr. Amit Patel", department: "Orthopedics", hospital: 2001, experience: 18, qualification: "MBBS, MS Ortho", availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri"], slots: ["09:00 AM", "10:00 AM", "02:00 PM"] },
  { id: 4, name: "Dr. Sunita Reddy", department: "Pediatrics", hospital: 2002, experience: 10, qualification: "MBBS, MD Pediatrics", availableDays: ["Mon", "Wed", "Fri"], slots: ["09:00 AM", "10:00 AM", "11:00 AM", "04:00 PM"] },
  { id: 5, name: "Dr. Vikram Singh", department: "Dermatology", hospital: 2002, experience: 8, qualification: "MBBS, MD Dermatology", availableDays: ["Tue", "Thu"], slots: ["10:00 AM", "11:00 AM", "12:00 PM"] },
  { id: 6, name: "Dr. Meena Iyer", department: "ENT", hospital: 1001, experience: 20, qualification: "MBBS, MS ENT", availableDays: ["Mon", "Wed", "Fri"], slots: ["09:00 AM", "10:00 AM", "11:00 AM"] },
  { id: 7, name: "Dr. Arjun Nair", department: "Ophthalmology", hospital: 1001, experience: 14, qualification: "MBBS, MS Ophthalmology", availableDays: ["Tue", "Thu", "Sat"], slots: ["09:00 AM", "10:00 AM", "02:00 PM", "03:00 PM"] },
  { id: 8, name: "Dr. Kavita Joshi", department: "Gynecology", hospital: 3001, experience: 16, qualification: "MBBS, MD OBG", availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri"], slots: ["10:00 AM", "11:00 AM", "03:00 PM"] },
  { id: 9, name: "Dr. Sanjay Gupta", department: "Neurology", hospital: 4001, experience: 22, qualification: "MBBS, DM Neurology", availableDays: ["Mon", "Wed", "Fri"], slots: ["09:00 AM", "11:00 AM", "02:00 PM"] },
  { id: 10, name: "Dr. Ananya Das", department: "Psychiatry", hospital: 5001, experience: 9, qualification: "MBBS, MD Psychiatry", availableDays: ["Tue", "Thu"], slots: ["10:00 AM", "11:00 AM", "12:00 PM", "04:00 PM"] },
  
  // Jharkhand - RIMS Ranchi (7001) - All Departments
  { id: 11, name: "Dr. Sunil Oraon", department: "General Medicine", hospital: 7001, experience: 18, qualification: "MBBS, MD", availableDays: ["Mon", "Wed", "Fri"], slots: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM"] },
  { id: 12, name: "Dr. Neha Tirkey", department: "Cardiology", hospital: 7001, experience: 12, qualification: "MBBS, DM Cardiology", availableDays: ["Tue", "Thu", "Sat"], slots: ["10:00 AM", "11:00 AM", "03:00 PM"] },
  { id: 13, name: "Dr. Rakesh Mahto", department: "Orthopedics", hospital: 7001, experience: 15, qualification: "MBBS, MS Ortho", availableDays: ["Mon", "Tue", "Thu"], slots: ["09:00 AM", "10:00 AM", "02:00 PM", "03:00 PM"] },
  { id: 14, name: "Dr. Anjali Kumari", department: "Pediatrics", hospital: 7001, experience: 10, qualification: "MBBS, MD Pediatrics", availableDays: ["Mon", "Wed", "Fri"], slots: ["09:00 AM", "10:00 AM", "11:00 AM"] },
  { id: 15, name: "Dr. Manoj Sahu", department: "Dermatology", hospital: 7001, experience: 8, qualification: "MBBS, MD Dermatology", availableDays: ["Tue", "Thu"], slots: ["10:00 AM", "11:00 AM", "12:00 PM"] },
  { id: 16, name: "Dr. Binod Toppo", department: "ENT", hospital: 7001, experience: 14, qualification: "MBBS, MS ENT", availableDays: ["Mon", "Wed", "Fri"], slots: ["09:00 AM", "10:00 AM", "11:00 AM"] },
  { id: 17, name: "Dr. Shanti Ekka", department: "Ophthalmology", hospital: 7001, experience: 11, qualification: "MBBS, MS Ophthalmology", availableDays: ["Tue", "Thu", "Sat"], slots: ["10:00 AM", "11:00 AM", "02:00 PM"] },
  { id: 18, name: "Dr. Poonam Kumari", department: "Gynecology", hospital: 7001, experience: 16, qualification: "MBBS, MD OBG", availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri"], slots: ["09:00 AM", "10:00 AM", "03:00 PM"] },
  { id: 19, name: "Dr. Ashok Kujur", department: "Neurology", hospital: 7001, experience: 20, qualification: "MBBS, DM Neurology", availableDays: ["Mon", "Wed", "Fri"], slots: ["09:00 AM", "11:00 AM", "02:00 PM"] },
  { id: 20, name: "Dr. Rahul Minz", department: "Psychiatry", hospital: 7001, experience: 9, qualification: "MBBS, MD Psychiatry", availableDays: ["Tue", "Thu"], slots: ["10:00 AM", "11:00 AM", "12:00 PM"] },
  
  // Sadar Hospital Ranchi (7002) - All Departments
  { id: 21, name: "Dr. Preeti Hembrom", department: "General Medicine", hospital: 7002, experience: 14, qualification: "MBBS, MD", availableDays: ["Mon", "Wed", "Fri"], slots: ["09:00 AM", "10:00 AM", "11:00 AM"] },
  { id: 22, name: "Dr. Ravi Munda", department: "Cardiology", hospital: 7002, experience: 11, qualification: "MBBS, DM Cardiology", availableDays: ["Tue", "Thu", "Sat"], slots: ["10:00 AM", "11:00 AM", "02:00 PM"] },
  { id: 23, name: "Dr. Sunita Lakra", department: "Orthopedics", hospital: 7002, experience: 13, qualification: "MBBS, MS Ortho", availableDays: ["Mon", "Tue", "Thu"], slots: ["09:00 AM", "10:00 AM", "02:00 PM"] },
  { id: 24, name: "Dr. Deepak Soren", department: "Pediatrics", hospital: 7002, experience: 9, qualification: "MBBS, MD Pediatrics", availableDays: ["Mon", "Wed", "Fri"], slots: ["09:00 AM", "10:00 AM", "11:00 AM"] },
  { id: 25, name: "Dr. Rina Bodra", department: "Dermatology", hospital: 7002, experience: 7, qualification: "MBBS, MD Dermatology", availableDays: ["Tue", "Thu"], slots: ["10:00 AM", "11:00 AM", "12:00 PM"] },
  { id: 26, name: "Dr. Suresh Hansda", department: "ENT", hospital: 7002, experience: 12, qualification: "MBBS, MS ENT", availableDays: ["Mon", "Wed", "Fri"], slots: ["09:00 AM", "10:00 AM", "11:00 AM"] },
  { id: 27, name: "Dr. Meera Tudu", department: "Ophthalmology", hospital: 7002, experience: 10, qualification: "MBBS, MS Ophthalmology", availableDays: ["Tue", "Thu", "Sat"], slots: ["10:00 AM", "11:00 AM", "02:00 PM"] },
  { id: 28, name: "Dr. Jyoti Murmu", department: "Gynecology", hospital: 7002, experience: 15, qualification: "MBBS, MD OBG", availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri"], slots: ["09:00 AM", "10:00 AM", "03:00 PM"] },
  { id: 29, name: "Dr. Vikash Kisku", department: "Neurology", hospital: 7002, experience: 17, qualification: "MBBS, DM Neurology", availableDays: ["Mon", "Wed", "Fri"], slots: ["09:00 AM", "11:00 AM", "02:00 PM"] },
  { id: 30, name: "Dr. Anita Besra", department: "Psychiatry", hospital: 7002, experience: 8, qualification: "MBBS, MD Psychiatry", availableDays: ["Tue", "Thu"], slots: ["10:00 AM", "11:00 AM", "12:00 PM"] },
  
  // Rajendra Institute (7003) - All Departments
  { id: 31, name: "Dr. Rajiv Sinha", department: "General Medicine", hospital: 7003, experience: 20, qualification: "MBBS, MD", availableDays: ["Mon", "Wed", "Fri"], slots: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM"] },
  { id: 32, name: "Dr. Kavita Singh", department: "Cardiology", hospital: 7003, experience: 15, qualification: "MBBS, DM Cardiology", availableDays: ["Tue", "Thu", "Sat"], slots: ["10:00 AM", "11:00 AM", "03:00 PM"] },
  { id: 33, name: "Dr. Pradeep Kumar", department: "Orthopedics", hospital: 7003, experience: 18, qualification: "MBBS, MS Ortho", availableDays: ["Mon", "Tue", "Thu"], slots: ["09:00 AM", "10:00 AM", "02:00 PM", "03:00 PM"] },
  { id: 34, name: "Dr. Suman Devi", department: "Pediatrics", hospital: 7003, experience: 12, qualification: "MBBS, MD Pediatrics", availableDays: ["Mon", "Wed", "Fri"], slots: ["09:00 AM", "10:00 AM", "11:00 AM"] },
  { id: 35, name: "Dr. Anil Prasad", department: "Dermatology", hospital: 7003, experience: 10, qualification: "MBBS, MD Dermatology", availableDays: ["Tue", "Thu"], slots: ["10:00 AM", "11:00 AM", "12:00 PM"] },
  { id: 36, name: "Dr. Geeta Kumari", department: "ENT", hospital: 7003, experience: 14, qualification: "MBBS, MS ENT", availableDays: ["Mon", "Wed", "Fri"], slots: ["09:00 AM", "10:00 AM", "11:00 AM"] },
  { id: 37, name: "Dr. Mohan Sharma", department: "Ophthalmology", hospital: 7003, experience: 13, qualification: "MBBS, MS Ophthalmology", availableDays: ["Tue", "Thu", "Sat"], slots: ["10:00 AM", "11:00 AM", "02:00 PM"] },
  { id: 38, name: "Dr. Lata Devi", department: "Gynecology", hospital: 7003, experience: 19, qualification: "MBBS, MD OBG", availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri"], slots: ["09:00 AM", "10:00 AM", "03:00 PM"] },
  { id: 39, name: "Dr. Ramesh Oraon", department: "Neurology", hospital: 7003, experience: 22, qualification: "MBBS, DM Neurology", availableDays: ["Mon", "Wed", "Fri"], slots: ["09:00 AM", "11:00 AM", "02:00 PM"] },
  { id: 40, name: "Dr. Sunita Marandi", department: "Psychiatry", hospital: 7003, experience: 11, qualification: "MBBS, MD Psychiatry", availableDays: ["Tue", "Thu"], slots: ["10:00 AM", "11:00 AM", "12:00 PM"] },
];

export const patients = [
  { id: 1, name: "Ramesh Verma", age: 45, gender: "Male", phone: "9876543210", email: "ramesh.verma@email.com", abhaId: "91-1234-5678-9012", address: "123, Sector 15, Delhi" },
  { id: 2, name: "Sita Devi", age: 38, gender: "Female", phone: "9876543211", email: "sita.devi@email.com", abhaId: "91-2345-6789-0123", address: "456, MG Road, Mumbai" },
  { id: 3, name: "Arun Kumar", age: 62, gender: "Male", phone: "9876543212", email: "arun.kumar@email.com", abhaId: "91-3456-7890-1234", address: "789, Anna Nagar, Chennai" },
  { id: 4, name: "Priya Menon", age: 28, gender: "Female", phone: "9876543213", email: "priya.menon@email.com", abhaId: "91-4567-8901-2345", address: "321, Koramangala, Bengaluru" },
  { id: 5, name: "Suresh Yadav", age: 55, gender: "Male", phone: "9876543214", email: "suresh.yadav@email.com", abhaId: "91-5678-9012-3456", address: "654, Gomti Nagar, Lucknow" },
];

export const appointments = [
  { id: "APT001", patientId: 1, doctorId: 1, hospitalId: 2001, date: "2025-01-02", time: "10:00 AM", status: "Confirmed", department: "General Medicine" },
  { id: "APT002", patientId: 2, doctorId: 2, hospitalId: 2001, date: "2025-01-03", time: "11:00 AM", status: "Confirmed", department: "Cardiology" },
  { id: "APT003", patientId: 3, doctorId: 3, hospitalId: 2001, date: "2025-01-02", time: "02:00 PM", status: "Completed", department: "Orthopedics" },
  { id: "APT004", patientId: 1, doctorId: 4, hospitalId: 2002, date: "2024-12-28", time: "09:00 AM", status: "Completed", department: "Pediatrics" },
  { id: "APT005", patientId: 4, doctorId: 5, hospitalId: 2002, date: "2025-01-05", time: "10:00 AM", status: "Pending", department: "Dermatology" },
];

export const medicalRecords = [
  { id: 1, patientId: 1, doctorId: 1, hospitalId: 2001, date: "2024-11-15", diagnosis: "Viral Fever", prescription: ["Paracetamol 500mg", "Cetirizine 10mg", "Vitamin C"], tests: ["CBC", "Urine Test"], notes: "Rest for 3 days. Drink plenty of fluids." },
  { id: 2, patientId: 1, doctorId: 2, hospitalId: 2001, date: "2024-10-20", diagnosis: "Hypertension - Controlled", prescription: ["Amlodipine 5mg", "Aspirin 75mg"], tests: ["ECG", "Lipid Profile", "Blood Sugar"], notes: "Continue medication. Review after 1 month." },
  { id: 3, patientId: 2, doctorId: 4, hospitalId: 2002, date: "2024-12-01", diagnosis: "Upper Respiratory Infection", prescription: ["Amoxicillin 500mg", "Montelukast 10mg", "Cough Syrup"], tests: ["Chest X-Ray"], notes: "Complete antibiotic course." },
  { id: 4, patientId: 3, doctorId: 3, hospitalId: 2001, date: "2024-11-28", diagnosis: "Knee Osteoarthritis", prescription: ["Diclofenac 50mg", "Calcium + Vitamin D3", "Glucosamine"], tests: ["X-Ray Knee", "Vitamin D Level"], notes: "Physiotherapy recommended. Avoid stairs." },
  { id: 5, patientId: 4, doctorId: 5, hospitalId: 2002, date: "2024-12-10", diagnosis: "Allergic Dermatitis", prescription: ["Hydrocortisone Cream", "Levocetirizine 5mg"], tests: ["Allergy Panel"], notes: "Avoid triggers. Apply cream twice daily." },
];

export const symptoms = [
  { id: 1, name: "Fever", suggestedDepartment: "General Medicine" },
  { id: 2, name: "Chest Pain", suggestedDepartment: "Cardiology" },
  { id: 3, name: "Joint Pain", suggestedDepartment: "Orthopedics" },
  { id: 4, name: "Skin Rash", suggestedDepartment: "Dermatology" },
  { id: 5, name: "Headache", suggestedDepartment: "Neurology" },
  { id: 6, name: "Cough & Cold", suggestedDepartment: "General Medicine" },
  { id: 7, name: "Eye Problems", suggestedDepartment: "Ophthalmology" },
  { id: 8, name: "Ear Pain", suggestedDepartment: "ENT" },
  { id: 9, name: "Child Health Issues", suggestedDepartment: "Pediatrics" },
  { id: 10, name: "Anxiety/Depression", suggestedDepartment: "Psychiatry" },
  { id: 11, name: "Women's Health", suggestedDepartment: "Gynecology" },
  { id: 12, name: "Breathing Difficulty", suggestedDepartment: "General Medicine" },
];

export const governmentSchemes = [
  { id: 1, name: "Ayushman Bharat - PMJAY", description: "Health insurance coverage of Rs. 5 lakh per family per year for secondary and tertiary care hospitalization.", eligibility: "Bottom 40% vulnerable population", link: "#" },
  { id: 2, name: "Pradhan Mantri Jan Arogya Yojana", description: "Cashless and paperless access to healthcare services for the beneficiary at the point of service.", eligibility: "SECC database beneficiaries", link: "#" },
  { id: 3, name: "Ayushman Bharat Digital Mission", description: "Create digital health IDs for citizens and digitize healthcare ecosystem.", eligibility: "All Indian citizens", link: "#" },
  { id: 4, name: "Rashtriya Swasthya Bima Yojana", description: "Health insurance scheme for BPL families in the unorganized sector.", eligibility: "BPL families", link: "#" },
];

export const analyticsData = {
  patientsPerDay: [
    { day: "Mon", count: 145 },
    { day: "Tue", count: 132 },
    { day: "Wed", count: 156 },
    { day: "Thu", count: 128 },
    { day: "Fri", count: 167 },
    { day: "Sat", count: 189 },
    { day: "Sun", count: 78 },
  ],
  departmentWise: [
    { department: "General Medicine", patients: 456 },
    { department: "Cardiology", patients: 234 },
    { department: "Orthopedics", patients: 189 },
    { department: "Pediatrics", patients: 312 },
    { department: "Dermatology", patients: 145 },
    { department: "ENT", patients: 167 },
  ],
  monthlyOverview: [
    { month: "Jul", opd: 4500, admissions: 890 },
    { month: "Aug", opd: 4800, admissions: 920 },
    { month: "Sep", opd: 5100, admissions: 980 },
    { month: "Oct", opd: 4900, admissions: 910 },
    { month: "Nov", opd: 5300, admissions: 1050 },
    { month: "Dec", opd: 5600, admissions: 1120 },
  ],
};
