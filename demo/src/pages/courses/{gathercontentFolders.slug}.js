import * as React from "react"
import { graphql, Link } from 'gatsby';
import { Layout } from '../../components/Layout';
import { Main } from '../../components/layout/Main';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Wrapper } from '../../components/layout/Wrapper';
import { PageIntro } from '../../components/LandingPageContent';
import { HeroImage } from '../../components/HeroImage';

function CoursesPage({ data }) {
  const department = data.gathercontentItems;
  const pageContent = department.itemContent.content;
  const breadcrumbItems = [{
    id: department.id,
    to: `/courses/${department.slug}`,
    name: pageContent.pageHeading,
  }];

  return (
    <Layout siteMetadata={department.itemContent.metadata}>
      <HeroImage url={pageContent.heroImage[0]?.optimisedImageUrl} />
      <Breadcrumbs items={breadcrumbItems} />
      <Wrapper>
        <Main>
          <PageIntro
            pageHeading={pageContent.pageHeading}
            intro={pageContent.description}
          />
          <ul className="mb-8">
            {data.allGathercontentItems.nodes.map((course) => (
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
        </Main>
      </Wrapper>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String) {
    gathercontentItems(slug: {eq: $slug}) {
      id
      name
      slug
      itemContent {
        content {
          description
          pageHeading
          heroImage {
            optimisedImageUrl
          }
        }
        metadata {
          title
          keywords
          description
        }
      }
    }
    allGathercontentItems(filter: {template: {slug: {eq: "course-record"}}, folder: {slug: {eq: $slug}}, status: {slug: {eq: "live-and-ready-for-review"}}}) {
      nodes {
        id
        name
        slug
        itemContent {
          courseData {
            courseName
            courseCode
            credits
            hours
            totalSeats
            weeks
          }
        }
      }
    }
  }
`

export default CoursesPage
