# kuarionlabs.github.io

Site institucional da Kuarion Labs: <https://kuarionlabs.com>

## Stack

- React 19 + TypeScript
- Vite
- Motion (animações)
- CSS Modules

## Scripts

```bash
npm install       # instala as dependências
npm run dev       # servidor de desenvolvimento
npm run build     # checagem de tipos + build de produção (pasta dist)
npm run preview   # serve o build localmente
npm run lint      # ESLint
npm run format    # Prettier
```

## Estrutura

```text
src/
  components/   seções da página (cada uma com seu .module.css)
    ui/         peças reutilizáveis de animação (Reveal, SplitTitle, Tilt, MagneticLink)
  data/         textos e dados do conteúdo
  lib/          utilitários compartilhados
  styles/       estilos globais e variáveis de cor
public/         favicon, robots.txt, sitemap.xml, llms.txt, CNAME
```

## Convenções

- Commits no padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/):
  `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`.
- Componentes em `PascalCase`, um por arquivo, estilos em `*.module.css` ao lado do componente.
- Textos ficam em `src/data/content.ts`, não dentro dos componentes.
- Rode `npm run lint` e `npm run build` antes de commitar.

## Publicação

O deploy é feito pelo GitHub Actions (`.github/workflows/deploy.yml`) a cada push na
`main`, via GitHub Pages.

## Licença

Todos os direitos reservados. Veja [LICENSE](LICENSE).
