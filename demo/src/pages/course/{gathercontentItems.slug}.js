import * as React from "react"
import { graphql, Link } from 'gatsby';
import Breadcrumbs from '../../components/Breadcrumbs';
import Layout from '../../components/Layout';
import CourseContent from '../../components/CourseContent';
import HeroImage from '../../components/HeroImage';
// import QuickNavigation from '../../components/QuickNavigation';

const CoursePage = ({ data }) => {
  const { itemContent, ...course } = data.gathercontentItems;
  console.log(itemContent);
  return (
    <Layout>
      {/*<NextSeo title="Course directory" />*/}
      <HeroImage url={itemContent.courseDescription.photoOfCourse[0].optimisedImageUrl} />
      <Breadcrumbs
        items={[
          {
            name: 'Study',
            href: '/#',
          },
          {
            name: 'Undergraduate study',
            href: '/#',
          },
          {
            name: 'Course directory',
            href: '/',
          },
        ]}
      />
      <div className="container px-4 xl:px-20 2xl:px-40 mx-auto lg:grid lg:grid-cols-12 gap-16 py-8">
        <div className="col-span-3 hidden lg:block">
          {/*<QuickNavigation folders={folders} currentFolder={item.folder_uuid} />*/}
        </div>
        <div className="col-span-9 xl:col-start-4 xl:pl-2 2xl:pl-8">
          <h1 className="text-6xl mb-4 font-medium">{course.name}</h1>
          <CourseContent content={itemContent} />
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String){
    gathercontentItems(slug: {eq: $slug}) {
      id
      name
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
      }
    }
  }
`
export default CoursePage
