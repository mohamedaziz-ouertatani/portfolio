import { projectsData } from '@/lib/projects'

describe('Projects Data', () => {
  it('should have valid project structure', () => {
    expect(projectsData).toBeDefined()
    expect(Array.isArray(projectsData)).toBe(true)
    
    projectsData.forEach(project => {
      expect(project).toHaveProperty('title')
      expect(project).toHaveProperty('description')
      expect(project).toHaveProperty('technologies')
      expect(Array.isArray(project.technologies)).toBe(true)
    })
  })

  it('should have at least one project', () => {
    expect(projectsData.length).toBeGreaterThan(0)
  })

  it('should have unique project IDs', () => {
    const ids = projectsData.map(project => project.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })
})
