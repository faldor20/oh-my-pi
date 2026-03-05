export function normalizeToolName(name: string): string {
	return name.trim().toLowerCase();
}

export function normalizeAndDedupeToolNames(names: string[]): string[] {
	const normalized = names.map(normalizeToolName).filter(Boolean);
	return [...new Set(normalized)];
}
