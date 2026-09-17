# Site — Dr. Paulo Camurça

Landing page única (single page), mobile-first, para o consultório odontológico do
Dr. Paulo Camurça (CRO 3750/CE), com unidades em Aldeota, José Walter e Barra do Ceará.

## Estrutura

```
/
├── index.html
├── css/
│   └── style.css        # variáveis de design, reset leve e todos os componentes
├── js/
│   └── main.js           # menu mobile, lightbox da galeria, ano do rodapé
├── assets/
│   ├── images/            # ver LEIA-ME.txt para os nomes de arquivo esperados
│   ├── icons/
│   └── fonts/
├── robots.txt
├── sitemap.xml
└── .gitignore
```

## Como abrir

Não é necessário build nem instalação de dependências — é HTML/CSS/JS puro.

1. Abra a pasta no VS Code.
2. Use a extensão "Live Server" (ou similar) e clique em "Go Live", ou apenas
   abra `index.html` diretamente no navegador.

## Antes de publicar

- [ ] Substituir os placeholders de imagem (ver `assets/images/LEIA-ME.txt`)
- [ ] Confirmar telefones/endereços das unidades José Walter e Barra do Ceará
      (o telefone só está disponível hoje para a unidade Aldeota)
- [ ] Confirmar nota e número de avaliações do Google exibidos na prova social
- [ ] Ajustar `<link rel="canonical">` e URLs do JSON-LD para o domínio final
- [ ] Testar responsividade nas resoluções listadas no briefing (320px a 1920px)
- [ ] Rodar um teste de acessibilidade (contraste, navegação por teclado, leitor de tela)

## Paleta de cores

| Uso | Cor |
|---|---|
| Primária (botões, destaques, ícones) | `#6C8D7D` |
| Secundária (fundos, cards) | `#E2DFD2` |
| Complementar (textos, footer, contraste) | `#2F3431` |

## Tipografia

- Títulos: **Newsreader** (serifada, sofisticada)
- Corpo: **Work Sans** (sans-serif, legível em qualquer tamanho de tela)

Ambas carregadas via Google Fonts no `<head>` do `index.html`.
