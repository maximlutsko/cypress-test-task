import RegistrationSteps from '../steps/RegistrationSteps';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

const IMAGE_PATH = 'images/test.png';
const IMAGE = 'test.png';
const FIRST_NAME = 'John';
const LAST_NAME = 'Doe';
const EMAIL = 'test@test.test';
const MALE_GENDER = 'Male';
const MOBILE_NUMBER = '1234567890';
const DATE = '02 May,2024';
const DAY = '2';
const MONTH = 'May';
const YEAR = '2024';
const SUBJECTS = ['Maths', 'Arts'];
const SPORTS_HOBBY = 'Sports';
const ADDRESS = 'Address';
const STATE = 'NCR';
const CITY = 'Delhi';

describe('User registration with valid details', () => {
  
  // Base url opening can be moved to Base Test
  // Also, base url can be changed to https://demoqa.com/ and navigation to the Forms -> Practice Form can be added via additional pages
  beforeEach(() => {
    cy.visit('/');
  });
  
  it('should succesfully register a new user', () => {
    
    RegistrationSteps.enterFirstName(FIRST_NAME);
    RegistrationSteps.enterLastName(LAST_NAME);
    RegistrationSteps.enterEmail(EMAIL);
    RegistrationSteps.selectGender(MALE_GENDER);
    RegistrationSteps.enterMobileNumber(MOBILE_NUMBER);
    RegistrationSteps.selectDateOfBirth(DAY, MONTH, YEAR);
    RegistrationSteps.enterSubjects(SUBJECTS);
    RegistrationSteps.selectHobby(SPORTS_HOBBY);
    RegistrationSteps.uploadImage(IMAGE_PATH);
    RegistrationSteps.enterCurrentAddress(ADDRESS);
    RegistrationSteps.selectState(STATE);
    RegistrationSteps.selectCity(CITY);
  
    RegistrationSteps.submitForm();

    RegistrationSteps.verifyDetailsByRowName('Student Name', FIRST_NAME + ' ' + LAST_NAME);
    RegistrationSteps.verifyDetailsByRowName('Student Email', EMAIL);
    RegistrationSteps.verifyDetailsByRowName('Gender', MALE_GENDER);
    RegistrationSteps.verifyDetailsByRowName('Mobile', MOBILE_NUMBER);
    RegistrationSteps.verifyDetailsByRowName('Date of Birth', DATE);
    RegistrationSteps.verifyDetailsByRowName('Subjects', SUBJECTS.join(', '));
    RegistrationSteps.verifyDetailsByRowName('Hobbies', SPORTS_HOBBY);
    RegistrationSteps.verifyDetailsByRowName('Picture', IMAGE);
    RegistrationSteps.verifyDetailsByRowName('Address', ADDRESS);
    RegistrationSteps.verifyDetailsByRowName('State and City', STATE + ' ' + CITY);

  })
})