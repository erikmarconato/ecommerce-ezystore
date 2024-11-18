
# Aplicação de E-commerce

### Visão Geral

Este projeto foi desenvolvido como uma aplicação de estudo com o objetivo de aprender e praticar conceitos de desenvolvimento full-stack, onde usuários comuns podem visualizar e filtrar produtos por categorias. Usuários com privilégios de administrador têm acesso a um painel de controle protegido, onde podem adicionar, editar ou excluir produtos.

![1](https://github.com/user-attachments/assets/142af6f1-7f7c-41c2-a5c2-c5df0a9ca18f)
![2](https://github.com/user-attachments/assets/03d6f12f-957b-4cde-ad0a-6b413815a357)
![3](https://github.com/user-attachments/assets/f7e96ffe-fbd7-4f38-8510-83ac8dbf37f7)
![4](https://github.com/user-attachments/assets/11369f5e-4be6-45da-add2-1fed03df0500)
![5](https://github.com/user-attachments/assets/8f15d1a0-b5d8-4b78-8581-2f6e2005a828)
![6](https://github.com/user-attachments/assets/0d73cb39-2750-40f4-a2f1-1c7bc7e9465f)
![7](https://github.com/user-attachments/assets/41b706b7-a664-4752-9105-4fbab81101d5)


### Funcionalidades

- **Autenticação e Autorização:** Implementada com Spring Security, com suporte a login baseado em token JWT.
- **Filtragem de Produtos:** Usuários podem buscar e filtrar produtos por categorias específicas.
- **Gestão de Produtos (Admins):** Administradores podem gerenciar o catálogo de produtos através de um painel exclusivo, protegido por autenticação.
- **Persistência de Dados:** Banco de dados MySQL para armazenamento de informações de usuários e produtos.
- **Frontend Dinâmico:** Interface desenvolvida com React, proporcionando uma experiência de usuário interativa e responsiva.

### Tecnologias Utilizadas

- **Back-end:** 
  - Java com Spring Boot
  - Spring Security para autenticação e autorização
  - JWT (JSON Web Token) para gerenciamento de sessões
  - MySQL como banco de dados relacional

- **Front-end:** 
  - React para a construção de interfaces interativas
  - Axios para requisições HTTP
  - CSS para estilização responsiva

### Como Executar o Projeto

#### Pré-requisitos

- [JDK 17+](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html) 
- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

#### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/erikmarconato/ezystore.git
   ```

2. **Backend:**

   - Navegue até a pasta `backend/src/main/resources` e configure o arquivo `application.properties` com suas credenciais do MySQL.
   - Execute o backend para fornecer a lógica e os dados ao front.

3. **Frontend:**

   - Navegue até a pasta `frontend` e execute os comandos:
     ```bash
     npm install @vitejs/plugin-react --save-dev
     npm run dev
     ```

4. Acesse a aplicação no navegador através de `http://localhost:5173`.

