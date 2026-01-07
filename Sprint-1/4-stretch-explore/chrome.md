Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
What is the return value of `prompt`?

**ANSWER** 
i inspected google search page https://www.google.com/
when i invoked alert, alert dialog pops up in the browser window. the text is hello world and the page is blocked until i click OK. in the console the returned value is undefined. 
while for calling prompt, let myName = prompt("What is your name?"); A modal prompt dialog appears. it shows the message “What is your name?” and OK and Cancel buttons. 