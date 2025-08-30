# 📱 Links - Organizador de Links Pessoais

Um aplicativo mobile para organizar e gerenciar seus links favoritos de forma categorizada e intuitiva, desenvolvido com React Native e Expo.

## 🎯 Sobre o Projeto

Este projeto foi desenvolvido durante meus estudos no curso introdutório de React Native com Expo da **Rocketseat**. É um aplicativo que permite salvar, organizar e acessar rapidamente links importantes divididos por categorias.

🔗 **Curso:** [Expo com React Native - Curso Introdutório](https://app.rocketseat.com.br/journey/expo-com-react-native-curso-introdutorio/overview)

## ✨ Funcionalidades

### 🏠 Tela Principal

- **Visualização de links** organizados por categoria
- **Filtro por categorias** com navegação intuitiva
- **Modal de detalhes** com informações completas do link
- **Ações rápidas** para abrir ou excluir links

### ➕ Adicionar Links

- **Formulário simples** para cadastrar novos links
- **Seleção de categoria** com ícones visuais
- **Validação de campos** obrigatórios
- **Feedback visual** de sucesso ou erro

### 🗂️ Categorias Disponíveis

- **📚 Curso** - Links para cursos e materiais educacionais
- **📁 Projeto** - Repositórios e projetos de desenvolvimento
- **🌐 Site** - Websites e portais importantes
- **📰 Artigo** - Artigos, blogs e conteúdos informativos
- **🎬 Vídeo** - Vídeos, tutoriais e conteúdo audiovisual
- **📋 Documentação** - Documentações técnicas e guias

### 💾 Persistência Local

- **Armazenamento local** usando AsyncStorage
- **Dados persistentes** entre sessões do app

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento React Native
- **TypeScript** - Superset tipado do JavaScript
- **Expo Router** - Sistema de navegação baseado em arquivos
- **AsyncStorage** - Armazenamento local assíncrono
- **Vector Icons** - Ícones vetoriais do Expo

## 📁 Estrutura do Projeto

```text
src/
├── app/                    # Telas do aplicativo (file-based routing)
│   ├── _layout.tsx        # Layout principal
│   ├── index/             # Tela principal (listagem)
│   └── add/               # Tela de adicionar links
├── components/            # Componentes reutilizáveis
│   ├── button/           # Botão customizado
│   ├── categories/       # Seletor de categorias
│   ├── category/         # Item de categoria
│   ├── input/            # Campo de entrada
│   ├── link/             # Item de link
│   └── option/           # Botão de ação
├── storage/              # Gerenciamento de dados locais
├── styles/               # Estilos globais e cores
└── utils/                # Utilitários e constantes
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js instalado
- Expo CLI instalado globalmente
- Expo Go app no dispositivo móvel (ou emulador)

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Navegue até a pasta do projeto
cd links

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npx expo start
```

### Executando o App

- Escaneie o QR Code com o Expo Go (Android) ou Camera (iOS)
- Ou use os comandos específicos:

  ```bash
  npx expo start --android  # Para Android
  npx expo start --ios      # Para iOS
  npx expo start --web      # Para Web
  ```

## 📱 Principais Recursos Implementados

### 🎨 Interface

- Design clean e moderno
- Navegação intuitiva entre telas
- Feedback visual para todas as ações
- Modals para interações detalhadas

### 🔧 Funcionalidades Técnicas

- **File-based routing** com Expo Router
- **Estados locais** gerenciados com React Hooks
- **Persistência de dados** com AsyncStorage
- **Validação de formulários** com feedback ao usuário
- **Abertura de links externos** com Linking API

### 📊 Gerenciamento de Estado

- Estados locais para categorias selecionadas
- Controle de modals e formulários
- Cache de dados para melhor performance

## 🎓 Conceitos Aprendidos

Durante meus estudos e desenvolvimento deste projeto, pude aprender e aplicar conceitos fundamentais do React Native:

- **Componentes funcionais** e hooks
- **Navegação** entre telas
- **Estilização** com StyleSheet
- **Gerenciamento de estado** local
- **Persistência de dados** no dispositivo
- **Validação** de formulários
- **Integração** com APIs nativas do dispositivo

## 📄 Licença

Projeto desenvolvido para fins educacionais durante meus estudos na Rocketseat.

---

Desenvolvido com 💜 durante meus estudos no curso de React Native da [Rocketseat](https://rocketseat.com.br)
