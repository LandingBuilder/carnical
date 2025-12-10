# Guia de Instruções para Agentes AI - Carniçal

## Visão Geral do Projeto

**Carniçal** é uma landing page de serviço de criação de landing pages (LP Builder), construída como um site estático moderno com HTML, CSS e JavaScript. O design segue um tema **purple/neon dark** com ênfase em conversão através de CTAs (Call-to-Action).

**Arquitetura:**
- `index.html` - Estrutura única: header com logo/marca, seção de links (CTAs), footer
- `style.css` - Estilização com variáveis CSS, tema roxo (#8E24AA) + ciano neon (#00FFD1), design responsivo
- `script.js` - Legacy ticker/scroller de notícias (comentado em HTML) - considere refatorar ou remover
- `src/` - Assets: logo.jpg, background-image.jpg

## Design & Padrões

### Sistema de Cores
Definido em `:root` do CSS:
- `--color-primary: #8E24AA` (roxo profundo - credibilidade)
- `--color-secondary: #00FFD1` (ciano neon - destaque/ação)
- `--color-dark: #0F001A` (fundo muito escuro)
- `--color-text: #E0E0E0` (texto claro para contraste)

**Uso:** Buttons CTA usam cores secundárias; elementos destaque usam roxo com border neon.

### Componentes Principais
1. **Profile Card** (`.profile-card`): Container central max-width 450px com fundo semi-transparente e border roxo
2. **Link Buttons** (`.link-button`): Múltiplos estilos:
   - `.cta-primary`: WhatsApp (verde+roxo, prioridade alta)
   - `.link-button`: Links padrão (Instagram, loja)
3. **Background**: Imagem fixa com opacity 0.2, z-index -1

### Responsividade
- Body usa `display: flex` com `align-items: flex-start`, `padding: 60px 20px`
- Profile card mantém `max-width: 450px` em todas as resoluções
- Verificar media queries existentes para mobile optimization

## Fluxo de Dados & Integrações Externas

1. **WhatsApp CTA**: Link direto com pre-formatted message - `https://wa.me/5521977295249/?text=...`
2. **Loja Oficial**: Redireciona para `https://collshp.com/carnical`
3. **Instagram**: Link externo para `https://www.instagram.com/lp.builder/`

Todos os links abrem em nova aba (`target="_blank"`).

## Convenções & Padrões Específicos

- **Nomenclatura CSS**: Classes descritivas (`.profile-image`, `.tagline`, `.service-highlight`), não use BEM aqui
- **Variáveis CSS**: Todas em `:root`, nunca adicione estilos inline
- **Tipografia**: Font única Poppins (300, 600, 800 weights) - não adicione fontes extras
- **HTML/Meta**: Lang="pt-br", meta description customizado para SEO (manter atualizado)
- **Comentários HTML**: Use `<!-- -->` format, manter em português

## Workflows & Manutenção

### Modificar Links/CTA
- Edite `href` em `index.html` seção `.links-section`
- Mantenha `target="_blank"` para evitar navegação
- Confirme que WhatsApp usa codificação correta (URL encoded)

### Atualizar Conteúdo de Texto
- Tagline: `.tagline` em HTML
- Service highlight: `.service-highlight` com span `.highlight-text` para destaque neon
- Copyright: Footer `.site-footer`

### CSS Adjustments
- **Cores**: Modifique variáveis em `:root`, nunca hardcode hex values
- **Layout**: Profile card max-width 450px é o "ponto de ouro" - manter
- **Efeitos**: Transições definidas em CSS (e.g., `transition: all 0.5s ease`)

### Legacy Code
- `script.js` contém ticker de notícias comentado em HTML - arquivo não é usado atualmente
- Remova ou refatore se adicionar novas funcionalidades JavaScript

## Padrões a Evitar

❌ Inline styles no HTML  
❌ Adicionar novas fontes (já tem Poppins + Font Awesome)  
❌ Usar classes BEM (convenção atual é simples)  
❌ Hardcoded colors - sempre use variáveis CSS  

## Checklist para Novos PRs

- [ ] Cores usam variáveis `:root`
- [ ] Links testados (WhatsApp, loja, Instagram funcionam)
- [ ] Design responsivo testado em mobile (< 500px)
- [ ] Sem console errors em DevTools
- [ ] Meta tags atualizadas se alterou título/descrição
- [ ] Nenhum arquivo orphan em `src/` (removidos de HTML)
