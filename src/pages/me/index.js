import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { rhythm } from '../../utils/typography'

import Layout from '../../components/layout'
import Resume from '../../components/Resume'

if (typeof window !== `undefined`) {
  import('jsPDF').then(jsPDF => (jsPDF = jsPDF))
  import('html2canvas').then(html2canvas => (html2canvas = html2canvas))
}

class PortfolioIndex extends React.Component {
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
            Through the school I got accepted as an intern to my current company
            where I have been working since doing closed source stuff for
            various clients.
          </p>
          <p>
            I enjoy working with JavaScript. My focus is mostly on the
            React-ecosystem.
          </p>
          {/* <Export /> */}
          <Resume />
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

class Export extends React.Component {
  constructor(props) {
    super(props)
  }

  printDocument(element) {
    const input = document.getElementById('divToPrint')
    input.style.display = ''
    html2canvas(input).then(canvas => {
      input.style.display = 'none'
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF()
      pdf.addImage(imgData, 'JPEG', 0, 0)
      pdf.save('resume.pdf')
    })
  }

  render() {
    return (
      <div>
        <button
          style={{
            backgroundColor: '#002a28',
            color: 'white',
            border: 'none',
            margin: rhythm(1 / 2),
          }}
          onClick={this.printDocument}
        >
          💾 Save as pdf
        </button>
        <div id="divToPrint" style={{ display: 'none' }}>
          <div>
            <Resume print={true} />
          </div>
        </div>
      </div>
    )
  }
}
