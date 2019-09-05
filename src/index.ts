const defaultVersion = '2.6.10';
const map: { [k: string]: number } = {
  [defaultVersion]: 1,
};

export interface ISSRRenderConfig {
  componentCode: string;
  props?: { [k: string]: any };
  version?: string;
}

export async function renderComponentCodeToString({
  componentCode,
  props = {},
  version = defaultVersion,
}: ISSRRenderConfig) {
  if (map[version] !== 1) {
    console.warn(
      `versioned-react-ssr can no find react ssr version: ${version}, use ${defaultVersion}`,
    );
    version = defaultVersion;
  }
  var Vue = require(`../vue-version/${version}/vue.runtime.common.prod`);
  var VueServerRender = require(`../vue-version/${version}/vue-server-renderer.prod`);

  componentCode = componentCode
    .trim()
    .replace(/^var\s+[\w_]+\s*=\s*(?=\(?function)/, '')
    .replace(/;$/, '');

  const Component = eval('(' + componentCode + ')');
  const renderer = VueServerRender.createRenderer();

  return renderer.renderToString(
    new Vue({
      render: (h: any) => h(Component, { props }),
    }),
  );
}
