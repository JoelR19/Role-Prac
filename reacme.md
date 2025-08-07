
# Sistema de Gestión de Productos

Una aplicación web completa para la gestión de productos con sistema de autenticación y control de roles de usuario, desarrollada con tecnologías web modernas y JSON Server como backend simulado.

## 🚀 Características

-   **Sistema de Autenticación Completa**
    
    -   Registro de nuevos usuarios
    -   Inicio de sesión con validación
    -   Verificación de existencia de usuarios
    -   Persistencia de datos en base de datos JSON
-   **Control de Roles**
    
    -   **Administradores**: Pueden agregar, editar y eliminar productos
    -   **Usuarios**: Solo pueden visualizar productos
-   **Gestión de Productos**
    
    -   Dashboard interactivo
    -   CRUD completo para administradores
    -   Vista de catálogo para usuarios regulares

## 🛠️ Tecnologías Utilizadas

-   **Frontend**: HTML5, CSS3, JavaScript (ES6+)
-   **Backend**: JSON Server (API REST simulada)
-   **Herramientas de Desarrollo**: Vite
-   **Base de Datos**: Archivo JSON local

## 📁 Estructura del Proyecto

```
Role-prac/
├── src/
│   ├── dashboard/
│   │   ├── dashboard.html
│   │   └── dashboard.css
│   ├── login/
│   │   ├── login.html
│   │   └── login.css
│   └── register/
│       ├── register.html
│       └── register.css
├── db.json              # Base de datos JSON Server
├── package.json
├── vite.config.js
└── README.md

```

## ⚙️ Instalación y Configuración

### Prerrequisitos

-   Node.js (versión 14 o superior)
-   npm o yarn

### Pasos de Instalación

1.  **Clonar el repositorio**
    
    ```bash
    git clone https://github.com/JoelR19/Role-Prac.git
    cd role-prac
    
    ```
    
2.  **Instalar dependencias**
    
    ```bash
    npm install
    
    ```
    
3.  **Instalar JSON Server**
    
    ```bash
    npm install -g json-server
    # o como dependencia de desarrollo
    npm install --save-dev json-server
    
    ```
    
4.  **Configurar la base de datos inicial**
    
    Crear el archivo `db.json` con la estructura inicial:
    
    ```json
    {
      "usuarios": [
        {
          "id": 1,
          "nombre": "Admin",
          "email": "admin@admin.com",
          "password": "admin123",
          "rol": "admin"
        }
      ],
      "productos": [
        {
          "id": 1,
          "nombre": "Producto Ejemplo",
          "precio": 99.99,
          "descripcion": "Descripción del producto",
          "categoria": "Electrónicos"
        }
      ]
    }
    
    ```
    

## 🚀 Uso

### Iniciar el Servidor de Desarrollo

1.  **Ejecutar JSON Server**
    
    ```bash
    json-server --watch db.json --port 3000
    
    ```
    
2.  **Ejecutar el servidor de desarrollo de Vite**
    
    ```bash
    npm run dev
    
    ```
    
3.  **Acceder a la aplicación**
    
    -   Frontend: `http://localhost:5173`
    -   API JSON Server: `http://localhost:3000`

### Flujo de Usuario

1.  **Registro**: Los nuevos usuarios pueden crear una cuenta
2.  **Login**: Autenticación con email y contraseña
3.  **Dashboard**:
    -   **Admins**: Acceso completo para gestionar productos
    -   **Usuarios**: Vista de solo lectura del catálogo

## 📋 Funcionalidades Detalladas

### Sistema de Autenticación

-   Validación de formularios en tiempo real
-   Verificación de usuarios existentes
-   Gestión de sesiones con localStorage/sessionStorage
-   Redirección automática según el rol del usuario

### Gestión de Productos (Solo Admins)

-   **Crear**: Agregar nuevos productos al inventario
-   **Leer**: Visualizar lista completa de productos
-   **Actualizar**: Editar información de productos existentes
-   **Eliminar**: Remover productos del sistema

### Panel de Usuario

-   Visualización del catálogo de productos
-   Interfaz intuitiva y responsive
-   Filtros y búsqueda de productos

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Iniciar servidor de desarrollo

# Producción
npm run build        # Construir para producción
npm run preview      # Previsualizar build de producción

# Base de datos
json-server --watch db.json --port 3000  # Iniciar API mock

```

## 🛡️ Seguridad

-   Validación de entrada en frontend y backend
-   Control de acceso basado en roles
-   Sanitización de datos antes del almacenamiento

## 🎨 Diseño

-   Interfaz responsive para todos los dispositivos
-   Diseño moderno y accesible
-   Experiencia de usuario optimizada

## 📝 API Endpoints

### Usuarios

-   `GET /usuarios` - Listar usuarios
-   `POST /usuarios` - Crear usuario
-   `GET /usuarios/:id` - Obtener usuario específico
-   `PUT /usuarios/:id` - Actualizar usuario
-   `DELETE /usuarios/:id` - Eliminar usuario

### Productos

-   `GET /productos` - Listar productos
-   `POST /productos` - Crear producto (solo admins)
-   `GET /productos/:id` - Obtener producto específico
-   `PUT /productos/:id` - Actualizar producto (solo admins)
-   `DELETE /productos/:id` - Eliminar producto (solo admins)

## 🤝 Contribución

1.  Fork el proyecto
2.  Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3.  Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4.  Push a la rama (`git push origin feature/AmazingFeature`)
5.  Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 👤 Autor

[Joel]

-   GitHub: [@JoelR19](https://github.com/JoelR19)


----------

⭐ ¡Si quieres usarlo regalame una salchipapa!