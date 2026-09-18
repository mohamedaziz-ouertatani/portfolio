'use client';

interface FilterBarProps {
  allTechnologies: string[];
  selectedTechnologies: string[];
  onFilterChange: (technologies: string[]) => void;
}

export function FilterBar({
  allTechnologies,
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
    <div className="mb-10">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="label" id="filter-heading">
          Filter by technology
        </h2>
        {selectedTechnologies.length > 0 && (
          <button
            type="button"
            onClick={() => onFilterChange([])}
            className="text-sm font-bold text-accent underline decoration-2 underline-offset-4 transition-colors hover:text-accent-strong"
          >
            Clear ({selectedTechnologies.length})
          </button>
        )}
      </div>

      <div
        className="flex flex-wrap gap-2"
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
              className={`tile tile-sm px-3 py-1.5 text-sm font-semibold transition-colors duration-200 ease-cine focus-visible:outline-none focus-visible:[outline-offset:-4px] focus-visible:[outline:2px_solid_var(--color-accent)] ${
                isSelected
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-background-elevated text-muted-foreground hover:bg-border hover:text-foreground'
              }`}
            >
              {tech}
            </button>
          );
        })}
      </div>
    </div>
  );
}
