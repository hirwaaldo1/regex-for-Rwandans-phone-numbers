# Regex for Rwandans phone numbers
This is the regex for Rwandan phone numbers, which can be used for MTN, Tigo, or Airtel.

## Usage
Use this regular expression to validate a mobile phone number input string in Rwanda in your code. The regular expression can be used in any programming language or text editor that supports regex.

## Regular Expression
The regular expression is: `/^\+?(25)?0(\s)?-?7(\d){2}(\s|-)?(\d){3}(\s|-)?(\d){3}$/g`

## Explanation
- `/^`: Denotes the start of the input string
- `\+?`: Matches an optional plus sign
- `(250)?`: Matches an optional country code (250) for Rwanda
- `(\s)?`: Matches an optional space character
- `\-?`: Matches an optional hyphen character
- `0?`: Matches an optional leading zero
- `7(\d){8}`: Matches the 9 digits of the mobile phone number (the first digit must be 7)
- `$/g`: Denotes the end of the input string and the global flag for finding multiple matches.

## References
Here are some resources that were used to create and test this regular expression:
- [Rwandan phone numbers - Wikipedia](https://en.wikipedia.org/wiki/Telephone_numbers_in_Rwanda) 
- [Regular Expressions - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)


