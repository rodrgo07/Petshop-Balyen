# Site Pet Balyen

Landing page estática (HTML + CSS + JS puro) que leva o visitante a agendar pelo WhatsApp.

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | Página (estrutura + CSS crítico da primeira tela + ícones SVG) |
| `style.css` | Estilos das demais seções |
| `script.js` | **Bloco `CONFIG` no topo: todos os textos, serviços, ofertas, telefone e links** |
| `assets/img` | Fotos em AVIF/WebP em vários tamanhos, logo, imagem de compartilhamento (OG) |
| `assets/video` | Vídeos dos bastidores (MP4 H.264 + WebM) |
| `assets/fonts` | Fontes Baloo 2 e Dancing Script (WOFF2, auto-hospedadas) |
| `ferramentas/pre-render.js` | Opcional: grava o CONFIG direto no HTML (melhor SEO) |
| `_headers` | Regras de cache para o Cloudflare Pages |
| `robots.txt`, `sitemap.xml`, `favicon.ico`, `apple-touch-icon.png`, `site.webmanifest` | SEO e ícones |

## Como editar

1. Abra `script.js` e altere só os valores dentro de `CONFIG`.
2. Procure por `✏️ PREENCHER` / `✏️ CONFIRMAR` para ver o que falta.
3. (Recomendado) Com o Node.js instalado, rode na pasta do site:
   ```
   node ferramentas/pre-render.js
   ```
   Isso atualiza o `index.html`, o `sitemap.xml` e o `robots.txt`. Se você não rodar, o site se atualiza sozinho no navegador.

- **Preço**: preencha `preco` do serviço (ex.: `'a partir de R$ 60'`). Vazio = "Consulte pelo WhatsApp".
- **Oferta**: preencha `beneficio` (e opcionalmente `validade: 'AAAA-MM-DD'` para mostrar contagem regressiva). Sem `beneficio`, a seção some.
- **Natal**: `sazonal.ativo: false` esconde a seção depois das festas.
- **Trocar fotos**: gere os arquivos `nome-400.webp/.avif` e `nome-720.webp/.avif` (quadrados) em `assets/img` e use `nome` no CONFIG.

## Publicar grátis no Cloudflare Pages

Veja o passo a passo na conversa ou em https://developers.cloudflare.com/pages/get-started/direct-upload/
Resumo: Cloudflare → Workers & Pages → Create → Pages → **Upload assets** → arraste esta pasta → Deploy.
Depois de saber o endereço final, atualize `CONFIG.seo.url` e rode o pré-render.
