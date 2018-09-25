class Image < ApplicationRecord
  has_many :comments
  has_many :likes

  def like_count
    self.likes.count
  end
end
