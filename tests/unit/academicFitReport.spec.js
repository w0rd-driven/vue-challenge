import { render } from "@testing-library/vue";
import AcademicFitReport from "@/components/AcademicFitReport.vue";

describe("AcademicFitReport.vue", () => {
    it("renders athlete name", () => {
        const athlete = {
            name: "Maria Carter",
            sport: "Volleyball",
            grad_year: 2019,
            birthday: "2002-12-12",
            email: "maria.carter@sportsrecruits.com",
            url: "maria_carter",
            club: {
                name: "Valley Volleyball",
            },
            high_school: {
                name: "Bayside High School",
            },
            gpa: 3.8,
            major: "Nursing",
            profile_image:
                "https://s3.amazonaws.com/sr-application-demo/images/lacrosserecruits/2017/5/447_20476_252_20476_high-school-girls-lacrosse-player-8732457.jpg",
        };

        const { getByText } = render(AcademicFitReport, {
            props: { athlete },
        });
        getByText("Maria Carter");
    });
});
