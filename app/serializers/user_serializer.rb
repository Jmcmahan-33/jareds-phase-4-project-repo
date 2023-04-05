class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :age, :username, :password_digest
end
