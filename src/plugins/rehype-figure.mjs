/**
 * Rehype plugin: turn standalone Markdown images into <figure> blocks
 * whose <figcaption> carries the image's alt text, so every content
 * image ships with a real caption tied to the section it illustrates.
 *
 * A Markdown image on its own line parses to a paragraph whose only
 * meaningful child is an <img>; that paragraph is replaced by the
 * figure. Images without alt text still become figures (no caption).
 */
export default function rehypeFigure() {
  const isImg = (n) => n && n.type === 'element' && n.tagName === 'img';
  const isBlank = (n) => n && n.type === 'text' && n.value.trim() === '';

  function walk(node) {
    if (!node || !Array.isArray(node.children)) return;
    node.children = node.children.map((child) => {
      if (child && child.type === 'element' && child.tagName === 'p') {
        const meaningful = child.children.filter((c) => !isBlank(c));
        if (meaningful.length === 1 && isImg(meaningful[0])) {
          const img = meaningful[0];
          const alt = (img.properties && img.properties.alt) || '';
          const figure = {
            type: 'element',
            tagName: 'figure',
            properties: {},
            children: [img],
          };
          if (alt) {
            figure.children.push({
              type: 'element',
              tagName: 'figcaption',
              properties: {},
              children: [{ type: 'text', value: alt }],
            });
          }
          return figure;
        }
      }
      walk(child);
      return child;
    });
  }

  return (tree) => {
    walk(tree);
  };
}
