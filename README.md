# Site Force Kart Racing (FKart)

> Website informativo para o grupo de kart amador Force Kart Racing (FKart), apresentando seus campeonatos, calendário, informações sobre o grupo e eventos corporativos. Desenvolvido utilizando tecnologias modernas de front-end.

## Tecnologias Utilizadas

* **Framework/Biblioteca Principal:** React (via Vite)
* **Linguagem:** TypeScript
* **Interface de Usuário (UI):** Material Tailwind (@material-tailwind/react)
* **Estilização:** Tailwind CSS
* **Roteamento:** React Router DOM (`react-router-dom`)
* **Manipulação de Datas:** `date-fns`
* **Build Tool:** Vite
* **Gerenciador de Pacotes:** npm

## Funcionalidades Implementadas (até 19/04/2025)

* Página Inicial (Homepage)
* Página de Listagem de Campeonatos (com cards individuais)
* Página de Detalhes do Campeonato (exibindo local, nº etapas, categorias/lastro e calendário de etapas do campeonato específico)
* Página "Grupo FKR" (com informações sobre a equipe)
* Página "Eventos Corporativos"
* Página "Calendário" (listando todos os eventos/etapas, agrupados por mês)
* Sistema de Roteamento entre as páginas.
* Barra de Navegação responsiva.
* Estrutura de layout base (Navbar, Conteúdo da Página, Footer).
* Gerenciamento de assets (imagens na pasta `src/assets` e `public`).

## Configuração do Projeto

Para configurar e rodar este projeto localmente, siga os passos abaixo:

1.  **Clone o Repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO_GIT>
    cd fkart-site
    ```

2.  **Instale as Dependências:**
    Certifique-se de ter o [Node.js](https://nodejs.org/) (que inclui o npm) instalado.
    ```bash
    npm install
    ```

## Rodando o Projeto (Desenvolvimento)

Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento:

```bash
npm run dev