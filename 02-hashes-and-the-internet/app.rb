require 'rest-client'
require 'json'
require 'pry'

GOOGLE_BOOKS_API_BASE_URL = "https://www.googleapis.com/books/v1/volumes?q="

def welcome
    puts "Welcome to our book searching app"
end

def get_user_input
    puts "What would you like to search for?"
    search_terms = gets.chomp
    return search_terms
end

def build_url(search_terms)
    url = GOOGLE_BOOKS_API_BASE_URL + search_terms
    url.gsub!(" ", "+")
    return url
end

def make_request(url)
    # make a request to the Google API
    response = RestClient.get(url)
    return response
end

def json_response(response)
    # turn the response into json
    return JSON.parse(response)
end

def get_first_x_books(json, num_of_books)
    # get the first x books
    return json["items"][0..num_of_books]
end

def format_authors(authors)
    if authors.nil?
        authors = "Anonymous"
    else
        authors.join(" & ")
    end
end

def print_results(books)    
    # print title and author
    books.each do |book|
        title = book["volumeInfo"]["title"]
        authors = book["volumeInfo"]["authors"]
        authors = format_authors(authors)
        puts "#{title} by #{authors}"
        puts "****************"
    end
end


def run
    welcome
    search_terms = get_user_input
    url = build_url(search_terms)
    response = make_request(url)
    json = json_response(response)
    books = get_first_x_books(json, 10)
    print_results(books)
    
end

run
