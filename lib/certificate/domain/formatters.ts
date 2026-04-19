export function toDisplayDate(dateString: string): string {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return "2026-04-19";
  }

  return date.toISOString().slice(0, 10);
}

export function getRecommendation(score: number): string {
  if (score >= 90) {
    return "Immediate passport lock and airport-access restriction advised.";
  }
  if (score >= 70) {
    return "Minimize exposure to Japan travel content and monitor patient behavior.";
  }
  return "Periodic observation and comfort food intervention may reduce symptoms.";
}

export function formatAddressForPdf(address: string): string {
  const singleLineAddress = address
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  if (!singleLineAddress) {
    return "-";
  }

  return singleLineAddress
    .split(" ")
    .map((segment) =>
      segment
        .replace(/([,./\-()#])/g, "$1\u200B")
        .replace(/([a-z])([A-Z])/g, "$1\u200B$2")
        .replace(/(\d)([A-Za-z])/g, "$1\u200B$2")
        .replace(/([A-Za-z])(\d)/g, "$1\u200B$2")
        .replace(/(.{8})/g, "$1\u200B"),
    )
    .join(" ");
}
