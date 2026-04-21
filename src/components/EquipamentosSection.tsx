import { FireExtinguisher, Zap, Building2, AlertTriangle, Phone } from 'lucide-react'

const equipamentos = [
  { icon: <FireExtinguisher size={28} />, title: 'Extintores', desc: 'Venda e recarga com certificação INMETRO (Água, Pó ABC, CO2).' },
  { icon: <Zap size={28} />, title: 'Mangueiras', desc: 'Venda e teste hidrostático obrigatório anual.' },
  { icon: <Building2 size={28} />, title: 'Porta Corta-Fogo', desc: 'Instalação e manutenção para fuga segura.' },
  { icon: <AlertTriangle size={28} />, title: 'Sinalização', desc: 'Placas fotoluminescentes e rotas de fuga.' },
]

const WHATSAPP_URL = 'https://api.whatsapp.com/send/?phone=5511942925865&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20consultar%20sobre%20equipamentos%20de%20combate%20a%20inc%C3%AAndio.'

export default function EquipamentosSection() {
  return (
    <section id="equipamentos" className="equipamentos-section">
      <div className="container">
        <div className="equipment-header">
          <h3>Também Fornecemos Equipamentos</h3>
          <p>Venda e manutenção de equipamentos de segurança contra incêndio</p>
        </div>

        <div className="equipment-list">
          {equipamentos.map((item, i) => (
            <div key={i} className="equipment-item">
              <div className="equipment-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="equipment-cta">
          <a href={WHATSAPP_URL} className="btn btn-outline-dark btn-sm" target="_blank" rel="noopener noreferrer">
            <Phone size={16} />
            Consultar Equipamentos
          </a>
        </div>
      </div>
    </section>
  )
}
