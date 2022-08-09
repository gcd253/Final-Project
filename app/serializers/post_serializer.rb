class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :user_id, :condition, :category
end
