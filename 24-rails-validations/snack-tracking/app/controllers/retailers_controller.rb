class RetailersController < ApplicationController
  def index
     @retailers = Retailer.all
  end

  def show
    @retailer = Retailer.find(params[:id])
  end

  def new
    @retailer = Retailer.new
    @retailer.snacks.build
  end

  def create

    @retailer = Retailer.create(retailer_strong_params)
    if @retailer.valid?
      redirect_to retailer_path(@retailer)
    else
      @retailer.snacks.build
      render :new
    end
  end

  private

  def retailer_strong_params
    params.require(:retailer).permit(:name, :year_established,
        snacks_attributes: [:name, :calories, :deliciousness])
  end
end
