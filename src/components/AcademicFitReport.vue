<template>
  <div>
    <hr class="h-2 border-0 bg-rule">
    <header class="info flex mt-12">
      <img :src="athlete.profile_image" class="h-24 rounded-full ml-12 mt-1 flex-0" />
      <div class="flex-1 ml-4">
        <h2 class="text-2xl font-bold text-rule align-text-top">{{ athlete.name }}</h2>
        <ul class="grid grid-rows-3 grid-flow-col gap-x-20 auto-cols-max">
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
      <div class="ml-auto">
        <img :src="ReportLogo" class="h-14" />
        <div class="text-lg text-right">Academic Fit Report</div>
      </div>
    </header>
    <table class="mt-16 mb-36 w-full">
      <thead class="bg-table-header text-white text-xs">
        <tr>
          <th>School Name</th>
          <th>Athletic Div</th>
          <th>Conference</th>
          <th>
            Ranking*<br />
            <span class="font-normal">
              (DI NCAA)<br />
              (DII & DIII Hero Sports)
            </span>
          </th>
          <th class="align-bottom">
            GPA**<br />
            Min 25% 50% 75% Max
          </th>
          <th>
            SAT Reading***<br />
            25%-75%
          </th>
          <th>
            SAT Math***<br />
            25%-75%
          </th>
          <th>
            ACT Composite***<br />
            25%-75%
          </th>
        </tr>
      </thead>
      <tbody>
        <TableRow v-for="(school, index) in athlete.report" :key="school.name" :index="index" :school="school" :athlete_gpa="athlete.gpa"></TableRow>
      </tbody>
    </table>
    <footer class="text-sm mx-12 my-4">
      <p>*Rankings for Division I schools based on NCAA data (www.ncaa.com) and rankings for Division II & III schools are based on data from Hero Sports (<a href="www.herosports.com/rankings">www.herosports.com/rankings</a>)</p>
      <p>** GPA is based on SportsRecruits members who have shown interest in (favorited) the school and have provided their GPA on their profile</p>
      <p>***SAT and ACT scores based on national data provided by the National Center of Education Statistics- <a href="https://nces.ed.gov/ipeds/">https://nces.ed.gov/ipeds/</a></p>
    </footer>
    <hr class="h-2 border-0 bg-rule">
  </div>
</template>

<script>
import ReportLogo from "@/assets/report-logo.png"
import TableRow from "@/components/TableRow.vue"

export default {
  name: "AcademicFitReport",
  components: {
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
      ReportLogo,
    };
  },
};
</script>
