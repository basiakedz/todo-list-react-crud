import React, { useState } from "react";

export const Filters = (props) => {
  const { filters, setFilters } = props;

  return (
    <article>
      <h2>Filters</h2>

      <form
        style={{ display: "flex", gap: 20 }}
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <label htmFor="title">Title</label>

          <input
            required
            type="text"
            placeholder="Enter title you search"
            value={filters.title}
            onChange={(e) =>
              setFilters((prev) => {
                return { ...prev, title: e.target.value };
              })
            }
          />
        </div>

        <div>
          <label htmFor="priority">Priority</label>

          <select
            required
            value={filters.priority}
            onChange={(e) =>
              setFilters((prev) => {
                return { ...prev, priority: e.target.value };
              })
            }
          >
            <option value="all">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <label htmFor="status">Status</label>

          <select
            required
            value={filters.status}
            onChange={(e) =>
              setFilters((prev) => {
                return { ...prev, status: e.target.value };
              })
            }
          >
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="todo">Todo</option>
          </select>
        </div>
      </form>
    </article>
  );
};
