export default function HomePage() {
  const box = { border: "1px solid #e5e7eb", borderRadius: 16, padding: 24 };
  const btn = (bg) => ({ background: bg, color: "#fff", borderRadius: 14, padding: "10px 16px", textDecoration: "none", display: "inline-block" });

  return (
    <main>
      {/* Header */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, backdropFilter: "blur(6px)", background: "rgba(255,255,255,.85)", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ color: "#1e3a8a", fontWeight: 900 }}>SaVale Insurance</div>
          <a href="#contact" style={btn("#0ea5e9")}>Cotiza Ahora</a>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#0b2a6b,#114b9b,#0ea5e9)", color: "#fff" }} id="home">
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "64px 24px" }}>
          <h1 style={{ fontSize: 40, lineHeight: 1.1, margin: 0 }}>
            Protegiendo lo que <span style={{ color: "#99f6e4" }}>más valoras</span>
          </h1>
          <p style={{ marginTop: 16, maxWidth: 640, color: "rgba(255,255,255,.9)" }}>
            Seguros confiables para ti, tu familia y tu futuro.
          </p>
          <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#contact" style={btn("#14b8a6")}>Solicita tu cotización</a>
            <a href="https://wa.me/13053108197" target="_blank" style={btn("#16a34a")}>WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="about" style={{ background:"#f9fafb", padding:"48px 24px" }}>
        <div style={{ maxWidth:980, margin:"0 auto", textAlign:"center" }}>
          <h2 style={{ color:"#1e3a8a", fontSize:28, margin:0 }}>Nosotros</h2>
          <p style={{ marginTop:12, color:"#374151" }}>
            En <strong>SaVale Insurance</strong> creemos que la tranquilidad de nuestros clientes es nuestra mayor responsabilidad.
            Con más de <strong>10 años de experiencia</strong>, acompañamos a familias y empresas a proteger lo que más valoran.
          </p>
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" style={{ padding:"48px 24px" }}>
        <div style={{ maxWidth:980, margin:"0 auto", textAlign:"center" }}>
          <h2 style={{ color:"#1e3a8a", fontSize:28, margin:0 }}>Contáctanos</h2>
          <div style={{ marginTop:16, display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
            <a href="mailto:contacto@savale.com" style={btn("#0ea5e9")}>Enviar por Correo</a>
            <a href="https://wa.me/13053108197" target="_blank" style={btn("#16a34a")}>Enviar por WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background:"#111827", color:"#d1d5db", padding:"24px" }}>
        <div style={{ maxWidth:980, margin:"0 auto", textAlign:"center" }}>
          © 2025 SaVale Insurance · 2828 SW 22nd St, Miami, FL 33145 · (305) 310-8197
        </div>
      </footer>
    </main>
  );
}
