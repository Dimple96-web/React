# Execution Context

Everything in javascript happens inside a Execution Context.
Execution context has 2 parts

1. Memeory component (Variable Environment)
2. Code component (Thread of execution) - Code is executed one line at a time

Javascript is a synchronous single-threaded language. Executes one line at a time and in a specific order.

# How javascript code is executed

1. Memory creation phase - checks the code line by line and then allocates the below data
   n: undefined
   square: who code of the function
   square2: undefined
   square4: undefined
2. Code execution phase
