import * as React from "react"
import { graphql, Link } from 'gatsby';
import { Layout } from '../components/Layout';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Wrapper } from '../components/layout/Wrapper';
import { Main } from '../components/layout/Main';
import { PageIntro } from '../components/LandingPageContent';
import { HeroImage } from '../components/HeroImage';

function IndexPage({ data }) {
  const pageContent = data.gathercontentItems.itemContent.content;

  return (
    <Layout pageContent={data.gathercontentItems.itemContent}>
      <HeroImage url={pageContent.heroImage[0]?.optimisedImageUrl} />
      <Breadcrumbs />
      <Wrapper>
        <Main>
          <PageIntro
            pageHeading={pageContent.pageHeading}
            intro={pageContent.description}
          />
          {data.allGathercontentItems.group.map(({ edges, nodes }) => (
            <div key={nodes[0]?.folder?.id}>
              <Link
                to={`/courses/${nodes[0]?.folder?.slug}`}
                className="transition-colors hover:text-accent-1"
              >
                <h2
                  className="text-3xl lg:text-4xl mb-6 id-header"
                  id={nodes[0]?.folder?.slug}
                >
                  {nodes[0]?.folder?.name}
                </h2>
              </Link>
              {edges.map((child) => (
                <div key={child.id}>
                  <div>
                    <div className="grid grid-cols-12 text-left font-medium px-4 uppercase text-base-1">
                      <div className="col-span-6 text-xs">Course Name</div>
                      <div className="col-span-2 text-xs">Credits</div>
                      <div className="col-span-2 text-xs">Hours</div>
                      <div className="col-span-2 text-xs">Weeks</div>
                    </div>
                    <ul className="mb-8">
                      {edges.map(({ node: course }) => (
                          <li key={course.id} className="">
                            <Link to={`/course/${course.slug}`} className="grid grid-cols-12 border my-2 py-3 px-4 rounded-lg transition-shadow hover:shadow-md">
                              <div className="col-span-6 truncate pr-4">
                                {course.itemContent.courseData.courseName}
                              </div>
                              <div className="col-span-2 text-base-1">
                                {course.itemContent.courseData.credits}
                              </div>
                              <div className="col-span-2 text-base-1">
                                {course.itemContent.courseData.hours.replace(' hours', '')}
                              </div>
                              <div className="col-span-2 text-base-1 truncate">
                                {course.itemContent.courseData.weeks}
                              </div>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Main>
      </Wrapper>

      <style jsx>{`
        .id-header {
          scroll-margin-top: 1.5rem;
        }
      `}</style>
    </Layout>
  );
}

export const query = graphql`
  {
    gathercontentItems(slug: {eq: "homepage"}) {
      id
      itemContent {
        content {
          description
          pageHeading,
          heroImage {
            optimisedImageUrl
          }
        }
      }
    }
    allGathercontentItems(sort: {fields: position}, filter: {status: {slug: {eq: "live-and-ready-for-review"}}, itemContent: {taxonomy: {tags: {elemMatch: {label: {eq: "Promotion"}}}}}}) {
      group(field: folder___id) {
        edges {
          node {
            id
            slug
            itemContent {
              courseData {
                courseName
                credits
                hours
                weeks
              }
            }
          }
        }
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
`
export default IndexPage
