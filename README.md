# Endpoints

## Ejercicio 1: Servicio simulado (Mock)

Devuelve la lista de los repos simulados

  ```
  http://localhost:3000/getRepos
  ```

Devuelve la lista de los repos simulados por Id

  ```
  http://localhost:3000/getRepos/1
  ```


## Ejercicio 2: Administración de organizaciones

Crea una nueva organizacion

  ```
  http://localhost:3000/createOrganization
  ```

Devuelve una lista de las organizaciones

  ```
  http://localhost:3000/getOrganizations
  ```

Devuelve una lista de la organizacion por Id

  ```
  http://localhost:3000/getOrganization/62d18ff12b64afe34cb3892d
  ```

Actualiza informacion de la organizacion

  ```
  http://localhost:3000/updateOrganization/62d1926efad52439cb1ad250
  ```

Elimina una organizacion

  ```
  http://localhost:3000/deleteOrganization/62d1926efad52439cb1ad250
  ```

## Ejercicio 3: Servicio para obtener las métricas de un repositorio

En los siguentes endpoints podrá crear y visualizar las tribus

  ```
  http://localhost:3000/getTribes
  ```

  ```
  http://localhost:3000/createTribe
  ```

En los siguentes endpoints podrá crear y visualizar los repositorios

  ```
  http://localhost:3000/createRepository
  ```

  ```
  http://localhost:3000/getRepository
  ```

###  Obtener métricas de repositorios por tribu

  ```
  http://localhost:3000/getMetric/62d47c2d4da11e87cb72f6af
  ```

Con el fin de obtener las metricas de los repositorios, en el siguiente endpoint las podrá crear

  ```
  http://localhost:3000/setMetrics
  ```


## Ejercicio 4: Generar reporte CSV métricas repositorio

Devuelve el archivo CSV con las metricas del repositorio

  ```
  http://localhost:3000/getCSV/62d5811280c162ae6cb5c04b
  ```
