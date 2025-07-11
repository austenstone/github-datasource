export enum QueryType {
  Code_Scanning = 'Code_Scanning',
  Commits = 'Commits',
  Issues = 'Issues',
  Contributors = 'Contributors',
  Tags = 'Tags',
  Releases = 'Releases',
  Pull_Requests = 'Pull_Requests',
  Pull_Request_Reviews = 'Pull_Request_Reviews',
  Labels = 'Labels',
  Repositories = 'Repositories',
  Organizations = 'Organizations',
  GraphQL = 'GraphQL',
  Milestones = 'Milestones',
  Packages = 'Packages',
  Vulnerabilities = 'Vulnerabilities',
  Projects = 'Projects',
  ProjectItems = 'ProjectItems',
  Stargazers = 'Stargazers',
  Workflows = 'Workflows',
  Workflow_Usage = 'Workflow_Usage',
  Workflow_Runs = 'Workflow_Runs',
  Copilot_Metrics = 'Copilot_Metrics',
}

export const DefaultQueryType = QueryType.Issues;

export enum PackageType {
  NPM = 'NPM',
  RUBYGEMS = 'RUBYGEMS',
  MAVEN = 'MAVEN',
  DOCKER = 'DOCKER',
  DEBIAN = 'DEBIAN',
  NUGET = 'NUGET',
  PYPI = 'PYPI',
}

export enum PullRequestTimeField {
  ClosedAt,
  CreatedAt,
  MergedAt,
  None,
}

export enum IssueTimeField {
  CreatedAt,
  ClosedAt,
  UpdatedAt,
}

export enum WorkflowsTimeField {
  CreatedAt,
  UpdatedAt,
}

export enum ProjectQueryType {
  ORG = 0,
  USER = 1,
}
