import { render } from "@testing-library/vue";
import Avatar from "@/components/Avatar.vue";
import "@testing-library/jest-dom";

describe("Avatar.vue", () => {
  it("renders initials and the first background color", () => {
    const athleteName = "Maria Carter";
    const { getByText, getByTestId } = render(Avatar, {
      props: { athleteName },
    });
    getByText("MC");
    expect(getByTestId("avatarBackground")).toHaveClass("bg-avatar-1");
  });

  it("renders initials and the second background color", () => {
    const athleteName = "Hulk Hogan";
    const { getByText, getByTestId } = render(Avatar, {
      props: { athleteName },
    });
    getByText("HH");
    expect(getByTestId("avatarBackground")).toHaveClass("bg-avatar-2");
  });

  it("renders initials for a single name with the third background color", () => {
    const athleteName = "Madonna";
    const { getByText, getByTestId } = render(Avatar, {
      props: { athleteName },
    });
    getByText("M");
    expect(getByTestId("avatarBackground")).toHaveClass("bg-avatar-3");
  });

  it("renders initials and the fourth background color", () => {
    const athleteName = "J Robert Oppenheimer";
    const { getByText, getByTestId } = render(Avatar, {
      props: { athleteName },
    });
    getByText("JRO");
    expect(getByTestId("avatarBackground")).toHaveClass("bg-avatar-4");
  });

  it("renders initials and the fifth background color", () => {
    const athleteName = "Sting";
    const { getByText, getByTestId } = render(Avatar, {
      props: { athleteName },
    });
    getByText("S");
    expect(getByTestId("avatarBackground")).toHaveClass("bg-avatar-5");
  });

  it("renders initials with the sixth background color", () => {
    const athleteName = "Bruce Wayne";
    const { getByText, getByTestId } = render(Avatar, {
      props: { athleteName },
    });
    getByText("BW");
    expect(getByTestId("avatarBackground")).toHaveClass("bg-avatar-6");
  });

  it("renders picture when url is present", () => {
    const imageUrl =
      "https://s3.amazonaws.com/sr-application-demo/images/lacrosserecruits/2017/5/447_20476_252_20476_high-school-girls-lacrosse-player-8732457.jpg";
    const { getByTestId } = render(Avatar, {
      props: { imageUrl },
    });
    expect(getByTestId("avatarPicture")).toBeInTheDocument();
  });
});
