# 🎨 Artelilê Personalizados - E-commerce Full-Stack

Plataforma de e-commerce moderna, rápida e totalmente customizada para a **Artelilê Personalizados**. Desenvolvida com arquitetura *Headless Commerce*, utilizando **Medusa v2** no backend e **Next.js 15 (App Router)** no frontend com **Tailwind CSS**, alinhada com a identidade visual da marca (tons de azul, roxo e lilás suave) e 100% traduzida para Português do Brasil (pt-BR).

---

## 📑 Sumário

- [Visão Geral](#-visão-geral)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Repositório](#-estrutura-do-repositório)
- [Pré-requisitos](#-pré-requisitos)
- [Guia de Instalação e Execução Local](#-guia-de-instalação-e-execução-local)
  - [1. Clonar ou Fazer Fork](#1-clonar-ou-fazer-fork-do-repositório)
  - [2. Configurar o Backend (Medusa v2)](#2-configurar-o-backend-medusa-v2)
  - [3. Obter a Publishable API Key](#3-obter-a-publishable-api-key-no-painel-admin)
  - [4. Configurar o Frontend (Storefront Next.js)](#4-configurar-o-frontend-storefront-nextjs)
  - [5. Executar a Aplicação](#5-executar-a-aplicação)
- [Portas e Rotas Padrão](#-portas-e-rotas-padrão)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Deploy em Produção](#-deploy-em-produção)
- [Solução de Problemas Comuns](#-solução-de-problemas-comuns)
- [Contribuição](#-contribuição)

---

## 🌟 Visão Geral

Este projeto está organizado como um monorepo contendo dois módulos principais desacoplados:
1. **`medusa/`**: O motor de comércio headless com Medusa v2, responsável pelo catálogo de produtos, clientes, pedidos, regras de frete, pagamentos e o painel administrativo embutido (`/app`).
2. **`storefront/`**: O cliente web voltado ao consumidor final em Next.js 15, otimizado com Server-Side Rendering (SSR), Server Components, Turbopack, estilização Tailwind CSS com temas e microinterações polidas.

---

## 🛠 Tecnologias Utilizadas

### Backend (`/medusa`)
- **[Medusa v2](https://medusajs.com/)** (`v2.18+`)
- **Node.js** (>= 20.x) & **TypeScript**
- **PostgreSQL** (Banco de dados relacional)
- **Medusa Admin Dashboard** integrado

### Frontend (`/storefront`)
- **[Next.js 15](https://nextjs.org/)** (App Router, Turbopack, SSR/SSG)
- **[React 19](https://react.dev/)**
- **[Tailwind CSS](https://tailwindcss.com/)** com paleta customizada Artelilê
- **Medusa JS SDK** (`@medusajs/js-sdk`)
- **Radix UI** & **Headless UI** para componentes acessíveis
- **Lucide Icons** / **Medusa Icons**

---

## 📁 Estrutura do Repositório

```text
ecommerce-atelile/
├── medusa/                 # Backend Medusa v2 (API REST & Admin)
│   ├── src/                # Workflows, módulos e scripts (seed, etc.)
│   ├── medusa-config.ts    # Configurações de CORS, Banco e Servidor
│   ├── .env.template       # Exemplo de variáveis de ambiente do backend
│   └── package.json
├── storefront/             # Frontend Next.js 15 (Storefront do cliente)
│   ├── public/             # Imagens, logos e assets estáticos da marca
│   ├── src/
│   │   ├── app/            # App Router do Next.js (rotas pt-BR)
│   │   ├── modules/        # Módulos visuais (home, store, cart, checkout, account)
│   │   └── styles/         # CSS global e temas
│   ├── .env.template       # Exemplo de variáveis de ambiente do frontend
│   ├── tailwind.config.js  # Tokens de design e paleta Artelilê
│   └── package.json
├── package.json            # Scripts de orquestração na raiz
├── .gitignore
└── README.md
```

---

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:
- **[Node.js](https://nodejs.org/)** versão `20.x` ou superior (`node -v`)
- **[Git](https://git-scm.com/)**
- **[PostgreSQL](https://www.postgresql.org/)** rodando localmente (ou instância remota no Supabase/Neon/Render)
- Gerenciador de pacotes: **npm** (recomendado), **yarn** ou **pnpm**

---

## 🚀 Guia de Instalação e Execução Local

### 1. Clonar ou Fazer Fork do Repositório

Faça o fork pelo GitHub e clone o seu repositório localmente:

```bash
git clone https://github.com/rudolfotorres/ecommerce-atelile.git
cd ecommerce-atelile
```

---

### 2. Configurar o Backend (Medusa v2)

1. Entre no diretório do backend e instale as dependências:
   ```bash
   cd medusa
   npm install
   ```

2. Crie o arquivo de variáveis de ambiente copiando o template:
   ```bash
   cp .env.template .env
   ```
   *(No Windows PowerShell: `Copy-Item .env.template .env`)*

3. Abra o arquivo `.env` e configure a string de conexão com o seu banco PostgreSQL:
   ```env
   DATABASE_URL=postgres://seu_usuario:sua_senha@localhost:5432/medusa-db
   STORE_CORS=http://localhost:8000,http://localhost:3000
   ADMIN_CORS=http://localhost:9000,http://localhost:7001
   AUTH_CORS=http://localhost:8000,http://localhost:3000,http://localhost:9000
   JWT_SECRET=supersecret_jwt_artelile
   COOKIE_SECRET=supersecret_cookie_artelile
   ```

4. Execute as migrações para criar as tabelas no banco de dados:
   ```bash
   npx medusa db:migrate
   ```

5. *(Opcional)* Se desejar popular o banco com dados de exemplo (produtos, categorias, regiões):
   ```bash
   npm run seed
   ```

6. Crie um usuário administrador para acessar o Medusa Admin:
   ```bash
   npx medusa user -e admin@artelile.com -p MinhaSenha123
   ```

7. Inicie o servidor do Medusa para validação:
   ```bash
   npm run dev
   ```
   O backend estará ativo em `http://localhost:9000` e o painel em `http://localhost:9000/app`.

---

### 3. Obter a Publishable API Key no Painel Admin

O Storefront Next.js precisa de uma chave pública vinculada aos seus canais de vendas para consultar produtos e criar carrinhos:

1. Acesse o painel administrativo em: **[http://localhost:9000/app](http://localhost:9000/app)**
2. Faça login com o e-mail e senha criados no passo anterior (`admin@artelile.com` / `MinhaSenha123`).
3. No menu lateral, acerte em **Configurações (Settings)** ⚙️ ➔ **Publishable API Keys** (ou *Chaves de API Públicas*).
4. Clique em **Criar Chave** (ex: nomeie como `Storefront Web Artelilê`).
5. Associe a chave ao canal de venda principal (**Default Sales Channel**).
6. Copie o token gerado (começa com `pk_...`).

---

### 4. Configurar o Frontend (Storefront Next.js)

1. Em um novo terminal, navegue até a pasta do storefront:
   ```bash
   cd ../storefront
   npm install
   ```

2. Crie o arquivo `.env.local` a partir do template:
   ```bash
   cp .env.template .env.local
   ```
   *(No Windows PowerShell: `Copy-Item .env.template .env.local`)*

3. Abra o arquivo `.env.local` e preencha com as configurações da sua API:
   ```env
   # Endereço do backend Medusa
   MEDUSA_BACKEND_URL=http://localhost:9000

   # Chave obtida no Passo 3
   NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=pk_sua_chave_aqui

   # URL base do storefront local
   NEXT_PUBLIC_BASE_URL=http://localhost:8000

   # Região padrão (ISO-2)
   NEXT_PUBLIC_DEFAULT_REGION=br
   ```

---

### 5. Executar a Aplicação

Você pode executar os dois serviços juntos ou de forma separada:

#### Opção A: Executar Tudo Junto (Recomendado na Raiz)
Na raiz do projeto (`ecommerce-atelile`), você pode rodar ambos os serviços simultaneamente em um único terminal com:

```bash
npm run dev
```

> **Nota:** Este comando utiliza `concurrently` para subir o Medusa em `http://localhost:9000` e o Storefront em `http://localhost:8000`.

#### Opção B: Executar em Terminais Separados
- **Terminal 1 (Backend):**
  ```bash
  cd medusa
  npm run dev
  ```
- **Terminal 2 (Frontend):**
  ```bash
  cd storefront
  npm run dev
  ```

---

## 🌐 Portas e Rotas Padrão

| Aplicação | URL Local | Descrição |
| :--- | :--- | :--- |
| **Storefront (Loja Web)** | `http://localhost:8000` | Interface do cliente final |
| **Medusa Backend API** | `http://localhost:9000` | Endpoints REST da API |
| **Medusa Admin Dashboard** | `http://localhost:9000/app` | Painel de gestão da loja, produtos e pedidos |

---

## 📜 Scripts Disponíveis

### Na Raiz (`/`):
- `npm run dev`: Inicia simultaneamente o backend Medusa e o storefront Next.js.
- `npm run build:storefront`: Compila a versão de produção do storefront Next.js.
- `npm run build:medusa`: Compila o backend Medusa.

### No Backend (`/medusa`):
- `npm run dev`: Inicia o servidor em modo desenvolvimento com hot-reload (`medusa develop`).
- `npm run build`: Compila o projeto TypeScript.
- `npm run start`: Inicia o backend compilado para produção.
- `npm run seed`: Popula o banco com sementes de dados (`seed.ts`).

### No Frontend (`/storefront`):
- `npm run dev`: Inicia o Next.js com Turbopack na porta 8000.
- `npm run build`: Gera o build estático e otimizado de produção.
- `npm run start`: Inicia a versão de produção do Next.js.
- `npm run lint`: Executa a verificação estática de código com ESLint.

---

## ☁️ Deploy em Produção

Por ser uma arquitetura desacoplada (Headless Commerce), o deploy ideal é feito separando os serviços:

### 1. Backend (Medusa v2)
- **Plataformas recomendadas:** [Railway](https://railway.app/), [Render](https://render.com/), [Fly.io](https://fly.io/) ou VPS com Docker.
- **Banco de Dados:** PostgreSQL gerenciado (Supabase, Neon, AWS RDS ou Railway Postgres).
- **Variáveis de Ambiente:** Configure `DATABASE_URL`, `STORE_CORS` (URL do seu domínio de produção na Vercel), `ADMIN_CORS`, `AUTH_CORS` e `JWT_SECRET`.

### 2. Frontend (Storefront Next.js)
- **Plataforma recomendada:** [Vercel](https://vercel.com/)
- **Configuração no painel da Vercel:**
  - **Root Directory:** selecione a pasta `storefront`.
  - **Framework Preset:** `Next.js`.
  - **Environment Variables:**
    - `MEDUSA_BACKEND_URL`: URL pública do seu backend Medusa em produção (ex: `https://api.artelile.com.br`).
    - `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY`: Chave de API pública gerada no painel de produção.
    - `NEXT_PUBLIC_BASE_URL`: URL da sua loja (ex: `https://www.artelile.com.br`).
    - `NEXT_PUBLIC_DEFAULT_REGION`: `br`.

---

## 🔍 Solução de Problemas Comuns

<details>
<summary><b>1. Erro de Conexão com o Banco de Dados (ECONNREFUSED)</b></summary>

- Verifique se o seu serviço PostgreSQL está ativo e rodando.
- Confirme se os dados de host, porta, usuário e senha em `medusa/.env` estão corretos.
</details>

<details>
<summary><b>2. Erro de CORS no Navegador ao Acessar a Loja</b></summary>

- O backend Medusa bloqueia origens não cadastradas em `STORE_CORS` e `AUTH_CORS`.
- Abra `medusa/.env` e verifique se a porta utilizada pelo Next.js (ex: `http://localhost:8000`) está incluída em `STORE_CORS` e `AUTH_CORS`.
</details>

<details>
<summary><b>3. Nenhum Produto Aparece na Vitrine</b></summary>

- Certifique-se de que a **Publishable API Key** informada em `storefront/.env.local` está associada ao **Sales Channel** correto no Medusa Admin.
- Verifique se os produtos estão marcados como `Published` (Publicados) e com preços definidos para a região do Brasil (`BRL`).
</details>

<details>
<summary><b>4. Erro de Permissão no Windows (EPERM ao compilar Next.js)</b></summary>

- Caso ocorra erro de bloqueio de pasta em `.next/`, encerre o servidor, delete a pasta `.next/` (`Remove-Item -Recurse -Force .next`) e execute `npm run dev` novamente.
</details>

---

## 🤝 Contribuição

Contribuições, sugestões e melhorias são muito bem-vindas!
1. Faça um **Fork** deste repositório.
2. Crie uma branch para sua feature: `git checkout -b feature/minha-melhoria`.
3. Faça commit das alterações: `git commit -m 'feat: Adiciona funcionalidade x'`.
4. Envie para a sua branch: `git push origin feature/minha-melhoria`.
5. Abra um **Pull Request**.

---

Desenvolvido com carinho para a **Artelilê Personalizados** 💜

