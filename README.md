# md5-test
Test to check how md5 distributes "randomly" a number of elements

Clone the project and run `npm i` on it. To run `node index.js`

The script creates an hexadecimal hash (using md5) of each word/number and then casts it to integer to distribute it across the different percentages.
You can change the number of hexadecimal characters used to generate the integer by changing the NUM_OF_CHARS const in index.js (up to 32).
