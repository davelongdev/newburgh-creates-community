+++
title = "a python guessing game"
date = "2025-09-17T14:09:23.000-04:00"
description = "a guessing game made with python by a student"
tags = [ "coding", "python", "STEM" ]
categories = [ "python", "coding" ]
draft = false
+++

<h3>A Guessing Game</h3>

<br>

This is the code written by one of our students for a project during our 2025 summer camp.

<br>

```python
import random
secret_number = random.randint(1, 1000)
attempts = 0

while True:
        try:

            guess = int(input("Enter your guess number between 1-1000: "))
            attempts += 1

            if guess < secret_number:
                print("Too low! ")
            elif guess > secret_number:
                print("Too high! ")
            else:
                print("Congratulations! You guessed it in " + str (attempts) + " attempts")
                print('\n')
                print("Let's play again.")
                print('\n')
                continue

        except ValueError:
            print("Please enter a valid number.")
```

<br>

This is how it would run:

<br>

<div class="pyterm"><div id="out"></div><form id="line" onsubmit="return false" style="display:none"><span id="ps"></span><input id="in" autocomplete="off"></form></div>

<script src="https://cdn.jsdelivr.net/npm/brython@3.12.4/brython.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/brython@3.12.4/brython_stdlib.js"></script>

<script type="text/python">
from browser import document, aio
import random, sys

out, form, ps, inp = document["out"], document["line"], document["ps"], document["in"]


class Screen:
    def write(self, text):
        out.text += text

    def flush(self):
        pass


sys.stdout = Screen()


async def ainput(prompt):
    ps.text = prompt
    form.style.display = "flex"
    inp.focus()
    await aio.event(form, "submit")
    value = inp.value
    out.text += prompt + value + "\n"
    inp.value = ""
    form.style.display = "none"
    return value


async def main():
    secret_number = random.randint(1, 1000)
    attempts = 0

    while True:
        try:

            guess = int(await ainput("Enter your guess number between 1-1000: "))
            attempts += 1

            if guess < secret_number:
                print("Too low! ")
            elif guess > secret_number:
                print("Too high! ")
            else:
                print("Congratulations! You guessed it in " + str (attempts) + " attempts")
                print('\n')
                print("Let's play again.")
                print('\n')
                continue

        except ValueError:
            print("Please enter a valid number.")


aio.run(main())
</script>

<script>window.addEventListener("DOMContentLoaded", () => brython())</script>

<style>
.highlight pre { white-space:pre-wrap; word-break:break-word; padding:1rem;
                 border-radius:.5rem; }
.pyterm { background:#111; color:#eee; font-family:monospace; padding:1.5rem;
          border-radius:.5rem; min-height:12rem; white-space:pre-wrap; }
.pyterm form { display:flex; flex-wrap:wrap; align-items:baseline; row-gap:1.25rem;
               margin-top:1.25rem; }
.pyterm input { background:transparent; border:none; color:inherit; font:inherit;
                flex:1; min-width:8rem; padding:0; }
</style>
