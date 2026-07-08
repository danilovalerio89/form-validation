# Form Validation Test

Projeto de teste desenvolvido para simular um fluxo de envio de cadastro, com foco em validação de formulários e boas práticas de arquitetura front-end.

> ⚠️ Este é um projeto **apenas para estudo/teste**. Não há integração com uma API real — o envio do formulário é simulado.

## Tecnologias

- **[React](https://react.dev/)** — biblioteca para construção da interface
- **[Vite](https://vitejs.dev/)** — build tool e dev server
- **[Chakra UI](https://chakra-ui.com/)** — biblioteca de componentes visuais
- **[React Hook Form](https://react-hook-form.com/)** — gerenciamento de estado e performance do formulário
- **[Zod](https://zod.dev/)** — validação de schema e tipagem

## Funcionalidades

- Cadastro com campos de nome e sobrenome
- Validação de campos obrigatórios e regras mínimas (ex: quantidade de caracteres)
- Feedback de erro em tempo real (validação em `onBlur`)
- Simulação de envio de formulário (mock de serviço)

## Estrutura do projeto

O projeto segue uma organização **feature-based**, separando responsabilidades por camada (apresentação, estado, validação e serviço):

```
src/
├── features/
│   └── registration-form/
│       ├── components/       # Componentes de apresentação (campos do form)
│       ├── hooks/             # Lógica de estado (useForm + submit)
│       ├── schemas/           # Regras de validação (Zod)
│       ├── services/          # Simulação de envio (mock)
│       └── index.ts           # Barrel export da feature
├── App.tsx
└── main.tsx
```

## Como rodar o projeto

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Build de produção
npm run build
```

## Observações técnicas

- O **React Compiler** não é utilizado neste projeto — foi identificada incompatibilidade com o Proxy interno do React Hook Form (`formState`), o que causava atraso na atualização da UI até o próximo HMR.
- A validação segue o modo `onBlur` do React Hook Form: os erros aparecem assim que o usuário sai do campo, sem exigir o clique em "Submit".

## Status

Projeto em evolução, utilizado como base de estudo para arquitetura de formulários escaláveis com React Hook Form + Zod + Chakra UI.
