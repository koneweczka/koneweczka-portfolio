import { render, screen } from "@testing-library/react";
import { SkillItem } from "./SkillItem";

describe("SkillItem", () => {
  it("renders list item content", () => {
    render(
      <ul>
        <SkillItem label="TypeScript" />
      </ul>
    );

    expect(screen.getByText("TypeScript")).toBeVisible();
    expect(screen.getByText("TypeScript").closest("li")).not.toBeNull();
  });
});
