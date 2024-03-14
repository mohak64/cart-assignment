## Groww Cart - https://groww-delta.vercel.app/

Checkout the Beautiful UI - I WON'T ADD IMAGES TO RUIN THE FIRST LOOK!

### Overview
This project is a Next.js application that leverages Tailwind CSS for styling and Zustand for state management. It implements a dynamic checkout process with randomized products. Users can choose between different payment methods, including UPI and credit card. The project also features various validations, such as UPI handling, credit card validation using the Luhn algorithm, and more.



#### Product Randomization:
- Upon opening the page, the user receives a random combination of products.
- Users can clear the cache and reload the cart state by pressing the reload cart button.

#### Checkout Process:
- After selecting products, the user proceeds to checkout.
- Every thing is cached using Local Storage.

#### Payment Page:
- Users can switch between payment methods.
- Impressive and Clean UI Detailing.

#### UPI Handling:
- If the chosen method is UPI, the entered string should end with "@upiHandle."
- UPI handles can be mapped based on information from the NPCI website (e.g., oksbi, axl).

#### Credit Card Validation:
- The Luhn algorithm is applied to check the validity of the credit card number.
- Only a valid credit card number allows successful payment.

#### CVV Validation:
- CVV must consist of 3-4 numeric digits.

#### Expiry Date Validation:
- Ensures the month and year can be up to 12 years in the future.

#### Page Reload Handling:
- If the user reloads the page, all the details stay the same, leveraged using local storage.
- On continuing shopping, a new product list is fetched.

#### Payment Status Randomization:
- After successful payment, the transactionStatus is randomized.
- The probability of success is 7/10.
- If a payment is declined once, the next attempt is always confirmed.

#### Dynamic Delivery Address Page
- User can update his/her Delivery address.
- Caching performed using Local Storage

### Caching
- Implement local API cache according to necessity.

### Interactive Elements
- Create a responsive and dynamic user interface.
- Implement smooth transitions and animations to enhance the user experience.

### Validation
- Ensure proper form validation on each page to handle user input errors.
- Validate the payment information according to the selected payment method.

### Visual Appeal
- Craft a visually appealing design that aligns with modern UI/UX principles.
- Pay attention to color schemes, typography, and overall aesthetics.

### Responsiveness
- Ensure the application is responsive and works well on various screen sizes.

### User-Friendly Flow
- Design an intuitive and easy-to-navigate flow from checkout to payment selection and confirmation.

### Tech Stack
- Next.js
- Tailwind CSS
- Zustand
- JavaScript

