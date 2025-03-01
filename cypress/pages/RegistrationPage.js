class RegistrationPage {
    // Page can be improved to contain only references to different fragments
    // Also, Base Page can be created for handling multiple pages

    // Registration form, can be moved to a separate fragment
    get practiceFormRoot() { return cy.get('#userForm'); }
    get firstNameField() { return this.practiceFormRoot.find('#firstName'); }
    get lastNameField() { return this.practiceFormRoot.find('#lastName'); }
    get emailField() { return this.practiceFormRoot.find('#userEmail'); }
    get maleGenderButton() { return this.practiceFormRoot.find('#gender-radio-1'); }
    get femaleGenderButton() { return this.practiceFormRoot.find('#gender-radio-2'); }
    get otherGenderButton() { return this.practiceFormRoot.find('#gender-radio-3'); }
    get mobileField() { return this.practiceFormRoot.find('#userNumber'); }
    get dateOfBirthButton() { return this.practiceFormRoot.find('#dateOfBirthInput'); }
    get subjectsField() { return this.practiceFormRoot.find('#subjectsContainer'); }
    get sportsHobbyButton() { return this.practiceFormRoot.find('#hobbies-checkbox-1'); }
    get readingHobbyButton() { return this.practiceFormRoot.find('#hobbies-checkbox-2'); }
    get musicHobbyButton() { return this.practiceFormRoot.find('#hobbies-checkbox-3'); }
    get chooseFileButton() { return this.practiceFormRoot.find('#uploadPicture'); }
    get currentAddressField() { return this.practiceFormRoot.find('#currentAddress'); }
    get stateDropdown() { return this.practiceFormRoot.find('#state'); }
    get stateOptions() { return this.stateDropdown.find('[id^="react-select-3-option-"]'); }
    get cityDropdown() { return this.practiceFormRoot.find('#city'); }
    get cityOptions() { return this.cityDropdown.find('[id^="react-select-4-option-"]'); }
    get submitButton() { return this.practiceFormRoot.find('#submit'); }

    // Calendar, can be moved to a separate fragment
    get calendarRoot() { return cy.get('.react-datepicker__month-container'); }
    get calendarBody() { return this.calendarRoot.find('.react-datepicker__month'); }
    get calendarMonthButton() { return this.calendarRoot.find('.react-datepicker__month-select'); }
    get calendarYearButton() { return this.calendarRoot.find('.react-datepicker__year-select'); }
    get calendarMonths() { return this.calendarMonthButton.find('option'); }
    get calendarYears() { return this.calendarYearButton.find('option'); }
    get calendarDays() { return this.calendarBody.find('[role="option"]').not('.react-datepicker__day--outside-month'); }
    
    // Modal window, can be moved to a separate fragment
    get modalRoot() { return cy.get('.modal-content'); }
    get modalHeader() { return this.modalRoot.find('#example-modal-sizes-title-lg'); }
    get modalTable() { return this.modalRoot.find('tbody'); }
  }
  
  export default new RegistrationPage();