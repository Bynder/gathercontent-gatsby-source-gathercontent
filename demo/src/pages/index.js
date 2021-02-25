import * as React from "react"
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import HeroImage from '../components/HeroImage';
import Breadcrumbs from '../components/Breadcrumbs';

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      {/*<NextSeo title="Course directory" />*/}
      {/*<HeroImage url="https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80" />*/}
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
      <div className="container mx-auto lg:grid lg:grid-cols-12 gap-16 py-8 px-4 xl:px-20 2xl:px-40">
        <div className="col-span-3 hidden lg:block">
          {/*<QuickNavigation folders={folders} />*/}
        </div>
        <div className="col-span-9 xl:col-start-4 xl:pl-2 2xl:pl-8">
          <h1 className="text-4xl lg:text-6xl mb-4 font-medium">
            Course directory
          </h1>
          <p className="text-xl lg:text-2xl mb-6 text-base-1">
            Join some of the best students from around the globe at one of the
            world's top universities. We’ve got the perfect course just for you.
          </p>
          {data.allGathercontentItems.group.map(({ edges, nodes }) => (
            <div key={nodes[0]?.folder?.id}>
              <h2
                className="text-3xl lg:text-4xl mb-3 font-medium id-header"
                id={nodes[0]?.folder?.slug}
              >
                {nodes[0]?.folder?.name}
              </h2>
              {edges.map((child) => (
                <div key={child.id}>
                  {/*<h3*/}
                  {/*  className="text-3xl lg:text-4xl mb-6 id-header"*/}
                  {/*  id={child.slug}*/}
                  {/*>*/}
                  {/*  {child.name}*/}
                  {/*</h3>*/}
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
        </div>
      </div>
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
    allGathercontentItems(sort: {fields: position}, filter: {itemContent: {taxonomy: {tags: {elemMatch: {label: {eq: "Promotion"}}}}}, status: {}}) {
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