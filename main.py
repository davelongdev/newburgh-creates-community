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
                continue
               
                break
        except ValueError:
            print("Please enter a valid number.")
