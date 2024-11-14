Method to get bolded text at the end 
Assuming 

•	the system is windows 7 or higher

•	has minimum of 4gb RAM to run two virtual servers

•	has python and the pip package installer ready

•	has node installed 

•	bakery file is extracted to Desktop

The following steps will run the web app 

Open two terminals both from the bakery file directory ill refer to them as backend and frontend servers

On the backend server still in the bakery file Run {pip install -r requirements.txt}

On the frontend server {cd frontend} then {npm i} this will take abt 10mns and 150mb to complete fans might blow faster also 

All dependencies needed should be installed fully by this point 

Backend server {python manage.py runserver} only after this execute completely =>

Frontserver server {npm start } this should open a tab in the default browser

 to create an admin user run {python manage.py craetesuperuser} in the backend server 

Login 

For admin 

	Email : abbakar@gmail.com
 
	Pswd:khalid123
 
For user 
	Email:isa@gmail.com
 
	Pswd:qazxswedc
 
Also a new user can be created to test out user only functionality 

NB

All admin functionality are at the top right dropdown in an admin account 

Orders place will show in table but must be paid to show in barchart

Paypal was later used as it alone integrated with locally hosted web app 

Only the charge card options on the paypal powered gateway is supported in Nigeria 

 
•	python can be gotten from either Microsoft store or from official python website and installed , run python –v  to verify installation 

•	pip can be installed by running the following command in the terminal {curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py && python get-pip.py} or manually downloading the script and running it 

•	Node.js can be gotten from the official node website and installed 
