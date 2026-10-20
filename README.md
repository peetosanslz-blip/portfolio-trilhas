# Portfólio — Ednardo Sousa | Desafio Front-end Programa Trilhas

Portfólio pessoal desenvolvido para o desafio de front-end do **Programa Trilhas**. A página apresenta meu perfil, reúne meus principais projetos e o espaço para certificados, seguindo o design disponibilizado no Figma.

**Design de referência:** [Figma — Portfolio Front-end](https://www.figma.com/design/py6PXkG8oYMd5v7YhKMvx4/Portfolio---Front-end?node-id=0-1&p=f)

## Páginas

- **Página inicial** — foto, nome, descrição ("Desenvolvedor Front-end no Programa Trilhas"), botões **Sobre mim**, **Veja meus projetos** e **Acesse os meus certificados**
- **Sobre mim** — perfil no topo e, abaixo, um texto sobre minha trajetória, interesses em tecnologia e objetivos profissionais
- **Veja meus projetos** — perfil no topo e cards de projetos, cada um com foto e botão "Acessar projeto →" que leva ao repositório ou site do projeto

## Tecnologias

- [React](https://react.dev/) (Create React App + CRACO)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (animações e micro-interações)
- [Lenis](https://lenis.darkroom.engineering/) (rolagem suave)
- [React Router](https://reactrouter.com/) (navegação entre páginas)

## Como rodar

```bash
# clonar o repositório
git clone https://github.com/peetosanslz-blip/portfolio-trilhas.git
cd portfolio-trilhas

# instalar dependências
yarn install

# rodar em desenvolvimento
yarn start
```

Para gerar a build de produção: `yarn build`.

## Estrutura

```
src/
├── pages/          # Páginas (Home, Sobre, Projetos)
├── components/     # Componentes reutilizáveis (Nav, Marquee, botões...)
├── constants.js    # Dados do portfólio (perfil, projetos, links)
└── index.css       # Paleta de cores e estilos globais
```

## Autor

**Ednardo Sousa Cantanhede Filho**
- GitHub: [@peetosanslz-blip](https://github.com/peetosanslz-blip)
