<template>
    <td class="text-left">
        {{ school_gpa.min }} {{ school_gpa['25%'] }} {{ school_gpa['50%'] }} {{ school_gpa['75%'] }} {{ school_gpa.max }}
    </td>
</template>

<script>
export default {
    name: "GPA",
    props: {
        athlete_gpa: {
            type: Number,
        },
        school_gpa: {
            type: Object,
        },
    }
};
</script>
