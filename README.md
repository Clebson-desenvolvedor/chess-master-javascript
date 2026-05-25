# Chess Master

Um projeto de jogo de xadrez desenvolvido em TypeScript.

## Estrutura do Projeto

```
src/
  ├── application/
  │   └── Program.ts      # Ponto de entrada da aplicação
  └── boardgame/
      └── Position.ts     # Classe para representar posições no tabuleiro
```

## Setup

### Pré-requisitos
- Node.js 18+ instalado

### Instalação

```bash
npm install
```

## Scripts Disponíveis

- `npm run build` - Compila TypeScript para JavaScript
- `npm start` - Executa a aplicação compilada
- `npm run dev` - Acompanha mudanças em modo desenvolvimento (recompila automaticamente)

## Compilação

Para compilar o projeto:

```bash
npm run build
```

Os arquivos compilados serão gerados na pasta `dist/`.

## Execução

```bash
npm start
```

## Desenvolvimento

Para modo watch (recompila automaticamente quando arquivos são alterados):

```bash
npm run dev
```

## Configuração TypeScript

O projeto usa `tsconfig.json` com modo strict habilitado para melhor type safety.
