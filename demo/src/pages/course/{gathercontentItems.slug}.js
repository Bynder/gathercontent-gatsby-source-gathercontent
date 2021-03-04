import * as React from "react"
import { graphql } from 'gatsby';
import CourseContent from '../../components/CourseContent';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Layout } from '../../components/Layout';
import { HeroImage } from '../../components/HeroImage';
import { Wrapper } from '../../components/layout/Wrapper';
import { Main } from '../../components/layout/Main';
import { PageIntro } from '../../components/LandingPageContent';

function CoursePage({ data }) {
  const department = data.gathercontentItems.folder;
  const { itemContent, name, slug } = data.gathercontentItems;
  const breadcrumbItems = [{
    id: department.id,
    to: `/courses/${department.slug}`,
    name: department.name
  }, {
    id: data.gathercontentItems.id,
    to: `/course/${slug}`,
    name: name,
  }];

  return (
    <Layout siteMetadata={itemContent.metadata}>
      <HeroImage url={itemContent.courseDescription?.photoOfCourse[0]?.optimisedImageUrl} />
      <Breadcrumbs items={breadcrumbItems} />
      <Wrapper>
        <Main>
          <PageIntro pageHeading={name} />
          <CourseContent content={itemContent} />
        </Main>
      </Wrapper>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String){
    gathercontentItems(slug: {eq: $slug}) {
      id
      name
      slug
      itemContent {
        courseDescription {
          taughtBy
          prerequisites
          note
          courseSummary
          coreRequisites
          photoOfCourse {
            optimisedImageUrl
          }
        }
        courseData {
          weeks
          totalSeats
          hours
          credits
          courseName
          courseCode
        }
        metadata {
          title
          keywords
          description
        }
      }
      folder {
        id
        name
        slug
      }
    }
  }
`

export default CoursePage
