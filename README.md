# DevDesk-Backend

#### Auth

---

| Method | Endpoint                 | Information                                                  |
| ------ | ------------------------ | ------------------------------------------------------------ |
| POST   | `/api/register`          | User Registration                                            |
| POST   | `/api/login`             | User Login                                                   |
| GET    | `/api/users`             | Returns all users                                            |
| GET    | `/api/users/:id`         | Returns user by ID                                           |
| GET    | `/api/users/:id/tickets` | Returns assigned tickets if helper or created tickets if not |

#### Tickets

---

| Method | Endpoint                          | Information                                   |
| ------ | --------------------------------- | --------------------------------------------- |
| GET    | `/api/tickets`                    | Returns all tickets                           |
| GET    | `/api/tickets/:id`                | Returns ticket of id                          |
| POST   | `/api/tickets/`                   | Create a new ticket                           |
| PUT    | `/api/tickets/:id`                | Udates ticket with id                         |
| DELETE | `/api/tickets/:id`                | Deletes ticket with id                        |



#### Users

---

```js
{
  id: INTEGER; // added by database
  username: STRING; // required , unique - 128 max chars
  password: STRING; // required - 128 max chars
  email: STRING; // not required
  is_helper: BOOLEAN; // defaults to false if not specified
}
```

#### Tickets

---

```js
{
  id: INTEGER; // added by database
  title: STRING; // required
  description: TEXT; // required
  category: STRING; // not required
  resolved: BOOLEAN; // defaults to false
  assigned_to: INTEGER; // defaults to 0 
  created_at: TIMESTAMP; // The 
  created_by: INTEGER; // references user id - the users id that created this ticket!
}
```