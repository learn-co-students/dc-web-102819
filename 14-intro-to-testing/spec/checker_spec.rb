require_relative "../palindrome.rb"

describe "PalindromeChecker" do 

    let (:checker) {PalindromeChecker.new}

    it "returns true when input is 'dad'" do 
        expect(checker.is_palindrome?('dad')).to be(true)
    end

    it "returns false when input is 'banana'" do 
        expect(checker.is_palindrome?('banana')).to be(false)
    end

    it "ignores case and returns true when input is 'Abba'" do 
        expect(checker.is_palindrome?('Abba')).to be(true)
    end

    it "ignores spaces and returns true when input is 'taco cat'" do 
        expect(checker.is_palindrome?('t  aco c      a t')).to be(true)
    end

    it "ignores punctuation and returns true for 'madam i\'m adam'" do

        expect(checker.is_palindrome?("madam i'm adam")).to be(true)
    end

    it "raises a TypeError when input is an array" do 
        expect {checker.is_palindrome?(["hi", "I'm", "an", "array"])}.to raise_error TypeError

    end
    
end