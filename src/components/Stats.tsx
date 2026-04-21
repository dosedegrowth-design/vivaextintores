export default function Stats() {
  const stats = [
    { val: '1.500+', label: 'Projetos aprovados' },
    { val: '10+', label: 'Anos de experiência' },
    { val: '100%', label: 'Garantia de aprovação' },
    { val: '9', label: 'Grandes marcas atendidas' },
  ]

  return (
    <section className="stats" aria-label="Números e conquistas">
      <div className="container">
        <div className="stats-grid" role="list">
          {stats.map((s, i) => (
            <div key={i} className="stat-item" role="listitem">
              <span className="stat-val">{s.val}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
