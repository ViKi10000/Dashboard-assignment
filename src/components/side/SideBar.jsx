import React from "react";
import logo from "../images/Logo.jpg";
import "./sidebar.css";
import { Link } from "react-router-dom";


function SideBar() {
  return (
    <aside id="sidebar" className="sidebar">
      <div id="logo">
        <a href="./">
          <img src={logo} alt="logo" className="rounded-circle" />
          <h2 d-flex >HR<span>Metrics</span></h2>
        </a>
      </div>

      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-stopwatch"></i>
            <span>Time & Attendance</span>
            <i class="bi bi-caret-down ms-auto"></i>
          </a>
          <ul
            id="components-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/sideNav">
                <i class="bi bi-dash"></i>
                <span>Attendance Board</span>
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#leave-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-airplane"></i>
            <span>Leave Management</span>
            <i class="bi bi-caret-down ms-auto"></i>
          </a>
          <ul
            id="leave-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/leaveStatus">
                <i class="bi bi-dash"></i>
                <span>Leave Status</span>
              </Link>
            </li>
           
          </ul>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#forms-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-hand-thumbs-up"></i>
            <span>Corporate-LMS</span>
            <i class="bi bi-caret-down ms-auto"></i>
          </a>
          <ul
            id="forms-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/certificate">
                <i class="bi bi-dash"></i>
                <span>ACERs</span>
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#tables-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-compass"></i>
            <span>My Page</span>
            <i class="bi bi-caret-down ms-auto"></i>
          </a>
          <ul
            id="tables-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/">
                <i class="bi bi-dash"></i>
                <span>Dashboards</span>
              </Link>
            </li>
            <li>
              <Link to="/holiday">
                <i class="bi bi-dash"></i>
                <span>Holidays</span>
              </Link>
            </li>
            <li>
              <Link to="/salarySlip">
                <i class="bi bi-dash"></i>
                <span>Payslip</span>
              </Link>
            </li>
            <li>
              <Link to="/auditLog">
                <i class="bi bi-dash"></i>
                <span>Audit Log</span>
              </Link>
            </li>
            <li>
              <Link to="/jD">
                <i class="bi bi-dash"></i>
                <span>Job Description</span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
