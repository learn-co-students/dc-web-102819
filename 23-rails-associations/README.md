* Objectives
    - Review CRUD capabilities for single model
    - Create associations between two models
    - Use a dropdown select in a form
    - Create a model instance and its associated instances from a single form


* Task 
    * Build an index page for Retailer listing all retailers
    * Each item should link to show page
    * Show page should show a retailer's snacks
    * Snacks should link to their own show page

* Nested Form Steps
    * add `accepts_nested_attributes_for :snacks` to Retailer model
    * update form to include fields for Snack
    * add `@retailer.snacks.build` to `new` action of Retailer controller
    * add snack_attributes to Retailer strong params
