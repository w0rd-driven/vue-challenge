import { render } from "@testing-library/vue";
import GPA from "@/components/GPA.vue";
import "@testing-library/jest-dom";

describe("GPA.vue", () => {
  it("renders school GPA percentiles to 2 decimal places", () => {
    const athleteGpa = 3.8;
    const schoolGpa = {
      min: 2.7,
      "25%": 3.28,
      "50%": 3.52,
      "75%": 3.8,
      max: 4.0,
    };
    const { getByText } = render(GPA, {
      props: { athleteGpa, schoolGpa },
    });
    getByText("2.70");
    getByText("3.28");
    getByText("3.52");
    getByText("3.80");
    getByText("4.00");
  });

  it("renders background color of school gpa equal to the player's gpa", () => {
    const athleteGpa = 3.8;
    const schoolGpa = {
      min: 2.7,
      "25%": 3.28,
      "50%": 3.8,
      "75%": 3.8,
      max: 4.0,
    };
    const { getByTestId } = render(GPA, {
      props: { athleteGpa, schoolGpa },
    });
    expect(getByTestId("gpaBackground")).toHaveClass("bg-gpa-equal");
  });

  it("renders background color of school gpa under the player's gpa by less than 0.10", () => {
    const athleteGpa = 3.8;
    const schoolGpa = {
      min: 2.7,
      "25%": 3.28,
      "50%": 3.72,
      "75%": 3.8,
      max: 4.0,
    };
    const { getByTestId } = render(GPA, {
      props: { athleteGpa, schoolGpa },
    });
    expect(getByTestId("gpaBackground")).toHaveClass("bg-gpa-below-less");
  });

  it("renders background color of school gpa under the player's gpa by more than 0.10", () => {
    const athleteGpa = 3.8;
    const schoolGpa = {
      min: 2.7,
      "25%": 3.28,
      "50%": 3.52,
      "75%": 3.8,
      max: 4.0,
    };
    const { getByTestId } = render(GPA, {
      props: { athleteGpa, schoolGpa },
    });
    expect(getByTestId("gpaBackground")).toHaveClass("bg-gpa-below-more");
  });

  it("renders background color of school gpa above the player's gpa by up to 0.10", () => {
    const athleteGpa = 3.8;
    const schoolGpa = {
      min: 2.7,
      "25%": 3.28,
      "50%": 3.85,
      "75%": 3.8,
      max: 4.0,
    };
    const { getByTestId } = render(GPA, {
      props: { athleteGpa, schoolGpa },
    });
    expect(getByTestId("gpaBackground")).toHaveClass("bg-gpa-above-less");
  });

  it("renders background color of school gpa above the player's gpa by more than 0.10", () => {
    const athleteGpa = 3.8;
    const schoolGpa = {
      min: 2.7,
      "25%": 3.28,
      "50%": 3.95,
      "75%": 3.8,
      max: 4.0,
    };
    const { getByTestId } = render(GPA, {
      props: { athleteGpa, schoolGpa },
    });
    expect(getByTestId("gpaBackground")).toHaveClass("bg-gpa-above-more");
  });
});
