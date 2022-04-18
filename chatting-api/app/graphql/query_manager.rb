class QueryManager
  def self.parse(query_string)
    yield(get_document(query_string))
  end

  def self.get_document(query_string)
    puts query_string
    cache_key = Base64.encode64(query_string)
    document = GraphQL.parse(query_string)
    document
  end
end
