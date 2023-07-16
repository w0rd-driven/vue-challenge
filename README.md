# Frontend Challenge - Academic Fit Report

This is a frontend challenge in Vue.js to reproduce the academic fit report.

See [the documentation](documentation/index.md) for the instructions and focus.

## TODO

1. [x] Fork to GitHub
2. [x] Get working in VSCode
3. [ ] Integrate Tailwind via vue cli
4. [ ] Start creating a single template just to display the output as expected
5. [ ] Break apart components
    1. [ ] Header
        1. [ ] Profile Picture
            1. [ ] If Picture, Display
            2. [ ] If NULL
                1. [ ] Initials in white text on a random background
                2. [ ] The color of the avatar should be chosen by the last name’s first character and selected from the palette
                3. [ ] 6 colors, 26 possible letters. Have an array like A - F, etc
                    1. [ ] ABCDE - #f1603c
                    2. [ ] FGHIJ - #6082fa
                    3. [ ] KLMN - #827cb8
                    4. [ ] OPQR - #0097a4
                    5. [ ] STUV - #ffe066
                    6. [ ] WXYZ - #ffa94d
        2. [ ] Name
            1. [ ] Editing First Last changes the profile picture
    2. [ ] Table
        1. [ ] Table Header
        2. [ ] Table Row
            1. [ ] GPA
    3. [ ] Footer
6. [ ] Responsive
    1. [ ] Logo
    2. [ ] Report Name
    3. [ ] Report Header as horizontal display / single column
    4. [ ] Table as horizontal display / single column
        1. [ ] School Name: Name (Sticky)
    5. [ ] Table header sticky on the desktop?
7. [ ] Testing
    1. [ ] Static data is displayed for each field
    2. [ ] Profile picture includes an image link to the picture if present
    3. [ ] Profile picture chooses random color if not present
        1. [ ] Use A - Z or a sampling? Sample first, full list if time permits.
        2. [ ] What if only a single name is given?
    4. [ ] GPA color adheres to specifications
