# Bingo Caller v2

This project was initially inspired from an activity where I helped run a bingo game. One person called out the numbers, and I wrote the numbers called in a word document that was projected for the players to see what numbers were called. As I ran the word document, I realized that there was a better way that it could work, and run by one person.

The program is simple. An array from 1–75 is created. Then the array is shuffled. When the call button is clicked, the first number in the array is taken out of the array, and sent to find the associated letter. When the letter is found, it will print it on the screen, and the most recent letter and number combination is in a large font, indicating that it was the most recent. When the numbers are printed out, it automatically sorts it by the number in ascending order.
                        
Version 2 has upgraded from Bootstrap 3 to Bootstrap 4, vanilla JavaScript to jQuery, and CSS to SASS. Below are listed bugs and ideas for version 2, then more ideas for version 3.

---

## Known Bugs
- [x] ~~Timer has odd behavior when clicking within a second of turning it off~~
- [x] ~~Disable timer when call button is selected~~
- [x] ~~Blackout causes `Start Timer` and `Stop Timer` to toggle~~
- [x] ~~Cannot change the timer while a game is in use. It will create a new game.~~

## Ideas

- [x] Update with SASS and JQuery
- [x] Add Bingo Logo to the top bar
- [x] Upgrade to Bootstrap 4
- [x] Sitcky Footer
- [x] 15 second timer (with customization)
- [x] Change font so `I` doesn't look like a `1`
- [x] Clicker integration for calling the next number
- [ ] Add in V1 Link
- [ ] Shake up the background a little
- [ ] Add in some simple animation
- [ ] Generate Cards to print and pieces

## v3 Ideas
- Record Grandpa Wangsgard calling the numbers
- Number called grows then shrinks to position
- Heavy animations

