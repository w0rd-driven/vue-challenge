<template>
    <td>
      <div class="flex items-center justify-between w-1/3 md:hidden font-bold bg-table-header text-white">
        <div>GPA**</div>
        <div>
          Min<br />
          25%<br />
          50%<br />
          75%<br />
          Max
        </div>
      </div>
      <div class="md:grid md:grid-cols-5 gap-0">
        <div>{{ formatNumber(school_gpa.min) }}</div>
        <div>{{ formatNumber(school_gpa['25%']) }}</div>
        <div :class="backgroundColor">{{ formatNumber(school_gpa['50%']) }}</div>
        <div>{{ formatNumber(school_gpa['75%']) }}</div>
        <div>{{ formatNumber(school_gpa.max) }}</div>
      </div>
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
    },
    computed: {
        backgroundColor: function () {
            if (this.school_gpa['50%'] > this.athlete_gpa) {
                return Math.abs(this.school_gpa['50%'] - this.athlete_gpa) > 0.10 ? "bg-gpa-above-more" : "bg-gpa-above-less"
            }
            if (this.school_gpa['50%'] === this.athlete_gpa) {
                return "bg-gpa-equal"
            }
            if (this.school_gpa['50%'] < this.athlete_gpa) {
                return Math.abs(this.school_gpa['50%'] - this.athlete_gpa) > 0.10 ? "bg-gpa-below-more" : "bg-gpa-below-less"
            }
            return ""
        }
    },
    methods: {
        formatNumber: function (number) {
            return number.toFixed(2)
        }
    },
};
</script>

<style>
.grid {
    background-position-x: center;
}
</style>
