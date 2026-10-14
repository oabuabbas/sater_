import { readdir, readFile, stat } from 'node:fs/promises';
import { join, resolve, relative } from 'node:path';
const root=resolve('dist');
const files=[];
async function walk(dir){for(const e of await readdir(dir,{withFileTypes:true})){if(['static','_astro'].includes(e.name))continue;const p=join(dir,e.name);if(e.isDirectory())await walk(p);else if(e.name.endsWith('.html'))files.push(p);}}
await walk(root);
const cache=new Map();
const html=async file=>{if(!cache.has(file))cache.set(file,await readFile(file,'utf8'));return cache.get(file);};
async function find(path){for(const candidate of [join(root,path),join(root,path,'index.html')]){try{if((await stat(candidate)).isFile())return candidate;}catch{}}}
const failures=[];let checked=0;
for(const file of files){
  const text=await html(file),page=relative(root,file);
  const redirect=/<meta[^>]+http-equiv="refresh"/i.test(text);
  if(!redirect&&(text.match(/<h1(?:\s|>)/g)??[]).length!==1)failures.push(`${page}: expected one h1`);
  if(!redirect&&!/<meta name="description" content="[^"]+"/.test(text))failures.push(`${page}: description missing`);
  for(const m of text.matchAll(/(?:href|src)="([^"\s]+)"/g)){
    const raw=m[1].replaceAll('&amp;','&');
    if(!raw.startsWith('/')&&!raw.startsWith('#'))continue;
    if(raw.startsWith('//'))continue;
    const url=new URL(raw,'https://thesater.com/'+page.replaceAll('\\','/'));
    const target=raw.startsWith('#')?file:await find(decodeURIComponent(url.pathname));
    checked++;
    if(!target){failures.push(`${page}: broken reference ${raw}`);continue;}
    if(url.hash&&target.endsWith('.html')){
      const id=decodeURIComponent(url.hash.slice(1));
      if(!(await html(target)).includes(`id="${id}"`))failures.push(`${page}: missing anchor ${raw}`);
    }
  }
}
for(const product of ['tam','khamen','zill','studio-chairman','behind-the-badge'])for(const kind of ['privacy','terms']){
  if(!await find(`/${product}/${kind}/`))failures.push(`${product}: missing ${kind}`);
  if(!await find(`/${product}/${kind}.html`))failures.push(`${product}: missing legacy ${kind}.html`);
}
console.log(`Content audit: ${files.length} HTML pages, ${checked} internal references, ${failures.length} failures.`);
if(failures.length){console.error(failures.join('\n'));process.exitCode=1;}
