class VisitsController < ApplicationController

  def new
    @visit = Visit.new()
  end

  def create
    @visit = Visit.create(strong_params)
    redirect_to user_path(@visit.user)
  end

  private

  def strong_params
    params.require(:visit).permit(:user_id, :location_id)
  end

end
