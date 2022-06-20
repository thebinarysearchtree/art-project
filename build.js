import esbuild from 'esbuild';
import { readFile } from 'fs/promises';

const plugin = {
  name: 'css import assertions',
  setup(build) {
    build.onLoad({ filter: /\.css$/ }, async (args) => {
      const css = await readFile(args.path, 'utf8');
      const contents = `
        const css = \`${css.replaceAll(/[`$]/gm, '\\$&')}\`;
        let styles;
        if ('adoptedStyleSheets' in document) {
          styles = new CSSStyleSheet();
          styles.replaceSync(css);
        }
        else {
          styles = css;
        }
        export default styles;`;
      return { contents };
    });
  }
}

esbuild.build({
  entryPoints: ['src/index.js'],
  watch: true,
  sourcemap: true,
  bundle: true,
  minify: true,
  plugins: [plugin],
  outfile: 'public/index.js'
}).catch(() => process.exit(1));
