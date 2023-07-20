<template>
  <div>
    <hr class="h-2 border-0 bg-rule">
    <header class="info flex flex-col-reverse md:flex-row mt-12 gap-4 md:gap-0">
      <Avatar :imageUrl="athlete.profile_image" :athleteName="athleteName" class="mx-auto order-12 md:order-none md:ml-4 lg:ml-12 mt-1 h-24 w-24 flex-0"></Avatar>
      <div class="md:flex-1 md:ml-4 mx-auto">
        <div class="text-center md:text-left">
          <h2 v-show="editing == false" @dblclick="editing = true" class="text-2xl font-bold text-rule align-text-top">{{ athleteName }}</h2>
          <input v-show="editing" v-model="athleteName" v-on:blur="editComplete" @keyup.enter="editComplete"
            class="text-2xl font-bold text-rule align-text-top bg-transparent">
        </div>
        <ul class="grid md:grid-rows-3 md:grid-flow-col gap-x-10 lg:gap-x-20 auto-cols-max">
          <li>
            <label class="font-bold">Sport:</label>
            {{ athlete.sport }}
          </li>
          <li>
            <label class="font-bold">Class:</label>
            {{ athlete.grad_year }}
          </li>
          <li>
            <label class="font-bold">Club:</label>
            {{ athlete.club.name }}
          </li>
          <li>
            <label class="font-bold">High School:</label>
            {{ athlete.high_school.name }}
          </li>
          <li>
            <label class="font-bold">GPA:</label>
            {{ athlete.gpa }}
          </li>
          <li>
            <label class="font-bold">Desired Major:</label>
            {{ athlete.major }}
          </li>
        </ul>
      </div>
      <div class="mx-auto lg:ml-auto md:order-none order-last">
        <img :src="ReportLogo" class="h-14" />
        <div class="text-lg md:text-right text-center">Academic Fit Report</div>
      </div>
    </header>
    <table class="mt-16 mb-36 mx-auto md:w-full">
      <thead class="bg-table-header text-white text-xs md:table-header-group">
        <tr class="absolute -top-full -left-full md:relative md:top-auto md:left-auto md:table-row">
          <th>School Name</th>
          <th>Athletic Div</th>
          <th>Conference</th>
          <th>
            <div>Ranking*</div>
            <div class="font-normal">(DI NCAA)</div>
            <div class="font-normal">(DII & DIII Hero Sports)</div>
          </th>
          <th>
            <div>GPA**</div>
            <div class="grid grid-cols-5 gap-0">
              <div>Min</div>
              <div>25%</div>
              <div>50%</div>
              <div>75%</div>
              <div>Max</div>
            </div>
          </th>
          <th>
            <div>SAT Reading***</div>
            <div>25%-75%</div>
          </th>
          <th>
            <div>SAT Math***</div>
            <div>25%-75%</div>
          </th>
          <th>
            <div>ACT Composite***</div>
            <div>25%-75%</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <TableRow
          v-for="(school, index) in athlete.report"
          :key="school.name"
          :index="index"
          :school="school"
          :athleteGpa="athlete.gpa"
          class="block md:text-xs my-2 mx-auto md:table-row even:bg-table-even"></TableRow>
      </tbody>
    </table>
    <footer class="text-sm mx-auto md:mx-12 my-4 p-8 md:p-0 flex flex-col gap-1">
      <div>*Rankings for Division I schools based on NCAA data (www.ncaa.com) and rankings for Division II & III schools are based on data from Hero Sports (<a href="www.herosports.com/rankings">www.herosports.com/rankings</a>)</div>
      <div>** GPA is based on SportsRecruits members who have shown interest in (favorited) the school and have provided their GPA on their profile</div>
      <div>***SAT and ACT scores based on national data provided by the National Center of Education Statistics- <a href="https://nces.ed.gov/ipeds/">https://nces.ed.gov/ipeds/</a></div>
    </footer>
    <hr class="h-2 border-0 bg-rule">
  </div>
</template>

<script>
import ReportLogo from "@/assets/report-logo.png"
import Avatar from "@/components/Avatar.vue"
import TableRow from "@/components/TableRow.vue"

export default {
  name: "AcademicFitReport",
  components: {
    Avatar,
    TableRow,
  },
  props: {
    athlete: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      ReportLogo: ReportLogo,
      athleteName: this.athlete.name,
      editing: false,
    }
  },
  methods: {
    editComplete: function () {
      this.editing = false
    }
  },
};
</script>
