require 'pry'

class PalindromeChecker

    def is_palindrome?(word)
        if !(word.is_a? String) 
            raise TypeError
        end
        word.downcase!
        word.gsub!(/[^a-z0-9]/i, "")

        # base case (when we stop)
        if word.length <= 1
            return true
        else
            if word[0] == word[-1]
                return is_palindrome?(word[1...-1])
            else
                return false
            end

        end
    end

end
