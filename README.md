# Auto-Format Date Input for Wix (dd/mm/yyyy)

## Description
Automatically formats date input fields with slashes as users type. Makes entering dates intuitive and error-free.

## Features
- Auto-inserts "/" after day and month (e.g., typing "25122024" becomes "25/12/2024")
- Converts "-" and "." to "/" automatically
- Intelligent backspace handling - removes digits when backspacing over slashes
- Only allows numeric input
- Limits to valid date format (dd/mm/yyyy)

## How to Use in Wix

### Step 1: Add Input Field
1. Add a text input field to your Wix page
2. Note the element ID (e.g., #input1, #dateField, etc.)
3. Set placeholder text to "dd/mm/yyyy"

### Step 2: Add Validation (Optional but Recommended)
1. Select your input field
2. In the properties panel, find "Validation"
3. Add this validation pattern: `^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\d{4}$`
4. Set error message: "Please enter a valid date (dd/mm/yyyy)"

### Step 3: Add Code
1. Open "Page Code" in Wix Editor
2. Copy the code from `date-formatter.js`
3. Replace `#date_input` with your actual input field ID
4. Save and test!

## Code Customization

### Change the Input Field ID
Find this line:
```javascript
$w('#date_input').onInput(() => {
```

Replace `#date_input` with your field ID:
```javascript
$w('#myDateField').onInput(() => {
```

Make sure to update BOTH occurrences in the code (there are two).

### Use for Multiple Date Fields
If you have multiple date input fields, duplicate the entire code block and change the ID for each:

```javascript
$w.onReady(() => {
    // Date Field 1
    let previousValue1 = '';
    $w('#date_input1').onInput(() => {
        // ... code for field 1
    });

    // Date Field 2
    let previousValue2 = '';
    $w('#date_input2').onInput(() => {
        // ... code for field 2
    });
});
```

## Example Usage

### User types: "2"
Display: `2`

### User types: "25"
Display: `25/` (slash auto-added)

### User types: "251"
Display: `25/1`

### User types: "2512"
Display: `25/12/` (second slash auto-added)

### User types: "25122024"
Display: `25/12/2024`

### User backspaces from "25/12/2024"
- One backspace: `25/12/202`
- Two backspaces: `25/12/20`
- Three backspaces: `25/12/2`
- Four backspaces: `25/12/`
- Five backspaces: `25/1` (slash + digit removed)

## Browser Compatibility
Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Validation Pattern Explained
The validation pattern `^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\d{4}$` ensures:
- Day: 01-31
- Month: 01-12
- Year: Any 4-digit year

Note: This validation doesn't check if the date actually exists (e.g., 31/02/2024 would pass). For more complex validation, add server-side checks.

## License
MIT License - Free to use, modify, and distribute

## Contributing
Feel free to fork and submit pull requests for improvements!

## Issues
If you encounter any bugs or have suggestions, please open an issue on GitHub.

## Author
Open Source Community

## Version
1.0.0

## Last Updated
December 2025
