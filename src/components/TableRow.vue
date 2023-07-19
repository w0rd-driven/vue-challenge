<template>
    <tr class="text-center text-xs">
        <td class="text-left py-2">{{ school.school }}</td>
        <td>{{ school.division }}</td>
        <td class="text-left">{{ school.conference }}</td>
        <td>{{ school.ranking }}</td>
        <GPA :athlete_gpa="athlete_gpa" :school_gpa="school.gpa"></GPA>
        <td>{{ getRange(school.sat.reading.min, school.sat.reading.max) }}</td>
        <td>{{ getRange(school.sat.math.min, school.sat.math.max) }}</td>
        <td>{{ getRange(school.act.min, school.act.max) }}</td>
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
    },
    methods: {
        getRange: function (min, max) {
            if (min == "N/A" && max == "N/A") {
                return "Not Reported"
            }
            return `${min}-${max}`
        }
    }
};
</script>
