
export function isExpired(story: { expiresAt: number }): boolean {
    return Date.now() > story.expiresAt;
}