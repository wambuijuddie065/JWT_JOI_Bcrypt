 CREATE PROCEDURE insertUser( @id VARCHAR(80), @email VARCHAR(200), @password VARCHAR(200))
 AS
 BEGIN
 INSERT INTO UsersTable(id,email,password) VALUES(@id, @email, @password)
 END