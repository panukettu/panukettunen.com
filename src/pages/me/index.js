import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { rhythm } from '../../utils/typography'

import Layout from '../../components/layout'
import Resume from '../../components/Resume'
// import jsPDF from 'jspdf'
// import html2canvas from 'html2canvas'

class PortfolioIndex extends React.Component {
  state = {
    showCv: false,
  }
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        {/* <Export /> */}
        <div>
          <h3>Short story</h3>
          <p>
            My first impressions about web development date back to 2005, when I
            was fiddling around with Microsoft FrontPage, creating some simple
            homepages for me and my friends. Liked it a lot but it did not stick
            back then.
          </p>
          <p>
            In 2011 I enrolled to study business information technology in
            Haaga-Helia and year after year it became clearer that doing stuff
            for the web is what I like and should be doing.
          </p>
          <p>
            I got accepted as an intern in{' '}
            <a href="https://www.mtech.fi">Mtech Digital Solutions</a> back in
            2014.{' '}
          </p>
          <p>
            I worked there for five years as a full stack developer doing work
            mostly with ASP.NET MVC and AngularJS. Looking for new challenges I
            got accepted working as a Web Developer in{' '}
            <a href="https://www.almamedia.fi">Alma Media</a> in 2019.
          </p>
          <p>
            Working for Alma Media has been marvelous - all the technologies I
            have been enthusiastic about has been put to use and working with a
            website which is one of the most popular in Finland does not get
            boring.
          </p>
          <p>
            I enjoy working with web technologies, Node.js (why not Deno aswell)
            and TypeScript are really my comfort zone.
          </p>
          <p>
            Apart from doing programming my interests lie in listening and
            producing music, playing various computer games and skateboarding!
          </p>
          <p>
            You can check out my{' '}
            <a
              style={{
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
              onClick={() =>
                this.setState(({ showCv }) => ({ showCv: !showCv }))
              }
              download
            >
              mini resume
            </a>{' '}
            or request a proper one from panu.t.kettunen@gmail.com!
          </p>

          {this.state.showCv && <Resume />}
        </div>
      </Layout>
    )
  }
}

export default PortfolioIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            title
            section
            shortdesc
          }
        }
      }
    }
  }
`

// class Export extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   printDocument() {
//     const input = document.getElementById('divToPrint')
//     input.style.display = ''
//     html2canvas(input).then(canvas => {
//       input.style.display = 'none'
//       const imgData = canvas.toDataURL('image/png')
//       const pdf = new jsPDF()
//       pdf.addImage(imgData, 'JPEG', 0, 0)
//       pdf.save('resume.pdf')
//     })
//   }

//   render() {
//     return (
//       <div>
//         <button
//           style={{
//             backgroundColor: '#002a28',
//             color: 'white',
//             border: 'none',
//             margin: rhythm(1 / 2),
//           }}
//           onClick={this.printDocument}
//         >
//           💾 Save as pdf
//         </button>
//         <div id="divToPrint">
//           <div>
//             <Resume print={true} />
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
