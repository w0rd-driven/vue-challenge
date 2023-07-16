# Documentation

The initial specifications for the challenge can be found by analyzing and recreating the [Academic Fit Report](AcademicFitReport.pdf)

## Instructions

1. Write the html/css required to get it to display exactly the way you see it in Google (you can find the fonts, sizes, and colors in Google Sheets). You can use whatever html elements you think are most appropriate.
2. Separate the data row into its own component (<https://vuejs.org/v2/guide/components.html>). Make a component for each row and another nested component for the gpa color column
3. The GPA column color should be dynamic. The color is driven by the difference between the gpa for that school and the player’s gpa and should be dynamically computed (see Vue computed properties for example).
    1. school gpa above the player’s gpa by more than 0.10 color is #d7737d
    2. school gpa above the player’s gpa by up to 0.10 color is #c194b5
    3. school gpa equal to the player’s gpa color is #b4a7d6
    4. school gpa under the player’s gpa by less than 0.10 color is #a6a8da
    5. school gpa under the player’s gpa by more than 0.10 color is #75ace5
4. Make the app scale gracefully to a mobile view. The athlete info bar should be fluid and should stack on smallest screen sizes. Make the School Name column locked so it stays in place when scrolling the data table horizontally.
5. If the player.image is NULL add an image placeholder and show a circle containing their first and last name initials in caps in white text above a background color determined by their last name first letter.
6. In the prototype it would be “MC” for “Maria Carter”. The color of the avatar should be chosen by the last name’s first character and selected from the below palette:
    #f1603c
    #6082fa
    #827cb8
    #0097a4
    #ffe066
    #ffa94d
7. The athlete’s name should also be capable of being edited. Upon editing the athlete’s name, the above avatar would change color into the appropriate color hex code.
8. [Extra credit] Update boilerplate code and solution to Vue3 Composition API.

## Focus

The focus of this challenge is to cover the following bases:

1. Adherence to Requirements
2. Tests (this should also result in easy-to-test components/objects)
3. State management (Vuex / Pinia)
4. Well-structured code (OO / functional patterns)
5. CSS Utility Framework Usage (Tailwind)
