# application_controller.rb

```rb
def ApplicationController < Sinatra::Base

    get "/funtimes/:first_number/:second_number/:third_number" do 
        @first = params[:first_number]
        @second = params[:second_number]
        @third = params[:third_number]
        erb :do_now
    end

end
```

# do_now.erb
```
<% @third.to_i.times do %>
    <div>
        <h1><%= @first.to_i * 10 %></h1>
        <h2><%= @second.to_i * 100 %></h2>
    </div>
<% end %>

```

# QUESTION
If the user navigates to "mywebsite.com/funtimes/1/2/3" what will appear on the screen?

