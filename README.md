# Ticket project.

<h1>API JAVA</h1>
Como buildar e subir o Projeto 
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


3- Via IDE.
Importe o projto como maven project. Rode ele como um projeto spring boot.
Conso estaja no Eclipse:

4- Abra http://localhost:8080
![Api](https://user-images.githubusercontent.com/36086251/88590778-a5b07000-d031-11ea-9e82-29fc2f67178a.png)

Pronto o servidor está de pé. </br>
Na imagens consta o senguinde endereço http://192.168.99.100:8080/ => pois uso ToolBox. Normalmente Docker libera no localhost.


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


![FrontEnd](https://user-images.githubusercontent.com/36086251/88590344-f1164e80-d030-11ea-85a7-4869f07da696.png)

 
