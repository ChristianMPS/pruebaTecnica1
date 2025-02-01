## Getting Started

Este proyecto sirve para hacer el manejo de "tasks", donde se podra crear, actualizar, borrar y ver todas las "tasks" que tengamos.

1. Crear la base de datos, a continuacion se mostrara el script que puedes usar:

   CREATE TABLE tasks (
   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
   title VARCHAR(100) NOT NULL,
   description TEXT,
   completed BOOLEAN DEFAULT FALSE,
   created_at TIMESTAMP DEFAULT now()
   );

   Se uso supabase para este proyecto.

2. Crear un archivo en el root del proyecto llamado .env.local

   en el cual colocaras las variables:

   # Database

   NEXT_PUBLIC_SUPABASE_URL="Colocar la url del database"
   SUPABASE_SERVICE_ROLE_KEY="Colocar el rol key database"

   las encontraras al darle click en "Connect" y luego la opcion "App frameworks".

3. Correr el comando: npm install

4. Correr el comando: npm run dev.

   Te mostrara algo como:

   - Local: http://localhost:3000
   - Network: http://192.168.1.2:3000
   - Environments: .env.local

   usa tu Local al dar click.
