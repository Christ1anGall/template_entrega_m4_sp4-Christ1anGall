CREATE TABLE Categories(
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL UNIQUE

);


CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE Products(
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(200) NOT NULL,
  price DECIMAL(8,2) NOT NULL,
  category_id INTEGER,

FOREIGN KEY (category_id) REFERENCES Categories(id) 
);


