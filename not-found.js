// app/not-found.js
export default function NotFound() {
  return (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>404</h1>
        <p style={{ marginTop: '0.5rem' }}>Page not found</p>
      </div>
    </div>
  );
}