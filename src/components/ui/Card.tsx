export function Card({
    title,
    description,
    icon,
    delay = 0
}: {
    title: string;
    description: string | React.ReactNode;
    icon?: React.ReactNode;
    delay?: number;
}) {
    return (
        <div className={`glass-card animate-fade-in delay-${delay}`}>
            {icon && <div style={{ color: 'var(--accent-primary)', marginBottom: 'var(--space-sm)' }}>{icon}</div>}
            <h3 style={{ marginBottom: 'var(--space-xs)', fontSize: '1.25rem' }}>{title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{description}</p>
        </div>
    );
}
