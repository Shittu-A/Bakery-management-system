
Features of this program 

Login page 

![Screenshot (34)](https://github.com/user-attachments/assets/0e46a4d4-3807-4487-add2-14f5539d7795)

Sign up page 

![Screenshot (33)](https://github.com/user-attachments/assets/be23f700-4d76-42d5-a726-bfe1dd7c50ce)

product list page 

![Screenshot (35)](https://github.com/user-attachments/assets/61c97978-0c27-4b51-992d-4afd9264f826)

search function for the product list page 

![Screenshot (36)](https://github.com/user-attachments/assets/f379711c-e83d-4540-b191-4bddb29967a3)

selected item page 

![Screenshot (41)](https://github.com/user-attachments/assets/9fff6ad5-0360-42d6-9de1-f92e35d9c83b)

shopping cart page 

![Screenshot (42)](https://github.com/user-attachments/assets/b1004d7e-bd3a-4c98-a4c7-bf97a49dff02)

Entering Shipping Address 

![Screenshot (43)](https://github.com/user-attachments/assets/35ab9ef2-dfe2-45e4-bfb3-9c8a4599086a)

Choosing payment method although its only one for now 

![Screenshot (44)](https://github.com/user-attachments/assets/3ee03e8b-d0f0-4af0-9034-c325a338855c)

confirmation page b4 proceeding to payment 

![Screenshot (45)](https://github.com/user-attachments/assets/4aea3b08-0ba0-4311-be26-4bd195bbc670)

final payment page 

![Screenshot (47)](https://github.com/user-attachments/assets/3de81deb-0439-4cc2-87eb-65fe678692d0)

Create or Edit product page for Admin only 

![Screenshot (37)](https://github.com/user-attachments/assets/ce7a8d2e-e3a5-4ba6-876a-376263121f8e)

All users order history and summary barchart for admin only 

![Screenshot (38)](https://github.com/user-attachments/assets/2e218ca5-88ab-4b83-85ec-685524d4a897)

mark as delivered page for admin only

![Screenshot (39)](https://github.com/user-attachments/assets/517ddfd4-7c68-44cb-bbe0-aa6a9d5e8f32)


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

	Email : 
 
	Pswd:
 
For user 
	Email:isa@gmail.com
 
	Pswd: qazxswedc
 
Also a new user can be created to test out user only functionality 

NB

All admin functionality are at the top right dropdown in an admin account 

Orders place will show in table but must be paid to show in barchart

Paypal was later used as it alone integrated with locally hosted web app 

Only the charge card options on the paypal powered gateway is supported in Nigeria 

 
•	python can be gotten from either Microsoft store or from official python website and installed , run python –v  to verify installation 

•	pip can be installed by running the following command in the terminal {curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py && python get-pip.py} or manually downloading the script and running it 

•	Node.js can be gotten from the official node website and installed 

