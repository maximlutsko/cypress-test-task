import RegistrationPage from '../pages/RegistrationPage';
import { clickUsingJS } from '../support/utils';
import 'cypress-file-upload';

class RegistrationSteps {
  
  enterValidUserDetails() {
    RegistrationPage.firstNameField.type('John');
    RegistrationPage.lastNameField.type('Doe');
    RegistrationPage.emailField.type('test@test.test');
    this.selectGender('male');
    RegistrationPage.mobileField.type('1234567890');
    RegistrationPage.subjectsField.type('maths');
  }

  enterFirstName(firstName) {
    RegistrationPage.firstNameField.type(firstName);
  }

  enterLastName(lastName) {
    RegistrationPage.lastNameField.type(lastName);
  }

  enterEmail(email) {
    RegistrationPage.emailField.type(email);
  }

  selectGender(gender) {
    switch (gender) {
      case 'Male':
        clickUsingJS(RegistrationPage.maleGenderButton);
        break;
      case 'Female':
        clickUsingJS(RegistrationPage.femaleGenderButton);
        break;
      case 'Other':
        clickUsingJS(RegistrationPage.otherGenderButton);
        break;
      default:
        throw new Error('Invalid gender selected');
    }
  }

  enterMobileNumber(mobileNumber) {
    RegistrationPage.mobileField.type(mobileNumber);
  }

  selectDateOfBirth(day, month, year) {
    RegistrationPage.dateOfBirthButton.click();
    RegistrationPage.calendarYearButton.select(year.toString());
    RegistrationPage.calendarMonthButton.select(month);
    RegistrationPage.calendarDays.contains(day.toString()).click();
  }

  enterSubjects(subjects) {
    subjects.forEach((subject) => {
      RegistrationPage.subjectsField.type(subject);
      RegistrationPage.subjectsField.trigger('keydown', { keyCode: 13, which: 13 });
    });
  }

  selectHobby(hobby) {
    switch (hobby) {
      case 'Sports':
        clickUsingJS(RegistrationPage.sportsHobbyButton);
        break;
      case 'Reading':
        clickUsingJS(RegistrationPage.readingHobbyButton);
        break;
      case 'Music':
        clickUsingJS(RegistrationPage.musicHobbyButton);
        break;
      default:
        throw new Error('Invalid hobby selected');
    }
  }

  uploadImage(image) {
    RegistrationPage.chooseFileButton.attachFile(image);
  }

  enterCurrentAddress(currentAddress) {
    RegistrationPage.currentAddressField.type(currentAddress);
  }

  selectState(state) {
    RegistrationPage.stateDropdown.click();
    RegistrationPage.stateOptions.each(($el) => {
      if ($el.text().trim() === state) {
        cy.wrap($el).click();
      }
    });
  }

  selectCity(city) {
    RegistrationPage.cityDropdown.click();
    RegistrationPage.cityOptions.each(($el) => {
      if ($el.text().trim() === city) {
        cy.wrap($el).click();
      }
    });
  }

  verifyDetailsByRowName(rowName, expectedValue) {
    RegistrationPage.modalTable.find('tr').each(($row) => {
      cy.wrap($row).find('td').first().invoke('text').then((text) => {
        if (text === rowName) {
          cy.wrap($row).find('td').eq(1).should('have.text', expectedValue);
          return false;
        }
      });
    });
  }

  submitForm() {
    RegistrationPage.submitButton.click();
  }

}

export default new RegistrationSteps();