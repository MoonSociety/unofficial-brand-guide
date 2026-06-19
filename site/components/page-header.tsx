interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-tight" data-testid="text-page-title">
        {title}
      </h1>
      {description && (
        <p className="mt-2 text-lg text-muted-foreground max-w-3xl" data-testid="text-page-description">
          {description}
        </p>
      )}
    </div>
  );
}
