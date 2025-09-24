# 🎲 n8n Custom Node - True Random Number Generator

![Preview](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

## 📋 Descrição do Projeto
Este é um conector personalizado para a plataforma **n8n** que gera números verdadeiramente aleatórios utilizando a API do **RANDOM.ORG**.  
Diferente de geradores pseudoaleatórios de computador, este node usa randomização atmosférica para garantir **verdadeira aleatoriedade**.

---

## 🎯 Funcionalidades
- ✅ Gera números aleatórios entre um intervalo mínimo e máximo  
- ✅ Usa a API oficial do RANDOM.ORG para aleatoriedade real  
- ✅ Integra-se perfeitamente com workflows de automação n8n  
- ✅ Interface simples e intuitiva para usuários finais  
- ✅ Validação de parâmetros e tratamento de erros robusto  

---

## ⚙️ Pré-requisitos

**Software Necessário:**
- Node.js **22.x (LTS)** – Versão 20 ou superior  
- Docker Desktop  
- Docker Compose  
- Git (opcional)  
- n8n – Instalado globalmente via `npm install n8n -g`

**Configuração do Ambiente de Desenvolvimento:**
> Siga o guia oficial do [n8n](https://docs.n8n.io) para configurar seu ambiente.

---

## 🚀 Instalação Rápida

### 1. Clonar e Configurar o Projeto
```powershell
# Clone o repositório
git clone https://github.com/GabrielRMA1/node-n8n.git
cd node-n8n

# Instalar dependências
npm install
```

### 2. Configurar Docker e n8n

```powershell
# Iniciar n8n com Docker Compose
docker-compose up
```

### 3. Acessar o n8n

- Abra o navegador em: http://localhost:5678

- O n8n estará pronto para uso! 🎉

## 🏗️ Estrutura do Projeto (Principais arquivos)

```bash

n8n-nodes-random/
├── .n8n/                    # Configurações do n8n
│   └── custom/              # Nodes personalizados
├── nodes/                   # Código dos nodes
│   └── Random/              # Node True Random Number Generator
│       ├── Random.node.json # Código json
│       ├── Random.node.ts   # Código principal TypeScript
│       └── random.svg       # Ícone do node
├── credentials/             # Definições de autenticação
├── dist/                    # Arquivos compilados (gerado automaticamente)
├── docker-compose.yml       # Configuração Docker
├── package.json             # Configuração do projeto
└── README.md                # Este arquivo
```
## 🔧 Desenvolvimento

**Comandos Disponíveis**

```powershell

# Desenvolvimento com watch mode
npm run dev

# Build do projeto
npm run build

# Verificar qualidade do código
npm run lint

# Corrigir automaticamente problemas de linting
npm run lintfix

# Formatação de código
npm run format

```

### Testar o Node Localmente:

- Siga o guia oficial do [n8n](https://docs.n8n.io/integrations/creating-nodes/test/run-node-locally) para executar nodes customizados.

## 🎮 Como Usar o Node Random

**Criar Novo Workflow**

- Acesse http://localhost:5678

- Clique em "+" → "Start from scratch"

**Adicionar Gatilho Manual**

- Clique no canvas (Quadro branco) → Busque por "Manual Trigger"

- Adicione ao workflow

**Adicionar Node Random**

- Clique no canvas → Busque por "Random" ou "True Random Number Generator"

- Seu node customizado aparecerá na lista!

**Configurar Parâmetros**

- Min: Valor mínimo (padrão: 1)

- Max: Valor máximo (padrão: 100)

**Executar Workflow**

- Clique em "Execute Workflow" (►)

- Visualize os resultados no node Random

```powershell
{
	"Número Gerado pelos intervalos": 1 + " e " + 100,
	"Data e Hora": "2025-09-24 21:00:05 UTC",
	"Número aleatório gerado": 42
}
```

### 🔌 API Utilizada

- Endpoint: https://www.random.org/integers/

- Método: GET

- Parâmetros: num=1&min=X&max=Y&col=1&base=10&format=plain&rnd=new

### 🐛 Solução de Problemas

## Problema Comum: Node não aparece

```powershell

# Solução: Reiniciar o serviço
docker-compose down
npm run build
docker-compose up

```

## Erro de Build

```powershell

# Verificar e corrigir problemas
npm run lintfix
npm run build

```

## Problemas de Docker

- Certifique-se de que o Docker Desktop está em execução

- Execute PowerShell como Administrador se necessário

### 📚 Resumo

**Este projeto demonstra a integração de:**

- Containerização com Docker

- Automação de workflows com n8n

- Desenvolvimento TypeScript para nodes customizados

- Integração com APIs REST externas

- Boas práticas de documentação e desenvolvimento

### 📞 Dúvidas

- Para issues técnicas, consulte a [documentação oficial do n8n](https://docs.n8n.io).

### 📄 Licença

- Este projeto está sob a licença MIT.
- Veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.

# ℹ️ Informações

📅 Última atualização: **Setembro 2025**  
📌 Versão: **1.0.0**  
⚡ Compatível com n8n 1.85.4+


