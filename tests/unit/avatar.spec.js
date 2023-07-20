import { render } from "@testing-library/vue";
import Avatar from "@/components/Avatar.vue";

describe("Avatar.vue", () => {
  it("renders initials when passed a traditional full name", () => {
    const athleteName = "Bruce Wayne";
    const { getByText } = render(Avatar, {
      props: { athleteName },
    });
    getByText("BW");
  });

  it("renders initials when passed a single name", () => {
    const athleteName = "Madonna";
    const { getByText } = render(Avatar, {
      props: { athleteName },
    });
    getByText("M");
  });
});
