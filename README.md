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
   
5. Cree una task colocando titulo y descripcion y dar click en el boton "Crear tarea", se creara y se mostrara en la lista de abajo
6. En la lista encontrara la informacion de la task y dos botones, uno para editar y otro la eliminar.
7. Al dar click en el boton editar, se mostraran los campos con el titulo, descripcion y si esta completa o no, por medio de un checkbox el cual puede cambiar para decir si esta completa o no
   De click en el boton editar para confirmar los cambios o click en el boton volver para ver la lista otra ves.
9. Al dar click en el boton eliminar o borrar, se mostraran los campos con el titulo, descripcion y si esta completa o no y un "aviso" sobre si esta seguro de borrar
   De click en el boton borrar para confirmar los cambios o click en el boton volver para ver la lista otra ves.
