INSERT INTO burgers (firstname, lastname, username, email, pswd, status, createdAt) 


VALUES ('laurie', 'aaronson', "lauriea@mac.com', lauriea@mac.com, 505050, true, 07012018);




id INT NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  pswd VARCHAR(255) NOT NULL,
  status BOOLEAN,
  PRIMARY KEY (id),
  createdAt DATE