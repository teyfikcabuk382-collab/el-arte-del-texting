import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, Check, ChevronDown, Clock3, Heart, MessageCircle, ShieldCheck, Sparkles, Star, Zap } from 'lucide-react';
import './styles.css';

// IMPORTANTE: reemplaza esta URL por el enlace real de checkout de tu producto en Hotmart.
const HOTMART_CHECKOUT_URL = 'https://pay.hotmart.com/G108096905G';
const PRICE = '9,99';
const oldPrice = '19,99';
const checkoutReady = HOTMART_CHECKOUT_URL.startsWith('https://') && !HOTMART_CHECKOUT_URL.includes('PEGA_AQUI');

function BuyButton({ children = 'QUIERO EL EBOOK', className = '' }) {
  const handleClick = () => {
    if (checkoutReady) window.location.href = HOTMART_CHECKOUT_URL;
    else document.getElementById('precio')?.scrollIntoView({ behavior: 'smooth' });
  };
  return <button className={`btn btn-primary ${className}`} onClick={handleClick}>{children}<ArrowRight size={18} /></button>;
}

const faqs = [
  { q: '¿Cómo recibo el ebook después de comprarlo?', a: 'Al completar el pago en Hotmart, recibirás las instrucciones de acceso en el correo que uses durante la compra. Revisa también la carpeta de spam si no lo ves.' },
  { q: '¿Necesito experiencia ligando por mensajes?', a: 'No. La guía está pensada para ayudarte a empezar, ordenar tus ideas y practicar con ejemplos que puedes adaptar a tu personalidad.' },
  { q: '¿Son mensajes para copiar y pegar?', a: 'Encontrarás ideas y ejemplos adaptables. Lo recomendable es personalizarlos para que suenen naturales y encajen con la conversación real.' },
  { q: '¿Esto garantiza que alguien se interese en mí?', a: 'No existe un mensaje que garantice atracción o una cita. El ebook te ayuda a comunicarte con más claridad y confianza, respetando siempre el interés y los límites de la otra persona.' },
  { q: '¿Puedo leerlo desde el celular?', a: 'Sí. El producto se entrega en PDF y puedes abrirlo en un teléfono, tableta o computador con un lector de PDF compatible.' }
];

function App() {
  const [openFaq, setOpenFaq] = useState(0);
  return <div className="site-shell">
    <div className="announcement"><Sparkles size={14} /> UNA GUÍA PRÁCTICA PARA CONVERSACIONES MÁS NATURALES <span className="announcement-dot">●</span> DESCARGA DIGITAL</div>
    <header className="nav container">
      <a className="brand" href="#inicio" aria-label="El Arte del Texting, inicio">
        <span className="brand-icon"><MessageCircle size={21} strokeWidth={2.4}/></span>
        <span>EL ARTE <i>DEL TEXTING</i></span>
      </a>
      <nav><a href="#que-aprenderas">Qué aprenderás</a><a href="#contenido">Contenido</a><a href="#faq">Preguntas frecuentes</a></nav>
      <a className="nav-cta" href="#precio">VER EL EBOOK <ArrowRight size={15}/></a>
    </header>

    <main>
      <section className="hero container" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"></span> GUÍA DIGITAL · PDF</div>
          <h1>Que la conversación fluya.<br/><em>Y que el interés</em><br/>se note.</h1>
          <p className="hero-lead">Aprende a iniciar chats, mantener conversaciones con química y proponer una cita sin depender de frases forzadas ni quedarte pensando horas qué responder.</p>
          <div className="hero-actions"><BuyButton>QUIERO MEJORAR MIS CHATS</BuyButton><a className="text-link" href="#contenido">Explorar la guía <ArrowDown size={16}/></a></div>
          <div className="trust-row"><span><Check size={15}/> Ejemplos prácticos</span><span><Check size={15}/> Lectura desde el móvil</span><span><Check size={15}/> A tu ritmo</span></div>
          <div className="micro-proof"><div className="avatar-stack"><span>✦</span><span>✧</span><span>●</span></div><p><b>Menos improvisación.</b><br/>Más intención en cada mensaje.</p></div>
        </div>
        <div className="hero-visual">
          <div className="visual-glow"></div>
          <div className="photo-frame"><img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=85" alt="Retrato editorial de una mujer adulta sonriendo" /></div>
          <div className="floating-label label-top"><span className="label-icon"><MessageCircle size={16}/></span><div><b>Conversaciones con intención</b><small>Natural, claro y auténtico</small></div></div>
          <div className="chat-card">
            <div className="chat-head"><span className="online-dot"></span><div><b>Una conversación</b><small>Ejemplo ilustrativo</small></div><span className="chat-menu">•••</span></div>
            <div className="chat-date">HOY, 18:42</div>
            <div className="bubble bubble-in">¿Qué plan te alegra un día normal? <small>18:42</small></div>
            <div className="bubble bubble-out">Una buena conversación y descubrir un sitio nuevo 😄 <small>18:43 ✓✓</small></div>
            <div className="bubble bubble-in">Eso suena a plan que vale la pena repetir. <small>18:44</small></div>
            <div className="chat-note"><Sparkles size={14}/> La clave: curiosidad real, no un guion perfecto.</div>
          </div>
          <div className="floating-label label-bottom"><span className="label-check"><Check size={17}/></span><div><b>100 mensajes adaptables</b><small>Ideas para distintos momentos</small></div></div>
          <div className="hero-stamp"><span>CONVERSA</span><strong>con<br/>confianza</strong><span className="stamp-star">✳</span></div>
        </div>
      </section>

      <section className="strip">
        <div className="container strip-inner"><span><MessageCircle size={18}/> Inicios que no suenan genéricos</span><span><Heart size={18}/> Coqueteo con naturalidad</span><span><Zap size={18}/> Respuestas con intención</span><span><Clock3 size={18}/> Del chat a una cita</span></div>
      </section>

      <section className="section container" id="que-aprenderas">
        <div className="section-heading">
          <div className="eyebrow">NO SE TRATA DE TENER UNA FRASE MÁGICA</div>
          <h2>Se trata de saber <em>cómo conectar.</em></h2>
          <p>Deja de tratar cada chat como un examen. Aprende principios sencillos y practica con ejemplos que puedes hacer tuyos.</p>
        </div>
        <div className="benefit-grid">
          <article className="benefit-card"><div className="benefit-number">01</div><div className="benefit-icon mint"><MessageCircle/></div><h3>Rompe el hielo con intención</h3><p>Abre conversaciones desde el contexto, la curiosidad y los detalles que de verdad invitan a responder.</p><span className="card-arrow"><ArrowRight size={17}/></span></article>
          <article className="benefit-card"><div className="benefit-number">02</div><div className="benefit-icon lilac"><Heart/></div><h3>Coquetea sin forzar</h3><p>Encuentra el equilibrio entre mostrar interés, usar el humor y respetar el ritmo de la conversación.</p><span className="card-arrow"><ArrowRight size={17}/></span></article>
          <article className="benefit-card"><div className="benefit-number">03</div><div className="benefit-icon yellow"><Zap/></div><h3>Deja de sobrepensar cada respuesta</h3><p>Ten recursos para distintos escenarios y aprende cuándo seguir, cambiar de tema o dejar espacio.</p><span className="card-arrow"><ArrowRight size={17}/></span></article>
        </div>
      </section>

      <section className="dark-section" id="contenido">
        <div className="container contents-layout">
          <div className="contents-visual">
            <div className="book-glow"></div>
            <div className="book-mockup">
              <div className="book-top"><span>GUÍA PRÁCTICA</span><span className="book-mark">✳</span></div>
              <div className="book-title">EL ARTE<br/><em>DEL</em> TEXTING</div>
              <div className="book-rule"></div>
              <p>Conversa. Conecta.<br/>Da el siguiente paso.</p>
              <div className="book-portrait"><img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80" alt="Imagen editorial para la portada del ebook"/></div>
              <div className="book-bottom">GUÍA VISUAL · PDF</div>
            </div>
            <div className="content-badge"><Sparkles size={16}/> GUÍA VISUAL<br/><b>+ 100 MENSAJES</b></div>
          </div>
          <div className="contents-copy">
            <div className="eyebrow light-eyebrow">TU CAJA DE HERRAMIENTAS</div>
            <h2>Ideas claras para<br/><em>cada momento del chat.</em></h2>
            <p className="muted-lead">Una guía para consultar cuando no sepas cómo empezar, cómo responder o cómo avanzar sin presionar.</p>
            <div className="included-list">
              <div><span className="included-check"><Check size={16}/></span><div><b>100 mensajes adaptables</b><small>Ideas para abrir, seguir y reactivar conversaciones.</small></div></div>
              <div><span className="included-check"><Check size={16}/></span><div><b>Ejemplos de conversaciones</b><small>Observa cómo puede desarrollarse un intercambio natural.</small></div></div>
              <div><span className="included-check"><Check size={16}/></span><div><b>Qué responder en distintos escenarios</b><small>Interés, respuestas cortas, silencios y cambios de tema.</small></div></div>
              <div><span className="included-check"><Check size={16}/></span><div><b>Ejercicios y reto de 7 días</b><small>Pasa de leer consejos a practicar con tu propio estilo.</small></div></div>
            </div>
            <a className="btn btn-light" href="#precio">QUIERO VER EL CONTENIDO <ArrowRight size={18}/></a>
            <p className="fine-print"><ShieldCheck size={14}/> Comunicación auténtica, sin promesas mágicas ni juegos de manipulación.</p>
          </div>
        </div>
      </section>

      <section className="section example-section container">
        <div className="section-heading">
          <div className="eyebrow">APRENDE CON EJEMPLOS</div>
          <h2>No memorices un personaje.<br/><em>Encuentra tu manera de conversar.</em></h2>
          <p>Los ejemplos son ficticios y están pensados para mostrar una idea: escuchar, aportar y dejar espacio para que la otra persona también participe.</p>
        </div>
        <div className="example-grid">
          <div className="example-copy"><span className="mini-tag">EJEMPLO ILUSTRATIVO</span><h3>Una pregunta que abre una historia.</h3><p>En lugar de mandar otro “¿qué haces?”, prueba con una pregunta abierta conectada con sus gustos o con algo que ya hayan hablado.</p><div className="example-tip"><Sparkles size={18}/><p><b>Por qué puede funcionar</b><br/>Invita a compartir una opinión o experiencia. Después, escucha y pregunta desde lo que te cuente.</p></div></div>
          <div className="example-chat">
            <div className="example-chat-head"><div className="contact-pic">M</div><div><b>María</b><small>Ejemplo ficticio</small></div><span className="chat-head-icons">⌕　⋮</span></div>
            <div className="example-date">MARTES · 19:26</div>
            <div className="bubble bubble-in">Vi que te gusta probar cafés nuevos. ¿Cuál ha sido tu descubrimiento favorito? <small>19:26</small></div>
            <div className="bubble bubble-out">Hay uno pequeño que tiene una terraza preciosa ☕ <small>19:28 ✓✓</small></div>
            <div className="bubble bubble-in">Ahora me dio curiosidad. ¿Qué lo hace especial? <small>19:29</small></div>
            <div className="typing"><span></span><span></span><span></span></div>
            <div className="example-chat-footer">El objetivo no es impresionar en cada mensaje. Es crear una conversación de dos.</div>
          </div>
        </div>
      </section>

      <section className="quote-band"><div className="container quote-inner"><span className="quote-mark">“</span><p>No necesitas escribir más.<br/><em>Necesitas comunicarte mejor.</em></p><span className="quote-spark">✳</span></div></section>

      <section className="section container offer-section" id="precio">
        <div className="offer-card">
          <div className="offer-left"><div className="eyebrow">EMPIEZA HOY, A TU RITMO</div><h2>Tu próximo mensaje<br/>puede ser <em>más natural.</em></h2><p>Consigue la guía y úsala como referencia cada vez que quieras mejorar una conversación.</p><div className="offer-points"><span><Check size={16}/> Formato PDF</span><span><Check size={16}/> Acceso digital</span><span><Check size={16}/> Lectura desde el móvil</span></div><div className="offer-image"><img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80" alt="Persona usando un teléfono móvil mientras conversa"/></div></div>
          <div className="offer-right">
            <div className="offer-label"><Sparkles size={15}/> PRECIO DE LANZAMIENTO</div>
            <div className="price-line"><span className="currency">US$</span><span className="price">{PRICE}</span></div>
            <div className="old-price">Precio de referencia: <s>US${oldPrice}</s></div>
            <p className="price-description">Una compra digital para aprender, practicar y volver a consultar.</p>
            <div className="offer-divider"></div>
            <div className="what-you-get"><b>LO QUE RECIBES</b><span><Check size={16}/> Ebook visual El Arte del Texting</span><span><Check size={16}/> Biblioteca de 100 mensajes adaptables</span><span><Check size={16}/> Conversaciones de ejemplo</span><span><Check size={16}/> Ejercicios + reto de 7 días</span></div>
            <BuyButton className="buy-wide">SÍ, QUIERO MI EBOOK</BuyButton>
            <div className="secure-note"><ShieldCheck size={16}/> Compra procesada en Hotmart cuando conectes tu checkout.</div>
            <div className="no-pressure">Sin promesas imposibles. Herramientas prácticas para comunicarte mejor.</div>
          </div>
        </div>
        <div className="under-offer"><span><ShieldCheck size={17}/> Pago a través de Hotmart</span><span><Clock3 size={17}/> Acceso digital según las instrucciones de compra</span><span><MessageCircle size={17}/> Diseñado para leer en cualquier momento</span></div>
      </section>

      <section className="section faq-section container" id="faq">
        <div className="section-heading"><div className="eyebrow">ANTES DE EMPEZAR</div><h2>Preguntas <em>frecuentes.</em></h2><p>Lo importante, sin rodeos.</p></div>
        <div className="faq-list">{faqs.map((item, i) => <div className={`faq-item ${openFaq === i ? 'active' : ''}`} key={item.q}><button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{item.q}</span><ChevronDown size={19}/></button>{openFaq === i && <p className="faq-answer">{item.a}</p>}</div>)}</div>
      </section>

      <section className="final-cta"><div className="container final-cta-inner"><div className="final-icon"><MessageCircle size={28}/></div><div><div className="eyebrow light-eyebrow">DA EL PRIMER PASO</div><h2>Menos dudas al escribir.<br/><em>Más confianza al conversar.</em></h2><p>Aprende, adapta las ideas a tu personalidad y deja que la conversación sea real.</p></div><BuyButton>QUIERO EL ARTE DEL TEXTING</BuyButton></div></section>
    </main>

    <footer className="footer"><div className="container footer-top"><a className="brand footer-brand" href="#inicio"><span className="brand-icon"><MessageCircle size={20}/></span><span>EL ARTE <i>DEL TEXTING</i></span></a><p>Una guía práctica para comunicarte con más confianza.</p><a href="#inicio" className="back-top">Volver arriba ↑</a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} El Arte del Texting. Todos los derechos reservados.</span><span>Contenido educativo. Los resultados dependen de cada persona y situación.</span></div></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);