# Estructura del Proyecto

## `src` (fuente principal)
- Esta carpeta contiene todo el código fuente de tu aplicación.

## `config`
- `envs`: Configuraciones específicas del entorno, como variables de entorno.
- `validators`: Validadores o esquemas para las configuraciones.
- `adapter`: Adaptadores como bcrypt y jwt.
- `index.ts`: Archivo principal que exporta funcionalidades clave de la carpeta.

## `database`
- `mongoDb`:
  - `mongoDbConfig.ts`: Configuración de MongoDB.
   - `moodel`:Modelos
       - `userModel.ts`: Modelo de usuario para interactuar con la base de datos.

## `domain`
- `datasources`:
  - `auth.datasource.ts`: Interfaz abstracta que define cómo interactuar con fuentes de datos relacionadas con la autenticación.
- `repositories`:
  - `auth.repository.ts`: Interfaz abstracta que define operaciones específicas de autenticación.
- `dtos`:
  - `loginUser.dto.ts`: Objeto de transferencia de datos para la autenticación.
  - `registerUser.dto.ts`: Objeto de transferencia de datos para el registro.
- `entities`:
  - `user.entity.ts`: Define la entidad de usuario.
- `errors`:
  - `authError.ts`: Archivo que podría contener errores específicos de autenticación.
- `use-cases`:
- `index.ts`: Archivo principal que exporta funcionalidades clave de la carpeta.

## `infrastructure`
- `datasources`:
  - `auth.datasource.impl.ts`: Implementación concreta de la interfaz `auth.datasource`.
- `mappers`:
  - `user.mapper.ts`: Archivo que podría contener funciones o clases para mapear datos entre capas.
- `repositories`:
  - `auth.repository.impl.ts`: Implementación concreta de la interfaz `AuthRepository`.
- `index.ts`: Archivo principal que exporta componentes clave de la capa de infraestructura.

## `presentation`
- `auth`:
  - `controller.ts`: Archivo que podría contener la lógica del controlador relacionado con la autenticación.
  - `routes.ts`: Archivo que podría definir rutas específicas de autenticación.
- `middleware`:
  - `auth.middleware.ts`: Archivo que podría contener el middleware relacionado con la autenticación.
- `routes.ts`: Configuración de las rutas principales.
- `server.ts`: Punto de entrada para configurar y ejecutar el servidor.

## `app.ts`
- Punto de entrada principal de tu aplicación. Aquí podrías configurar el servidor, definir rutas y realizar otras tareas iniciales necesarias para que tu aplicación funcione correctamente.


##`Resumen tema`
Esta estructura sigue los principios de la arquitectura limpia, donde cada capa tiene una responsabilidad clara y las dependencias fluyen en una dirección específica. La modularidad y la separación de preocupaciones facilitan el mantenimiento y la evolución del código a medida que tu aplicación crece. Recuerda ajustar esta estructura según las necesidades específicas de tu proyecto y las prácticas de desarrollo de tu equipo.



