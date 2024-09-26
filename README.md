### HANAKO STOCKS

## Stock Management System 

    The Stock Management System is a web application developed to facilitate inventory tracking and management; designed for the [Hanako Store](https://hanako-store-1041.netlify.app). 

    The backend portion of this application provides a RESTful API server that enables users to manage their stock operations. The API supports functionality related to brands and purchases, among other inventory management features. Users can add, update, delete, and search for stock items. Additionally, they can filter stock items based on different categories and suppliers. The user authentication and authorization system assigns different user roles, each with specific levels of permissions. This ensures secure and effective collaboration among users.


![ERD](./ERD-hanakoStocks.png)


## Project Structure:

```
Stock Management System/
  ├── index.js          
  ├── .env
  ├── public
  ├    ┣ static
  ├    ┣ index.html   
  ├── src
      ┣ configs
      ┃ ┗ dbConnection.js
      ┃ ┣ swagger.json
      ┣ controllers
      ┃ ┣ auth.js
      ┃ ┣ brand.js
      ┃ ┣ category.js
      ┃ ┣ firm.js
      ┃ ┣ product.js
      ┃ ┣ purchase.js
      ┃ ┣ sale.js
      ┃ ┣ token.js
      ┃ ┗ user.js
      ┣ helpers
      ┃ ┣ sync.js
      ┃ ┣ sendMail.js
      ┃ ┗ paswordEncrypte.js
      ┣ middlewares
      ┃ ┣ authentication.js
      ┃ ┣ errorHandler.js
      ┃ ┣ logger.js
      ┃ ┣ permissions.js
      ┃ ┣ upload.js
      ┃ ┗ queryHandler.js
      ┣ models
      ┃ ┣ brand.js
      ┃ ┣ category.js
      ┃ ┣ firm.js
      ┃ ┣ product.js
      ┃ ┣ purchase.js
      ┃ ┣ sale.js
      ┃ ┣ token.js
      ┃ ┗ user.js
      ┣ routes
      ┃ ┣ auth.js
      ┃ ┣ brand.js
      ┃ ┣ category.js
      ┃ ┣ document.js
      ┃ ┣ firm.js
      ┃ ┣ index.js
      ┃ ┣ product.js
      ┃ ┣ purchase.js
      ┃ ┣ sale.js
      ┃ ┣ token.js
      ┃ ┗ user.js
      
  ├── swaggerAutogen.js
  ├── package.json   
  └── README.md       
```





*** to do list ***

- debug: errors on user controller will be fixed