<template>
  <tr>
    <td class="sticky top-0 flex gap-2 text-left md:table-cell">
      <div
        class="inline-block w-1/3 md:hidden font-bold bg-table-header text-white"
      >
        School Name
      </div>
      <div>{{ school.school }}</div>
    </td>
    <td class="flex gap-2 text-left md:text-center md:table-cell">
      <div
        class="inline-block w-1/3 md:hidden font-bold bg-table-header text-white"
      >
        Athletic Div
      </div>
      <div>{{ school.division }}</div>
    </td>
    <td class="flex gap-2 text-left md:table-cell">
      <div
        class="inline-block w-1/3 md:hidden font-bold bg-table-header text-white"
      >
        Conference
      </div>
      <div>{{ school.conference }}</div>
    </td>
    <td
      class="flex gap-2 items-center text-left md:text-center md:items-baseline md:table-cell"
    >
      <div
        class="inline-block w-1/3 md:hidden font-bold bg-table-header text-white"
      >
        Ranking*<br />
        <span class="font-normal">(DI NCAA)</span><br />
        <span class="font-normal">(DII & DIII Hero Sports)</span>
      </div>
      <div>{{ school.ranking }}</div>
    </td>
    <GPA
      :athleteGpa="athleteGpa"
      :schoolGpa="school.gpa"
      class="flex gap-2 items-center text-left md:text-center md:table-cell"
    ></GPA>
    <td class="flex gap-2 items-center text-left md:text-center md:table-cell">
      <div
        class="inline-block w-1/3 md:hidden font-bold bg-table-header text-white"
      >
        SAT Reading***<br />
        25%-75%
      </div>
      <div>{{ getRange(school.sat.reading.min, school.sat.reading.max) }}</div>
    </td>
    <td class="flex gap-2 items-center text-left md:text-center md:table-cell">
      <div
        class="inline-block w-1/3 md:hidden font-bold bg-table-header text-white"
      >
        SAT Math***<br />
        25%-75%
      </div>
      <div>{{ getRange(school.sat.math.min, school.sat.math.max) }}</div>
    </td>
    <td class="flex gap-2 items-center text-left md:text-center md:table-cell">
      <div
        class="inline-block w-1/3 md:hidden font-bold bg-table-header text-white"
      >
        ACT Composite***<br />
        25%-75%
      </div>
      <div>{{ getRange(school.act.min, school.act.max) }}</div>
    </td>
  </tr>
</template>

<script>
import GPA from "@/components/GPA.vue";

export default {
  name: "TableRow",
  components: {
    GPA,
  },
  props: {
    index: {
      type: Number,
    },
    athleteGpa: {
      type: Number,
    },
    school: {
      type: Object,
    },
  },
  methods: {
    getRange: function (min, max) {
      if (min == "N/A" && max == "N/A") {
        return "Not Reported";
      }
      return `${min}-${max}`;
    },
  },
};
</script>
