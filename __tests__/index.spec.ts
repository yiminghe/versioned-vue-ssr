import * as render from '../src/index';
import fs from 'fs';
import path from 'path';

describe('render component', () => {
  const componentCode = fs.readFileSync(
    path.join(__dirname, 'fixture/code.js'),
    'utf-8',
  );

  it('render component to string', async () => {
    const html = await render.renderComponentCodeToString({
      props: {
        title: 'my',
      },
      componentCode,
    });
    expect(html).toMatchInlineSnapshot(`
      "<div data-server-rendered=\\"true\\">
        my
      </div>"
    `);
  });
});
