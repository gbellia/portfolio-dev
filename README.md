# Portfolio de Desenvolvedor

Um portfolio moderno e responsivo desenvolvido com Next.js, TypeScript e Tailwind CSS.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React para produção
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones modernos

## ✨ Funcionalidades

- **Design Responsivo** - Otimizado para desktop, tablet e mobile
- **Animações Suaves** - Transições e animações com Framer Motion
- **Navegação Suave** - Scroll suave entre seções
- **Formulário de Contato** - Formulário funcional para contato
- **SEO Otimizado** - Metadados e estrutura para SEO
- **Performance** - Otimizado para velocidade e performance

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
```

## 🎨 Seções do Portfolio

### 1. Hero Section

- Apresentação inicial com nome e título
- Botões de call-to-action
- Links para redes sociais
- Animações de entrada

### 2. Sobre

- Informações pessoais e profissionais
- Estatísticas de experiência
- Habilidades técnicas organizadas por categoria

### 3. Projetos

- Grid de projetos com cards
- Projetos em destaque
- Tecnologias utilizadas
- Links para código e demo

### 4. Contato

- Formulário de contato funcional
- Informações de contato
- Links para redes sociais

## 🛠️ Como Executar

1. **Clone o repositório**

   ```bash
   git clone <url-do-repositorio>
   cd portfolio-dev
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Execute o projeto**

   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

## 📝 Personalização

### Alterando Informações Pessoais

1. **Nome e Título**: Edite os componentes `Hero.tsx` e `Navbar.tsx`
2. **Sobre**: Modifique o componente `About.tsx`
3. **Projetos**: Atualize o array de projetos em `Projects.tsx`
4. **Contato**: Altere as informações em `Contact.tsx` e `Footer.tsx`

### Alterando Cores

O projeto usa um tema roxo/rosa. Para alterar:

1. Modifique as classes do Tailwind CSS nos componentes
2. Atualize as variáveis CSS em `globals.css`
3. Altere os gradientes nos componentes

### Adicionando Novos Projetos

Edite o array `projects` no arquivo `Projects.tsx`:

```typescript
const projects = [
  {
    id: 7,
    title: "Novo Projeto",
    description: "Descrição do projeto...",
    image: "/caminho/para/imagem",
    technologies: ["React", "Node.js"],
    github: "https://github.com/seu-usuario/projeto",
    live: "https://demo-do-projeto.com",
    featured: false,
  },
  // ... outros projetos
];
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Responsividade

O portfolio é totalmente responsivo e funciona bem em:

- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Scripts Disponíveis

- `npm run dev` - Executa o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run start` - Executa o servidor de produção
- `npm run lint` - Executa o linter

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar conforme necessário.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se livre para:

- Reportar bugs
- Sugerir novas funcionalidades
- Enviar pull requests

## 📞 Contato

Para dúvidas ou sugestões, entre em contato através do formulário no portfolio ou diretamente via email.

---

Desenvolvido com ❤️ usando Next.js, TypeScript e Tailwind CSS
