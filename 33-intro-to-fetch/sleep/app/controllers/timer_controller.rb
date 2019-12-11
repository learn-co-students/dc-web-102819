class TimerController < ApplicationController
  def show
    arr = ["Did you hear about the restaurant on the moon? Great food, no atmosphere.",
    "What do you call a fake noodle? An impasta.",
    "How many apples grow on a tree? All of them.",
    "Want to hear a joke about paper? Never mind it's tearable.",
    "I just watched a program about beavers. It was the best dam program I've ever seen.",
    "Why did the coffee file a police report? It got mugged.",
    "Where does a penguin keep his money?  In a snow bank.",
    "Dad, did you get a haircut? No I got them all cut.",
    "Dad, can you put my shoes on? No, I don't think they'll fit me.",
    "Why did the scarecrow win an award? Because he was outstanding in his field."
  ]
    sleep(params[:num].to_i)
    render json: {
      results: {
        message: arr[rand(10)],
        seconds: params[:num].to_i
      }
    }
  end
end
