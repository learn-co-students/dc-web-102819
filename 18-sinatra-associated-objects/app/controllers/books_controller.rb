class BooksController < Sinatra::Base

    set(:views, "app/views/books")
    set(:method_override, true)

    get "/books" do 
        @books = Book.all
        erb :index
    end

    get "/books/new" do 
        # loads a blank form
        erb :new
    end

    post "/books" do 
        # process the form
        author_id = params[:author_id]
        author = Author.find(author_id)
        title = params[:title]
        snippet = params[:snippet]
        book = Book.create(author: author,
                           title: title,
                           snippet: snippet)
        redirect "/books/#{book.id}"
    end

    get "/books/:id" do 
        book_id = params[:id]
        @book = Book.find(book_id)
        erb :show
    end

    patch "/books/:id" do
        book = Book.find(params[:id])

        author_name = params[:author_name]
        author = Author.find_or_create_by(name: author_name)
        title = params[:title]
        snippet = params[:snippet]
        book.update(title: title, snippet: snippet, author: author)
        redirect "/books/#{book.id}"
    end

    get "/books/:id/edit" do 
        # gets filled-in edit form
        @book = Book.find(params[:id])
        erb :edit
    end

    delete "/books/:id" do 
        # book = Book.find(params[:id])
        Book.delete(params[:id])
        redirect "/books"

    end

end