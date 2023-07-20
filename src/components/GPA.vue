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
        <div>{{ formatNumber(schoolGpa.min) }}</div>
        <div>{{ formatNumber(schoolGpa['25%']) }}</div>
        <div :class="backgroundColor">{{ formatNumber(schoolGpa['50%']) }}</div>
        <div>{{ formatNumber(schoolGpa['75%']) }}</div>
        <div>{{ formatNumber(schoolGpa.max) }}</div>
      </div>
    </td>
</template>

<script>
export default {
    name: "GPA",
    props: {
        athleteGpa: {
            type: Number,
        },
        schoolGpa: {
            type: Object,
        },
    },
    computed: {
        backgroundColor: function () {
            if (this.schoolGpa['50%'] > this.athleteGpa) {
                return Math.abs(this.schoolGpa['50%'] - this.athleteGpa) > 0.10 ? "bg-gpa-above-more" : "bg-gpa-above-less"
            }
            if (this.schoolGpa['50%'] === this.athleteGpa) {
                return "bg-gpa-equal"
            }
            if (this.schoolGpa['50%'] < this.athleteGpa) {
                return Math.abs(this.schoolGpa['50%'] - this.athleteGpa) > 0.10 ? "bg-gpa-below-more" : "bg-gpa-below-less"
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
