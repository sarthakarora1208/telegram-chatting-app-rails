class GraphqlController < ApplicationController
  def run
    query_string = params[:query]
    query_variables = ensure_hash(params[:variables])

    result = QueryManager.parse(query_string) do |document|
      ApiSchema.execute(
        document: document,
        variables: query_variables,
        context: {},
      )
    end

    render json: result
  end

  private

  def ensure_hash(query_variables)
    if query_variables.blank?
      {}
    elsif query_variables.is_a?(String)
      JSON.parse(query_variables)
    else
      query_variables
    end
  end
end
