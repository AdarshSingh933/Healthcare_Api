
*************For testing using the hosted url*************
the api is hosted on "https://hospitalapi-yb7y.onrender.com/"
This will open the homepage where some details are given

Below are the list of working routes which you can test using postman

***For Doctor***
api/v1/doctors/register : This(POST request) will handle the registration of new doctor
api/v1/doctors/login : This(GET request) is create the jwt token which is required to perform all patients related operations

***For Patients***
[Note: Make sure all te below operation will require to pass the authorisation token in header]

api/v1/patients/register : This(POST request) will handle the registration of new patient.
api/v1/patients/create_report/:phone : This(GET request) will generate the report of a particular patient.Pass the phone number of the patient in params.
api/v1/patients/all_reports : This(GET request) will genarate all patients report.No need to pass any phone number
api/v1/patients/update_status/:phone : This(GET request) will update the current checkup status of the patient.Pass the phone number of the patient in params.Also add a key 'newstatus' in the body and the value should be new status.
api/v1/patients/status/:status : This(GET request) is generate all the patient report of a particular status.Pass the state code in the params.
