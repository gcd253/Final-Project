class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :user_id, :condition, :category, :image

  belongs_to :user
end
