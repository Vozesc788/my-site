export default function Home() {
  return (
    <>
      <header><div className="logo">NextDark.</div><nav><a href="#features">Можливості</a></nav></header>
      <main>
        <section className="hero">
          <h1>Лендінг на Next.js App Router</h1>
          <p>Мінімалістичний проект у темній темі на чистому JavaScript.</p>
          <a href="#" className="btn">Розпочати</a>
        </section>
        <section id="features" className="features">
          <div className="card"><h3>⚡ Швидкість</h3><p>App Router та серверні компоненти.</p></div>
          <div className="card"><h3>🌙 Темна тема</h3><p>Чистий CSS без додаткових фреймворків.</p></div>
        </section>
      </main>
      <footer><p>© NextDark</p></footer>
    </>
  );
}
