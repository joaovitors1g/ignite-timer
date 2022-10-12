export function Home() {
  return (
    <div>
      <form>
        <label htmlFor="task">Vou trabalhar em</label>
        <input id="task" />
        <label htmlFor="minutes-amount">Durante</label>
        <input type="number" id="minutes-amount" />
        <span>minutos.</span>
      </form>
    </div>
  )
}
