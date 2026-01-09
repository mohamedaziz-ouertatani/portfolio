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
    if (selectedTechnologies.includes(tech)) {
      onFilterChange(selectedTechnologies.filter((t) => t !== tech));
    } else {
      onFilterChange([...selectedTechnologies, tech]);
    }
  };

  const clearFilters = () => {
    onFilterChange([]);
  };

  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Filter by Technology
        </h3>
        {selectedTechnologies.length > 0 && (
          <button
            onClick={clearFilters}
            className="text-sm text-primary-600 hover:underline dark:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            Clear all ({selectedTechnologies.length})
          </button>
        )}
      </div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Technology filters"
      >
        {allTechnologies.map((tech) => {
          const isSelected = selectedTechnologies.includes(tech);
          return (
            <button
              key={tech}
              onClick={() => toggleTechnology(tech)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                isSelected
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
              aria-pressed={isSelected}
            >
              {tech}
            </button>
          );
        })}
      </div>
    </div>
  );
}
