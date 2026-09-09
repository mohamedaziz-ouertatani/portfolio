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
        <h2 className="label-mono" id="filter-heading">
          Filter by technology
        </h2>
        {selectedTechnologies.length > 0 && (
          <button
            type="button"
            onClick={() => onFilterChange([])}
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent transition-colors hover:text-accent-strong"
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
              className={`rounded-sm border px-2.5 py-1 font-mono text-xs transition-colors ${
                isSelected
                  ? 'border-accent bg-accent text-accent-foreground'
                  : 'border-border bg-background-elevated text-muted-foreground hover:border-border-strong hover:text-foreground'
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
