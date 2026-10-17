'use client';

interface FilterBarProps {
  allTechnologies: string[];
  /** How many listed projects use each technology. */
  counts: Record<string, number>;
  selectedTechnologies: string[];
  onFilterChange: (technologies: string[]) => void;
}

/**
 * Technology filters read as a frequency list, not a wall of boxes: each
 * name carries the number of projects that use it, most used first. A
 * selected technology is set in ink under the highlighter.
 */
export function FilterBar({
  allTechnologies,
  counts,
  selectedTechnologies,
  onFilterChange,
}: FilterBarProps) {
  const toggleTechnology = (tech: string) => {
    onFilterChange(
      selectedTechnologies.includes(tech)
        ? selectedTechnologies.filter((t) => t !== tech)
        : [...selectedTechnologies, tech]
    );
  };

  return (
    <div className="mb-10 border-t border-foreground pt-4">
      <div className="mb-3 flex items-center justify-between gap-4">
        <h2 className="label" id="filter-heading">
          Filter by technology
        </h2>
        {selectedTechnologies.length > 0 && (
          <button
            type="button"
            onClick={() => onFilterChange([])}
            className="link text-sm font-medium"
          >
            Clear ({selectedTechnologies.length})
          </button>
        )}
      </div>

      <div
        className="flex flex-wrap gap-x-4 gap-y-1"
        role="group"
        aria-labelledby="filter-heading"
      >
        {allTechnologies.map((tech) => {
          const isSelected = selectedTechnologies.includes(tech);
          return (
            <button
              key={tech}
              type="button"
              onClick={() => toggleTechnology(tech)}
              aria-pressed={isSelected}
              aria-label={`${tech}, ${counts[tech]} ${counts[tech] === 1 ? 'project' : 'projects'}`}
              className={`py-0.5 text-sm transition-colors duration-200 ease-cine ${
                isSelected
                  ? 'font-medium text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span className={isSelected ? 'mark' : ''}>{tech}</span>
              <sup className="tnum ml-0.5 text-[0.6875rem] text-faint">
                {counts[tech]}
              </sup>
            </button>
          );
        })}
      </div>
    </div>
  );
}
