/*
Regular Expressions (RegEx) in JavaScript are powerful tools for pattern matching and text manipulation. Here's a comprehensive guide, broken into sections for clarity:

1. What is RegEx?
Regular Expressions are patterns used to match character combinations in strings.
They are used with JavaScript methods like .test() and .match() to validate, search, and manipulate text.
2. Syntax
Creating a RegEx
Literal notation: /pattern/flags
Constructor: new RegExp("pattern", "flags")
Flags
g – Global: Match all occurrences, not just the first.
i – Ignore case: Case-insensitive matching.
m – Multiline: Enables ^ and $ to match the start/end of lines.
s – Dotall: Allows . to match newline characters (\n).
u – Unicode: Treat pattern as Unicode.
y – Sticky: Matches from the exact position in the string.
3. Special Characters
Character	Description	Example
.	Any character (except \n)	/b.t/ matches "bat", "bit".
\d	Digit (0–9)	/\d+/ matches "123".
\w	Word character (a-z, A-Z, 0-9, _)	/\w+/ matches "word1".
\s	Whitespace	/\s+/ matches spaces, tabs.
^	Start of string	/^abc/ matches "abc...".
$	End of string	/xyz$/ matches "...xyz".
*	Zero or more	/go*gle/ matches "ggle", "google".
+	One or more	/go+gle/ matches "gogle", "google".
?	Optional (0 or 1)	/colou?r/ matches "color", "colour".
{n,m}	Range of occurrences	/a{2,4}/ matches "aa", "aaa".
[abc]	Any of a, b, c	/[aeiou]/ matches vowels.
[^abc]	Not a, b, c	/[^aeiou]/ matches consonants.
`(x	y)`	x or y
4. Methods
1. test()
Tests if a pattern exists in a string.

javascript
Copy code
const regex = /hello/i;
console.log(regex.test("Hello, world!")); // true
2. match()
Returns an array of matches or null.

javascript
Copy code
const str = "Hello, hello, HELLO!";
const result = str.match(/hello/gi); 
console.log(result); // ["Hello", "hello", "HELLO"]
3. replace()
Replaces matched substrings with new text.

javascript
Copy code
const str = "cat and dog";
const newStr = str.replace(/cat/, "mouse");
console.log(newStr); // "mouse and dog"
4. search()
Returns the index of the first match or -1.

javascript
Copy code
const str = "Find the needle in the haystack.";
const index = str.search(/needle/);
console.log(index); // 10
5. split()
Splits a string based on a RegEx.

javascript
Copy code
const str = "apple,banana,pear";
const fruits = str.split(/,/);
console.log(fruits); // ["apple", "banana", "pear"]
5. Groups and Backreferences
Capturing Groups
Use parentheses () to group parts of a pattern.

javascript
Copy code
const regex = /(hello) (world)/;
const result = "hello world".match(regex);
console.log(result[1]); // "hello"
console.log(result[2]); // "world"
Backreferences
Reuse captured groups with \1, \2, etc.

javascript
Copy code
const regex = /(\w+)\s\1/;
console.log(regex.test("hello hello")); // true
6. Lookaheads and Lookbehinds
Positive Lookahead (?=)
Asserts that a group follows.

javascript
Copy code
const regex = /hello(?= world)/;
console.log(regex.test("hello world")); // true
Negative Lookahead (?!)
Asserts that a group does not follow.

javascript
Copy code
const regex = /hello(?! world)/;
console.log(regex.test("hello friend")); // true
Positive Lookbehind (?<=)
Asserts that a group precedes (requires the u flag in JavaScript).

javascript
Copy code
const regex = /(?<=hello )world/;
console.log(regex.test("hello world")); // true
Negative Lookbehind (?<!)
Asserts that a group does not precede.

javascript
Copy code
const regex = /(?<!hello )world/;
console.log(regex.test("hi world")); // true
7. Escaping Special Characters
Use \ to escape special characters like ., *, +, etc.

javascript
Copy code
const regex = /\./;
console.log(regex.test("dot.")); // true
8. Practical Examples
Validate an email
javascript
Copy code
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailRegex.test("example@email.com")); // true
Find all numbers in a string
javascript
Copy code
const str = "Order 123, Item 456";
const numbers = str.match(/\d+/g);
console.log(numbers); // ["123", "456"]
Replace multiple spaces with a single space
javascript
Copy code
const str = "Too    many     spaces!";
const clean = str.replace(/\s+/g, " ");
console.log(clean); // "Too many spaces!"
9. Tips
Use online tools like regex101 to test and debug your RegEx patterns.
Start with simple patterns and gradually add complexity.
Use flags like i and g wisely for case-insensitive or global matching.
Let me know if you'd like to dive deeper into any of these concepts! 🚀









*/