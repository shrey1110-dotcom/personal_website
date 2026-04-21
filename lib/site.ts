export const repoName = "personal_website";
export const repoBasePath =
  process.env.NODE_ENV === "production" ? `/${repoName}` : "";
export const pagesSiteUrl = `https://shrey1110-dotcom.github.io/${repoName}`;

export function withBasePath(path: string) {
  return `${repoBasePath}${path}`;
}
