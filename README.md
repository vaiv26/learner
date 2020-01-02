# dockerImplementation
I created a Restful webservice using Node js and json database that runs in a docker whose image id is in this repository in package.
The data model is:


The database consists of four different car companies (http://localhost:8000/companies).


Each car company in the database is defined by its manufactured cars, the name of the company and the company id (http://localhost:8000/companies/(1 – 4)).


Each company has four of its manufactured cars in the database (http://localhost:8000/companies/(1 – 4)/cars).


Each car is further defined by its specifications like Engine, Transmission, Drivetrain and price (http://localhost:8000/companies/(1 – 4)/cars/(1 - 4)).


The data returned n the web service routes is in json form .
