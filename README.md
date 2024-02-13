# Laravel + React Js [Inertia Js]

### Requirements
- node v18.16.0
- php 8.2.5

## Installation

Clone the repo locally:

```bash
  git clone https://
  cd my-project
```
Install PHP dependencies:
```bash
  composer install
```
Install NPM dependencies:
```bash
  npm install
```
Build assets:
```bash
  npm run dev
```
Setup configuration:
```bash
  cp .env.example .env
```
Generate application key:
```bash
  php artisan key:generate
```
Create an SQLite database. You can also use another database (MySQL, Postgres), simply update your configuration accordingly.
```bash
```
Run database migrations:
```bash
  php artisan migrate
```  
Run database seeder:
```bash
  php artisan db:seed
```  
Run artisan server:
```bash
  php artisan serve
```  
Run node server:
```bash
  npm run dev
``` 