/* ==========================================================================
   PRÉ-RENDERIZAÇÃO (opcional)
   Lê o CONFIG do script.js e grava os textos direto no index.html,
   além de atualizar sitemap.xml, robots.txt e os dados estruturados.

   Como usar (precisa do Node.js instalado):
       node ferramentas/pre-render.js
   ========================================================================== */
const fs = require('fs');
const path = require('path');

const raiz = path.join(__dirname, '..');
const { CONFIG, R, jsonLd, linkWhats, pegar, esc, hash } = require(path.join(raiz, 'script.js'));
const arquivo = path.join(raiz, 'index.html');
let html = fs.readFileSync(arquivo, 'utf8');

// 1) Blocos gerados (serviços, FAQ, galeria…)
html = html.replace(/data-render="(\w+)"(?: data-v="[^"]*")?([^>]*)><!--r-->[\s\S]*?<!--\/r-->/g, (m, nome, resto) => {
  if (!R[nome]) return m;
  const out = R[nome](CONFIG);
  return 'data-render="' + nome + '" data-v="' + hash(out) + '"' + resto + '><!--r-->' + out + '<!--/r-->';
});

// 2) Seções opcionais: esconde se estiverem vazias
html = html.replace(/(<section\b[^>]*data-opcional="(\w+)")( hidden)?/g, (m, ini, nome) =>
  ini + (R[nome] && R[nome](CONFIG) === '' ? ' hidden' : ''));

// 3) Textos simples (data-c)
html = html.replace(/(<(\w+)\b[^>]*\bdata-c="([^"]+)"[^>]*>)([^<]*)(<\/\2>)/g, (m, abre, tag, caminho, _t, fecha) => {
  const v = pegar(caminho, CONFIG);
  return v == null ? m : abre + esc(v) + fecha;
});

// 4) Links do WhatsApp e demais links do CONFIG
html = html.replace(/href="[^"]*"(\s+data-wa="(\w+)")/g, (m, attr, chave) =>
  'href="' + esc(linkWhats(CONFIG.mensagens[chave] || CONFIG.mensagens.padrao, CONFIG)) + '"' + attr);
html = html.replace(/href="[^"]*"(\s+data-href="([\w.]+)")/g, (m, attr, caminho) =>
  'href="' + esc(pegar(caminho, CONFIG)) + '"' + attr);

// 5) SEO do <head>
const s = CONFIG.seo;
html = html.replace(/<title>[\s\S]*?<\/title>/, () => '<title>' + esc(s.titulo) + '</title>');
html = html.replace(/(<meta name="description" content=")[^"]*(")/, (m, a, b) => a + esc(s.descricao) + b);
html = html.replace(/(<meta (?:property|name)="(?:og|twitter):title" content=")[^"]*(")/g, (m, a, b) => a + esc(s.titulo) + b);
html = html.replace(/(<meta (?:property|name)="(?:og|twitter):description" content=")[^"]*(")/g, (m, a, b) => a + esc(s.descricao) + b);
html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, (m, a, b) => a + esc(s.url) + b);
html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, (m, a, b) => a + esc(s.url) + b);
html = html.replace(/(<meta (?:property|name)="(?:og|twitter):image" content=")[^"]*?(assets\/img\/[^"]+")/g, (m, a, b) => a + esc(s.url) + b);
html = html.replace(/(<script type="application\/ld\+json" id="dados-estruturados">)[\s\S]*?(<\/script>)/,
  (m, a, b) => a + '\n' + jsonLd(CONFIG).replace(/<\//g, '<\\/') + '\n  ' + b);

fs.writeFileSync(arquivo, html);

// 6) sitemap.xml e robots.txt
const hoje = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(raiz, 'sitemap.xml'),
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${s.url}</loc>
    <lastmod>${hoje}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`);
fs.writeFileSync(path.join(raiz, 'robots.txt'),
`User-agent: *
Allow: /
Disallow: /ferramentas/

Sitemap: ${s.url}sitemap.xml
`);

console.log('✅ index.html, sitemap.xml e robots.txt atualizados a partir do CONFIG.');
