import React from 'react'

function Skills() {
    const skills = [
        'AWS', 'Ansible', 'Bash',
        'Docker', 'GCP', 'Git',
        'Javascript', 'Kubernetes', 'Linux',
        'NetApp', 'Packer', 'Powershell',
        'Python', 'React', 'System Design',
        'Terraform', 'VMware'
    ]

  return (
    <div className='mt-2 font-terminal grid grid-cols-2 sm:grid-cols-3 p-4 text-sm'>
        {
            skills.map((skill) => <div key={skill}>{skill}</div>)
        }
    </div>
  )
}

export default Skills