import React from "react";
// Define Issue type
type Issue = {
id: number;
status: string;
owner: string;
created: Date;
effort: number;
completionDate?: Date;
title: string;
priority: string;
};
// function for date format
function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
// IssueRow Props
type IssueRowProps = {
issue: Issue;
};
// IssueRow Component
class IssueRow extends React.Component<IssueRowProps> {
render() {
const { issue } = this.props;
return (
<tr>
<td>{issue.id}</td>
<td>{issue.status}</td>
<td>{issue.owner}</td>
<td>{issue.created.toDateString()}</td>
<td>{issue.effort}</td>
<td>
{issue.completionDate
? formatDate(issue.completionDate)
: ""}
</td>
<td>{issue.priority}</td>
<td>{issue.title}</td>
</tr>
);
}
}
// IssueTable Props
type IssueTableProps = {
issues: Issue[];
};
// IssueTable Component
class IssueTable extends React.Component<IssueTableProps> {
  render() {
    const issueRows = this.props.issues.map((issue) => (
      <IssueRow key={issue.id} issue={issue} />
    ));
    const borderedStyle: React.CSSProperties = {
      border: "1px solid silver",
      padding: 6,
    };
    return (
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={borderedStyle}>Id</th>
            <th style={borderedStyle}>Status</th>
            <th style={borderedStyle}>Owner</th>
            <th style={borderedStyle}>Created</th>
            <th style={borderedStyle}>Effort</th>
            <th style={borderedStyle}>Completion Date</th>
            <th style={borderedStyle}>Priority</th>
            <th style={borderedStyle}>Title</th>
          </tr>
        </thead>
        <tbody>{issueRows}</tbody>
      </table>
    );
  }
}
// IssueFilter Component (no props)
class IssueFilter extends React.Component {
render() {
return <div></div>;
}
}
// IssueAdd Component (no props)
class IssueAdd extends React.Component {
render() {
return <div>This is a placeholder for an Issue Add entry form.</div>;
}
}
// Sample Data
const issues: Issue[] = [
{
id: 1,
status: "Open",
owner: "Ravan",
created: new Date("2016-08-15"),
effort: 5,
title: "Error in console when clicking Add",
priority: "High",
},
{
id: 2,
status: "Assigned",
owner: "Eddie",
created: new Date("2016-08-16"),
effort: 14,
completionDate: new Date("2016-08-30"),
title: "Missing bottom border on panel",
priority: "Medium",
},
{
  id: 3,
  status: "New",
  owner: "Rhys",
  created: new Date("2026-03-31"),
  effort: 4,
  title: "Cancel button always disabled",
  priority: "Low",
}
]

function App() {
  return (
    <div>
      <h1>Issue Tracker</h1>
      <IssueFilter />
      <hr />
      <p>Total Issues: {issues.length}</p>
      <IssueTable issues={issues} />
      <hr />
      <IssueAdd />
    </div>
  );
}

export default App;