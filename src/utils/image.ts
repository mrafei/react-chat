export const profileImageUrl = (uid?: string) => {
  if (!uid) return "";
  return `/${uid}-image.png`;
};
