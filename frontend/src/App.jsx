
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/tasks")
      .then((response) => {
        if (!response.ok) throw new Error("Could not load tasks");
        return response.json();
      })
      .then((data) => setTasks(data))
      .catch(() => setError("Could not connect to TaskFlow API"))
      .finally(() => setLoading(false));
  }, []);

  const completed = tasks.filter(
    (task) => task.status === "completed"
  ).length;

  const inProgress = tasks.filter(
    (task) => task.status === "in_progress"
  ).length;

  const pending = tasks.filter(
    (task) => task.status === "pending"
  ).length;

  const stats = [
    { label: "Total Tasks", value: tasks.length, icon: "▤" },
    { label: "In Progress", value: inProgress, icon: "◷" },
    { label: "Completed", value: completed, icon: "✓" },
    { label: "Pending", value: pending, icon: "○" },
  ];

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">T</div>
          <span>TaskFlow</span>
        </div>

        <p className="nav-heading">WORKSPACE</p>

        <nav>
          <a className="nav-link active" href="#dashboard">
            <span>▦</span> Dashboard
          </a>
          <a className="nav-link" href="#tasks">
            <span>☷</span> My Tasks
          </a>
          <a className="nav-link" href="#projects">
            <span>◫</span> Projects
          </a>
          <a className="nav-link" href="#team">
            <span>♧</span> Team
          </a>
        </nav>

        <div className="sidebar-bottom">
          <div className="profile-avatar">A</div>
          <div>
            <strong>Admin User</strong>
            <small>Administrator</small>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <span className="breadcrumb">Workspace / Dashboard</span>
          </div>
          <div className="topbar-right">
            <span className="today">My Workspace</span>
            <div className="profile-avatar small">A</div>
          </div>
        </header>

        <section className="welcome">
          <div>
            <p className="eyebrow">OVERVIEW</p>
            <h1>Good day, Admin 👋</h1>
            <p>Here's what's happening with your projects today.</p>
          </div>
          <button className="primary-button">+ New Task</button>
        </section>

        <section className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <div className="stat-top">
                <span>{stat.label}</span>
                <span className="stat-icon">{stat.icon}</span>
              </div>
              <h2>{stat.value}</h2>
              <small>Across your workspace</small>
            </div>
          ))}
        </section>

        <section className="tasks-section" id="tasks">
          <div className="section-header">
            <div>
              <h2>Recent Tasks</h2>
              <p>Keep track of what's happening across your projects.</p>
            </div>
            <button className="secondary-button">View all tasks</button>
          </div>

          {loading && <p className="message">Loading your tasks...</p>}
          {error && <p className="error">{error}</p>}

          {!loading && !error && (
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>TASK</th>
                    <th>PROJECT</th>
                    <th>ASSIGNED TO</th>
                    <th>PRIORITY</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task) => (
                    <tr key={task.id}>
                      <td className="task-title">{task.title}</td>
                      <td>{task.project_name}</td>
                      <td>{task.assigned_to || "Unassigned"}</td>
                      <td>
                        <span className={`priority ${task.priority}`}>
                          {task.priority}
                        </span>
                      </td>
                      <td>
                        <span className={`status ${task.status}`}>
                          {task.status.replace("_", " ")}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {tasks.length === 0 && (
                    <tr>
                      <td colSpan="5" className="empty">
                        No tasks found yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
