class ApplicationController < Sinatra::Base

    set :views, "app/views"
    set :method_override, true

    get "/" do 
        erb :home
    end
    
    get "/books" do 
        @books = Book.all
        erb :index
    end

    get "/books/new" do 
        # loads a blank form
        erb :new
    end

    post "/books" do 
        author = params[:author]
        title = params[:title]
        snippet = params[:snippet]
        book = Book.create(author: author, title: title, snippet: snippet)
        redirect "/books/#{book.id}"
    end

    get "/books/:id" do 
        book_id = params[:id]
        @book = Book.find(book_id)
        erb :show
    end

    patch "/books/:id" do
        book = Book.find(params[:id])
        author = params[:author]
        title = params[:title]
        snippet = params[:snippet]
        Book.update(title: title, snippet: snippet, author: author)
        redirect "/books/#{book.id}"
    end

    get "/books/:id/edit" do 
        @book = Book.find(params[:id])
        erb :edit
    end

    get "/funtimes/:first_number/:second_number/:third_number" do
        @first = params[:first_number].to_i
        @second = params[:second_number].to_i
        @third = params[:third_number].to_i
        erb :do_now
    end

    delete "/books/:id" do 
        # book = Book.find(params[:id])
        Book.delete(params[:id])
        redirect "/books"

    end


end
