import React from 'react'

import employement from '../assets/employement.json'
import education from '../assets/education.json'
import skills from '../assets/skills.json'
import { rhythm } from '../utils/typography'

const Resume = ({ print }) => (
  <div
    id="resume"
    style={{
      fontSize: print ? '8px' : '14px',
      border: print ? 'none' : '1px solid black',
      padding: rhythm(1),
      boxShadow: print ? 'none' : '3px 3px 3px',
    }}
  >
    <h1>🏆 {print ? 'Resume - Panu Kettunen' : 'Resume'}</h1>
    <h3>👔 Skills and traits</h3>
    <ul>
      {skills.map(skill => (
        <li
          style={{
            margin: rhythm(1),
          }}
          key={skill.id}
        >
          <h4>{skill.title}</h4>
          <ul>
            {skill.skills.map(i => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
    <h3> 🎓 Education </h3>
    <ul>
      {education.reverse().map(item => (
        <li
          key={item.id}
          style={{
            margin: rhythm(1),
          }}
        >
          <h4>
            {item.addInfo} - {item.name}
          </h4>
          {item.yearStart} - {item.yearEnd} {item.completed || '(DNF)'}
        </li>
      ))}
    </ul>
    <h3> 🔨 Employement</h3>
    <ul>
      {employement.reverse().map(item => {
        return (
          <li
            key={item.id}
            style={{
              margin: rhythm(1),
            }}
          >
            <h4
              style={{
                marginBottom: 0,
              }}
            >
              {item.jobTitle} - {item.employee}
            </h4>
            <div
              style={{
                marginTop: 0,
                marginBottom: rhythm(1 / 2),
              }}
            >
              {item.yearStart} - {item.yearEnd}
            </div>
            <p>{item.jobDescription}</p>
          </li>
        )
      })}
    </ul>
  </div>
)

export default Resume
