# Zumra test

## installation

- install nodejs, Mysql and npm

- `cd zumra/`

- create .env file includes JWT_SECRET

- `npm install`

- `npx sequelize-cli db:create`

- `npx sequelize-cli db:migrate`

- `npx sequelize-cli db:seed:all`


- Start server by `npm start`

- Run the tests by `npm test`

## Structure
Build with MVC strcuture

## Endpoints
You can use the crud operations for `/vouchers` endpoint

While you try to add a new voucher you should use this schema
`
{
  "code": "the voucher code",
  "userId": "1" // existing user
}
`

## Author

Moamen Abdelwahed 

Senior Software Engineer

[linkedin](https://www.linkedin.com/in/moamen-abdelwahed/)
