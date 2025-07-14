# Execution Context

Everything in javascript happens inside a Execution Context.
Execution context has 2 parts

1. Memeory component (Variable Environment)
2. Code component (Thread of execution) - Code is executed one line at a time

Javascript is a synchronous single-threaded language. Executes one line at a time and in a specific order.

# How javascript code is executed

1. Memory creation phase - checks the code line by line and then allocates the below data
   n: undefined
   square: whole code of the function
   square2: undefined
   square4: undefined
2. Code execution phase - Code executes line by line
   n: 2
   when the function is invoked a new execution context is created. This is created inside the global code (memory and code component)
   a. Memory creation phase
   num: undefined
   ans: undefined
   b. Code execution phase
   num: 2
   ans: 4 (num \* num happens in the code component)
   Return the control back to global memory creation phase and square2: 4.
   The local execution context is deleted

To handle all this JS uses a callstack - Managing the order of execution context
Populated with a Global Execution Stack

# Hoisting in Javascript

Accessing the variables and function even before we have initialised it.
In the memory phase the memeory is allocated to x where it is defined as undefined. For the function variable the whole function code is stored.
If the function is an arrow function then that also is treated as a variable and assigned undefined.

# Function innovaction and variable environment

1. Memory Component
   x: undefined
   a: function code
   b: function code
2. Code Component
   x: 1
   New execution context for function a

   1. Memery component
      x: undefined
   2. Code Component
      x:10
      console will search for x in local memory space

   New execution context for function a

   1. Memery component
      x: undefined
   2. Code Component
      x:100
      console will search for x in local memory space

Control goes back to global scope and the x in the local memory is 1.

# Window and this keyword

When we execute a JS code a window object is created and the keyword "this" is used to point to the created window (in browsers).
this === window (always true)

# Undefined vs not defined in JS
