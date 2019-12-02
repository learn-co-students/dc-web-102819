class SnacksController < ApplicationController

  before_action :find_snack, only: [:show, :edit, :update, :destroy]
  
  def home
  end

  def index
    @snacks = Snack.all 
    render :index
  end

  def my_super_fun_page
  end

  def show
  end

  def new
    puts "hihihihihihihihihihihi"
    @snack = Snack.new
  end

  def create
    snack = Snack.create(snack_strong_params)
    redirect_to snack_path(snack)
  end

  def edit
  end

  def update
    @snack.update(snack_strong_params)
    redirect_to (snack_path(@snack))
  end

  def destroy
    @snack.delete
    redirect_to snacks_path
  end

  def find_snack
    @snack = Snack.find(params[:id])
  end

  private

  def snack_strong_params
    params.require(:snack).permit(:name, :calories, :deliciousness, :retailer_id)

  end

end
