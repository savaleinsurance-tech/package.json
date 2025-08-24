export const metadata = {
  title: "SaVale Insurance – Seguros de Auto, Hogar, Vida, Salud y Empresarial",
  description: "Protegemos lo que más valoras. Cotiza tu seguro con SaVale Insurance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
