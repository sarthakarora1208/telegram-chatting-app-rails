require "graphql/rake_task"

namespace :graphql do
  task update_schema_docs: :environment do |t, args|
    GraphQL::RakeTask.new(
      schema_name: "ApiSchema",
      idl_outfile: "doc/graphql/schema.graphql",
      json_outfile: "doc/graphql/schema.json",
    )

    Rake::Task["graphql:schema:dump"].invoke
  end
end
