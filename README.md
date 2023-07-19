# Frontend Challenge - Academic Fit Report

This is a frontend challenge in Vue.js to reproduce the academic fit report.

See [the documentation](documentation/index.md) for the instructions and focus.

## TODO

1. [x] Fork to GitHub
2. [x] Get working in VSCode
3. [x] Integrate Tailwind via vue cli
4. [x] Add font and custom colors
5. [x] Start creating a single template just to display the output as expected
6. [ ] Break apart components
    1. [x] Avatar Picture
        1. [x] If Picture, Display
        2. [x] If NULL
            1. [x] Initials in white text on a random background
            2. [x] The color of the avatar should be chosen by the last name’s first character and selected from the palette
            3. [x] 6 colors, 26 possible letters. Have an array like A - F, etc
                1. [x] ABCDE - #f1603c
                2. [x] FGHIJ - #6082fa
                3. [x] KLMN - #827cb8
                4. [x] OPQR - #0097a4
                5. [x] STUV - #ffe066
                6. [x] WXYZ - #ffa94d
    2. [ ] Name
        1. [ ] Editing First Last changes the avatar picture
    3. [x] Table
        1. [x] Table Row
            1. [x] Even row colors
            2. [x] Format N/A responses
            3. [x] GPA
                1. [x] Evenly apply spacing to match report
                2. [x] Normalize GPA to 2 decimal places
                3. [x] Apply color to 50% section
                4. [ ] Fix background to full height in table cell
                5. [x] Fix vertical alignment in table cell
7. [ ] Responsive
    1. [ ] Logo
    2. [ ] Report Name
    3. [ ] Report Header as horizontal display / single column
    4. [ ] Table as horizontal display / single column
        1. [ ] School Name: Name (Sticky)
    5. [ ] Table header sticky on the desktop?
8. [ ] Testing
    1. [ ] Static data is displayed for each field
    2. [ ] Profile picture includes an image link to the picture if present
    3. [ ] Profile picture chooses random color if not present
        1. [ ] Use A - Z or a sampling? Sample first, full list if time permits.
        2. [ ] What if only a single name is given?
    4. [ ] GPA color adheres to specifications
