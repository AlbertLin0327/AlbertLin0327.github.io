# bun-react-template

To install dependencies:

```bash
bun install
```

To start a development server:

```bash
npm run dev
```

To build the project for production:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

To update blog posts dynamically:

```bash
npm run update
```

## Features

### Blog Post Generation
The `generate_posts.sh` script dynamically generates the `src/blog/posts.tsx` file by importing all Markdown files in the `blog` directory. This ensures that new blog posts are automatically included.

### API Tester Component
The `APITester` component allows you to test API endpoints directly from the browser. You can select the HTTP method, enter the endpoint, and view the response in real-time.

### Linting
Run the linter to check for code quality issues:

```bash
npm run lint
```

### Vite Configuration
The project uses Vite for fast builds and includes optimizations such as chunk splitting for vendor libraries.

## Configuration

### Vite Base URL
If you are deploying this project to a subdirectory (e.g., GitHub Pages), make sure to update the `base` option in `vite.config.ts` to match your deployment path. For example:

```javascript
export default defineConfig({
  base: '/your-subdirectory/',
  // ...existing code...
});
```

Replace `/your-subdirectory/` with the actual path where your site will be hosted. For example, I change it to `/albertlin.github.io/`.
