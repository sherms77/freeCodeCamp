# Notes
- 220622: created v2 of this folder to move it into the main freeCodeCamp repo as the original folder was trapped as a submodule.

# About
- Course: JS Algorithms & Data Structures
- Module: Basic JS
- Challenge: Profile lookup

# Folder map
- index.html - html file for js file to run.
- profileLookup.js - main js file.
- README.md
- tests_ProfileLookup.py - Python file to test concepts.
- steps.txt - steps to solve problem.
- testCode.js
- profile-lookup-FCC.txt - final code from freeCodeCamp (FCC).

# Challenge
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

# Function paramaters
Function takes two arguments:
1. name - this is the first name, need to CHECK if its a firstName in the object,
2. property (prop) - any other propety in the record (nested object).

# Rules
1. If name is a contact's first name AND the property (prop) is a property of that contact THEN:
    - return the value of that property.

2. If name does not correspond to any contacts THEN:
    - return the string 'No such contact.'

3. If prop does not correspond to any valid properties of a contact that matches a name (I think this is firstName bc that's the paramater of the function), THEN:
    - return the string 'No such property.'

# Notes
- Refer to testCode.js file for steps 1-5.
- Refer to profile-lookup-FCC.txt for final code.
