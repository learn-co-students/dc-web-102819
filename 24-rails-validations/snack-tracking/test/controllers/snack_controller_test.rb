require 'test_helper'

class SnackControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get snack_index_url
    assert_response :success
  end

end
