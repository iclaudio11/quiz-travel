export function getSkillLevel(score: number): string {
  if (score < 3) {
    return "Beginner";
  } else if (score < 6) {
    return "Intermediate";
  } else {
    return "Expert";
  }
}
