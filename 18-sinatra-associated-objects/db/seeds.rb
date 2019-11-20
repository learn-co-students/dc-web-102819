Book.destroy_all

GoogleBooks::Adapter.new("Roald Dahl").fetch_books
GoogleBooks::Adapter.new("J. R. R. Tolkien").fetch_books
