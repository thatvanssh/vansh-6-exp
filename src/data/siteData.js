import raw from './siteData.json';

function resolveImage(filename) {
  if (!filename) return '';

  try {
    return new URL(`../assets/images/${filename}`, import.meta.url).href;
  } catch (error) {
    console.warn(`Unable to resolve image: ${filename}`, error);
    return '';
  }
}

const siteData = {
  ...raw,
  hero: {
    ...raw.hero,
    profileImage: resolveImage(raw.hero.profileImage),
  },
  projects: raw.projects.map((p) => ({
    ...p,
    image: resolveImage(p.image),
  })),
};

export default siteData;
