# File index
About
Paramaters
Album properties
Rules
Notes

# About
README for record collection challenge.

# Paramaters
1.Start with and updateRecords function which takes an object literal.
2.The function takes 4 arguments:
	a.records - the object literal.
	b.id - id prop for a nested object. The nested object contains metadata for the album. Ie: title, artist, tracks, etc.
	c.prop - a prop from the nested object like artist or track
	d.value - the value used to update the property. Ie: value = Prince. This artist property will be updated with this value.
3.The function will modify the object passed to it.

# Album properties
albumTitle: - stores a string
artist: - stores a string 
tracks: - stories an array

# Rules
1.Function must always return the entire record collection object. Ie: records argument.

2.IF prop is: 
	a.NOT tracks, AND 
	b.value is NOT an empty string, 
THEN:
	a.UPDATE, or
	b.SET that albums's prop to the value. 

NOTE: TWO conditions MUST be met to produce one of TWO OUTCOMES, which are: UPDATE or SET.

3.IF prop is tracks but album DOESN'T have a tracks prop:
	a.create an empty array and add value to it.

NOTE: if tracks prop does not exist, add it with an empty array and add value to the array.

4.IF:
	a.prop IS tracks, AND
	b.value ISN'T an empty string

THEN:
	a.add value to the end of the album's existing tracks array.
	
NOTE: TWO conditions must be met to produce one outcome, which is: ADD value to end of the existing tracks array.

5.IF: 
	a.value IS an empty string

THEN: 
	a.DELETE the given prop from the album (nested object/record).

# Notes
- Dot and bracket notation used to access an object's properties. Syntax - object.property or object['property']. Bracket notation is required for property names with spaces in them. Eg: object['first name'].
- Might need to use .hasOwnProperty method to test if prop exists in object to establish if it needs to be added. Syntax - obj.hasOwnProperty(checkProp). Returns true or false.
Refer to: testing objects for properties lesson.
- Other possible method to check for existence of property is: obj.propName !==undefined. 
- I am unsure about the correct syntax to check a nested object. The nested object is technically a property of the parent property. Subsequently, all properties in the parent object are properties. Does that mean you don't have to specify the parent property of the grandchild property in the syntax when checking for its existence?

- 251021: Passed 5/7 tests (refer to screenshot tests-251021). Tests 5 and 6 failed.
	
	- test 5: After updateRecords(recordCollection, 2468, "tracks", "Free"), tracks should have the string 1999 as the first element.
	- test 6: After updateRecords(recordCollection, 2548, "tracks", ""), tracks should not be set.

- 251021: Test 5 - unsure why 1999 is no longer the first element? Is Free replacing it or being added to the end? Either way, 1999 is dropped.
- 251021: Test 6 - unsure why its not deleting tracks prop from 2548? It deletes artist (test 3) from 2548 but not tracks?



