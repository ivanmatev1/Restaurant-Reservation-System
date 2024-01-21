# Restaurant Reservation system backend
Училищен проект, представляващ много "базов" прототип за автоматизиране на процеса за резервиране на маси в рестораните. Могат да се правят резервации на свободни маси, 
като в последвствие тези резервации биват или потвърдени или отхвърлени от персонала на заведението. Всеки потребител има достъп до всички собствени резервации (сегашни и минали), докато служителите
имат достъп да абсолютно всички резервации в историята на приложението.
## Installation
1. Инсталиране на проекта: `git clone https://github.com/your-username/your-project.git`
2. Ще трябва да бъда инсталирани и някой dependencies:  
  2.1. `npm install nodemon`  
  2.2. `npm install "express@>=5.0.0-beta.1" --save`  
  2.3. `npm install dotenv`  
  2.4. `npm install mysql2`
## Running
За да бъде run-нат проекта използваме комадата `docker-compose up`  
Сега имаме достъп до приложението на `http://localhost:3050`