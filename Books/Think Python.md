---
tags:
  - readwise
---

# Think Python

![rw-book-cover](https://m.media-amazon.com/images/I/81Jl+DroJ2L._SY160.jpg)

## Metadata
- Author: [[Allen Downey]]
- Full Title: Think Python
- Category: #books

## Highlights
- If you want to learn to program, you have come to the right place. Python is one of the best programming languages for beginners—and it is also one of the most in-demand skills. You have also come at the right time, because learning to program now is probably easier than ever. With virtual assistants like ChatGPT, you don’t have to learn alone. Throughout this book, I’ll suggest ways you can use these tools to accelerate your learning. This book is primarily for people who have never programmed before and people who have some experience in another programming language. If you have substantial experience in Python, you might find the first few chapters too slow. ([Location 30](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=30))
    - Tags: [[pink]] 
- If you read carefully and work on exercises consistently, you will make progress. But I’ll warn you now—learning to program is not easy, and even for experienced programmers it can be frustrating. As we go, I will suggest strategies to help you write correct programs and fix incorrect ones. ([Location 45](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=45))
    - Tags: [[pink]] 
- If you are just getting started, I strongly recommend you start with Colab. ([Location 100](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=100))
    - Tags: [[pink]] 
- You might have noticed that int, float, and str are not Python keywords. They are variables that represent types, and they can be used as functions. So it is legal to have a variable or function with one of those names, but it is strongly discouraged. Ask an assistant “Why is it bad to use int, float, and str as variable names?” Also ask, “What are the built-in functions in Python?” If you are curious about any of them, ask for more information. In this chapter we imported the math module and used some of the variables and functions it provides. Ask an assistant, “What variables and functions are in the math module?” and “Other than math, what modules are considered core Python?” ([Location 999](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=999))
    - Tags: [[pink]] 
- Exercise Repeating my advice from the previous chapter, whenever you learn a new feature, you should make errors on purpose to see what goes wrong. We’ve seen that n = 17 is legal. What about 17 = n? ([Location 1010](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=1010))
    - Tags: [[pink]] 
- How about x = y = 1? In some languages every statement ends with a semicolon (;). What happens if you put a semicolon at the end of a Python statement? What if you put a period at the end of a statement? What happens if you spell the name of a module wrong and try to import maath? ([Location 1014](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=1014))
    - Tags: [[pink]] 
- Integer Division and Modulus Recall that the integer division operator, //, divides two numbers and rounds down to an integer. For example, suppose the runtime of a movie is 105 minutes. You might want to know how long that is in hours. Conventional division returns a floating-point number: minutes = 105 minutes / 60        1.75 ([Location 1959](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=1959))
    - Tags: [[pink]] 
- But we don’t normally write hours with decimal points. Integer division returns the integer number of hours, rounding down: minutes = 105 hours = minutes // 60 hours        1 ([Location 1968](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=1968))
    - Tags: [[pink]] 
- To get the remainder, you could subtract off one hour, in minutes: remainder = minutes - hours * 60 remainder        45        Or you could use the modulus operator, %, which divides two numbers and returns the… ([Location 1977](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=1977))
    - Tags: [[pink]] 
- The modulus operator is more useful than it might seem. For example, it can check whether one number is divisible by another: if x % y… ([Location 1994](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=1994))
    - Tags: [[pink]] 
- Also, it can extract the rightmost digit or digits from a number. For example, x % 10 yields the rightmost digit of x (in base 10). Similarly, x % 100 yields the last two digits. x = 123 x % 10, x % 100       (3, 23)        Finally, the modulus operator can do “clock arithmetic.” For example, if an event starts at 11 A.M. and lasts three hours, we can use the modulus operator to figure out what time it ends:… ([Location 1996](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=1996))
    - Tags: [[pink]] 
- A boolean expression is an expression that is either true or false. For example, the following expressions use the equals operator, ==, which compares two values and… ([Location 2020](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=2020))
    - Tags: [[pink]] 
- 5 == 5        True        5 == 7        False        A common error is to use a single equals sign (=) instead of a double equals sign (==). Remember that = assigns a value to a variable and == compares two values: x = 5 y = 7        x == y          False          True and False are special values that belong to the type bool; they are not strings: type(True)          bool          type… ([Location 2025](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=2025))
    - Tags: [[pink]] 
- x != y               # x is not equal to y          True          x > y                # x is greater than y          False          x < y               # x is less than to y          True          x >= y               # x is greater than or equal to y          False… ([Location 2066](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=2066))
    - Tags: [[pink]] 
- Logical Operators To combine boolean values into expressions, we can use logical operators. The most common are and, or, and not. The meaning of these operators is similar to their meaning in English. For example, the value of the following expression is True only if… ([Location 2092](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=2092))
    - Tags: [[pink]] 
- The following expression is True if either or both of the conditions is true, that is, if the number is divisible by 2 or 3: x % 2 == 0 or x % 3 == 0          False          Finally, the not operator negates a boolean expression, so the following expression is True if x > y is False: not x > y          True          Strictly speaking, the operands of a logical operator should be boolean expressions, but Python is not very strict. Any nonzero number is interpreted as True: 42 and True          True… ([Location 2109](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=2109))
    - Tags: [[pink]] 
- if Statements In order to write useful programs, we almost always need the ability to check conditions and change the behavior of the program accordingly. Conditional statements give us this ability. The simplest form is the if statement: if x > 0:     print('x is positive')          x is positive          if is a Python keyword. if statements have the same structure as function definitions: a header followed by an indented statement or sequence of statements called a block. The boolean expression after if is called the condition. If it is true, the statements in the indented block run. If not, they don’t. There is no limit to the number of statements that can appear in the block, but there has to be at least one.… ([Location 2136](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=2136))
    - Tags: [[pink]] 
- if x < 0:     pass          # TODO: need to handle negative values!          The word TODO in a comment is a conventional reminder that… ([Location 2159](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=2159))
    - Tags: [[pink]] 
- The else Clause An if statement can have a second part, called an else clause. The syntax looks like this: if x % 2 == 0:     print('x is even') else:     print('x is odd')          x is odd          If the condition is true, the first indented statement runs; otherwise, the second indented statement runs. In this example, if x is even, the remainder when x is divided by 2 is 0, so the condition is true and the program displays x is even. If x is odd, the remainder is 1, so the condition is false, and the program displays… ([Location 2167](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=2167))
    - Tags: [[pink]] 
- Chained Conditionals Sometimes there are more than two possibilities and we need more than two branches. One way to express a computation like that is a chained… ([Location 2191](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=2191))
    - Tags: [[pink]] 
- if x < y:     print('x is less than y') elif x > y:     print('x is greater than y') else:     print('x and y are equal')          x is less than y          elif is an abbreviation of “else if.” There is no limit on the number of elif clauses. If there is an else clause, it has to be at the end, but there doesn’t have to be one. Each condition is checked in order. If the first is false, the next is checked, and so on. If one of them is true, the… ([Location 2198](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=2198))
    - Tags: [[pink]] 
- Nested Conditionals One conditional can also be nested within another. We could have written the example in the previous section like this: if x == y:     print('x and y are equal') else:     if x < y:         print('x is… ([Location 2218](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=2218))
    - Tags: [[pink]] 
- x is less than y          The outer if statement contains two branches. The first branch contains a simple statement. The second branch contains another if statement, which has two branches of its own. Those two branches are both simple statements, although they could have been conditional statements as well. Although the indentation of the statements makes the structure apparent, nested conditionals can be difficult to read. I suggest you avoid them when you can. Logical operators often provide a way to simplify nested conditional statements. Here’s an example with a nested conditional: if 0 < x:     if x < 10:         print('x is a positive single-digit number.')          x is a positive single-digit number.          The… ([Location 2237](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=2237))
    - Tags: [[pink]] 
- x is a positive single-digit number.          For this kind of condition, Python provides a more concise option: if 0 < x < 10:     print('x is a positive single-digit number.')… ([Location 2268](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=2268))
    - Tags: [[pink]] 
- It is legal for a function to call itself. It may not be obvious why that is a good thing, but it turns out to be one of the most magical things a program can do. Here’s an example: def countdown(n):     if n <= 0:         print('Blastoff!')     else:         print(n)         countdown(n-1)          If n is 0 or negative, countdown outputs the word, “Blastoff!”. Otherwise, it outputs n and then calls… ([Location 2279](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=2279))
    - Tags: [[pink]] 
- countdown(3)          3 2 1 Blastoff!          The execution of countdown begins with n=3, and since n is greater than 0, it displays 3, and then calls itself… The execution of countdown begins with n=2, and since n is greater than 0, it displays 2, and then calls itself… The execution of countdown begins with n=1, and since n is greater than 0, it displays 1, and then calls itself… The execution of countdown begins with n=0, and since n is not greater than 0, it displays “Blastoff!” and returns. The countdown that got n=1 returns. The countdown that got n=2 returns. The countdown that got n=3 returns. A function that calls itself is recursive. As… ([Location 2301](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=2301))
    - Tags: [[pink]] 
- If n is positive, print_n_times displays the value of string and then calls itself, passing along string and n-1 as arguments. If n is 0 or negative, the condition is false and print_n_times does nothing. Here’s how it works: print_n_times('Spam ', 4)          Spam Spam Spam Spam          For simple examples like this, it is probably easier to use a for loop. But we will see examples later… ([Location 2340](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=2340))
    - Tags: [[pink]] 
- Infinite Recursion If a recursion never reaches a base case, it goes on ([Location 2365](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=2365))
    - Tags: [[pink]] 
- making recursive calls forever, and the program never terminates. This is known as infinite recursion, and it is generally not a good idea. Here’s a minimal function with an infinite recursion: def recurse():     recurse()          Every time recurse is called, it calls itself, which creates another frame. In Python, there is a limit to the number of frames that can be on the stack at the same time. If a program exceeds the limit, it causes a runtime error: recurse() ([Location 2366](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=2366))
    - Tags: [[pink]] 
- Keyboard Input The programs we have written so far accept no input from the user. They just do the same thing every time. Python provides a built-in function called input that stops the program and waits for the user to type something. When the user presses Return or Enter the program resumes, and input returns what the user typed as a string: text = input() ([Location 2392](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=2392))
    - Tags: [[pink]] 
- Before getting input from the user, you might want to display a prompt telling the user what to type. input can take a prompt as an argument: name = input('What...is your name?\n') name          What...is your name? It is Arthur, King of the Britons          'It is Arthur, King of the Britons'          The sequence \n at the end of the prompt represents a newline, which is a special character that causes a line break—that way the user’s input appears below the prompt. If you expect the user to type an integer, you can use the int function to convert the return value to int: prompt = 'What...is the airspeed velocity of an unladen swallow?\n' speed = input(prompt) speed          What...is the airspeed velocity of an unladen swallow? What do you mean: an African or European swallow?          'What do you mean: an African or European swallow?'          But if they type something that’s not an integer, you’ll get a runtime error. ([Location 2401](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=2401))
    - Tags: [[pink]] 
- int(speed)          ValueError: invalid literal for int() with base 10: 'What do you mean:             an African or European swallow?'          We will see how to handle this kind of error later. ([Location 2431](https://readwise.io/to_kindle?action=open&asin=B0D54G74HJ&location=2431))
    - Tags: [[pink]]

