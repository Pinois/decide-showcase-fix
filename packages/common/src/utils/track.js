export const track = (name, data) => {
  if (typeof window === 'undefined') return;
  const umami = window.umami;
  if (!umami || typeof umami.track !== 'function') return;
  try {
    if (data) umami.track(name, data);
    else umami.track(name);
  } catch (_) {
    // analytics ne doit jamais casser l'UI
  }
};
