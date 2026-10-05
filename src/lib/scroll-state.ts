// Mutable values shared between the DOM (scroll/pointer listeners) and the
// 3D scene (read every frame). Kept outside React state on purpose: updating
// React state at scroll/pointer frequency would re-render the page.
export const scrollState = {
  // Fractional section index, e.g. 2.4 = 40% of the way from section 2 to 3.
  section: 0,
  // Pointer position normalised to -1..1.
  pointerX: 0,
  pointerY: 0,
};
