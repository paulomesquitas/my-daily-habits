// src/pages/PaginaInicio.jsx

import { Link } from 'react-router-dom'
import { useHabits } from '../contexts/HabitsContext'

function PaginaInicio() {
    const { habits } = useHabits()

    const habitosAtivos = habits.filter(h => h.ativo).length
    const metasAtingidas = habits.filter(h => h.diasFeitos >= h.meta).length
    const taxaSucesso = habits.length > 0
        ? Math.round((metasAtingidas / habits.length) * 100)
        : 0

    return (
        <main className="pagina-inicio container">
            <h1>My Daily Habits</h1>
            <p>Seu painel de controle pessoal para criar consistência e alcançar grandes objetivos, um hábito por vez.</p>

            <div className="resumo">
                <div className="resumo-card">
                    <strong>{habits.length}</strong>
                    <span>Hábitos Total</span>
                </div>
                <div className="resumo-card" style={{ borderColor: 'var(--success-color)' }}>
                    <strong style={{ color: 'var(--success-color)' }}>{habitosAtivos}</strong>
                    <span>Ativos Agora</span>
                </div>
                <div className="resumo-card" style={{ borderColor: 'var(--primary-color)' }}>
                    <strong>{taxaSucesso}%</strong>
                    <span>Taxa de Sucesso</span>
                </div>
            </div>

            <Link to="/habitos" className="btn-primario" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                Ver meus hábitos →
            </Link>
        </main>
    )
}

export default PaginaInicio
