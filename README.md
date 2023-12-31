# Frontend Challenge - Academic Fit Report

This is a frontend challenge in Vue.js to reproduce the Academic Fit Report.

See [the documentation](documentation/index.md) for the instructions and focus.

## TODO

1. [x] Fork to GitHub
2. [x] Get working in VSCode
3. [x] Integrate Tailwind via vue cli
4. [x] Add font and custom colors
5. [x] Start creating a single template just to display the output as expected
6. [x] Break apart components
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
    2. [x] Name
        1. [x] Editing First Last changes the avatar picture
    3. [x] Table
        1. [x] Table Row
            1. [x] Even row colors
            2. [x] Format N/A responses
            3. [x] GPA
                1. [x] Evenly apply spacing to match report
                2. [x] Normalize GPA to 2 decimal places
                3. [x] Apply color to 50% section
                4. [x] Fix background to full height in table cell (technically)
                5. [x] Fix vertical alignment in table cell
7. [x] Responsive
    1. [x] Logo
    2. [x] Report Name
    3. [x] Report Header as horizontal display / single column
    4. [x] Table as horizontal display / single column
        1. [x] School Name: Name (Sticky)
    5. [x] Footer
8. [x] Testing
    1. [x] Avatar
        1. [x] Initials are displayed
        2. [x] Picture includes link if present
        3. [x] Background color is chosen based on specifications if link is not present
    2. [x] GPA
        1. [x] Displays full student GPA to 2 decimal places
        2. [x] Background color is chosen based on specifications
    3. [x] TableRow
        1. [x] Displays school information
        2. [x] N/A-N/A returns "Not Reported"
        3. [x] Range is returned for SAT and ACT sections
    4. [x] AcademicFitReport
        1. [x] Displays athlete name
        2. [x] Athlete name can be edited
9. [ ] Integrate Pinia store
    1. [ ] Test store
