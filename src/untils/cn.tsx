export function cn(...args: unknown[]): string {
  return args
    .flatMap((arg) => {
      if (!arg) return [];

      if (typeof arg === "string") return [arg];

      if (typeof arg === "object") {
        return Object.entries(arg)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key);
      }

      return [];
    })
    .join(" ");
}
