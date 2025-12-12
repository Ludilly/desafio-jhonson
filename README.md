# Desafio Fullstack — Johnson & Johnson

Este repositório documenta a solução desenvolvida para o desafio fullstack da **Johnson & Johnson**, contendo um backend (**server**) e um frontend (**client**), além das configurações de banco e deploy.

---

## 🗂️ Estrutura do Projeto

```
/project
  ├── server   → Backend (Node + Express + TS)
  └── client   → Frontend (Next.js + Material UI + TS)
```

---

## 🗄️ Banco de Dados (MySQL)

Foi utilizado **MySQL** como banco principal. A proposta original incluía relacionar cargos e pessoas, mas para este desafio foi criada apenas a tabela **pessoas**, obedecendo ao formato solicitado.

A base foi populada utilizando comandos **INSERT**, conforme exigido no teste.

### 📦 Deploy do Banco

O banco foi publicado utilizando:

* **Imagem Docker MySQL**
* Hospedagem na **Hostinger**

---

## 🔧 Backend — Node.js + Express + TypeScript

O backend foi desenvolvido com:

* **Node.js**
* **Express**
* **TypeScript**
* **Nodemon** (ambiente de desenvolvimento)

### ▶️ Como rodar localmente

Instalar dependências e iniciar o servidor:

```
npm install
npm run dev
```

### 🔐 Variáveis de Ambiente (.env)

Para rodar localmente, utilize:

```
PORT=8000
JWT_SECRET=its_a_secret_to_everybody
DB_HOST=localhost
DB_USER=root
DB_PASS=Autismo2.
DB_NAME=companydb
DB_PORT=3306
```

### 🌐 Deploy do Backend

O backend foi publicado no **Render**, gerando o endpoint:

> [https://desafio-jhonson.onrender.com/employees](https://desafio-jhonson.onrender.com/employees)

---

## 🎨 Frontend — Next.js + Material UI + TypeScript

O frontend foi criado com foco em desempenho e comunicação eficiente com o servidor.

Tecnologias utilizadas:

* **Next.js** (SSR/SSG rápido e eficiente)
* **Material UI (MUI)** para design system responsivo
* **TypeScript**

### 🌲 Funcionalidade Principal

Foi construída uma **árvore organizacional (Org Tree)** com filtros de:

* Manager
* Department
* Status
* Type

### 🚀 Deploy do Frontend

O frontend foi publicado na **Vercel**:

> [https://our-org-tree.vercel.app/](https://our-org-tree.vercel.app/)

---

### 🤖 Uso de IA

* GPT para sugestão de sites de deploy e ideias de layout
  
* Claude IA utilizaçao mais robusta de setup inicial de projeto para trazer mais agilidade, utilizaçao para a otimizaçao de código

  
## ✅ Conclusão

Este projeto entrega:

* Backend robusto com Node + TS
* Frontend moderno com Next.js + MUI
* Deploy completo (Render + Vercel)
* Banco MySQL hospedado externamente
* Org Tree funcional com filtros e design responsivo

---

## Melhorias

Para novas implementaçoes:
- Criar uma rota com query params para o filtro
- Relacionar as tabelas
- Enxugar as logicas do front e concentrar mais no backend
- Testes unitários
- Testes e2e
- Testes de mutação
- Criar rota para consumo do dropdown
- Utilizar uma imagem menos pesada no banner
