import * as React from "react"
import { graphql, Link, useStaticQuery } from 'gatsby';

const QuickNavigation = () => {
  const data = useStaticQuery(graphql`
    {
      allGathercontentItems(filter: {template: {slug: {eq: "course-record"}}}) {
        group(field: folder___slug) {
          nodes {
            id
            name
            slug
            folder {
              name
              id
              slug
              childrenGathercontentItems {
                slug
                name
                id
              }
            }
          }
        }
      }
    }
  `)

  const departments = data.allGathercontentItems.group;

  return (
    <div className="bg-neutral-1 p-3 rounded-md sticky top-4 border border-gray-200">
      <h4 className="font-medium uppercase text-xs mb-3 text-base-1">
        Quick Navigation
      </h4>

      <h3 className="text-xl font-medium mb-3">Departments</h3>
      {departments.map(({ nodes }) => {
        const department = nodes[0].folder;

        return (
          <ul key={department.id} className="mb-2">
            <p className="font-medium">
              <Link
                to={`/courses/${department.slug}`}
                className="transition-colors hover:text-accent-1"
                title={department.name}
              >
                {department.name}
              </Link>
            </p>

            {department.childrenGathercontentItems?.map((course) => (
              <li key={course.id} className="whitespace-nowrap overflow-ellipsis overflow-hidden">
                <Link
                  to={`/course/${course.slug}`}
                  className="transition-colors hover:text-accent-1"
                  title={course.name}
                >
                  <span className="text-base-1">↳</span> {course.name}
                </Link>
              </li>
            ))}
          </ul>
        )
      })}
    </div>
  );
}

export default QuickNavigation;
