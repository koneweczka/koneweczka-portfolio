import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { CV_FILE_NAME } from "@/constants/assets";

describe("CV asset", () => {
  it("exists in public directory", () => {
    const filePath = resolve(process.cwd(), "public", CV_FILE_NAME);

    expect(existsSync(filePath)).toBe(true);
  });
});
