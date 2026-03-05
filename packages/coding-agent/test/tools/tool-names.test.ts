import { describe, expect, it } from "bun:test";
import { normalizeAndDedupeToolNames, normalizeToolName } from "../../src/tools/tool-names";

describe("tool name normalization", () => {
	it("normalizes tool names to lowercase", () => {
		expect(normalizeToolName(" ReAd ")).toBe("read");
	});

	it("normalizes and de-dupes tool name lists", () => {
		expect(normalizeAndDedupeToolNames(["READ", "read", " Bash ", ""])).toEqual(["read", "bash"]);
	});
});
