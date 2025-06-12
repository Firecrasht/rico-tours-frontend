# Rico Tours - Frontend

Frontend moderno para el sistema de reservaciones de Rico Tour Vallarta. Desarrollado en React + Vite.

## 🚀 Cómo ejecutar localmente

### 1. Clona el repositorio
```bash
git clone https://github.com/tu-usuario/rico-tours-frontend.git
cd rico-tours-frontend
```

### 2. Instala dependencias
```bash
npm install
```

### 3. Crea archivo `.env` con la URL del backend
```env
VITE_API_URL=http://localhost:3000
```

### 4. Ejecuta en modo desarrollo
```bash
npm run dev
```

## 🌐 Despliegue en Render

1. Sube este repositorio a GitHub.
2. En [Render.com](https://render.com), crea un nuevo **Static Site**.
3. Configura:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
   - **Environment Variable:**
     - `VITE_API_URL=https://tu-api-backend.onrender.com`

## 🖼️ Imagen de Facebook

El logo de Rico Tour puede colocarse en:
```bash
/src/assets/logo.png
```
Y usarse así:
```jsx
<img src="/assets/logo.png" alt="Rico Tour Vallarta" />
```
