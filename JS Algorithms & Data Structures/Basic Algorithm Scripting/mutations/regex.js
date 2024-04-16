// program to perform string comparison

// const string1 = 'JavaScript Program';
// const string2 = 'javascript program';
// const string2 = 'what is this';

const string1 = "zyxwvutsrqponmlkjihgfedcba";
const string2 = "qrstu"; // already in alpha order

// create regex
const pattern = new RegExp(string1, "gi");

// compare the stings
const result = pattern.test(string2)

if(result) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}
