import { render, screen } from "@testing-library/react";
import { SkillBox } from "./SkillBox";

describe("SkillBox", () => {
  it("renders title and children", () => {
    render(
      <SkillBox title="Frontend Development">
        <ul>
          <li>React</li>
        </ul>
      </SkillBox>
    );

    expect(
      screen.getByRole("heading", { level: 3, name: /frontend development/i })
    ).toBeInTheDocument();

    expect(screen.getByText("React")).toBeInTheDocument();
  });
});
