class PostandimageSerializer
  include JSONAPI::Serializer
  attributes :id, :name, :image, :description, :condition, :category, :image_url
end
