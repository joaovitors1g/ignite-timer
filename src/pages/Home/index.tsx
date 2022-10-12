import { Play } from 'phosphor-react'

export function Home() {
  return (
    <div>
      <form>
        <label htmlFor="task">Vou trabalhar em</label>
        <input id="task" />
        <label htmlFor="minutes-amount">Durante</label>
        <input type="number" id="minutes-amount" />
        <span>minutos.</span>

        <div>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </div>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </div>
  )
}
