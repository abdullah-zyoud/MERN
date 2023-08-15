const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;
const createProduct = () => {
    const createUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.string.uuid(),
    };
    return createUser;
};
    
// const newFakeProduct = createProduct();
// console.log(newFakeProduct);

const createCompany = () => {
    const company = {
        
        _id: faker.string.uuid(),
        name : faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country(),
          },
        };
        return company;
};
const newFakeCompany = createCompany();
console.log(newFakeCompany);

app.get("/api/users/new", (req, res) => {
    const newUser = createProduct();
    res.json(newUser);
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
  });

app.get("/api/user/company", (req, res) => {
    const newUser = createProduct();
    const newCompany = createCompany();
    res.json({user : newUser, company : newCompany});
  });

  