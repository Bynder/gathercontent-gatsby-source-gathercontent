import { graphql, Link, useStaticQuery } from 'gatsby';
import * as React from 'react';

function DepartmentNav() {
  const data = useStaticQuery(graphql`
    {
      allGathercontentItems(filter: {template: {slug: {eq: "course-record"}}}) {
        group(field: folder___slug) {
          nodes {
            folder {
              name
              id
              slug
            }
          }
        }
      }
    }
  `)

  const departmentFolders = data.allGathercontentItems.group.reduce((acc, group) => {
    const course = group.nodes[0];

    return {
      ...acc,
      [course.folder.slug]: course.folder,
    }
  }, {});

  return (
    <>
      {Object.values(departmentFolders).map((department) => (
          <Link
            key={department.id}
            to={`/courses/${department.slug}`}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium text-gray-500 transition-colors hover:text-accent-1"
          >
            {department.name}
          </Link>
      ))}
    </>
  )
}

export { DepartmentNav }