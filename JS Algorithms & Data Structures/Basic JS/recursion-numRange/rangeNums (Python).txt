# Course: JS Agorithms & Data Structures
# Unit: Basic JS
# Challenge: Use recursion to create a range of numbers

# no unshift equivalent in Python

'''
# counts down nums and prints to console
def countDown(n): 
    print(n) # counts down nums and prints them
    if(n <= 1): # base case
        return
    else:
        countDown(n - 1) # recursive call
        
countDown(5)
'''

'''
# counts down nums, saves to array and prints to console
arr = [] # creates empty list (array)
def listCountDown(j):
    arr.append(j) # adds each element to array
    if(j <= 1): # base case
        print(arr) # prints final array
        return
    else:
        listCountDown(j - 1) # recursive call

listCountDown(5)
'''

'''
# counts down nums between two nums in range
# saves to an array and prints array to console
# start num is always <= end num
# if start and end nums are the same prints one num
range_arr = [] # creates empty list (array)
def rangeNums(s, e):
    range_arr.append(e) # adds each element to array
    if(e <= s): # base case
        print(range_arr) # prints final array
        return
    else:
        rangeNums(s, e - 1) # recursive call - need to keep s consant, e decrements.

rangeNums(5, 10)
# rangeNums(3, 9)
# rangeNums(4, 4)
'''

# counts nums up between two nums in range
# saves to an array and prints array to console
# start num is always <= end num
# if start and end nums are the same prints one num
up_arr = [] # creates empty list (array)
def rangeNumsUp(x, y):
    up_arr.append(x) # adds each element to array
    if(x >= y): # base case
        print(up_arr) # prints final array
        return
    else:
        rangeNumsUp(x + 1, y) # recursive call - need to keep s consant, e decrements.
        
# rangeNumsUp(5, 10)
rangeNumsUp(3, 9)
# rangeNumsUp(4, 4)






        
