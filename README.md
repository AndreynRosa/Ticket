# Ticket project.

<h1>API JAVA</h1>
Para build com maven basta ir para pasta API.
1 - Com docker.
Subindo serviço com dockers:

````
docker build -t api
````

para rodar run:
````
docker run -p 8080:8080 -d vote_api
````
2- Com docker-compose
````
docker-compose --build up
````
<h5>Testes </h5>
Para rodar os testes troque

````
    ddl-auto: update  
````
para
````
    ddl-auto:create
````
Certifiquese que que o H2 não está sendo usado. 

3- Via IDE.
Importe o projto como maven project. Rode ele como um projeto spring boot.
Conso estaja no Eclipse:

4- Abra http://localhost:8080

<h1>REACT APP </h1>
1- abra a pasta app

````
  cd app/
````

2 - rode o script:

````
npm install && npm start.
````

3 Abra http://localhost:3000
 
