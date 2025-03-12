import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse'
import {read} from 'to-vfile'
import {unified} from 'unified'

async function MDtoHTML(filepath) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(await read(filepath));

  return String(file);
}

export default MDtoHTML;