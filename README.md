## Bookings

### Running the app

In order to run the app locally, run these commands:

    yarn add global json-server
    yarn install
    yarn json-server db.json
    yarn start

### Description

We want to make as easy as possible for couples and venues to collaborate together on preparing the best wedding.
Couples can mark their venue as booked, and once the venue confirms, it unlocks a special portal to share files and information.

Your task is to create a list of bookings marked by couples and allow the venue to confirm them.

### Details:

-   Use React, Typescript and any preferred styling method, state management library and starter boilerplate. Bonus points for CSS-in-JS approach.
-   Use json-server to fetch and save data from db.json (https://github.com/typicode/json-server)
-   List should be sorted with unconfirmed bookings at the top and confirmed below
-   When `collaborating: true` then booking is confirmed
-   Clicking on "Confirm booking" changes `collaborating` to `true`
-   Mouse hover on "Connected" pill reveals "Disconnect" button, which after click changes `collaborating` to `false`
-   Clicking on "Not my booking" removes the entry from db

### Nice to have:

-   Pagination

### Evaluation Criteria

-   Primary focus should be on Typescript code quality and state management.
    Design is just for reference in this case and doesn't have to be pixel perfect.
    It's OK that all thumbnails are the same.
    You may use any styling components library of your choice.
-   Re-usable components or Typescript utilities using advanced types is a big plus.
