// Auto-Format Date Input (dd/mm/yyyy) for Wix
// Author: Open Source
// License: MIT
// Description: Automatically formats date input with slashes as user types
// Version: 1.0.0
// Last Updated: December 2025

$w.onReady(() => {
    let previousValue = '';
    
    // Replace #date_input with your actual date input field ID
    $w('#date_input').onInput(() => {
        let input = $w('#date_input').value;
        
        // Replace -, . with /
        input = input.replace(/[-\.]/g, '/');
        
        // Remove all characters except digits and /
        let cleaned = input.replace(/[^\d/]/g, '');
        
        // Extract just numbers
        let numbers = cleaned.replace(/\D/g, '');
        
        // Check if user is deleting (backspacing)
        let isDeleting = cleaned.length < previousValue.length;
        
        // If backspacing and previous value ended with '/', remove one more digit
        if (isDeleting && previousValue.endsWith('/')) {
            numbers = numbers.slice(0, -1);
        }
        
        // Auto-format with slashes
        let formatted = '';
        
        if (numbers.length === 0) {
            formatted = '';
        } else if (numbers.length <= 2) {
            formatted = numbers;
            // Only add slash if user is typing forward AND has 2 digits
            if (numbers.length === 2 && !isDeleting) {
                formatted = numbers + '/';
            }
        } else if (numbers.length <= 4) {
            formatted = numbers.slice(0, 2) + '/' + numbers.slice(2);
            // Only add slash if user is typing forward AND has 4 digits
            if (numbers.length === 4 && !isDeleting) {
                formatted = numbers.slice(0, 2) + '/' + numbers.slice(2) + '/';
            }
        } else {
            formatted = numbers.slice(0, 2) + '/' + numbers.slice(2, 4) + '/' + numbers.slice(4, 8);
        }
        
        $w('#date_input').value = formatted;
        previousValue = formatted;
    });
});
