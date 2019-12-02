# Rails Review

Goals:

+ Create Many to Many relationship through `rails generators` and ActiveRecord
  + Use `rails g resource` to create migration files and folders
+ Create all actions to support full CRUD for and outer model
  + Understand which _routes_ correspond to which feature
  + Understand which _action_ correspond to which feature
    | Feature                  | Verb   | Route            | Controller#Action |
    |------------------------- | ------ | ---------------- | ----------------- |
    | Show all the users       | GET    | /users           | Users#index       |
    | Show single user         | GET    | /users/:id       | Users#show        |
    | Display Create user form | GET    | /users/new       | Users#new         |
    | Create a new user        | POST   | /users           | Users#create      |
    | Display edit user form   | GET    | /users/:id/edit  | Users#edit        |
    | Edit an exisiting user   | PATCH  | /users/:id       | Users#update      |
    | Delete an exisiting user | DELETE | /users/:id       | Users#destroy     |
+ Update `routes.rb` for each feature
+ Build out controller actions
  + E.g. `Users#new` renders the `new.html.erb` file and provides the erb with a new User object
  + E.g. `Users#create` handles the user form submission through params and redirects to the `users_path(user)` aka "/users/:id"
+ Build method to handle `strong_params` and reuse it across different actions
+ Build method to get user from params before certain actions are run (e.g. understand what `before_action` is doing)
+ Create forms to handle user submissions
  + Work with `form_for`
  + Work with partial forms
+ Create Validations
  + Handle validation failures in the controller (e.g. re-render the `:new` erb if `@user.valid?` returns false)
  + Display error messages to Users
+ Create an association through a form
  + Add routes for `Visits` CREATE CRUD action
