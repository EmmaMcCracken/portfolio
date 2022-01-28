import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {
  console.log(project.sourceCode, project.livePreview)
  return (
    <div className='project'>
      <h3>{project.name}</h3>

      <p className='project__description'>{project.description}</p>
      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
        >
          <GitHubIcon />
        </a>
      )}

      {project.livePreview && (
        <a href={project.livePreview}>
          <img
            aria-label='live preview'
            className='link link--icon'
            src='https://cdn-icons-png.flaticon.com/512/3388/3388930.png'
            width='30'
          />
        </a>
      )}
    </div>
  )
}

export default ProjectContainer
