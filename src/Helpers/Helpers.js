const l1_data_url = "https://alexgr.ro/ehealth/patients.json";
const l2_patients = "https://hapi.fhir.org/baseR4/Patient?_format=json&_pretty=true";
const l2_medication = "https://hapi.fhir.org/baseR4/Medication?_include=Medication%3Aingredient%3Amanufacturer&_count=100&_format=json&_pretty=true";

export {l1_data_url, l2_medication, l2_patients};
