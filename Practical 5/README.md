# StudentHub - Practical 5

Practical 5 focuses on accessible registration fields and validation feedback.
This practical contains a complete accessible student registration form and beginner-friendly JavaScript validation.

## Open the form
Open `register.html` in a browser, enter sample data, and submit. Try both valid and invalid values. The form does not transmit or store personal data.

## Checks included
Name, email, 10-digit mobile number, password rules, matching confirmation, course, year, gender choice, and agreement to terms. Messages appear next to the related fields. A simple password strength meter updates while typing.

The form uses HTML labels, `aria-describedby`, `aria-invalid`, and a live status message to help users understand errors. The regular expressions and event handling are in `validation.js`.
