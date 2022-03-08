import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import { projects } from '../../portfolio'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  const rows = [
    {
      name: 'Title',
      render: (project) => <h3 className='white'>{project.name}</h3>,
    },
    {
      name: 'Description',
      render: (project) => (
        <p className='project__description'>{project.description}</p>
      ),
    },
    {
      name: 'Stack',
      render: (project) => (
        <>
          {project.stack && (
            <ul className='project__stack'>
              {project.stack.map((item) => (
                <li key={uniqid()} className='project__stack-item'>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </>
      ),
    },
    {
      name: 'Links',
      render: (project) => (
        <>
          {' '}
          {project.sourceCode && (
            <a
              target='_blank'
              rel='noreferrer noopener'
              href={project.sourceCode}
              aria-label='source code'
              className='link link--icon'
            >
              <GitHubIcon />
            </a>
          )}
          {project.livePreview && (
            <a
              target='_blank'
              rel='noreferrer noopener'
              href={project.livePreview}
              aria-label='live preview'
              className='link link--icon'
            >
              <LaunchIcon />
            </a>
          )}{' '}
        </>
      ),
    },
  ]

  const body = rows.map(({ name, render }) => (
    <tr key={name}>
      {projects.map((project) => (
        <td key={`project ${project.name}`}>{render(project)}</td>
      ))}
    </tr>
  ))

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        <table>
          <tbody>{body}</tbody>
        </table>
      </div>
    </section>
  )
}

export default Projects
