<template>
    <tr class="text-center text-xs">
        <td class="text-left py-1">{{ school.school }}</td>
        <td>{{ school.division }}</td>
        <td class="text-left">{{ school.conference }}</td>
        <td>{{ school.ranking }}</td>
        <GPA :athlete_gpa="athlete_gpa" :school_gpa="school.gpa"></GPA>
        <td>{{ school.sat.reading.min }}-{{ school.sat.reading.max }}</td>
        <td>{{ school.sat.math.min }}-{{ school.sat.math.max }}</td>
        <td>{{ school.act.min }}-{{ school.act.max }}</td>
    </tr>
</template>

<script>
import GPA from "@/components/GPA.vue"

export default {
    name: "TableRow",
    components: {
        GPA,
    },
    props: {
        index: {
            type: Number,
        },
        athlete_gpa: {
            type: Number,
        },
        school: {
            type: Object,
        },
    }
};
</script>
