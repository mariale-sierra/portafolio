interface ProjectFilterProps {
  value: string
  options: string[]
  onChange: (value: string) => void
}

export function ProjectFilter({ value, options, onChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const active = option === value
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={[
              "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
              active
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-accent hover:text-foreground",
            ].join(" ")}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}